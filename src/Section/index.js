import { SectionDiv, Header } from "./styled";

const Section = ({ title, extraHeaderContent, body }) => (
    <SectionDiv>
        <Header
            display
        >
            <h2>{title}</h2>
            {extraHeaderContent}
        </Header>
        <div>
            {body}
        </div>
    </SectionDiv>
);

export default Section;