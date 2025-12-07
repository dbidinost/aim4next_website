// pages/ai-invest.js
import Head from "next/head";
import Link from "next/link";

export default function AIInvest() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#333", fontFamily: "sans-serif" }}>
      <Head>
        <title>AI Invest | Aim4Next - AI-Powered Venture Investing</title>
        <meta name="description" content="Transform venture investing with AI-powered screening, decision-making, and pitch readiness tools." />
      </Head>

      <header style={{ backgroundColor: "#ffffff", padding: "0.5rem", borderBottom: "1px solid #eee" }}>
        <nav style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hba-project-a3852-match-reports/o/public%2Faim4next_new.png?alt=media&token=a1cfff7f-91ac-4fdb-96cb-defa09c15920"
              alt="Aim4Next Logo"
              style={{ height: "100px", width: "auto" }}
            />

          </div>
          <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
            <li><Link href="/" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>Home</Link></li>
            <li><Link href="/ai-invest" style={{ textDecoration: "none", color: "#667eea", fontSize: "1.2rem", fontWeight: "bold" }}>AI Invest</Link></li>
            <li><Link href="/solutions" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>Our Solution</Link></li>
            <li><Link href="/about" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>About</Link></li>
            <li><Link href="/contact" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "4rem 2rem",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            lineHeight: "1.2"
          }}>
            Smarter Investing Starts Here.<br />
            <span style={{ color: "#FFD700" }}>Powered by AI.</span>
          </h1>
          <p style={{
            fontSize: "1.25rem",
            marginBottom: "2.5rem",
            lineHeight: "1.6",
            maxWidth: "800px",
            margin: "0 auto 2.5rem auto",
            opacity: "0.95"
          }}>
            Aim4Next is transforming venture investing with an AI-powered platform that accelerates screening,
            enhances decision-making, and boosts pitch readiness.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/solutions" style={{
              backgroundColor: "#FFD700",
              color: "#333",
              padding: "1rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
              transition: "transform 0.3s ease",
              display: "inline-block"
            }}>
              See It in Action
            </Link>
            <Link href="/contact" style={{
              backgroundColor: "transparent",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
              border: "2px solid white",
              transition: "background-color 0.3s ease",
              display: "inline-block"
            }}>
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "960px", margin: "4rem auto", padding: "2rem", textAlign: "center" }}>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem", alignItems: "center" }}>
          {/* First Loom Video */}
          <div id="human-ai-matching" style={{ width: "100%", maxWidth: "640px" }}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#667eea", textAlign: "center" }}>Human and AI Matching</h3>
            <div style={{ fontSize: "1rem", marginBottom: "1.5rem", color: "#666", fontStyle: "italic", maxWidth: "500px", margin: "0 auto 1.5rem auto" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <div style={{ flex: "1 1 45%", minWidth: "200px", textAlign: "left" }}>
                  <div style={{ marginBottom: "0.5rem" }}>✓ Full investment platform</div>
                  <div style={{ marginBottom: "0.5rem" }}>✓ Airtable integrated database</div>
                  <div style={{ marginBottom: "0.5rem" }}>✓ AI Tested Matching algorithm</div>
                </div>
                <div style={{ flex: "1 1 45%", minWidth: "200px", textAlign: "left" }}>
                  <div style={{ marginBottom: "0.5rem" }}>✓ Personalised investor profiles</div>
                  <div style={{ marginBottom: "0.5rem" }}>✓ Cohort management</div>
                  <div style={{ marginBottom: "0.5rem" }}>✓ Member scores process</div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
              <iframe
                src="https://www.loom.com/embed/79061c71a54d434c9422f5b9f72b96d1"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px"
                }}
              />
            </div>
          </div>

          {/* Second Loom Video */}
          <div id="scouting-app" style={{ width: "100%", maxWidth: "640px" }}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#667eea", textAlign: "center" }}>Scouting App</h3>
            <div style={{ fontSize: "1rem", marginBottom: "1.5rem", color: "#666", fontStyle: "italic", maxWidth: "500px", margin: "0 auto 1.5rem auto" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <div style={{ flex: "1 1 45%", minWidth: "200px", textAlign: "left" }}>
                  <div style={{ marginBottom: "0.5rem" }}>✓ Personalized Deal Matching</div>
                  <div style={{ marginBottom: "0.5rem" }}>✓ Explainable Scoring & Evidence</div>
                  <div style={{ marginBottom: "0.5rem" }}>✓ Real-time Deal Sensing</div>
                </div>
                <div style={{ flex: "1 1 45%", minWidth: "200px", textAlign: "left" }}>
                  <div style={{ marginBottom: "0.5rem" }}>✓ Interactive RAG Chat & Instant Due-Diligence</div>
                  <div style={{ marginBottom: "0.5rem" }}>✓ Pipeline-Ready Workflow & Exports</div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
              <iframe
                src="https://www.loom.com/embed/d9ea61120ac243ffad732ed3a6603d83"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: "#fafafa", textAlign: "center", padding: "1.5rem", fontSize: "0.875rem", color: "#999", marginTop: "4rem" }}>
        <p style={{ margin: "0", marginBottom: "0.5rem" }}>© Aim4Next 2025</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", alignItems: "center" }}>
          <a href="https://linkedin.com/company/aim4next" target="_blank" rel="noopener noreferrer" style={{ color: "#667eea", textDecoration: "none" }}>LinkedIn</a>
          <span style={{ color: "#ccc" }}>|</span>
          <Link href="/contact" style={{ color: "#667eea", textDecoration: "none" }}>Contact</Link>
          <span style={{ color: "#ccc" }}>|</span>
          <Link href="/terms" style={{ color: "#667eea", textDecoration: "none" }}>Terms</Link>
        </div>
      </footer>
    </main>
  );
}
