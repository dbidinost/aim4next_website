
// pages/contact.js
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#333", fontFamily: "sans-serif" }}>
      <Head>
        <title>Contact | PlaceholderAI</title>
        <meta name="description" content="Get in touch with PlaceholderAI for AI solutions and consultations." />
      </Head>

      <header style={{ backgroundColor: "#ffffff", padding: "1.5rem", borderBottom: "1px solid #eee" }}>
        <nav style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/hba-project-a3852-match-reports/o/public%2Faim4next_new.png?alt=media&token=a1cfff7f-91ac-4fdb-96cb-defa09c15920"
              alt="Aim4Next Logo" 
              style={{ height: "50px", width: "auto" }}
            />
          </div>
          <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
            <li><Link href="/" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>Home</Link></li>
            <li><Link href="/ai-invest" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>AI Invest</Link></li>
            <li><Link href="/solutions" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>Our Solution</Link></li>
            <li><Link href="/about" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>About</Link></li>
            <li><Link href="/contact" style={{ textDecoration: "none", color: "#007acc", fontSize: "1.2rem", fontWeight: "bold" }}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section style={{ maxWidth: "700px", margin: "3rem auto", padding: "2rem" }}>
        <h1 style={{ fontSize: "2.75rem", marginBottom: "2rem", textAlign: "center" }}>Get in Touch</h1>
        <p style={{ fontSize: "1.1rem", color: "#333", textAlign: "left", marginBottom: "2rem" }}>
          Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
        </p>
        
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ marginBottom: "1.5rem", textAlign: "center" }}>Let's Start the Conversation!</h2>
          <p style={{ marginBottom: "2rem", lineHeight: "1.6", color: "#333",fontSize: "1.1rem", textAlign: "left" }}>
            Whether you're looking to implement your first AI solution or scale existing capabilities,
            we are here to guide you every step of the way.
          </p>

          <div style={{ marginBottom: "2rem", backgroundColor: "#edf5f7ff", borderRadius: "8px", border: "1px solid #ddd"}}>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem", textAlign: "center" }}>Our Emails: </h3>
            <p style={{ textAlign: "left", fontSize: "1.1rem" }}>
              <a href="mailto:andrew.gaule@aimava.com" style={{ color: "#294decff", textDecoration: "none", marginLeft:"0.2rem" }}>
                andrew.gaule@aimava.com
              </a>
            </p>
            <p style={{ textAlign: "left", fontSize: "1.1rem" }}>
              <a href="mailto:denis.bidinost@nekko.co.uk" style={{ color: "#294decff", textDecoration: "none" , marginLeft:"0.2rem" }}>
                denis.bidinost@nekko.co.uk
              </a>
            </p>
          </div>


          <div style={{ padding: "2rem" }}>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem", textAlign: "center" }}>Free Consultation</h3>
            <p style={{ color: "#333", marginBottom: "0", textAlign: "left", fontSize: "1.1rem" }}>
              Schedule a free 30-minute consultation to discuss your AI needs and explore potential solutions.
            </p>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: "#fafafa", textAlign: "center", padding: "1.5rem", fontSize: "0.875rem", color: "#999", marginTop: "4rem" }}>
        <p style={{ margin: "0", marginBottom: "0.5rem" }}>© Aim4Next 2025, 2026</p>
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
