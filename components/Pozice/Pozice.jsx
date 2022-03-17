import Link from "next/link"
import styles from './Pozice.module.scss'

const Pozice = (props) => {
    
    return(
        <div className={styles.position}>
          <h3>{props.nazev}</h3>
          <p>{props.text}</p>
          <Link href={props.link}>
            <a className='btn btn-primary'>Zobrazit pozici</a>
          </Link>
        </div>
    )
}

export default Pozice