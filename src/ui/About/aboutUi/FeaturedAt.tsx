import { Wrapper } from "../components/Wrapper"
import featuredImage from "../../../assests/Frame 49252 (1).png"
import featuredLogo from "../../../assests/bujnews green (1).png"
export const FeaturedAt = () => {
    return (
        <Wrapper>
            <h2 className="font-semibold text-[16px] lg:text-[24px] text-textColor1 text-center">As Featured In</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2  ">
                <img src={featuredImage} alt="" className="w-full" />
                <div className="flex flex-col  items-start  ">
                    <div className="bg-white h-full px-[40px] py-[40px]">
                        <div className="flex flex-col items-start gap-[10px]">
                            <img src={featuredLogo} alt="" />
                            <h1 className="text-[15px] font-medium text-textColor1">
                                SINC Partners invests  over 200 million naira in 5 startups
                            </h1>
                            <p className="text-[14px] font-normal text-textColor2">
                                SINC Partners invests  over 200 million naira in 5 startups.
                                SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....
                            </p>
                        </div>

                        <div className="pt-20">
                            <h5 className="text-[13px] font-medium text-textColor2">REPORTED BY:</h5>
                            <h5 className="text-[15px] font-medium text-textColor2">Rema Viel</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

