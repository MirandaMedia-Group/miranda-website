import Link from "next/link"
import styles from './Pozice.module.scss'

const Pozice = (props) => {
    
    return(
        <div className={styles.position}>
          <h3>{props.nazev}</h3>
          <p>{props.text}</p>
          <Link href={props.link}>
            <a className='btn btn-primary'>
              <span data-hover="Zobrazit pozici">
                Zobrazit pozici
              </span>
            </a>
          </Link>
        </div>
    )
}

export default Pozice