import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New Account | National Benefit Services",
  description:
    "Create a new National Benefit Services account to access your employee benefits portal. Register now to manage your FSA, HSA, COBRA, and other benefits.",
  keywords: [
    "new account",
    "create account",
    "sign up",
    "register",
    "employee benefits",
    "participant portal",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Create Your National Benefit Services Account",
    description:
      "Register for a new account to access your employee benefits including FSA, HSA, and COBRA coverage.",
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
      name: "How do I create a new National Benefit Services account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit the new account registration page and follow the steps to verify your identity and set up your login credentials.",
      },
    },
    {
      "@type": "Question",
      name: "What benefits can I manage through my National Benefit Services account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can manage FSA (Flexible Spending Accounts), HSA (Health Savings Accounts), COBRA coverage, dependent care benefits, and other employee benefits through your account.",
      },
    },
  ],
};
