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
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎯</div>
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
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔒</div>
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
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚀</div>
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
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>⚡</div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "#764ba2", fontWeight: "bold" }}>Move Faster</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}>
              Reduce risk while you move faster than your competitors
            </p>
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section style={{ maxWidth: "960px", margin: "4rem auto", padding: "2rem", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "#333", textAlign: "center" }}>Our capabilities</h2>
        <p style={{ fontSize: "1.125rem", lineHeight: "1.8", color: "#666", textAlign: "center", marginBottom: "2rem", fontStyle: "italic" }}>
          Strategy, investment and venture processes, enterprise platforms, and leadership development, all joined up around one question,
        </p>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#667eea", textAlign: "center" }}>
          How will AI change the way your business actually works
        </p>
      </section>

      {/* Training and Capability Building Section */}
      <section style={{ maxWidth: "960px", margin: "4rem auto", padding: "2rem" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "#333" }}>Training and capability building</h2>
        <p style={{ fontSize: "1.125rem", lineHeight: "1.8", color: "#666", marginBottom: "2rem" }}>
          Practical workshops and training that align your leaders, build skills and create real momentum for AI.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
          <ul style={{ fontSize: "1rem", lineHeight: "1.8", color: "#666", listStyle: "disc", paddingLeft: "1.5rem" }}>
            <li>Fast, focused sessions to agree what AI means for your business</li>
            <li>Shared understanding of AI capabilities in your context</li>
            <li>Priority use cases across functions and ventures</li>
            <li>Clear next steps for pilots, platforms and data</li>
          </ul>
          <ul style={{ fontSize: "1rem", lineHeight: "1.8", color: "#666", listStyle: "disc", paddingLeft: "1.5rem" }}>
            <li>Executive briefings on AI, risk and opportunity</li>
            <li>Hands on work with real tools and your own documents</li>
            <li>Role based sessions for investors, innovators and operators</li>
            <li>Playbooks and prompts you can reuse after the course</li>
          </ul>
        </div>

        <p style={{ fontSize: "1.125rem", lineHeight: "1.8", color: "#667eea", fontWeight: "bold", fontStyle: "italic" }}>
          Outcomes: a common language for AI, a short list of high value opportunities, and confident people who know when and how to use AI and when to ask better questions.
        </p>

        <p style={{ fontSize: "1rem", color: "#999", marginTop: "1.5rem", fontStyle: "italic" }}>
        
        </p>
      </section>

      {/* Organisation Change Section */}
      <section style={{ maxWidth: "960px", margin: "4rem auto", padding: "2rem", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "#333" }}>Organisation Change</h2>
        <p style={{ fontSize: "1.125rem", lineHeight: "1.8", color: "#666", marginBottom: "2rem" }}>
          Support to redesign the way your organisation works when AI is part of every process.
        </p>

        <ul style={{ fontSize: "1rem", lineHeight: "1.8", color: "#666", listStyle: "disc", paddingLeft: "1.5rem", marginBottom: "2rem" }}>
          <li>Operating models that combine people, data, and AI assistants</li>
          <li>AI enhanced investment and decision processes</li>
          <li>Governance, risk, and responsible use frameworks</li>
          <li>Roadmaps that move from pilots to scaled change</li>
        </ul>

        <p style={{ fontSize: "1.125rem", lineHeight: "1.8", color: "#667eea", fontWeight: "bold", fontStyle: "italic" }}>
          Outcomes: a business that can keep adapting as AI evolves, with leadership, culture, and systems that support the change.
        </p>
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
