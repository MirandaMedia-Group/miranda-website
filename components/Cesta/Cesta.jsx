import styles from './Cesta.module.scss'
import CestaItem from '../CestaItem/CestaItem'

const Cesta = () => {
    return  (
        <>
        <div className="container">
            <div className={styles.cestaTop}>
                <h2>Pojďte na naší společnou cestu</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
        <div className={styles.cestaBottom}>
            <div className="container">
                <CestaItem></CestaItem>
            </div>
        </div>
        </>
    )
}

export default Cesta