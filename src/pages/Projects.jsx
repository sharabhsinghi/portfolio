import "../styles/projects.css";

export default function Projects() {
  return (
    <section className="projects fade-in">
      <h2>Featured Projects</h2>

      <div className="project-card slide-up">
        <h3>Eye for Blind — Vision Model</h3>
        <p>
          CNN + Transformer model to generate contextual image descriptions,
          enabling accessibility for visually-impaired users.
        </p>
      </div>

      <div className="project-card slide-up">
        <h3>Prediction & Recommendation Engine</h3>
        <p>
          End-to-end pipeline using Spark + ML models for forecasting &
          recommendations deployed using microservices.
        </p>
      </div>

      <div className="project-card slide-up">
        <h3>Digit Classification + GAN</h3>
        <p>
          Deep learning system for digit detection and synthetic digit generation
          (MNIST) using CNNs and generative models.
        </p>
      </div>
    </section>
  );
}
