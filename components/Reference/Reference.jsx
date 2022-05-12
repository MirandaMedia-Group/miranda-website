import { useRouter } from 'next/router'
import ReferenceItem from '../ReferenceItem/ReferenceItem'

import styles from './Reference.module.scss'


const Reference = (props) => { 
    const router = useRouter()

    return (
        <>
            <div className={`${styles.referenceGrid} ${router.pathname == '/' ? styles.homePage : ''}`}>
                { props.data && props.data.map( (item, index) => {
                    return <ReferenceItem key={index} data={item} isHomepage={router.pathname == '/' ? true : false}></ReferenceItem>
                }) }
            </div>
        </>
    )
}
export default Reference
