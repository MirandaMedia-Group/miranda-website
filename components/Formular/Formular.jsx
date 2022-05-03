import axios from "axios"
import { useRef } from "react"
import styles from './Formular.module.scss'


const Formular = () => {
    let form = {
        typDotazu: {
            nezarazeno: useRef(null),
            eshop: useRef(null),
            web: useRef(null),
            design: useRef(null),
            marketing: useRef(null),
        },
        jmeno: useRef(null),
        email: useRef(null), 
        phone: useRef(null),
        zprava: useRef(null)

    }

    let token = 'Token!'

    const sendForm = async (e) => {
        e.preventDefault();

        let data = {
            typDotazu: {
                nezarazeno: form.typDotazu.nezarazeno.current.checked,
                eshop: form.typDotazu.eshop.current.checked,
                web: form.typDotazu.web.current.checked,
                design: form.typDotazu.design.current.checked,
                marketing: form.typDotazu.marketing.current.checked
            },

            jmeno: form.jmeno.current.value,
            email: form.email.current.value,
            phone: form.phone.current.value,
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
        <div className={styles.form}>
            <h3 className={styles.h3}>Ozvi se Mirandě</h3>
            <p>Odpovíme rychleji, než stačíš říct švec</p>
            <p><strong>Typ dotazu</strong></p>
            <form onSubmit={sendForm}>
                <div className={styles.radioButtons}>
                    <span className={styles.group}>
                        <input type="radio" name="typ" id="nezarazeno" ref={form.typDotazu.nezarazeno} />
                        <label htmlFor="nezarazeno">Nezařazeno</label>
                    </span>
                    <span className={styles.group}>
                        <input type="radio" name="typ" id="eshop" ref={form.typDotazu.eshop} />
                        <label htmlFor="eshop">E-shop</label>
                    </span>
                    <span className={styles.group}>
                        <input type="radio" name="typ" id="web" ref={form.typDotazu.web} />
                        <label htmlFor="web">Web</label>
                    </span>
                    <span className={styles.group}>
                        <input type="radio" name="typ" id="design" ref={form.typDotazu.design} />
                        <label htmlFor="analyza">Design a grafika</label>
                    </span>
                    <span className={styles.group}>
                        <input type="radio" name="typ" id="marketing" ref={form.typDotazu.marketing} />
                        <label htmlFor="marketing">Marketing</label>
                    </span>
                </div>
                <div className={styles.formRow}>
                    <input type="text" name="jmenoaprijmeni" id="jmenoaprijmeni" placeholder="Vaše jméno a příjmení" ref={form.jmeno} />
                    <input type="email" name="email" id="email" placeholder="E-mail" ref={form.email} />
                    <input type="phone" name="phone" id="phone" placeholder="Telefon" ref={form.phone} />
                    <textarea name="zprava" id="zprava" rows="8" placeholder="Vaše zpráva" ref={form.zprava}></textarea>
                    <div className={styles.souhlas}>
                        <input type="checkbox" name="consent" id="consent" readOnly/>
                        <label htmlFor="consent">Souhlasím s poskytnutím osobních údajů a cookies</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Poslat zprávu</button>
            </form>
        </div>
    )
}

export default Formular