import HeroStatic from "../../components/HeroStatic/HeroStatic"
import SluzbaProgres from "../../components/SluzbaProgres/SluzbaProgres"
import SluzbaProgresItem from "../../components/SluzbaProgresItem/SluzbaProgresItem"
import Image from "next/image"

const ppcVyhledavace = () => {
    return (
        <>
            <section>
                <HeroStatic 
                    title="Weby &amp; e-shopy na klíč"
                    image="/img/weby-hero.jpg"
                />
            </section>
            <section>
                <div className="container narrow">
                    <p>Miranda je solidní holka pro každou srandu, ale ze všeho nejvíc dá především a v první řadě na výkon, co generuje solidní keše! A proto tuní Google, 
                        Seznam i ten zatracovanej Bing na plný obrátky celý dny a dlouhý noci. Z relevantních a padnoucích klíčovejch slov, důvtipem prošpikovanejch reklamních 
                        textů a přesně zacílenýho, hladovýho publika dokáže uvařit lektvar růstu a načipovanýho výkonu. V tu chvíli se peníze do tvý bezedný kasy jenom hrnou, 
                        obraty se roztáčej na plný kola a péenóčko se strachy krčí pěkně v koutě.</p>
                </div>
            </section>
            <section>
                <div className="container">
                    <SluzbaProgres
                        link="#"
                        linkText="Poptat audit"
                    >
                        <SluzbaProgresItem
                            image="/"
                            icon="/img/icon/spoluprace.svg"
                            title="Marketingový audit"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                        <SluzbaProgresItem
                            image="/"
                            icon="/img/icon/setkani.svg"
                            title="První setkání"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                        <SluzbaProgresItem
                            image="/"
                            icon="/img/icon/PPC2.svg"
                            title="První setkání"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        />
                    </SluzbaProgres>
                </div>
            </section>
        </>
    )
}

export default ppcVyhledavace