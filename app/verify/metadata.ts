import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Your Account | National Benefit Services",
  description:
    "Verify your National Benefit Services account through secure authentication methods including SMS, call verification, or authenticator app.",
  keywords: [
    "verify account",
    "identity verification",
    "two-factor authentication",
    "account access",
    "secure login",
    "authentication",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Verify Your Identity | National Benefit Services",
    description:
      "Complete secure account verification through National Benefit Services participant portal.",
    type: "website",
    locale: "en_US",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I verify my National Benefit Services account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After logging in, you can verify your account using multiple methods: SMS text message, phone call, or an authenticator app.",
      },
    },
    {
      "@type": "Question",
      name: "What verification methods does National Benefit Services offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "National Benefit Services offers three verification methods: SMS (text message), phone call verification, and authenticator app verification for secure account access.",
      },
    },
    {
      "@type": "Question",
      name: "Is account verification required for National Benefit Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, account verification is a required security step to ensure only authorized users access your employee benefits account and sensitive information.",
      },
    },
  ],
};
