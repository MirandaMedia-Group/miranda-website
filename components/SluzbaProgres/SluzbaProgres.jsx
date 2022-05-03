import styles from './SluzbaProgres.module.scss'

const SluzbaProgres = (props) => {
    return (
        <div className={styles.sluzby}>
            {props.children}
        </div>
    )
}

export default SluzbaProgres