const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Email configuration
const smtpUser = process.env.SMTP_USER || 'hmztechnology2020@gmail.com';
const smtpPass = process.env.SMTP_PASSWORD || '';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
        user: smtpUser,
        pass: smtpPass
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, company, message, requirements, service, language, page } = req.body;

        const messageContent = message || requirements;

        if (!name || !email || !messageContent) {
            return res.status(400).json({ error: 'Name, email, and message are required' });
        }

        const adminEmail = process.env.ADMIN_EMAIL || 'sales@hmz.technology';

        const htmlContent = `
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
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 New Lead from HMZ Technology</h1>
    </div>
    <div class="content">
      <div class="info-row"><span class="label">👤 Name:</span> ${name}</div>
      <div class="info-row"><span class="label">📧 Email:</span> <a href="mailto:${email}">${email}</a></div>
      ${phone ? `<div class="info-row"><span class="label">📱 Phone:</span> <a href="tel:${phone}">${phone}</a></div>` : ''}
      ${company ? `<div class="info-row"><span class="label">🏢 Company:</span> ${company}</div>` : ''}
      ${service ? `<div class="info-row"><span class="label">💼 Service Interest:</span> ${service}</div>` : ''}
      ${page ? `<div class="info-row"><span class="label">📄 Page:</span> ${page}</div>` : ''}
      <div class="message-box">
        <span class="label">💬 Message:</span>
        <p>${messageContent}</p>
      </div>
    </div>
  </div>
</body>
</html>`;

        await transporter.sendMail({
            from: `"HMZ Technology Website" <${smtpUser}>`,
            to: adminEmail,
            replyTo: email,
            subject: `🎯 New Lead: ${name}${service ? ' - ' + service : ''}`,
            html: htmlContent
        });

        res.json({ success: true, message: 'Message sent successfully' });

    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Failed to send message', details: error.message });
    }
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'contact-api' });
});

const PORT = process.env.API_PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Contact API running on port ${PORT}`);
});
