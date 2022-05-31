import { useState, useEffect } from "react";
import styles from './TypeWriter.module.scss'

const TypeWriter = ({ content = "", speed = 100}) => {
    const [displayedContent, setDisplayedContent] = useState("")
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const animKey = setInterval(() => {
            setIndex((index) => {
                if (index >= content.length - 1) {
                    clearInterval(animKey)
                    return index
                }
                return index + 1
            })
        }, speed)
    }, [])

    useEffect(() => {
        setDisplayedContent((displayedContent) => displayedContent + content[index])
    }, [index])

    // return <h1 className={styles.typeWriter}>{displayedContent}</h1>
    return displayedContent
}

const sample_content = `Alive = True;
    while Alive:
        try:
            hard();
        except Exception as in life:
            jumpOverIt();
            tryagain();`

export default TypeWriter