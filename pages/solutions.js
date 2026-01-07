
// pages/solutions.js
import Head from "next/head";
import Link from "next/link";

export default function Solutions() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#333", fontFamily: "sans-serif" }}>
      <Head>
        <title>Our Solution | Aim4Next</title>
        <meta name="description" content="Discover how Aim4Next's AI platform transforms venture investing with smart screening and decision-making tools." />
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
            <li><Link href="/ai-invest" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>AI Invest</Link></li>
            <li><Link href="/solutions" style={{ textDecoration: "none", color: "#667eea", fontSize: "1.2rem", fontWeight: "bold" }}>Our Solution</Link></li>
            <li><Link href="/about" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>About</Link></li>
            <li><Link href="/contact" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* The Problem Section */}
      <section style={{ 
        backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white", 
        padding: "4rem 2rem" 
      }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ 
            fontSize: "3.5rem", 
            fontWeight: "bold", 
            marginBottom: "1.5rem",
            lineHeight: "1.2"
          }}>
            The Problem
          </h1>
          <p style={{ 
            fontSize: "1.5rem", 
            fontStyle: "italic", 
            color: "#FFD700", 
            marginBottom: "3rem",
            lineHeight: "1.4",
            maxWidth: "800px",
            margin: "0 auto 3rem auto"
          }}>
            "Investors are missing out—not for lack of capital, but because the signal gets lost in the noise."
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem" }}>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>✔ Investors are overwhelmed by irrelevant pitches</p>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>✔ Poor-quality submissions waste valuable time</p>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>✔ Signal gets lost in the noise</p>
            </div>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>✔ Entrepreneurs lack pitch support</p>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>✔ Ideas aren't presented optimally</p>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>✔ Founders struggle with investor readiness</p>
            </div>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>✔ Valuable opportunities are missed</p>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>✔ Investment decisions are delayed</p>
              <p style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>✔ Market timing is lost</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section style={{ maxWidth: "960px", margin: "4rem auto", padding: "2rem" }}>
        <h1 style={{ fontSize: "2.75rem", marginBottom: "3rem", textAlign: "center", color: "#333" }}>Our Solution</h1>
        
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#667eea" }}>AI Investment Analyst Platform</h2>
          <p style={{ fontSize: "1.5rem", color: "#555", fontStyle: "italic", lineHeight: "1.4" }}>
            An integrated suite of automation and AI applications for the investment industry.
          </p>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
          <div style={{ padding: "2rem", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#f9f9f9", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎆</div>
            <Link href="/#human-ai-matching" style={{ textDecoration: "none" }}>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#667eea", cursor: "pointer", transition: "color 0.3s ease" }}>Human and AI Matching</h3>
            </Link>
            <p style={{ color: "#000", lineHeight: "2.0" }}>
              An integrated platform built on Airtable that brings AI and AI Matching to the selection process.
            </p>
          </div>
          <div style={{ padding: "2rem", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#f9f9f9", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🔍</div>
            <Link href="/#scouting-app" style={{ textDecoration: "none" }}>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#667eea", cursor: "pointer", transition: "color 0.3s ease" }}>AI Scouting Application</h3>
            </Link>
            <p style={{ color: "#000", lineHeight: "2.0" }}>
              Finding and scoring investment opportunities based on personalized criteria.
            </p>
          </div>
          <div style={{ padding: "2rem", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#f9f9f9", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>⚙️</div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#667eea" }}>Pitch Refinement Agent</h3>
            <p style={{ color: "#000", lineHeight: "2.0" }}>
              AI Agent that works with entrepreneurs to refine their company information and improve pitch quality.
            </p>
          </div>
          <div style={{ padding: "2rem", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#f9f9f9", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>👓</div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#667eea" }}>Portfolio Review Tool</h3>
            <p style={{ color: "#000", lineHeight: "2.0" }}>
              AI ongoing investor portfolio review with latest news updates.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section style={{ 
        backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white", 
        padding: "4rem 2rem" 
      }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>Value Proposition</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10rem" , marginLeft: "7rem"}}>
            <div style={{ textAlign: "left" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "#FFD700" }}>For Investors</h3>
              <div style={{ textAlign: "left" }}>
                <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>✔ Saves time by pre-screening decks</p>
                <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>✔ Improves selection accuracy</p>
                <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>✔ Reduces due diligence costs</p>
              </div>
            </div>
            <div style={{ textAlign: "left" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "#FFD700" }}>For Entrepreneurs</h3>
              <div style={{ textAlign: "left" }}>
                <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>✔ Get personalised AI feedback</p>
                <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>✔ Boost your pitch quality</p>
                <p style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>✔ Increase your chances of funding</p>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <h3 style={{ fontSize: "2rem", color: "#FFD700" }}>Efficiency. Accuracy. Scale.</h3>
          </div>
        </div>
      </section>

      {/* Demo Highlights Section */}
      <section style={{ maxWidth: "960px", margin: "1rem auto", padding: "2rem" }}>
        
        {/* User Quotes */}
        <div style={{ backgroundColor: "#f8f9fa", padding: "3rem", borderRadius: "12px", marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "2rem", color: "#333" }}>User Quotes</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            <div style={{ padding: "1.5rem", backgroundColor: "#fff", borderRadius: "8px", borderLeft: "4px solid #667eea" }}>
              <p style={{ fontStyle: "italic", marginBottom: "1rem", color: "#000", fontSize: "1.3rem" }}>
                "This would've taken me hours. It took AI 20 minutes."
              </p>
              <p style={{ fontWeight: "bold", color: "#667eea", fontSize: "1.1rem" }}>— Paul</p>
            </div>
            <div style={{ padding: "1.5rem", backgroundColor: "#fff", borderRadius: "8px", borderLeft: "4px solid #667eea" }}>
              <p style={{ fontStyle: "italic", marginBottom: "1rem", color: "#000", fontSize: "1.3rem" }}>
                "It raised the exact questions I ask founders."
              </p>
              <p style={{ fontWeight: "bold", color: "#667eea", fontSize: "1.1rem" }}>— Jurek</p>
            </div>
            <div style={{ padding: "1.5rem", backgroundColor: "#fff", borderRadius: "8px", borderLeft: "4px solid #667eea" }}>
              <p style={{ fontStyle: "italic", marginBottom: "1rem", color: "#000", fontSize: "1.3rem" }}>
                "Clear, fast, and strategic. Impressive."
              </p>
              <p style={{ fontWeight: "bold", color: "#667eea", fontSize: "1.1rem" }}>— Investment Chair</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Support Section */}
      <section style={{ backgroundColor: "#f8f9fa", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem", color: "#333" }}>Who We Support</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
            <div style={{ textAlign: "center", padding: "2rem", backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #e0e0e0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}></div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#667eea" }}>For Investors & Networks</h3>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Angel groups, VCs, Corporate funds
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "2rem", backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #e0e0e0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}></div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#667eea" }}>For Founders & Accelerators</h3>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Startup hubs, incubators, growth-stage founders
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "2rem", backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #e0e0e0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}></div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#667eea" }}>For Advisors & Partners</h3>
              <p style={{ color: "#555", lineHeight: "1.6" }}>
                Law firms, accountancy networks, fundraising consultants
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/contact" style={{ 
              backgroundColor: "#667eea", 
              color: "white", 
              padding: "1rem 2rem", 
              borderRadius: "8px", 
              textDecoration: "none",
              fontSize: "1.1rem",
              fontWeight: "bold",
              display: "inline-block"
            }}>
              Get Started Today
            </Link>
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
