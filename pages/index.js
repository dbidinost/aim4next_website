// pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#333", fontFamily: "sans-serif" }}>
      <Head>
        <title>Aim4Next | Turning AI into Real Business Change</title>
        <meta name="description" content="Aim4Next helps leaders move from slides and pilots to scaled, measurable AI results through strategy, training, and organizational change." />
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
            <li><Link href="/" style={{ textDecoration: "none", color: "#667eea", fontSize: "1.2rem", fontWeight: "bold" }}>Home</Link></li>
            <li><Link href="/#courses" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>AI Courses</Link></li>
            <li><Link href="/ai-invest" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>AI Invest</Link></li>
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
            Turning AI into <span style={{ color: "#FFD700" }}>real business change.</span>
          </h1>
          <p style={{
            fontSize: "1.25rem",
            marginBottom: "2.5rem",
            lineHeight: "1.6",
            maxWidth: "800px",
            margin: "0 auto 2.5rem auto",
            opacity: "0.95"
          }}>
            Most organisations are experimenting with AI. Very few are changing how they actually work to become more efficient or change their business model.
          </p>
          <p style={{
            fontSize: "1.25rem",
            marginBottom: "2.5rem",
            lineHeight: "1.6",
            maxWidth: "800px",
            margin: "0 auto 2.5rem auto",
            opacity: "0.95"
          }}>
            Aim4Next helps leaders move from slides and pilots to scaled, measurable results.
          </p>
        </div>
      </section>

      {/* We Help You Section */}
      <section style={{ maxWidth: "1100px", margin: "4rem auto", padding: "2rem" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "3rem", color: "#333", textAlign: "center", fontWeight: "bold" }}>We help you</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
          <div style={{
            padding: "2rem",
            backgroundColor: "#fff",
            borderRadius: "12px",
            border: "2px solid #667eea",
            boxShadow: "0 4px 6px rgba(102, 126, 234, 0.1)",
            transition: "transform 0.3s ease",
            textAlign: "center"
          }}>

            <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#667eea", fontWeight: "bold" }}>Focus Smart</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}>
              Focus on the few AI opportunities that really matter
            </p>
          </div>

          <div style={{
            padding: "2rem",
            backgroundColor: "#fff",
            borderRadius: "12px",
            border: "2px solid #764ba2",
            boxShadow: "0 4px 6px rgba(118, 75, 162, 0.1)",
            transition: "transform 0.3s ease",
            textAlign: "center"
          }}>

            <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#764ba2", fontWeight: "bold" }}>Build Secure</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}>
              Build secure, practical AI platforms around data and processes
            </p>
          </div>

          <div style={{
            padding: "2rem",
            backgroundColor: "#fff",
            borderRadius: "12px",
            border: "2px solid #667eea",
            boxShadow: "0 4px 6px rgba(102, 126, 234, 0.1)",
            transition: "transform 0.3s ease",
            textAlign: "center"
          }}>

            <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#667eea", fontWeight: "bold" }}>Transform Teams</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}>
              Change how teams make decisions, invest, and serve customers
            </p>
          </div>

          <div style={{
            padding: "2rem",
            backgroundColor: "#fff",
            borderRadius: "12px",
            border: "2px solid #764ba2",
            boxShadow: "0 4px 6px rgba(118, 75, 162, 0.1)",
            transition: "transform 0.3s ease",
            textAlign: "center"
          }}>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#764ba2", fontWeight: "bold" }}>Move Faster</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}>
              Reduce risk while you move faster than your competitors
            </p>
          </div>
        </div>
      </section>

      {/* Training and Capability Building Section */}
      <section id="courses" style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "4rem 2rem",
        margin: "4rem 0"
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "3rem", marginBottom: "1.5rem", color: "#fff", textAlign: "center", fontWeight: "bold" }}>
            Training and Capability Building
          </h2>
          <p style={{ fontSize: "1.4rem", lineHeight: "1.8", color: "#fff", marginBottom: "3rem", textAlign: "center", maxWidth: "900px", margin: "0 auto 3rem auto" }}>
            We organize business practical workshops and training that align your leaders, build skills and create real momentum for AI.
          </p>

          {/* Upcoming Training Events */}
          <div style={{ marginTop: "3rem" }}>
            <h3 style={{ fontSize: "2.5rem", marginBottom: "2.5rem", color: "#FFD700", textAlign: "center", fontWeight: "bold" }}>
              Upcoming Training Events
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
              {/* Event 1 */}
              <a
                href="https://www.eventbrite.co.uk/e/ai-strategy-and-implementation-for-business-leaders-tickets-1917539505279?aff=ebdsoporgprofile&_gl=1*1pwrka*_up*MQ..*_ga*OTg0MjQ1NTE1LjE3Njc3OTY0Nzk.*_ga_TQVES5V6SH*czE3Njc3OTY0NzgkbzEkZzAkdDE3Njc3OTY0NzgkajYwJGwwJGgw"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  padding: "2.5rem",
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  border: "3px solid #FFD700",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  display: "block"
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1.5rem", textAlign: "center" }}>📅</div>
                <h4 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: "#667eea", fontWeight: "bold", textAlign: "center", lineHeight: "1.4" }}>
                  AI Strategy and Implementation for Business Leaders
                </h4>
                <div style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6", textAlign: "center" }}>
                  <p style={{ marginBottom: "0.5rem", fontWeight: "bold", fontSize: "1.2rem" }}>📍 London</p>
                  <p style={{ margin: "0", fontSize: "1.2rem", fontWeight: "bold", color: "#667eea" }}>5 Feb 2026</p>
                </div>
              </a>

              {/* Event 2 */}
              <a
                href="https://www.henley.ac.uk/study/corporate-development/henley-ai-strategy-and-implementation?utm_source=bitly&utm_medium=short_link&utm_campaign=Course+Laaunch+ASI"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  padding: "2.5rem",
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  border: "3px solid #FFD700",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  display: "block"
                }}
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/hba-project-a3852-match-reports/o/public%2FHBS_Logo.png?alt=media&token=3868d7ee-182d-4888-badb-3395e62b4d95"
                    alt="Henley Business School Logo"
                    style={{ height: "60px", width: "auto" }}
                  />
                </div>
                <h4 style={{ fontSize: "1.4rem", marginBottom: "1.5rem", color: "#764ba2", fontWeight: "bold", textAlign: "center", lineHeight: "1.4" }}>
                  Henley Business School Executive AI Strategy and Implementation
                </h4>
                <div style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6", textAlign: "center" }}>
                  <p style={{ marginBottom: "0.5rem", fontWeight: "bold", fontSize: "1.2rem" }}>📍 Henley Business School</p>
                  <p style={{ margin: "0", fontSize: "1.2rem", fontWeight: "bold", color: "#764ba2" }}>25 March, 3 June 2026</p>
                </div>
              </a>
            </div>
          </div>

          {/* Training Details */}
          <div style={{ marginTop: "4rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
              <ul style={{ fontSize: "1.15rem", lineHeight: "2", color: "#fff", listStyle: "none", paddingLeft: "0" }}>
                <li style={{ marginBottom: "0.8rem" }}>✓ Fast, focused sessions to agree what AI means for your business</li>
                <li style={{ marginBottom: "0.8rem" }}>✓ Shared understanding of AI capabilities in your context</li>
                <li style={{ marginBottom: "0.8rem" }}>✓ Priority use cases across functions and ventures</li>
                <li style={{ marginBottom: "0.8rem" }}>✓ Clear next steps for pilots, platforms and data</li>
              </ul>
              <ul style={{ fontSize: "1.15rem", lineHeight: "2", color: "#fff", listStyle: "none", paddingLeft: "0" }}>
                <li style={{ marginBottom: "0.8rem" }}>✓ Executive briefings on AI, risk and opportunity</li>
                <li style={{ marginBottom: "0.8rem" }}>✓ Hands on work with real tools and your own documents</li>
                <li style={{ marginBottom: "0.8rem" }}>✓ Role based sessions for investors, innovators and operators</li>
                <li style={{ marginBottom: "0.8rem" }}>✓ Playbooks and prompts you can reuse after the course</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              padding: "2rem",
              borderRadius: "12px",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              textAlign: "center"
            }}>
              <p style={{ fontSize: "1.6rem", lineHeight: "1.8", color: "#FFD700", fontWeight: "bold", margin: "0" }}>
                Outcomes: a common language for AI, a short list of high value opportunities, and confident people who know when and how to use AI and when to ask better questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section style={{ maxWidth: "960px", margin: "4rem auto", padding: "2rem", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "#333", textAlign: "center" }}>Our capabilities</h2>
        <p style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "#666", textAlign: "center", marginBottom: "2rem"}}>
          Strategy, investment and venture processes, enterprise platforms, and leadership development, all joined up around one question,
        </p>
        <p style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#667eea", textAlign: "center", fontStyle: "italic"  }}>
          How will AI change the way your business actually works
        </p>
      </section>



      {/* Organisation Change Section */}
      <section style={{ maxWidth: "960px", textAlign: "center", margin: "4rem auto", padding: "2rem", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "#333" }}>Organisation Change</h2>
        <p style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "#666", marginBottom: "2rem", textAlign: "left"}}>
          Support to redesign the way your organisation works when AI is part of every process.
        </p>

        <ul style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#666", listStyle: "disc", paddingLeft: "1.5rem", marginBottom: "2rem" , textAlign: "left"}}>
          <li>Operating models that combine people, data, and AI assistants</li>
          <li>AI enhanced investment and decision processes</li>
          <li>Governance, risk, and responsible use frameworks</li>
          <li>Roadmaps that move from pilots to scaled change</li>
        </ul>

        <p style={{ fontSize: "1.3rem", textAlign: "left", lineHeight: "1.8", color: "#667eea", fontWeight: "bold", fontStyle: "italic" }}>
          Outcomes: a business that can keep adapting as AI evolves, with leadership, culture, and systems that support the change.
        </p>
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
