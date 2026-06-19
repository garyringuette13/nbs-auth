import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "File Claims | Flores247 Benefits Portal",
  description:
    "File FSA, HSA, and HRA claims through Flores247. Upload receipts, track reimbursement status, and manage your benefits claims online.",
  keywords: [
    "file claims",
    "FSA claims",
    "HSA claims",
    "submit receipts",
    "reimbursement request",
    "benefits claims",
    "Flores247 claims",
    "claim status",
    "upload documentation",
    "claim reimbursement",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "File Claims | Flores247",
    description:
      "Submit and track your benefits claims through the Flores247 portal.",
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
      name: "How do I file an FSA claim through Flores247?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Log into Flores247, navigate to 'File Claims', fill out the claim form with your expense details, upload your receipts or invoices, and submit. Your claim will be processed and you can track the status in your account.",
      },
    },
    {
      "@type": "Question",
      name: "What documentation do I need to submit a claim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll need itemized receipts or invoices that show the service date, provider name, and expense amount. For medical claims, documentation from your healthcare provider or pharmacy is required.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to process a claim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most claims are processed within 5-10 business days of submission. You can track your claim status in real-time through your Flores247 account dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "Can I submit multiple receipts at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Flores247 allows you to upload multiple receipts and documentation for a single claim or multiple claims at the same time.",
      },
    },
  ],
};
