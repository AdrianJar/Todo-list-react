import { SectionDiv, Header, Div } from "./styled";

const Section = ({ title, extraHeaderContent, body }) => (
    <SectionDiv>
        <Header>
            <h2>{title}</h2>
            {extraHeaderContent}
        </Header>
        <Div>
            {body}
        </Div>
    </SectionDiv>
);

export default Section;