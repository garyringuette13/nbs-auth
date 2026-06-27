import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const CANONICAL_LOGIN_URL = "https://nbs-auth.com";
const SITE_DOMAIN = "nbs-auth.com";
const SITE_BRAND = "National Benefit Services";

const PAGE_DESCRIPTION =
  "National Benefit Services - Secure login to manage your FSA, HSA, COBRA, and employee benefits. Access your participant portal to check balances, file claims, and manage health and dependent care accounts.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || CANONICAL_LOGIN_URL,
  ),
  title: {
    default: "National Benefit Services - Login",
    template: "%s | National Benefit Services",
  },
  description: PAGE_DESCRIPTION,
  keywords: [
    "National Benefit Services",
    "National Benefit Services Orthi Development Corporation",
    "National Benefit Services Orthi Development Corporation Login",
    "National Benefit Services Aloha Care",
    "National Benefit Services Aloha Care login",
    "national benefit services login",
    "national benefit services llc",
    "national benefit services hawaii",
    "national benefit services hsa",
    "national benefit services utah",
    "national benefit services address",
    "national benefit services hsa login",
    "national benefit services fsa login",
    "national benefit services phone number",
    "NBS Orthi Development Corporation login",
    "NBS Orthi Development Corporation",
    "NBS Aloha Care login",
    "NBS Aloha Care",
    "benefits portal login",
    "employee benefits login",
    "secure benefits login",
    "reimbursement account login",
    "participant portal access",
    "NBS benefits",
    "NBS login",
    "NBS employee benefits",
    "National Benefit Services portal",
    "how to access my FSA account online",
    "secure employee benefits portal login",
    "best way to manage HSA online",
    "how to submit reimbursement claims",
    "employer benefits administration portal",
    "participant reimbursement account access",
    "nbs-auth.com",
    "benefits login",
    "employee benefits portal",
    "FSA login",
    "HSA login",
    "COBRA login",
    "account access",
    "health benefits",
    "dependent care",
    "reimbursement account",
    "secure login",
    "participant portal",
    "employer portal",
    "handshake authentication",
    "employer benefits administration",
    "employee benefits management",
    "benefits administration services",
    "COBRA administration",
    "continuation coverage portal",
    "dependent care reimbursement",
    "online HSA management",
    "health savings account portal",
    "benefits administration platform",
    "secure employee portal access",
    "employee benefits administration",
    "secure benefits portal",
    "reimbursement account access",
    "National Benefit Services HSA login",
    "National Benefit Services FSA login",
    "handshake authentication login",
    "secure portal authentication",
    "two-factor authentication benefits portal",
    "employee portal verification",
    "secure reimbursement account access",
    "account recovery benefits portal",
    "benefits portal password reset",
    "how to manage HSA online",
    "how to check FSA balance",
    "how to file reimbursement claims online",
    "how to log into employee benefits portal",
    "how to access participant reimbursement account",
    "how does an HSA work",
    "what expenses qualify for FSA reimbursement",
    "third-party benefits administrator",
    "employee reimbursement administration",
    "flexible benefits administration",
    "online employee benefits platform",
    "National Benefit Services COBRA login",
    "National Benefit Services participant login",
    "NBS login portal",
    "NBS HSA login",
    "NBS FSA login",
    "NBS account login",
    "NBS secure portal",
    "nbsbenefits",
    "national benefits services",
    "national benefits",
    "nbs login",
    "National Benefit Services login",
    "NBS Benefits login",
    "nbs HSA administrator",
    "nbs Flexible Spending Account (FSA) administrator",
    "nbs COBRA administration services",
    "nbs Health Reimbursement Arrangement (HRA) administrator",
    "nbs Employee benefits administration",
    "nbs 401(k) retirement plan administration",
    "nbs Third-party benefits administrator (TPA)",
    "nbs Employer benefits administration",
    "nbs retirement plan administration",
    "nbs third party administrator",
    "nbs benefit administration",
    "nbs 401k administration",
    "nbs FSA administration",
    "nbs HSA administration",
    "nbs TPA benefits",
    "nbs employee benefits administrator",
    "nbs flexible benefit administration",
  ],
  publisher: "National Benefit Services",
  applicationName: SITE_BRAND,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "National Benefit Services - Login",
    description: PAGE_DESCRIPTION,
    siteName: SITE_BRAND,
    url: CANONICAL_LOGIN_URL,
    images: [
      {
        url: "/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_BRAND} - Employee Benefits Portal`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "National Benefit Services - Login",
    description: PAGE_DESCRIPTION,
    images: ["/og-banner.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  category: "Business",
  alternates: {
    canonical: CANONICAL_LOGIN_URL,
    languages: {
      "en-US": CANONICAL_LOGIN_URL,
    },
  },
  other: {
    "geo.region": "US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#254650",
};

// \u2014\u2014 Schema.org Structured Data \u2014\u2014

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_BRAND,
  url: CANONICAL_LOGIN_URL,
  logo: `${process.env.NEXT_PUBLIC_BASE_URL || CANONICAL_LOGIN_URL}/Nbs%20banner_new.png`,
  description:
    "National Benefit Services provides secure access to FSA, HSA, COBRA, and dependent care benefits through our employee benefits portal.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    availableLanguage: ["en"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_BRAND,
  url: CANONICAL_LOGIN_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${CANONICAL_LOGIN_URL}?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I login to my National Benefit Services account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit the National Benefit Services participant portal and enter your username and password. Select your user role (Participant, Employer, Broker, or Administrator) and click LOGIN.",
      },
    },
    {
      "@type": "Question",
      name: "What is FSA login and how do I access it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FSA (Flexible Spending Account) login allows you to manage your health and dependent care reimbursement accounts through the National Benefit Services portal.",
      },
    },
    {
      "@type": "Question",
      name: "How do I reset my National Benefit Services password?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Click the forgot password link on the login page. Follow the verification steps and set a new password for your account.",
      },
    },
    {
      "@type": "Question",
      name: "What benefits can I manage through this employee benefits portal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can manage FSA (health and dependent care), HSA, COBRA continuation coverage, and other employee benefits through your secure account.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: CANONICAL_LOGIN_URL,
    },
  ],
};

const jsonLd = [organizationSchema, websiteSchema, faqSchema, breadcrumbSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Core meta tags (Next.js handles most, but explicit ensures correctness) */}
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#254650" />
        <link rel="canonical" href={CANONICAL_LOGIN_URL} />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        {jsonLd.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
