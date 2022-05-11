import axios from "axios";
import styles from './CareerForm.module.scss'
import { useRef } from "react";

const CareerForm = () => {
    let form = {
        jmeno: useRef(null),
        prijmeni: useRef(null),
        email: useRef(null),
        tel: useRef(null),
        zprava: useRef(null),
        linkedin: useRef(null)
    }
    let token = 'Token!'

    const sendForm = async (e) => {
        e.preventDefault()

        let data = {
            jmeno: form.jmeno.current.value,
            prijmeni: form.prijmeni.current.value,
            email: form.email.current.value,
            tel: form.tel.current.value,
            zprava: form.zprava.current.value,
            linkedin: form.linkedin.current.value
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
                    <h2>Jdeš do toho?</h2>
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
                        <div>
                            <button type="" className="btn btn-tertiary">
                                <span data-hover="Nahrát soubor">
                                    Nahrát soubor
                                </span>
                            </button>
                            <p className={styles.small}>Nahrajte prosím soubor typu PDF, DOC(X) nebo ODT</p>
                        </div>
                        <div className={styles.formRow}>
                            <input type="checkbox" name="consent" id="consent" />
                            <label htmlFor="consent">Odesláním formuláře souhlasím se zpracovaním osobních údajů</label>
                        </div>
                        <button type="submit" className={`btn btn-primary ${styles.btnArrow}`} >
                            <span data-hover="Odeslat odpoveď">
                                Odeslat odpověď
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CareerForm