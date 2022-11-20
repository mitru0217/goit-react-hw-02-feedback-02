import './Section.css';

function Section({ title, children }) {
  return (
    <section className="Feedback">
      {title && <h1>Please leave feedback</h1>}
      {children}
    </section>
  );
}
export default Section;
