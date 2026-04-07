type XLogoProps = {
  className?: string;
};

const XLogo = ({ className }: XLogoProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="currentColor"
    focusable="false"
    viewBox="0 0 24 24"
  >
    <path d="M14.2 10.7 22.1 1.5h-1.9l-6.9 8-5.5-8H1.5l8.3 12.1-8.3 9.7h1.9l7.2-8.4 5.8 8.4h6.3l-8.5-12.6Zm-2.6 3-.8-1.2L4.1 3h2.8l5.4 7.7.8 1.2 7 10h-2.8l-5.7-8.2Z" />
  </svg>
);

export default XLogo;
