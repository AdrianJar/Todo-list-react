import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

function AuthorPage() {

    return (
        <Container>
            <Header
                title="O autorze"
            />
            <Section
                title="Adrian Jaroszuk"
                body={
                    <>
                        <p>
                            Mam na imię <strong>Adrian</strong> mam 25 lat. Moja motywacja każdego dnia jest mój <strong>synek</strong>. Zanim zostaniem tatą byłem barmanem fajna praca gdy się studiuje, ale po prawie roku przerwy czas na coś nowego, nowe wyzwanie które przy okazji zapewni mi i mojej rodzinie lepsze życie.
                        </p>
                    </>
                }
            />
        </Container>
    )
};

export default AuthorPage;