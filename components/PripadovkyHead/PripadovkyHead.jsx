import Image from 'next/image'
import styles from './PripadovkyHead.module.scss'

const PripadovkyHead = (props) => {
    return (
       <>
            <div className={styles.head}>
                { props.image && (<Image src={props.image} width="1920" height="1080" alt="" layout="responsive"/>) }
            </div>
            <div className={`container ${styles.itemTexts}`}> 
                { props.logo && <Image src={props.logo} width={props.width} height={props.height} />}
                <p>{ props.text }</p>
        </div>
       </>
    )
}

export default PripadovkyHead