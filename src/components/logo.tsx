import Link from "next/link";

type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className = "" }: LogoProps) {
  return (
    <Link className={`brand ${className}`} href="/" aria-label="ROAYN home">
      <svg className="brand-symbol" viewBox="0 0 48 48" aria-hidden="true">
        <defs>
          <linearGradient id="roayn-mark" x1="7" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22D3EE" />
            <stop offset="0.48" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <path d="M8 9.5C8 6.46 10.46 4 13.5 4h14C35.51 4 42 10.49 42 18.5c0 5.4-2.95 10.11-7.33 12.6L42 44H29.9l-6.17-10.7H19V44H8V9.5Zm11 4.5v9h8.5a4.5 4.5 0 1 0 0-9H19Z" fill="url(#roayn-mark)" />
        <path d="m30.7 27.7 8.4 14.6" stroke="#F8FAFC" strokeOpacity=".78" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      {!compact && <span className="brand-word">ROAYN</span>}
    </Link>
  );
}
