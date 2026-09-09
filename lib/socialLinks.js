import { useId } from "react";

const FacebookIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="24" height="24" rx="6" fill="#1877F2" />
    <path
      fill="#fff"
      d="M13.8 20v-6.3h2.1l.33-2.63h-2.43V9.53c0-.9.24-1.47 1.5-1.47h1.04V5.62C15.84 5.55 14.99 5.5 14.15 5.5 11.84 5.5 10.25 6.91 10.25 9.5v1.57H8.46v2.63h1.79V20h3.55Z"
    />
  </svg>
);

const InstagramIcon = ({ size = 24 }) => {
  const gradientId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="35%" stopColor="#DD2A7B" />
          <stop offset="65%" stopColor="#8134AF" />
          <stop offset="100%" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${gradientId})`} />
      <rect
        x="6.5"
        y="6.5"
        width="11"
        height="11"
        rx="3.6"
        stroke="#fff"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="3.2"
        stroke="#fff"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="17.2" cy="6.8" r="1.2" fill="#fff" />
    </svg>
  );
};

const LinkedInIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="24" height="24" rx="6" fill="#0A66C2" />
    <circle cx="7" cy="7" r="1.5" fill="#fff" />
    <rect x="5.5" y="9.6" width="3" height="9.9" fill="#fff" />
    <path
      fill="#fff"
      d="M18.6 19.5h-3.2v-4.7c0-1.09-.4-1.78-1.32-1.78-.97 0-1.48.7-1.48 1.78v4.7h-3.1V9.6h3v1.3h.04c.43-.88 1.38-1.63 2.87-1.63 2 0 3.19 1.26 3.19 3.62v6.61Z"
    />
  </svg>
);

const YouTubeIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="24" height="24" rx="6" fill="#FF0000" />
    <path fill="#fff" d="M10 16.5V7.5l6 4.5-6 4.5Z" />
  </svg>
);

const XIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="24" height="24" rx="6" fill="#000" />
    <path
      fill="#fff"
      d="M13.4 11.24 18.86 5h-1.29l-4.74 5.41L9.04 5H4.8l5.73 8.34L4.8 19h1.3l5-5.72L15.16 19h4.24l-5.99-7.76Zm-1.77 2.02-.58-.83-4.62-6.6h1.99l3.72 5.33.58.82 4.83 6.92h-1.99l-3.93-5.64Z"
    />
  </svg>
);

const TikTokIcon = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="24" height="24" rx="6" fill="#000" />
    <path
      fill="#fff"
      d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.32 1.38V7.3s-1.88.09-3.26-1.48Z"
    />
  </svg>
);

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/assaadahoffcial",
    Icon: FacebookIcon
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/assaadahoffcial/",
    Icon: InstagramIcon
  },
  {
    name: "X",
    href: "https://x.com/Assaadahoffical",
    Icon: XIcon
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@asaadaoffical",
    Icon: TikTokIcon
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/as-saada/",
    Icon: LinkedInIcon
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@assaadah-offcial",
    Icon: YouTubeIcon
  }
];
