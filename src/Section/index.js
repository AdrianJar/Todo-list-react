import "./style.css";

const Section = ({title, extraHeaderContent, body}) => (
    <section className="section">
        <header className="section__header section__header--display">
            <h2>{title}</h2>
            {extraHeaderContent}
        </header>
        <div>
            {body}
        </div>
    </section>
);

export default Section;