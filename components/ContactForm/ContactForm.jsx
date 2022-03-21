import axios from "axios";
import styles from './ContactForm.module.scss'
import { useRef } from "react";

const ContactForm = () => {
    let form = {
        jmeno: useRef(null),
        prijmeni: useRef(null),
        email: useRef(null),
        tel: useRef(null),
        sluzby: {
            premium: useRef(null),
            grafika: useRef(null),
            prevod: useRef(null),
            skoleni: useRef(null),
            programovani: useRef(null),
            copy: useRef(null),
            ppc: useRef(null),
            foto: useRef(null),
            foto360: useRef(null),
        },
        zprava: useRef(null)
    }
    let token = 'Token!'

    const sendForm = async (e) => {
        e.preventDefault()

        let data = {
            jmeno: form.jmeno.current.value,
            prijmeni: form.prijmeni.current.value,
            email: form.email.current.value,
            tel: form.tel.current.value,
            sluzby: {
                premium: form.sluzby.premium.current.checked,
                grafika: form.sluzby.grafika.current.checked,
                prevod: form.sluzby.prevod.current.checked,
                skoleni: form.sluzby.skoleni.current.checked,
                programovani: form.sluzby.programovani.current.checked,
                copy: form.sluzby.copy.current.checked,
                ppc: form.sluzby.ppc.current.checked,
                foto: form.sluzby.foto.current.checked,
                foto360: form.sluzby.foto360.current.checked,
            },
            zprava: form.zprava.current.value
        }

        try {
            const resolve = await axios.post('http://164.92.206.112:1337/api/ezforms/submit', {
                token,
                formData: JSON.stringify(data)
            })
            console.log(resolve);
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div className={`container ${styles.formWrapper}`}>
            <div className="column">
                <h2>Mám zájem <strong>o spolupráci</strong></h2>
                <p>Zanechte nám na sebe kontakt, spojíme se s vámi.</p>
                <a className={styles.projectPhone} href="tel:+420732264251">+420 732 264 251</a>
                <p>Pondělí - Pátek: <strong>9:00 - 17:00</strong></p>
                <a href="mailto:info@mirandamedia.cz" className={styles.projectMail}>info@mirandamedia.cz</a>
            </div>
            <div className="column">
                <form onSubmit={sendForm}>
                    <div className={styles.formRow}>
                        <input type="text" name="jmeno" id="jmeno" placeholder="Jméno" ref={form.jmeno}/>
                        <input type="text" name="prijmeni" id="prijmeni" placeholder="Příjmení" ref={form.prijmeni}/>
                    </div>
                    <div className={styles.formRow}>
                        <input type="email" name="email" id="email" placeholder="E-mail" ref={form.email}/>
                        <input type="tel" name="tel" id="tel" placeholder="Telefon" ref={form.tel}/>
                    </div>
                    <div className={styles.checkboxes}>
                        <span className={styles.group}>
                            <input type="checkbox" name="premium" id="premium" ref={form.sluzby.premium}/>
                            <label htmlFor="premium">Shoptet PREMIUM</label>
                        </span>
                        <span className={styles.group}>
                            <input type="checkbox" name="grafika" id="grafika" ref={form.sluzby.grafika}/>
                            <label htmlFor="grafika">Grafika na míru</label>
                        </span>
                        <span className={styles.group}>
                            <input type="checkbox" name="prevod" id="prevod" ref={form.sluzby.prevod}/>
                            <label htmlFor="prevod">Převod e-shopu od konkurence</label>
                        </span>
                        <span className={styles.group}>
                            <input type="checkbox" name="skoleni" id="skoleni" ref={form.sluzby.skoleni}/>
                            <label htmlFor="skoleni">Školení a konzultace</label>
                        </span>
                        <span className={styles.group}>
                            <input type="checkbox" name="programovani" id="programovani" ref={form.sluzby.programovani}/>
                            <label htmlFor="programovani">Programování a kódování</label>
                        </span>
                        <span className={styles.group}>
                            <input type="checkbox" name="copy" id="copy" ref={form.sluzby.copy}/>
                            <label htmlFor="copy">Copywriting</label>
                        </span>
                        <span className={styles.group}>
                            <input type="checkbox" name="ppc" id="ppc" ref={form.sluzby.ppc}/>
                            <label htmlFor="ppc">PPC a zbožové vyhledávače</label>
                        </span>
                        <span className={styles.group}>
                            <input type="checkbox" name="foto" id="foto" ref={form.sluzby.foto}/>
                            <label htmlFor="foto">2D produktové fotky</label>
                        </span>
                        <span className={styles.group}>
                            <input type="checkbox" name="360" id="360" ref={form.sluzby.foto360}/>
                            <label htmlFor="360">360° produktové fotky</label>
                        </span>
                    </div>
                    <textarea name="zprava" id="zprava" rows="8" placeholder="Váš vzkaz" ref={form.zprava}></textarea>
                    <div className={styles.formRow}>
                        <input type="checkbox" name="consent" id="consent" readOnly/>
                        <label htmlFor="consent">Odesláním souhlasíte s Podmínkami o zpracovaní osobních údajů</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Odeslat poptávku</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm