import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Benefits Balance | Flores247 Account Dashboard",
  description:
    "View your FSA, HSA, and HRA balance in real-time through Flores247. Track your spending, eligible expenses, and available funds.",
  keywords: [
    "benefits balance",
    "account balance",
    "FSA balance",
    "HSA balance",
    "HRA balance",
    "check balance",
    "spending summary",
    "available funds",
    "transaction history",
    "Flores247 balance",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Check Your Benefits Balance | Flores247",
    description:
      "Real-time access to your FSA, HSA, and HRA account balances through Flores247.",
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
      name: "How do I check my FSA balance in Flores247?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Log into your Flores247 account and click on 'Benefits Balance' or 'Account Summary'. Your current FSA balance, YTD spending, and remaining funds will be displayed.",
      },
    },
    {
      "@type": "Question",
      name: "How often is my balance updated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your account balance is updated daily to reflect recent transactions, claim submissions, and reimbursements. Some transactions may take 1-2 business days to appear.",
      },
    },
    {
      "@type": "Question",
      name: "Can I view my transaction history?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Flores247 provides detailed transaction history showing all deposits, withdrawals, claims, and reimbursements. You can filter by date range and transaction type.",
      },
    },
    {
      "@type": "Question",
      name: "What if my balance shows incorrectly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact Flores benefits customer service for assistance. They can review your account, verify recent transactions, and correct any discrepancies.",
      },
    },
  ],
};
