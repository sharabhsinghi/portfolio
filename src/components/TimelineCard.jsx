export default function TimelineCard({ title, date, bullets }) {
  return (
    <div className="timeline-card slide-up">
      <h3>{title}</h3>
      <span className="date">{date}</span>
      <ul>
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
