import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Forgot Password | Flores247 Account Recovery",
  description: "Reset your Flores247 password securely. Account recovery and password reset for your benefits portal access.",
  keywords: [
    "forgot password",
    "reset password",
    "password recovery",
    "account recovery",
    "reset login",
    "account reset",
    "password help",
    "Flores247 password",
    "account access"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Reset Your Password | Flores247",
    description: "Securely recover your Flores247 account and reset your password.",
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
      name: "How do I reset my Flores247 password?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Click 'Forgot Password' on the Flores247 login page. Verify your identity using your email or security questions, then follow the instructions to create a new password.",
      },
    },
    {
      "@type": "Question",
      name: "What information do I need to reset my password?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll need your username/email address and may be asked to answer security questions or verify your identity through a code sent to your email.",
      },
    },
    {
      "@type": "Question",
      name: "How long does password reset take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The password reset process typically takes 5-10 minutes. You'll receive a password reset link via email with instructions.",
      },
    },
    {
      "@type": "Question",
      name: "I didn't receive the password reset email",",
      acceptedAnswer": {
        "@type": "Answer",
        "text": "Check your spam or junk folder. If you still don't receive the email, contact Flores benefits customer service for assistance with account recovery."
      }
    }
  ],
}
