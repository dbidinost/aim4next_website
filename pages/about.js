
// pages/about.js
import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#333", fontFamily: "sans-serif" }}>
      <Head>
        <title>About | PlaceholderAI</title>
        <meta name="description" content="Learn about PlaceholderAI's mission and vision for AI solutions." />
      </Head>

      <header style={{ backgroundColor: "#ffffff", padding: "0.5rem", borderBottom: "1px solid #eee" }}>
        <nav style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/hba-project-a3852-match-reports/o/public%2Faim4next.png?alt=media&token=308d547f-6b29-4eb3-98c0-595d8dbad816" 
              alt="Aim4Next Logo" 
              style={{ height: "100px", width: "auto" }}
            />
          </div>
          <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
            <li><Link href="/" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>Home</Link></li>
            <li><Link href="/solutions" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>Our Solution</Link></li>
            <li><Link href="/about" style={{ textDecoration: "none", color: "#007acc", fontSize: "1.2rem", fontWeight: "bold" }}>About</Link></li>
            <li><Link href="/contact" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section style={{ maxWidth: "960px", margin: "3rem auto", padding: "2rem" }}>
        <h1 style={{ fontSize: "2.75rem", marginBottom: "2rem", textAlign: "center" }}>About PlaceholderAI</h1>
        
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Our Mission</h2>
          <p style={{ fontSize: "1.125rem", lineHeight: "1.6", color: "#555" }}>
            At PlaceholderAI, we believe that artificial intelligence should be accessible, practical, and transformative. 
            Our mission is to democratize AI technology by providing scalable, user-friendly solutions that empower 
            businesses to innovate and grow.
          </p>
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Our Vision</h2>
          <p style={{ fontSize: "1.125rem", lineHeight: "1.6", color: "#555" }}>
            We envision a future where AI seamlessly integrates into every aspect of business operations, 
            enabling organizations to make smarter decisions, automate complex processes, and deliver 
            exceptional experiences to their customers.
          </p>
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Why Choose Us</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            <div style={{ padding: "1.5rem", border: "1px solid #ddd", borderRadius: "8px" }}>
              <h3 style={{ marginBottom: "0.5rem" }}>Innovation First</h3>
              <p style={{ color: "#555" }}>Cutting-edge AI technology that stays ahead of the curve</p>
            </div>
            <div style={{ padding: "1.5rem", border: "1px solid #ddd", borderRadius: "8px" }}>
              <h3 style={{ marginBottom: "0.5rem" }}>Proven Results</h3>
              <p style={{ color: "#555" }}>Track record of successful AI implementations across industries</p>
            </div>
            <div style={{ padding: "1.5rem", border: "1px solid #ddd", borderRadius: "8px" }}>
              <h3 style={{ marginBottom: "0.5rem" }}>Expert Support</h3>
              <p style={{ color: "#555" }}>Dedicated team of AI specialists to guide your journey</p>
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
