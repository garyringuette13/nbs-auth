import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "COBRA Payment Portal | Flores247",
  description: "Make COBRA payments securely through Flores247. Manage your COBRA continuation coverage and health insurance contributions.",
  keywords: [
    "COBRA payment",
    "COBRA login",
    "cobra contribution",
    "health insurance continuation",
    "COBRA portal",
    "pay COBRA",
    "Flores247 COBRA",
    "continuation coverage",
    "COBRA benefits"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "COBRA Payment Portal | Flores247",
    description: "Securely manage and pay your COBRA continuation coverage through Flores247.",
    type: "website",
    locale: "en_US",
  },
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I make a COBRA payment through Flores247?",
      acceptedAnswer": {
        "@type": "Answer",
        "text": "Log into Flores247, navigate to the COBRA section, select your payment method (credit card, bank transfer, or check), enter your payment amount, and submit. You'll receive a confirmation of your payment."
      }
    },
    {
      "@type": "Question",
      name: "What payment methods does Flores247 COBRA accept?",
      acceptedAnswer": {
        "@type": "Answer",
        "text": "Flores247 accepts credit cards, debit cards, ACH bank transfers, and checks by mail for COBRA contributions."
      }
    },
    {
      "@type": "Question",
      name: "When is my COBRA payment due?",
      acceptedAnswer": {
        "@type": "Answer",
        "text": "COBRA payments are typically due within 45 days of your event date. Check your COBRA notice for the specific due date. Late payments may result in loss of coverage."
      }
    },
    {
      "@type": "Question",
      name: "Can I set up automatic COBRA payments?",
      acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Flores247 allows you to set up recurring monthly COBRA payments via ACH (Automated Clearing House) for convenience."
      }
    }
  ],
}
