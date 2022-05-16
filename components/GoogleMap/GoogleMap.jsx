import { useRef, useState, useEffect } from "react"
import styles from './GoogleMap.module.scss'

const GoogleMap = () => {
    const mapRef = useRef(null)
    const [map, setMap] = useState(null)

    useEffect(() => {
        if (mapRef.current && !map) {
            setMap(new google.maps.Map(mapRef.current, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
            }))
        }
    }, [mapRef, map])
    return (
        <div className={styles.map} ref={mapRef}></div>
    )
}

export default GoogleMap