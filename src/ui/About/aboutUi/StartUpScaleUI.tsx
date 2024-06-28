import { ArrowRightIcon } from "lucide-react"
import { Card } from "../../../components/Card"
import { Button } from "../../../components/Button"

export const StartUpScaleUI = () => {
    const cardContent = [
        {
            cardHeading: "Work with Service Incubators to expedite your time-to-market",
            cardContent1: "Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.",
            cardContent2: "For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it."
        },
        {
            cardHeading: "Access funding after your mvp is validated ",
            cardContent1: "Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.",
            cardContent2: "Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months ",
        },
    ]
    return (
        <div>
            <div className="hidden md:flex flex-col items-center gap-[32px]">
                <h1 className="font-medium text-[56px] text-center text-textColor1">Network of builders helping startup scale</h1>
                <div className="grid  grid-cols-2 gap-[32px] content-center">
                    {cardContent.map((content) => (
                        <Card styles="gap-[20px] items-start ">
                            <h1 className="font-medium lg:text-[24px] text-black">{content.cardHeading}</h1>
                            <p className="font-normal text-[17px] text-textColor2">{content.cardContent1}</p>
                            <p className="font-semibold text-[17px] text-textColor2">{content.cardContent2}</p>
                            <p className="flex items-center gap-[4px] font-semibold text-[17px]">Learn More <span><ArrowRightIcon /></span></p>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-[24px] items-center md:hidden">
                <h1 className="font-medium text-[20px] text-center text-textColor1">Building the future together, democratizing success.</h1>
                <p className="font-normal text-[14px] text-center text-textColor2">
                    SINC Partners has a novel vision of making success available to everyone and democratizing the pain point of success. We are a next generation startup studio focus on building and supporting enterprises at scale and we help them raise service investments and funds across 3-5 deals from as low as $25k at start to up to $15m before you leave the lab.
                    We are a Gasus Business, a business built on the foundation of Christian values and belief.
                </p>
                <Button color="bg-[#303030]">Read About Us</Button>
            </div>
        </div>
    )
}

