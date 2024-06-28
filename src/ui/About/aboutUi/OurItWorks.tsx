import { Card } from "../../../components/Card"
import { AboutHeader } from "../components/Header"
import { Wrapper } from "../components/Wrapper"
import elipse from '../../../assests/Ellipse 173 (3).png'
import icon1 from '../../../assests/fluent-mdl2_onboarding.png'
import icon2 from '../../../assests/fluent_form-28-regular.png'
import icon3 from '../../../assests/solar_document-add-outline.png'
import { BottomArrText } from "../components/BottomArrText"
import { CircleArrowLeftIcon, CircleArrowRightIcon } from "lucide-react"

export const OurItWorks = () => {
    const ourItWorksContent = [
        {
            icons: icon1,
            contentHeading: "Application and Selection",
            content1: "Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.",
            content2: " Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application."
        },
        {
            icons: icon2,
            contentHeading: "Alignment Meeting and Proposal Submission",
            content1: "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
            content2: "Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies."
        },
        {
            icons: icon3,
            contentHeading: "Negotiation and Agreement",
            content1: "Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements.",
            content2: " Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners."
        }

    ]
    return (
        <Wrapper>
            <AboutHeader headerText="How It Works" headerParagraph="pOur EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each." />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
                {ourItWorksContent.map((content, index) => (
                    <Card styles="items-start gap-[24px]" key={index}>
                        <div className="relative">
                            <img src={elipse} alt="" />
                            <img src={content.icons} className="absolute top-[20%] left-3" alt="" />
                        </div>
                        <h1 className="font-medium text-[17px]  lg:text-[20px]  text-textColor1">
                            {content.contentHeading}
                        </h1>
                        <p className="font-normal text-[14px] lg:text-[16px] text-textColor2">
                            {content.content1}
                        </p>
                        <p className="font-normal text-[14px] lg:text-[16px] text-textColor2">
                            {content.content2}
                        </p>
                    </Card>
                ))}
            </div>
            <BottomArrText text="Support the Future" />
            <div className="flex items-center justify-center gap-[75px]">
                <CircleArrowLeftIcon className="" size={80} />
                <CircleArrowRightIcon size={80} fontWeight={10} />
                {/* {TODO Reduce the weight of this icon} */}
            </div>
        </Wrapper>
    )
}

