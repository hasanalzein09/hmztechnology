import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Simple in-memory rate limiting
const rateLimit = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

export const prerender = false;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    // Rate limiting check
    const now = Date.now();
    const lastRequest = rateLimit.get(clientAddress) || 0;
    if (now - lastRequest < RATE_LIMIT_WINDOW / MAX_REQUESTS) {
      return new Response(JSON.stringify({ error: 'Too many requests. Please wait a moment.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    rateLimit.set(clientAddress, now);

    const body = await request.json();
    const { name, email, phone, company, message, requirements, service, page, website } = body;

    // Honeypot check (field named 'website' is usually filled by bots)
    if (website) {
      return new Response(JSON.stringify({ success: true, message: 'Message sent successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Use either message or requirements field (different forms use different field names)
    const messageContent = message || requirements;

    // Validate required fields
    if (!name || !email || !messageContent) {
      return new Response(JSON.stringify({ error: 'Name, email, and message are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Initialize Resend with API key
    const resendApiKey = import.meta.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY environment variable is not set');
      throw new Error('Email configuration error');
    }

    const resend = new Resend(resendApiKey);
    const adminEmail = import.meta.env.ADMIN_EMAIL || 'sales@hmz.technology';
    // Use Resend's default domain for sending (or your verified domain)
    const fromEmail = import.meta.env.FROM_EMAIL || 'onboarding@resend.dev';

    // HTML Email Template for Admin
    const adminHtmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #3B82F6, #8B5CF6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border: 1px solid #eee; }
    .info-row { margin: 15px 0; padding: 10px; background: white; border-radius: 5px; }
    .label { font-weight: bold; color: #3B82F6; }
    .message-box { background: white; padding: 20px; border-left: 4px solid #3B82F6; margin: 20px 0; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    .cta { display: inline-block; background: #3B82F6; color: white; padding: 12px 24px; border-radius: 5px; text-decoration: none; margin: 10px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Lead from HMZ Technology</h1>
      <p>Someone is interested in your services!</p>
    </div>
    <div class="content">
      <div class="info-row">
        <span class="label">Name:</span> ${name}
      </div>
      <div class="info-row">
        <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
      </div>
      ${phone ? `<div class="info-row"><span class="label">Phone:</span> <a href="tel:${phone}">${phone}</a></div>` : ''}
      ${company ? `<div class="info-row"><span class="label">Company:</span> ${company}</div>` : ''}
      ${service ? `<div class="info-row"><span class="label">Service Interest:</span> ${service}</div>` : ''}
      ${page ? `<div class="info-row"><span class="label">From Page:</span> ${page}</div>` : ''}

      <div class="message-box">
        <span class="label">Message:</span>
        <p>${messageContent}</p>
      </div>

      <div style="text-align: center; margin-top: 30px;">
        ${phone ? `<a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" class="cta">Reply on WhatsApp</a>` : ''}
        <a href="mailto:${email}" class="cta" style="background: #10B981;">Reply by Email</a>
      </div>
    </div>
    <div class="footer">
      <p>This lead was submitted from <strong>hmz.technology</strong></p>
      <p>Time: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Beirut' })}</p>
    </div>
  </div>
</body>
</html>
    `;

    // Send email to admin
    const { error: adminError } = await resend.emails.send({
      from: `HMZ Technology Website <${fromEmail}>`,
      to: [adminEmail],
      replyTo: email,
      subject: `New Lead: ${name} - ${service || 'General Inquiry'}`,
      html: adminHtmlContent,
    });

    if (adminError) {
      console.error('Failed to send admin email:', adminError);
      throw new Error('Failed to send email to admin');
    }

    // Send auto-reply to user
    const { error: userError } = await resend.emails.send({
      from: `HMZ Technology <${fromEmail}>`,
      to: [email],
      subject: `Thank you for contacting HMZ Technology!`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #3B82F6, #8B5CF6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border: 1px solid #eee; }
    .cta { display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 5px; text-decoration: none; margin: 10px 5px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thank You!</h1>
      <p>We've received your message</p>
    </div>
    <div class="content">
      <p>Dear <strong>${name}</strong>,</p>
      <p>Thank you for contacting HMZ Technology! We've received your message and will get back to you within <strong>24 hours</strong>.</p>
      <p>In the meantime, feel free to connect with us:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://wa.me/96170106083" class="cta">Chat on WhatsApp</a>
        <a href="https://www.hmz.technology" class="cta" style="background: #3B82F6;">Visit Website</a>
      </div>
      <p>Best regards,<br><strong>HMZ Technology Team</strong></p>
    </div>
    <div class="footer">
      <p>HMZ Technology. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
      `,
    });

    if (userError) {
      console.error('Failed to send user confirmation email:', userError);
      // Don't throw here - admin email was sent successfully
    }

    return new Response(JSON.stringify({ success: true, message: 'Message sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    const err = error as Error;
    console.error('=== EMAIL API ERROR ===');
    console.error('Error:', err?.message);

    return new Response(JSON.stringify({
      error: 'Failed to send message',
      details: err?.message || 'Unknown error',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
