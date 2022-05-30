import Image from "next/image"

import styles from './PravaMirandaImage.module.scss'

const PravaMirandaImage = (props) => {
    return (
        <div className={styles.imageWrapper}>
            <Image src={props.imageSrc} width={900} height={900} layout="fill" objectFit="cover" alt=""></Image>
            <div className={styles.texts}>
                <p>{props.text}</p>
                <div className={styles.hashtags}>
                    {props.hashtags && props.hashtags.map((tag, index) => {
                        return (
                            <span key={index} className={styles.hashtag}># {tag}</span>
                        )
                    })}
                </div>
            </div> 
        </div>
    )
}

export default PravaMirandaImage