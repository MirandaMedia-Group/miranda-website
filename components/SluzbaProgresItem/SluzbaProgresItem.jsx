import Image from 'next/image'
import styles from './SluzbaProgresItem.module.scss'

const SluzbaProgresItem = (props) => {
    return (
        <div className={styles.progresItem}>
            <div className={styles.imgWrapper}>
                <Image src={props.image} width={360} height={250} alt=""></Image>
            </div>
            <div className={styles.texts}>
                <Image src={props.icon} width={24} height={24} alt=""></Image>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default SluzbaProgresItem