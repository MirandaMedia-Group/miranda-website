import ZamereniItem from '../ZamereniItem/ZamereniItem'
import Image from "next/image"
import styles from './Zamereni.module.scss'

const Zamereni = () => {
    return (
        <div className={styles.background}>
            <div className="container">
                <h2>Jsme zaměřeni na tyto aktivity</h2>
                <p className="text-center narrow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat.</p>
            </div>
            <div className={styles.zamereniInner}>
                <div><Image src='/img/zamereni.png' width={1043} height={750} alt=""></Image></div>
                <div className={styles.zamereniAcordeon}>
                    <ZamereniItem></ZamereniItem>
                </div>
            </div>
        </div>
    )
}

export default Zamereni