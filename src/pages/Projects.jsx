import "../styles/projects.css";

export default function Projects() {
  return (
    <section className="projects fade-in">
      <h2>AI & Engineering Projects</h2>

      <div className="project-card slide-up">
        <h3>LLM-Powered Accessibility Tool — Eye For Blind</h3>
        <p>
          Multimodal caption generator using CNN + Transformer with attention.
          Generates contextual descriptions of images for the visually impaired.
        </p>
      </div>

      <div className="project-card slide-up">
        <h3>ML Forecasting & Recommendation Engine</h3>
        <p>
          Spark-based data processing with deployed ML microservices for demand
          forecasting and personalized product recommendations.
        </p>
      </div>

      <div className="project-card slide-up">
        <h3>Digit Classification + GAN Synthesizer</h3>
        <p>
          CNN classifier + generative model trained on MNIST dataset producing
          synthetic samples to improve model robustness.
        </p>
      </div>
    </section>
  );
}
