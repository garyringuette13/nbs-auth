import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.flores247.com",
  ),
  title: {
    default: "Flores247 - Login to Your Benefits Account",
    template: "%s | Flores247",
  },
  keywords: [
    "Flores247",
    "flores247.com portal",
    "flores247 app",
    "flores247 customer service",
    "flores247 cobra",
    "flores247 login page",
    "flores247 contact",
    "flores247.com web site",
    "flores247 emerge ortho",
    "floresHR emerge ortho",
    "flores247 emerge ortho login",
    "floresHR emerge ortho login",
    "flores247 florida cancer specialists & research institute",
    "floresHR florida cancer specialists & research institute",
    "flores247 florida cancer specialists & research institute login",
    "floresHR florida cancer specialists & research institute login",
    "flores247 florida cancer specialists",
    "floresHR florida cancer specialists",
    "flores247 florida cancer specialists login",
    "floresHR florida cancer specialists login",
    "flores247 navy federal credit union",
    "floresHR navy federal credit union",
    "flores247 navy federal credit union login",
    "floresHR navy federal credit union login",
    "flores247 micron",
    "floresHR micron",
    "flores247 micron login",
    "floresHR micron login",
    "Flores Associates",
    "benefits login",
    "FSA login",
    "HSA login",
    "HRA login",
    "flexible spending account",
    "health savings account",
    "health reimbursement arrangement",
    "benefits portal",
    "file claims",
    "benefits balance",
    "employee benefits",
    "participant login",
    "employer login",
    "how to file an FSA claim",
    "how to check HSA balance",
    "benefits account help",
    "FSA reimbursement process",
    "HSA eligible expenses",
    "COBRA payment portal",
    "benefits customer service",
    "benefits claims support",
    "forgot benefits password",
    "reset Flores247 password",
    "benefits account recovery",
    "upload receipt for reimbursement",
    "how to submit documentation",
    "Flores247 Navy Federal Credit Union login",
    "Flores247 Micron login",
    "Flores247 Florida Cancer Specialists login",
    "Flores247 EmergeOrtho login",
    "FloresHR Navy Federal Credit Union",
    "FloresHR Micron",
    "FloresHR Florida Cancer Specialists",
    "FloresHR EmergeOrtho",
  ],
  description:
    "Login to your Flores benefits account. Access your balance, file claims, manage your benefits, and explore FSA, HSA, and HRA plans. Secure participant and employer portal access.",
  authors: [{ name: "Flores & Associates" }],
  creator: "Flores & Associates",
  publisher: "Flores & Associates",
  generator: "Next.js",
  applicationName: "Flores247",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/flores.png", sizes: "any" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Flores247",
    title: "Flores247 - Login to Your Benefits Account",
    description:
      "Login to your Flores benefits account. Access your balance, file claims, and manage your benefits.",
    images: [
      {
        url: "/flores.png",
        width: 1200,
        height: 630,
        alt: "Flores247 Benefits Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flores247 - Login to Your Benefits Account",
    description:
      "Login to your Flores benefits account. Access your balance, file claims, and manage your benefits.",
    images: ["/flores.png"],
    creator: "@FloresAssociates",
  },
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    yandex: process.env.YANDEX_VERIFICATION || undefined,
  },
  alternates: {
    canonical: "/",
  },
  category: "Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Flores & Associates",
    url: "https://www.flores247.com",
    logo: "https://www.flores247.com/flores.png",
    description:
      "Flores & Associates provides comprehensive benefits administration services including FSA, HSA, HRA, and COBRA plans for employers and employees.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        url: "https://www.flores247.com/contact-login.vbhtml",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        contactType: "Technical Support",
        url: "https://www.flores247.com/contact-login.vbhtml",
      },
    ],
    sameAs: [
      "https://www.facebook.com/FloresAssociates",
      "https://www.linkedin.com/company/flores-&-associates",
    ],
    areaServed: ["US"],
    knowsAbout: [
      "FSA",
      "HSA",
      "HRA",
      "COBRA",
      "Benefits Administration",
      "Employee Benefits",
    ],
  };

  // Web Application Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Flores247",
    url: "https://www.flores247.com",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Secure login portal for Flores benefits account management, including FSA, HSA, HRA, and COBRA plans.",
  };

  // FAQ Schema for Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I login to Flores247?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visit flores247.com and enter your username and password on the login page. Select your user role (Participant, Employer, or Broker) and click LOGIN. If you forgot your password, use the 'Forgot Password' link to reset it.",
        },
      },
      {
        "@type": "Question",
        name: "What is an FSA and how do I file a claim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An FSA (Flexible Spending Account) is a pre-tax benefits account for qualified medical or dependent care expenses. To file an FSA claim through Flores247, log in to your account, navigate to 'File Claims', submit your receipts or documentation, and track your reimbursement status.",
        },
      },
      {
        "@type": "Question",
        name: "How do I check my HSA balance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Log into your Flores247 account and navigate to the 'Benefits Balance' or 'Account Summary' section. You can view your current HSA balance, transaction history, and eligible expenses in real-time.",
        },
      },
      {
        "@type": "Question",
        name: "How do I reset my Flores247 password?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Click the 'Forgot Password' link on the Flores247 login page. Follow the account recovery steps to verify your identity and create a new password for your benefits account.",
        },
      },
      {
        "@type": "Question",
        name: "What benefits can I manage through Flores247?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Flores247 allows you to manage FSA (Flexible Spending Accounts), HSA (Health Savings Accounts), HRA (Health Reimbursement Arrangements), COBRA continuation coverage, and other employee benefits offered by your employer.",
        },
      },
      {
        "@type": "Question",
        name: "How do I upload receipts for reimbursement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Log into Flores247, go to the 'File Claims' or 'Submit Documentation' section, and upload your receipts or documentation. You can submit documents online and track your reimbursement status.",
        },
      },
      {
        "@type": "Question",
        name: "What are HSA eligible expenses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HSA eligible expenses include qualified medical expenses such as doctor visits, prescriptions, dental care, vision care, and medical equipment. Visit the IRS website or contact Flores benefits customer service for a complete list.",
        },
      },
      {
        "@type": "Question",
        name: "How do I make a COBRA payment through Flores247?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you have COBRA coverage, log into your Flores247 account, navigate to the COBRA payment portal, and make your contribution payments securely online or by mail.",
        },
      },
    ],
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.flores247.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Login",
        item: "https://www.flores247.com/login",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Benefits",
        item: "https://www.flores247.com/benefits",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Web Application Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webAppSchema),
          }}
        />

        {/* FAQ Schema - Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </body>
    </html>
  );
}
