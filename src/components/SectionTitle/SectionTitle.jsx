import "./sectionTitle.css";

function SectionTitle({ subtitle, title}) {
  return (
    <div className="section-title">
      <h5>{subtitle}</h5>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionTitle;
