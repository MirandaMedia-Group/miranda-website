import ReferenceItem from '../ReferenceItem/ReferenceItem'

import styles from './Reference.module.scss'


const Reference = (props) => { 
    return (
        <>
            <div className={styles.referenceGrid}>
                { props.data && props.data.map( (item, index) => {
                    return <ReferenceItem key={index} data={item}></ReferenceItem>
                }) }
            </div>
        </>
    )
}
export default Reference
