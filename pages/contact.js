
// pages/contact.js
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

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
              src="https://firebasestorage.googleapis.com/v0/b/hba-project-a3852-match-reports/o/public%2Faim4next.png?alt=media&token=308d547f-6b29-4eb3-98c0-595d8dbad816" 
              alt="Aim4Next Logo" 
              style={{ height: "50px", width: "auto" }}
            />
          </div>
          <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
            <li><Link href="/" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>Home</Link></li>
            <li><Link href="/solutions" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>Our Solution</Link></li>
            <li><Link href="/about" style={{ textDecoration: "none", color: "#000", fontSize: "1.2rem" }}>About</Link></li>
            <li><Link href="/contact" style={{ textDecoration: "none", color: "#007acc", fontSize: "1.2rem", fontWeight: "bold" }}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section style={{ maxWidth: "960px", margin: "3rem auto", padding: "2rem" }}>
        <h1 style={{ fontSize: "2.75rem", marginBottom: "2rem", textAlign: "center" }}>Get in Touch</h1>
        <p style={{ fontSize: "1.125rem", color: "#555", textAlign: "center", marginBottom: "3rem" }}>
          Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
        </p>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
          <div>
            <h2 style={{ marginBottom: "1.5rem" }}>Let's Start the Conversation</h2>
            <p style={{ marginBottom: "2rem", lineHeight: "1.6", color: "#555" }}>
              Whether you're looking to implement your first AI solution or scale existing capabilities, 
              our team of experts is here to guide you every step of the way.
            </p>
            
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>📧 Email</h3>
              <p style={{ color: "#555" }}>contact@placeholderai.com</p>
            </div>
            
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>📞 Phone</h3>
              <p style={{ color: "#555" }}>+1 (555) 123-AI01</p>
            </div>
            
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>⏰ Response Time</h3>
              <p style={{ color: "#555" }}>We typically respond within 24 hours</p>
            </div>

            <div style={{ padding: "1.5rem", backgroundColor: "#f0f8ff", borderRadius: "8px", border: "1px solid #ddd" }}>
              <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>🚀 Free Consultation</h3>
              <p style={{ color: "#555", marginBottom: "0" }}>
                Schedule a free 30-minute consultation to discuss your AI needs and explore potential solutions.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} style={{ 
              border: "1px solid #ddd", 
              borderRadius: "8px", 
              padding: "2rem",
              backgroundColor: "#fafafa"
            }}>
              <h3 style={{ marginBottom: "1.5rem" }}>Send us a Message</h3>
              
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "1rem",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "1rem",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="company" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "1rem",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us about your AI needs and goals..."
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "1rem",
                    resize: "vertical",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "#007acc",
                  color: "white",
                  padding: "0.75rem 2rem",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  width: "100%",
                  fontWeight: "bold"
                }}
              >
                Send Message
              </button>
            </form>
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
