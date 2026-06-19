import React from 'react'

/**
 * InfoSection Component
 * 
 * Add this component to your page.tsx files to display keyword-rich content sections
 * This helps with SEO by:
 * - Adding natural keyword mentions in the page content
 * - Improving time-on-page and engagement
 * - Providing clear information hierarchy with H2 tags
 * - Creating better user experience
 * 
 * Usage:
 * <InfoSection 
 *   title="File Your FSA Claims"
 *   description="..."
 *   features={[...]}
 * />
 */

interface Feature {
  title: string
  description: string
}

interface InfoSectionProps {
  title: string
  description: string
  features: Feature[]
  backgroundColor?: string
  titleColor?: string
}

export function InfoSection({
  title,
  description,
  features,
  backgroundColor = '#f5f5f5',
  titleColor = '#0066cc',
}: InfoSectionProps) {
  return (
    <section
      style={{
        backgroundColor,
        padding: '40px 20px',
        margin: '30px 0',
        borderRadius: '8px',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* H2 for keyword optimization */}
        <h2
          style={{
            fontSize: '28px',
            color: titleColor,
            marginBottom: '15px',
            fontWeight: 700,
          }}
        >
          {title}
        </h2>

        {/* Description paragraph - keyword rich */}
        <p
          style={{
            fontSize: '16px',
            color: '#333',
            lineHeight: '1.6',
            marginBottom: '30px',
            maxWidth: '800px',
          }}
        >
          {description}
        </p>

        {/* Feature grid - H3 tags for better structure */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '25px',
          }}
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '6px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                border: '1px solid #e0e0e0',
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  color: titleColor,
                  marginBottom: '10px',
                  fontWeight: 600,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.5',
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ====================================
// Pre-configured components for Flores247
// ====================================

export function FilClaimsInfoSection() {
  return (
    <InfoSection
      title="File Your FSA, HSA, and HRA Claims"
      description="Flores247 makes it easy to submit and track your benefits claims. Upload receipts, monitor reimbursement status, and manage all your FSA, HSA, and HRA claims through our secure online portal. Our simplified claims process gets you reimbursed quickly."
      features={[
        {
          title: 'FSA Claims',
          description:
            'Submit flexible spending account claims for medical and dependent care expenses. Upload receipts and get reimbursed promptly through Flores247.',
        },
        {
          title: 'HSA Claims',
          description:
            'File health savings account claims for qualified medical expenses. Track your HSA balance and submission status in real-time.',
        },
        {
          title: 'HRA Claims',
          description:
            'Submit health reimbursement arrangement claims with documentation. Manage your HRA benefits and reimbursement requests online.',
        },
        {
          title: 'Track Status',
          description:
            'Monitor your claims status from submission to reimbursement. Receive updates on your pending, approved, and completed claims.',
        },
      ]}
    />
  )
}

export function CheckBalanceInfoSection() {
  return (
    <InfoSection
      title="Check Your Benefits Balance Anytime"
      description="Access your FSA balance, HSA balance, and HRA account information instantly through Flores247. View real-time account summaries, transaction history, and spending details to stay informed about your employee benefits."
      features={[
        {
          title: 'FSA Balance',
          description:
            'Check your flexible spending account balance, available funds, and year-to-date spending information.',
        },
        {
          title: 'HSA Balance',
          description:
            'View your health savings account balance, contribution history, and eligible expense tracking in one place.',
        },
        {
          title: 'Transaction History',
          description:
            'Review detailed transaction records, claim submissions, and reimbursement history for all your benefits accounts.',
        },
        {
          title: 'Real-Time Updates',
          description:
            'Get instant updates to your account balance as transactions are processed through the Flores247 portal.',
        },
      ]}
    />
  )
}

export function CobraPaymentInfoSection() {
  return (
    <InfoSection
      title="Manage Your COBRA Continuation Coverage"
      description="Make COBRA payments securely through Flores247. Manage your health insurance continuation coverage, track payment history, and explore your continuation options all in one convenient online portal."
      features={[
        {
          title: 'COBRA Payments',
          description:
            'Pay your COBRA contributions online through Flores247 using credit card, bank transfer, or check options.',
        },
        {
          title: 'Payment History',
          description:
            'Track all your COBRA payments, due dates, and continuation coverage status through your account dashboard.',
        },
        {
          title: 'Auto-Pay Setup',
          description:
            'Set up automatic monthly COBRA payments for convenience and to ensure you never miss a deadline.',
        },
        {
          title: 'Coverage Details',
          description:
            'View your COBRA continuation coverage details, eligibility information, and coverage end dates.',
        },
      ]}
    />
  )
}

export function ForgotPasswordInfoSection() {
  return (
    <InfoSection
      title="Reset Your Flores247 Password Securely"
      description="Forgot your Flores247 password? No problem. Use our secure account recovery process to reset your password, verify your identity, and regain access to your benefits account quickly and safely."
      features={[
        {
          title: 'Quick Recovery',
          description:
            'Reset your Flores247 password in just a few minutes using our streamlined account recovery process.',
        },
        {
          title: 'Identity Verification',
          description:
            'We verify your identity through security questions and email verification to protect your account.',
        },
        {
          title: 'Secure Reset Link',
          description:
            'Receive a secure password reset link via email to create a new password for your benefits account.',
        },
        {
          title: 'Customer Support',
          description:
            'Our customer service team is available to help if you have trouble resetting your password or accessing your account.',
        },
      ]}
    />
  )
}

// ====================================
// Usage Examples
// ====================================

/*
// In your file-claims/page.tsx:
import { FilClaimsInfoSection } from '@/components/info-section'

export default function FileClaimsPage() {
  return (
    <>
      <header>File Your Claims</header>
      <FilClaimsInfoSection />
      {/* Your existing claims form component */}
/*    </>
  )
}

// In your balance/page.tsx:
import { CheckBalanceInfoSection } from '@/components/info-section'

export default function BalancePage() {
  return (
    <>
      <header>Your Account Balance</header>
      <CheckBalanceInfoSection />
      {/* Your existing balance display component */}
/*    </>
  )
}

// In your cobra/page.tsx:
import { CobraPaymentInfoSection } from '@/components/info-section'

export default function CobraPage() {
  return (
    <>
      <header>COBRA Payments</header>
      <CobraPaymentInfoSection />
      {/* Your existing COBRA payment component */}
/*    </>
  )
}

// In your forgot-password/page.tsx:
import { ForgotPasswordInfoSection } from '@/components/info-section'

export default function ForgotPasswordPage() {
  return (
    <>
      <header>Reset Password</header>
      <ForgotPasswordInfoSection />
      {/* Your existing password reset form component */}
/*    </>
  )
}
*/
