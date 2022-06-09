import axios from 'axios'
import styles from './ContactForm.module.scss'
import { useRef, useState } from 'react'
import { getStrapiURL } from '../../lib/api'

const ContactForm = () => {
	let form = {
		jmeno: useRef(null),
		email: useRef(null),
		tel: useRef(null),
		zprava: useRef(null),
	}
	let token = 'Token!'
	const [formSent, setFormSent] = useState(false)
	const [formSending, setFormSending] = useState(false)

	const sendForm = async (e) => {
		e.preventDefault()

		let data = {
			jmeno: form.jmeno.current.value,
			email: form.email.current.value,
			tel: form.tel.current.value,
			zprava: form.zprava.current.value,
		}

		try {
			setFormSending(true)
			const resolve = await axios.post(getStrapiURL('/api/ezforms/submit'), {
				token,
				formData: data,
			})
			setFormSending(false)
			setFormSent(true)
			console.log(resolve)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<>
			<div className={`${styles.formWrapper}`}>
				<div className='container'>
					<div className={styles.columns}>
						<div className={styles.column}>
							<h2>Mám zájem o&nbsp;spolupráci</h2>
							<p>Zanechte nám na sebe kontakt, spojíme se s vámi.</p>
							<a className={styles.projectPhone} href='tel:+420732264251'>
								+420 732 264 251
							</a>
							<p>
								Pondělí - Pátek: <strong>9:00 - 17:00</strong>
							</p>
							<a href='mailto:info@mirandamedia.cz' className={styles.projectMail}>
								info@mirandamedia.cz
							</a>
						</div>
						<div className={styles.column}>
							{!formSent && !formSending && (
								<form onSubmit={sendForm}>
									<div className={styles.formRow}>
										<input type='text' name='jmeno' id='jmeno' placeholder='Jméno a příjmení' ref={form.jmeno} />
									</div>
									<div className={styles.formRow}>
										<input type='email' name='email' id='email' placeholder='E-mail' ref={form.email} />
									</div>
									<div className={styles.formRow}>
										<input type='tel' name='tel' id='tel' placeholder='Telefon' ref={form.tel} />
									</div>
									<textarea name='zprava' id='zprava' rows='5' placeholder='Váš vzkaz' ref={form.zprava}></textarea>
									<div className={styles.formRow}>
										<input type='checkbox' name='consent' id='consent' readOnly />
										<label htmlFor='consent'>Odesláním souhlasíte s Podmínkami zpracovaní osobních údajů</label>
									</div>
									<button type='submit' className='btn btn-primary'>
										<span data-hover='Odeslat poptávku'>Odeslat poptávku</span>
									</button>
								</form>
							)}
							{formSending && !formSent && <div>Loader!!</div>}
							{formSent && !formSending && <div>Formulář byl v pořádku odeslán, naši accounti se Vám co nejdříve ozvou.</div>}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ContactForm
