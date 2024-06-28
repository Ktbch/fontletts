import { AboutHeader } from "../components/Header"
import { Wrapper } from "../components/Wrapper"
import kereeca from '../../../assests/Company logo (3).png'
import krowdback from '../../../assests/Company logo (4).png'
import wettaLogistics from '../../../assests/Company logo (5).png'
import skimae from '../../../assests/Frame 1000002471 (1).png'
import { Button } from "../../../components/Button"
import { BottomArrText } from "../components/BottomArrText"


export const EquityJobs = () => {
    const equityJobsContent = [
        {
            logoHeading: skimae,
            paragraph: "This company is a SAAS Startup that builds AI copy generator...",
            header: "Chief Executive Officer",
            cardDetails: {
                location: "Abuja, Nigeria",
                industry: "On-demand print",
                equity: "12%",
                stipend: "NGN 200,000/mth",
                deadline: "24th, january 2024",
                roleType: "Full-time"
            }
        },
        {
            logoHeading: kereeca,
            paragraph: "This company is a SAAS Startup that builds AI copy generator...",
            header: "UX Strategist",
            cardDetails: {
                location: "Abuja, Nigeria",
                industry: "E-commerce",
                equity: "12%",
                stipend: "NGN 200,000/mth",
                deadline: "24th, january 2024",
                roleType: "Full-time"
            }
        },
        {
            logoHeading: krowdback,
            paragraph: "This company is a SAAS Startup that builds AI copy generator...",
            header: "CTO & Head of innovations",
            cardDetails: {
                location: "Abuja, Nigeria",
                industry: "Fintech",
                equity: "12%",
                stipend: "NGN 200,000/mth",
                deadline: "24th, january 2024",
                roleType: "Full-time"
            }
        },
        {
            logoHeading: wettaLogistics,
            paragraph: "This company is a SAAS Startup that builds AI copy generator...",
            header: "Backend Developer",
            cardDetails: {
                location: "Abuja, Nigeria",
                industry: "Transportaion",
                equity: "12%",
                stipend: "NGN 200,000/mth",
                deadline: "24th, january 2024",
                roleType: "Full-time"
            }
        },
    ]
    return (
        <Wrapper>
            <AboutHeader
                headerText="Equity"
                headerParagraph="See companies and startups offering equity or a mix of cash and equity for very important position in their company"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                {equityJobsContent.map((content, index) => (
                    <div className="flex flex-col p-[20px] gap-[24px] rounded-[12px] bg-white" key={index}>
                        <img src={content.logoHeading} alt="" width={118.52} height={64} />
                        <p className="font-normal text-[14px] text-textColor1">
                            {content.paragraph}
                        </p>
                        <div className="flex flex-col items-start  gap-[10px]">
                            <h3 className="font-medium">
                                {content.header}
                            </h3>
                            <div className="flex  flex-col items-start gap-[20px]">
                                <div className="grid grid-cols-1 ">
                                    <div className="font-normal grid grid-cols-2 gap-[50px] text-[14px] text-[#8E8E8E]">
                                        <p>LOCATION</p>
                                        <p>INDUSTRY</p>
                                    </div>
                                    <div className="font-bold grid grid-cols-2 gap-[50px] text-[14px] text-textColor1">
                                        <p>{content.cardDetails.location}</p>
                                        <p>{content.cardDetails.industry}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-[5px]">
                                    <div className="font-normal grid grid-cols-2 gap-[50px] text-[14px] text-[#8E8E8E]">
                                        <p>EQUITY</p>
                                        <p>STIPEND</p>
                                    </div>
                                    <div className="font-bold grid grid-cols-2 gap-[50px] text-[14px] text-textColor1">
                                        <p>{content.cardDetails.equity}</p>
                                        <p>{content.cardDetails.stipend}</p>
                                    </div>
                                </div>
                                <div className="grid grid-col-1 items-center gap-[5px]">
                                    <div className="font-normal grid grid-cols-2 gap-[50px] text-[14px] text-[#8E8E8E]">
                                        <p>DEADLINE</p>
                                        <p>ROLE TYPE</p>
                                    </div>
                                    <div className="font-bold grid grid-cols-2 gap-[50px] text-[14px] text-textColor1">
                                        <p>{content.cardDetails.deadline}</p>
                                        <p>{content.cardDetails.roleType}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button color="bg-[#303030] font-bold text-white p-3">
                            View Details
                        </Button>
                    </div>
                ))}

            </div>
            <div className="pt-10">
                <BottomArrText text="See More Equity Jobs" />
            </div>
        </Wrapper>
    )
}

