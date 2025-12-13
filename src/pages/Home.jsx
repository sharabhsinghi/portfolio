import "../styles/home.css";
import { useEffect, useState } from "react";

export default function Home() {
  const text = "Full-Stack Engineer | Distributed Systems | Python | AWS | AI/ML ";
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home fade-in">
      <h1 className="glitch" data-text="Sharabh Partap Singhi">
        Sharabh Partap Singhi
      </h1>

      <p className="typing">{display}</p>

      <p className="intro">
        Software Engineer with 10 years of experience in system design, full-stack development, distributed data systems, 
        and applied AI/ML. Specialized in building cloud-native platforms, automation frameworks, and 
        real-time analytics in financial, technology, and consulting environments. 
        Experienced in architecture design, integrating LLMs and predictive/recommendation pipelines, 
        leading engineering teams, and delivering production-grade solutions with scalability, reliability, 
        and measurable business impact.
      </p>
    </section>
  );
}
