import "../styles/home.css";
import { useEffect, useState } from "react";

export default function Home() {
  const text = "Full-Stack Engineer | Distributed Systems | AI/ML | LLM Apps";
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
        Designing scalable systems, automation platforms, and intelligent
        products powered by machine learning & LLMs.
      </p>
    </section>
  );
}
