import Image from 'next/image'
import styles from './ReferenceHead.module.scss'

export default function ReferenceHead (props) {
    return (
        <div className={styles.referenceHead} style={{background: props.pozadi}} >
            {props.image && <Image src={props.image}  width="1920" height="1080" alt="" layout="fill" objectFit="cover"/>}
            <div className={styles.itemText}>
                <div className='container'>
                    <h1>{props.title}</h1>
                    { props.url && (<a href={`https://${props.url}`} className={styles.url} target="_blank" rel="noreferrer">{props.url}</a>) }
                </div>
            </div>
        </div>
    )
}