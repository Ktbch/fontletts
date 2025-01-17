import { Wrapper } from "../About/components/Wrapper"
import logo from '../../assests/SINC LOGO white outline 1.png'
import ABA from '../../assests/Outline ABA+ 1.png'
import whatsApp from '../../assests/Icons.png'
export const InfoSection = () => {
    const infoContent = [
        {
            heading: "Platforms",
            content: [
                "Kofoundme", "InResidency", "Service Market",
                "Founders School", "Metty", "Grantty", "Boldtell", "Chekwa"
            ]
        },
        {
            heading: "Initiatives",
            content: [
                "Jabi Plains", "Local Pricing Initiative", "Scholarship Program",
                "SSMN Pricing", "University STEM  ", "University InResidency ", `1M Nigeria Products`, "Founders Festival "
            ]
        },
        {
            heading: "About Us",
            content: [
                "Who We Are", "Our People", "Concept Innovations",
                "Our Process", "Investors Network", "CSR & Events", "Career", "Contact"
            ]
        },
        {
            heading: "More",
            content: [
                "Services", "Equity Jobs", "EIR Program",
                "Offers", "Innovation News", "FAQ", "Resources", "Press"
            ]
        },
    ]

    return (
        <Wrapper>
            <div className="border border-l-0 border-r-0">
                <div className="flex flex-col items-center lg:flex-row lg:items-start gap-1 ">
                    <div className="grid grid-cols-1 items-center lg:grid-cols-5 lg:items-start  gap-5  pt-12">
                        <div className="justify-center">
                            <div className="pl-[119px] lg:pl-0">
                                <h1 className="text-center lg:text-start">
                                    <img src={logo} alt="" className="text-center" />
                                </h1>
                            </div>
                            <div className="font-light text-[14px]  text-white text-wrap text-center lg:text-start">
                                <p className="py-2">
                                    SINC Partners is a service incubation
                                </p>
                                <p className="py-2">company connecting experts in</p>
                                <p className="py-2">
                                    product developmentand growth marketing willing
                                </p >
                                <p className="py-2"> to offer their services to amazing startups in exchange for minuteequity (usually 0.5%to2%)</p>
                            </div >

                        </div>
                        {infoContent.map((content, index) => (
                            <div key={index} className="">
                                <h1 className="text-[18px] font-medium text-white text-center lg:text-start py-2">{content.heading}</h1>
                                <div className="flex flex-col items-center lg:items-start">
                                    {content.content.map((con, index) => (
                                        <span key={index} className="text-[16px] font-normal text-[#C9C9C9] py-2">{con}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className=" border-t lg:border-l lg:border-t-0 h-[65vh]">

                        <div className="flex flex-col items-center lg:items-start gap-[40px] p-5 pt-14 ">
                            <h1 className="font-bold text-[16px] text-white">Location</h1>
                            <div className="flex flex-col items-center lg:items-start gap-2">
                                <span className="font-medium text-[14px] text-white">Abuja, Nigeria </span>
                                <span className="font-medium text-[14px] text-white">Abuja, NigeriaLagos, Nigeria</span>
                                <span className="font-medium text-[14px] text-white">Philadelphia, USA</span>
                            </div>
                            <div className="flex items-center gap-[40px]">
                                <div className="flex flex-col items-start gap-2 ">
                                    <img src={ABA} alt="" />
                                    <h3 className="text-[16px] font-medium text-white">Trusted Business</h3>
                                </div>
                                <div className="flex flex-col items-center gap-[2px]">
                                    <img src={whatsApp} alt="" />
                                    <p className="text-[14px] font-medium text-white text-center">Chat with US</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper >
    )
}

