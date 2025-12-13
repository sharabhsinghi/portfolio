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
          "Led end-to-end system design and full-stack development of a financial reporting platform using Angular (frontend) and Python Flask (backend).",
          "Designed scalable data processing workflows using Apache Airflow DAGs, automating manual report generation and reducing reporting turnaround time by over 60%.",
          "Integrated real-time data streaming with Apache Kafka to enable low-latency propagation of financial data from backend pipelines to web dashboards.",
          "Designed and optimized complex SQL queries across large relational datasets to support high-volume analytics, reconciliation, and regulatory reporting.",
          "Built fault-tolerant pipelines with validation, reconciliation, and smoke testing layers to proactively detect data quality and integrity issues.",
          "Developed interactive data visualizations and executive dashboards using Tableau to support business decision-making.",
          "Collaborated closely with data analysts, product owners, and business stakeholders to translate financial requirements into scalable technical solutions.",
          "Managed CI/CD pipelines using uDeploy and Lightspeed, enabling automated testing, deployment, and release workflows across environments.",
          "Contributed to platform reliability, observability, and maintainability through structured logging, monitoring, and deployment automation."
        ]}
      />

      <TimelineCard
        title="Lead Software Engineer — ZS Associates"
        date="Feb 2020 – May 2023"
        bullets={[
          "Led and mentored a cross-functional Agile team of 8 engineers, overseeing architecture, sprint planning, delivery timelines, and code quality.",
          "Designed and developed scalable RESTful APIs using Python Flask and serverless AWS Lambda architectures.",
          "Built a multi-page, production-grade web application using Angular with modular, reusable UI components.",
          "Designed distributed backend systems deployed across AWS EC2 and AWS Lambda using CodeDeploy.",
          "Implemented CI/CD pipelines running in Docker containers on TeamCity agents, supporting automated builds, static analysis, testing, and deployments.",
          "Designed and executed orchestration workflows using Apache Airflow to run Spark jobs on AWS EMR for large-scale data processing.",
          "Contributed to system design discussions for new product features, scalability improvements, and performance optimization.",
          "Worked closely with product managers to prioritize requirements and align engineering execution with business objectives.",
          "Handled production support, root cause analysis, and client escalations for critical system issues.",
          "Conducted technical interviews and played a key role in hiring and onboarding software engineers.",
          "Established coding standards, performed design and code reviews, and promoted engineering best practices across the team."
        ]}
      />

      <TimelineCard
        title="Senior Data Engineer — Gramener Technologies"
        date="Jun 2018 – Jan 2020"
        bullets={[
          "Designed and built end-to-end data pipelines extracting and transforming data from AWS Redshift to support analytics and business intelligence dashboards.",
          "Developed backend REST APIs in Python using Flask to serve analytical data and machine learning outputs.",
          "Built web application interfaces using Gramex (Node.js and React-based proprietary framework).",
          "Designed and implemented interactive data visualizations using D3.js for both web and mobile platforms.",
          "Worked on predictive analytics and recommendation-oriented data workflows supporting business use cases.",
          "Implemented unit and integration tests to ensure system reliability, correctness, and maintainability.",
          "Authored detailed technical documentation and conducted internal training sessions on system architecture and data pipelines."
        ]}
      />

      <TimelineCard
        title="Senior Systems Engineer — Infosys"
        date="Nov 2015 – Jun 2018"
        bullets={[
          "Developed Python-based REST APIs and microservices running in Linux environments with a focus on performance and scalability.",
          "Designed and implemented containerized execution environments using Docker and virtual machines to support distributed job execution.",
          "Integrated authorization and authentication mechanisms with a Java-based backend for secure job runner access.",
          "Designed and implemented PostgreSQL database schemas to support transactional and operational workloads.",
          "Built frontend components using Django to deliver a seamless internal user experience.",
          "Implemented and configured Nginx as a reverse proxy to improve system performance, routing, and security.",
          "Set up and maintained a GitLab-based source control system at the account level to support multi-team collaboration.",
          "Designed and configured CI/CD pipelines using TeamCity to automate builds, testing, and deployments."
        ]}
      />
    </section>
  );
}
