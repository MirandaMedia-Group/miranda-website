import { getStrapiMedia } from "../../lib/media";
import Image from "next/image";

const FetchedImage = ({ image, layout = '', objectFit='' }) => {
    const { alternativeText, width, height } = image.data.attributes
    return (
        <Image 
            layout={ layout }
            objectFit={ layout == 'fill' ? 'cover' : ''}
            width={width}
            height={height}
            src={getStrapiMedia(image)}
            alt={alternativeText || ''}
            priority={true}
        />
    )
}

export default FetchedImage