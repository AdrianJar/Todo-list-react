import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header
            title="Adrian Jaroszuk"
        />
        <Section
            title="sialalla"
            body={
                <>
                    <p>
                        Mam na imię Adrian mam 25 lat. W tym roku urodził się mój synek,
                        <strong> Leo</strong> moja motywacja każdego dnia. Przed zostaniem tatą
                        byłem barmanem fajna praca gdy się studiuje, ale po prawie roku przerwy
                        czas na coś nowego, nowe wyzwanie które przy okazji zapewni mi i mojej
                        rodzinie lepsze życie.
                    </p>
                </>
            }
        />
    </Container>
);