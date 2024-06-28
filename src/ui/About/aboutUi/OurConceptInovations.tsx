import { Card } from "../../../components/Card"
import { AboutHeader } from "../components/Header"
import { Wrapper } from "../components/Wrapper"

export const OurConceptInovations = () => {
    const ourConceptInovation = [
        {
            conceptHeading: "Service Incubator",
            conceptParagraph: "A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP"

        },
        {
            conceptHeading: "Virtualting",
            conceptParagraph: "A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource"

        },
        {
            conceptHeading: "Diiming",
            conceptParagraph: "A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice"

        },
    ]
    return (
        <Wrapper>
            <AboutHeader
                headerText="Our Concept Innovations"
                headerParagraph="We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {ourConceptInovation.map((concept) => (
                    <Card styles="items-center gap-[16px] md:gap-[36px] px-[20px] px-[16px]" >
                        <h1 className=" font-bold text-[18px] md:text-[22px] text-textColor1">{concept.conceptHeading}</h1>
                        <p className="font-normal text-[14px] md:text-[18px] text-[#4E4E4E] text-center">{concept.conceptParagraph}</p>
                    </Card>
                ))}
            </div>
        </Wrapper>
    )
}

