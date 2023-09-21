import BannerContent from "./BannerContent";
import ImageBg from "../../../assets/decal-bg.png" ;

const Banner = () => {

    const bannerStyle = {
        backgroundImage: `url(${ImageBg})`,
    }
    
    return (
        <div className="banner" style={bannerStyle}>
            <BannerContent />
        </div>
    )
}

export default Banner;