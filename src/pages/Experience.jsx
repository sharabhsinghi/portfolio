import "../styles/experience.css";
import TimelineCard from "../components/TimelineCard.jsx";

export default function Experience() {
  return (
    <section className="experience fade-in">
      <h2>Professional Experience</h2>

      <TimelineCard
        title="Senior Programmer Analyst — CitiBank"
        date="Aug 2023 – Present | Toronto, Canada"
        bullets={[
          "Built distributed reporting platform (Angular + Flask)",
          "Real-time streaming using Kafka + Airflow automation",
          "60% reduction in reporting runtime via workflow optimization",
          "Designed high-volume SQL datasets for analytics",
          "CI/CD deployments using uDeploy & Lightspeed",
        ]}
      />

      <TimelineCard
        title="Lead Software Engineer — ZS Associates"
        date="Feb 2020 – May 2023"
        bullets={[
          "Led Agile team of 8 engineers developing cloud apps",
          "Python APIs + AWS Lambda + EC2 distributed deployment",
          "Spark + Airflow orchestration for automated ML pipelines",
          "Drove technical design, mentoring & code quality",
        ]}
      />

      <TimelineCard
        title="Senior Data Science Engineer — Gramener"
        date="Jun 2018 – Jan 2020"
        bullets={[
          "Built ML-enabled dashboards & REST APIs",
          "D3.js custom visuals and analytics delivery",
          "Prediction & recommendation pipelines",
        ]}
      />

      <TimelineCard
        title="Senior Systems Engineer — Infosys"
        date="Nov 2015 – Jun 2018"
        bullets={[
          "Python microservices in secure Linux environments",
          "Docker execution platform for distributed workloads",
          "Authz/Authn backend (Java), reverse-proxy with Nginx",
        ]}
      />
    </section>
  );
}
