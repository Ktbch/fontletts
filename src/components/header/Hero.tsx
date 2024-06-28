import { Button } from "../Button"
import image from '../../assests/Image.png'
// import { CircleDot, DotIcon, LucideDot } from "lucide-react"


const Hero = () => {
    return (
        <div className="flex items-center">
            <div className=" py-[20px] px-[18px] lg:px-28">
                <div className="flex flex-col items-start gap-[16px] lg:gap-5 ">
                    <div className="flex flex-col items-start gap-2">
                        <h3 className="text-[20px] lg:text-[32px] font-medium text-textColor1">SINC Partners is a service incubation company</h3>
                        <p className="text-[15px] lg:text-[24px] font-normal text-textColor2 flex-wrap">
                            SINC Partners is a service incubation company
                            Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
                        </p>
                    </div>
                    <Button color="bg-buttonColorBlack">SINC With Us</Button>
                </div>
            </div>
            <img src={image} alt="" className="hidden lg:block" />
            {/* <CircleDot className="absolute" /> */}
            {/* <DotIcon className="absolute" /> */}
        </div>
    )
}

export default Hero
