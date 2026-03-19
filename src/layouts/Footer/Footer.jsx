import React from "react";
import { Link } from "react-router-dom";

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#080808" />
  </svg>
);

const navLinks = [
  { label: "Home", href: "/framd/home" },
  { label: "Gallery", href: "/framd/gallery" },
  { label: "Blog", href: "/framd/blog" },
  { label: "About Us", href: "/framd/about-us" },
  { label: "Contact Us", href: "/framd/contact-us" },
//   { label: "Accessibility", href: "/accessibility" },
//   { label: "Partners", href: "/partners" },
];

const socialLinks = [
  { icon: <FacebookIcon />, href: "https://facebook.com", label: "Facebook" },
  {
    icon: <InstagramIcon />,
    href: "https://instagram.com",
    label: "Instagram",
  },
  { icon: <XIcon />, href: "https://x.com", label: "X" },
  { icon: <GitHubIcon />, href: "https://github.com", label: "GitHub" },
  { icon: <YouTubeIcon />, href: "https://youtube.com", label: "YouTube" },
];

function MainLayoutFooter() {
  return (
    <section className="relative flex flex-col overflow-hidden pt-14 px-6 md:px-12 pb-14 bg-[rgba(139,69,19,0.12)]">
      {/* Background — preserved exactly as provided */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#080808_0%,#080808_80%,#0a0500_100%)] z-0" />
      <div className="absolute top-0 left-0 right-0 h-50 pointer-events-none z-1 bg-linear-to-b from-[rgba(201,147,58,0.18)] via-[rgba(201,147,58,0.06)] to-transparent" />

      {/* Footer content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              className="text-sm font-serif font-medium text-[#8b99b5] hover:text-[#c4cdd e] transition-colors duration-200 tracking-wide"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-6">
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5a6a82] hover:text-[#8b99b5] transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#4a5568] tracking-wide">
          &copy; 2026 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default MainLayoutFooter;
