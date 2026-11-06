import type { Metadata, Viewport } from "next";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-600.css";
import "@fontsource/space-grotesk/latin-700.css";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://roayn.com"),
  title: { default: "ROAYN — Building Digital Experiences for Tomorrow", template: "%s | ROAYN" },
  description: "ROAYN creates original mobile applications, software, personalization products, and digital experiences.",
  applicationName: "ROAYN",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "ROAYN",
    title: "ROAYN — Building Digital Experiences for Tomorrow",
    description: "Original mobile applications, software, personalization products, and digital experiences.",
    url: "https://roayn.com",
    images: [{ url: "/images/og-roayn.png", width: 1200, height: 630, alt: "ROAYN — Creating Digital Experiences That Inspire" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og-roayn.png"] },
  icons: { icon: "/icons/favicon.svg", apple: "/icons/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#070B14",
  width: "device-width",
  initialScale: 1,
};

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ROAYN",
  url: "https://roayn.com",
  logo: "https://roayn.com/logos/roayn-mark.svg",
  description: "A product-focused technology brand creating original software and digital experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
      </body>
    </html>
  );
}
