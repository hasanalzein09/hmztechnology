import type { Components } from "react-markdown";

/**
 * Dark-prose styling for blog markdown — shared by EN and AR blog pages.
 * Uses Tailwind logical properties (ps-/pe-/border-s/text-start) so the
 * same component renders correctly in both LTR (en) and RTL (ar) layouts.
 */
export const mdComponents: Components = {
  h2: ({ children }) => (
    <h2 className="text-white text-[1.75rem] font-bold leading-[1.3] mt-12 mb-5 pt-6 border-t border-white/[0.06] first:border-t-0 first:pt-0 first:mt-0 before:content-[''] before:block before:w-12 before:h-[3px] before:mb-4 before:rounded-[2px] before:bg-gradient-to-r before:from-cyan-400 before:to-purple-500">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-cyan-300 text-[1.3rem] font-semibold leading-[1.4] mt-9 mb-4">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-cyan-200 text-[1.1rem] font-semibold mt-7 mb-3">{children}</h4>
  ),
  p: ({ children }) => <p className="my-5">{children}</p>,
  strong: ({ children }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-cyan-400 underline decoration-cyan-400/35 underline-offset-[3px] transition-[color,text-decoration-color] duration-200 hover:text-cyan-200 hover:decoration-cyan-200"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="my-5 ps-6 list-none [&>li]:relative [&>li]:ps-4 [&>li]:before:content-[''] [&>li]:before:absolute [&>li]:before:-start-3 [&>li]:before:top-[0.7em] [&>li]:before:w-1.5 [&>li]:before:h-1.5 [&>li]:before:rounded-full [&>li]:before:bg-gradient-to-br [&>li]:before:from-cyan-400 [&>li]:before:to-purple-500">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-5 ps-6 list-decimal [&>li]:marker:text-cyan-400 [&>li]:marker:font-semibold">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="my-2">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-8 py-5 px-6 border-s-[3px] border-s-cyan-400 bg-cyan-400/5 rounded-e-xl text-gray-200 italic [&_p]:my-2">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => (
    <code
      className={`text-cyan-300 bg-cyan-400/[0.08] border border-cyan-400/15 px-1.5 py-[0.15rem] rounded-md text-[0.875em]${className ? ` ${className}` : ""}`}
    >
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-white/[0.03] border border-white/[0.08] rounded-xl py-5 px-6 overflow-x-auto my-7 [&_code]:bg-transparent [&_code]:border-0 [&_code]:p-0 [&_code]:text-gray-300">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-separate border-spacing-0 text-[0.9375rem] border border-white/[0.08] rounded-xl overflow-hidden">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="bg-cyan-400/[0.08] text-cyan-300 font-semibold text-start py-3.5 px-4 border-b border-white/10">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="py-3 px-4 border-b border-white/5 text-gray-300">{children}</td>
  ),
  tbody: ({ children }) => (
    <tbody className="[&_tr:last-child_td]:border-b-0 [&_tr:hover]:bg-white/[0.02]">
      {children}
    </tbody>
  ),
  hr: () => (
    <hr className="border-none h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent my-12" />
  ),
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? ""}
      className="rounded-xl border border-white/[0.08] my-8"
    />
  ),
};
