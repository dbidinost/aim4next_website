import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "white", color: "#333", fontFamily: "sans-serif" }}>
      <Head>
        <title>Home | My Site</title>
        <meta name="description" content="Welcome to our website." />
      </Head>

      <header style={{ backgroundColor: "#f5f5f5", padding: "1rem", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}>
        <nav style={{ maxWidth: "960px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>MySite</div>
          <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/solutions">Solutions</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section style={{ maxWidth: "960px", margin: "2rem auto", padding: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Welcome to MySite</h1>
        <p style={{ fontSize: "1.125rem", color: "#666" }}>
          We offer solutions tailored to your needs.
        </p>
      </section>

      <footer style={{ backgroundColor: "#f5f5f5", textAlign: "center", padding: "1rem", fontSize: "0.875rem", color: "#888" }}>
        © {new Date().getFullYear()} MySite. All rights reserved.
      </footer>
    </main>
  );
}


