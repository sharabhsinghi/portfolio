import "../styles/experience.css";
import TimelineCard from "../components/TimelineCard.jsx";

export default function Experience() {
  return (
    <section className="experience fade-in">
      <h2>Experience</h2>

      <TimelineCard
        title="Senior Programmer Analyst — CitiBank"
        date="Aug 2023 – Present"
        bullets={[
          "Designed full-stack reporting platform using Angular + Flask",
          "Built real-time streaming workflows with Kafka + Airflow",
          "Architected data pipelines for high-volume financial datasets",
          "Automated CI/CD deployments across containerized infra",
        ]}
      />

      <TimelineCard
        title="Lead Software Engineer — ZS Associates"
        date="Feb 2020 – May 2023"
        bullets={[
          "Led Agile team of 8 engineers for enterprise web apps",
          "Designed distributed APIs & automation on AWS",
          "Built orchestrated ML pipeline jobs on EMR using Airflow",
          "Owned code quality, reviews, and tech decision-making",
        ]}
      />

      <TimelineCard
        title="Senior Data Science Engineer — Gramener"
        date="Jun 2018 – Jan 2020"
        bullets={[
          "Engineered ML-enabled dashboards and REST APIs",
          "Built D3.js visual analytics for enterprise clients",
          "Trained models for prediction and recommendation",
        ]}
      />

      <TimelineCard
        title="Senior Systems Engineer — Infosys"
        date="Nov 2015 – Jun 2018"
        bullets={[
          "Developed microservices & job automation platform",
          "Implemented auth & secure reverse-proxy architecture",
          "Deployed scalable workloads via Docker + Linux infra",
        ]}
      />
    </section>
  );
}
