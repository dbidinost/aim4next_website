
// pages/about.js
import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#333", fontFamily: "sans-serif" }}>
      <Head>
        <title>About | Aim4Next</title>
        <meta name="description" content="Learn about Aim4Next's mission and vision for AI solutions." />
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
            <li><Link href="/#courses" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>AI Courses</Link></li>
            <li><Link href="/ai-invest" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>AI Invest</Link></li>            <li><Link href="/solutions" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>Our Solution</Link></li>
            <li><Link href="/about" style={{ textDecoration: "none", color: "#007acc", fontSize: "1.2rem", fontWeight: "bold" }}>About</Link></li>
            <li><Link href="/contact" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section style={{ maxWidth: "960px", margin: "3rem auto", padding: "2rem" }}>
        <h1 style={{ fontSize: "2.75rem", marginBottom: "2rem", textAlign: "center" }}>About Aim4Next</h1>
        
        {/* Our Team Section */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem", textAlign: "center" }}>Our Team</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>

            {/* Founder 1 */}
            <div style={{ textAlign: "center" }}>
              <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "center" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/hba-project-a3852-match-reports/o/public%2FAndrew.jfif?alt=media&token=fbd864c5-39e7-42d8-8183-0ffea6bce557"
                  alt="Andrew Gaule"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid #667eea"
                  }}
                />
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#667eea" }}>Andrew Gaule</h3>
              <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555", textAlign: "left" }}>
                Strategic Advisor | AI & Business Transformation | Cambridge Economics, MBA, ACMA | Venturing, Innovation & Growth | Board & CxO Experience
              </p>
            </div>

            {/* Founder 2 */}
            <div style={{ textAlign: "center" }}>
              <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "center" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/hba-project-a3852-match-reports/o/public%2FDenis.jfif?alt=media&token=166aa27a-be2b-4fbf-8105-4f8756ff8db7"
                  alt="Denis Bidinost"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid #667eea"
                  }}
                />
              </div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#667eea" }}>Denis Bidinost</h3>
              <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555", textAlign: "left" }}>
                Founder | NED | Investor | Board Member | UKBAA Angel of the Year Finalist
              </p>
            </div>

          </div>
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" , }}>Our Mission</h2>
          <p style={{ fontSize: "1.125rem", lineHeight: "1.6", color: "#555" }}>
            At Aim4Next, we believe that artificial intelligence should be accessible, practical, and transformative. 
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
              <p style={{ color: "#555", fontSize: "1.1rem" }}>Cutting-edge AI technology that stays ahead of the curve</p>
            </div>
            <div style={{ padding: "1.5rem", border: "1px solid #ddd", borderRadius: "8px" }}>
              <h3 style={{ marginBottom: "0.5rem" }}>Proven Results</h3>
              <p style={{ color: "#555" , fontSize: "1.1rem" }}>Track record of successful AI implementations across industries</p>
            </div>
            <div style={{ padding: "1.5rem", border: "1px solid #ddd", borderRadius: "8px" }}>
              <h3 style={{ marginBottom: "0.5rem" }}>Expert Support</h3>
              <p style={{ color: "#555" , fontSize: "1.1rem" }}>Dedicated team of AI specialists to guide your journey</p>
            </div>
          </div>
        </div>


      </section>

      <footer style={{ backgroundColor: "#fafafa", textAlign: "center", padding: "1.5rem", fontSize: "0.875rem", color: "#999", marginTop: "4rem" }}>
        <p style={{ margin: "0", marginBottom: "0.5rem" }}>© Aim4Next 2025, 2026</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", alignItems: "center" }}>
          <a href="https://linkedin.com/company/aim4next" target="_blank" rel="noopener noreferrer" style={{ color: "#667eea", textDecoration: "none" }}>LinkedIn</a>
          <span style={{ color: "#ccc" }}>|</span>
          <Link href="/contact" style={{ color: "#667eea", textDecoration: "none" }}>Contact</Link>
        </div>
      </footer>
    </main>
  );
}
