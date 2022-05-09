import axios from "axios";
import styles from './CareerForm.module.scss'
import { useRef } from "react";

const CareerForm = () => {
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
        <>
            <div className={`${styles.formWrapper}`}>
                <div className="column">
                    <h2>Jste připraveni seznámit se s <span className="green">Mirandou</span>?</h2>
                    <p>Tenhle formulář odešle vaši zprávu rychleji, než řeknete švec. Tak to tam naťukejte, ať se můžeme konečně poznat.</p>
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
                        <textarea name="zprava" id="zprava" rows="8" placeholder="Co máte na srdci?" ref={form.zprava}></textarea>
                        <div className={styles.formRow}>
                        </div>
                        <div className={styles.formRow}>
                            <input type="text" name="linkedin" id="linkedin" placeholder="Odkaz na LinkedIn profil" ref={form.linkedin} />
                        </div>
                        <div className={styles.formRow}>
                            <input type="checkbox" name="consent" id="consent" readOnly/>
                            <label htmlFor="consent">Odesláním souhlasíte s Podmínkami zpracovaní osobních údajů</label>
                        </div>
                        <div>
                            <button type="" className="btn btn-tertiary">Nahrát soubor</button>
                            <p className={styles.small}>Nahrajte prosím soubor typu PDF, DOC(X) nebo ODT</p>
                        </div>
                        <button type="submit" className="btn btn-primary">Odeslat odpověď</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CareerForm