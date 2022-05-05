import { getStrapiMedia } from "../../lib/media";
import Image from "next/image";

const FetchedImage = ({ image }) => {
    const { alternativeText, width, height } = image.data.attributes

    return (
        <Image 
            layout="responsive"
            width={width}
            height={height}
            src={getStrapiMedia(image)}
            alt={alternativeText || ''}
        />
    )
}

export default FetchedImage