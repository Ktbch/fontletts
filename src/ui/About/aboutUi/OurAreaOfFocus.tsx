import { Wrapper } from "../components/Wrapper"

export const OurAreaOfFocus = () => {
    const ourAreaOfFocusCarContent = [
        {
            numebr: '01',
            areaFocus: 'Business Support & Incubation',
            color: 'bg-[#303030]'
        },
        {
            numebr: '02',
            areaFocus: 'On-Demand & As-A-Service',
            color: 'bg-[#F47733]'
        },
        {
            numebr: '03',
            areaFocus: 'Marketplace & Crowdsourcing',
            color: 'bg-[#FF78BF]'
        },
        {
            numebr: '04',
            areaFocus: 'Aggregation & Shared Economy',
            color: 'bg-[#20888F]'
        },
        {
            numebr: '05',
            areaFocus: 'Decentralized Economy & Digital Assets',
            color: 'bg-[#FF88C6]'
        },
    ]
    return (
        <Wrapper>
            <h1 className="font-medium text-[20px] lg:text-[56px] text-textColor1 text-center">Our Area of Focus</h1>
            <p className="font-normal text-[15px] lg:text-[17px] text-center">
                We have proprietary concept innovations that will support the startup ecosystem,
                support solution-providers/entrepreneurs and ultimately help democratize success;
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ">
                {ourAreaOfFocusCarContent.map((areaOfFocus, index) => (
                    <div className={`flex flex-col items-start p-[20px] h-[160px] justify-between ${areaOfFocus.color}`} key={index}>
                        <p className="font-normal text-[16px] lg:text-[20px] text-white">{areaOfFocus.numebr}</p>
                        <p className="font-normal text-[16px] lg:text-[20px] text-white">{areaOfFocus.areaFocus}</p>
                    </div>
                ))}
            </div>
        </Wrapper >
    )
}

