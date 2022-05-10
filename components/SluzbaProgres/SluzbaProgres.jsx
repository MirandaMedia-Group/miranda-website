import Link from 'next/link'

import styles from './SluzbaProgres.module.scss'

const SluzbaProgres = (props) => {
    return (
        <>
            <div className={styles.sluzby}>
                {props.children}
            </div>
            <div className={styles.buttonWrap}>
                <Link href={props.link}>
                    <a className='btn btn-tertiary'>
                        <span data-hover={props.linkText}>
                            {props.linkText}
                        </span>
                    </a>
                </Link>
            </div>
        </>
    )
}

export default SluzbaProgres