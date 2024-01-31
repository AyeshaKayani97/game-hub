import noImage from "../assets/no-image-placeholder.webp"
const getCroppedImageUrl = (url:string)=>{

    if(!url) return noImage;
    // get all the characters from the beginning of the url all the way  to the media parametere including the media parameter
    const target = "media/"
    const index = url.indexOf(target) + target.length
    return url.slice(0, index) + "crop/600/400/" + url.slice(index)

}



export default getCroppedImageUrl