import { ReactNode } from "react"
import { AboutHeader } from "../components/Header"
import { Wrapper } from "../components/Wrapper"
import { Button } from "../../../components/Button"

type TBoldText = {
    children: ReactNode
}

export const BoldText = ({ children }: TBoldText) => {
    return (
        <span>{children}</span>
    )
}

export const SincInvestorsNetwork = () => {
    //  Todo make the necessary texts bold
    const sincInvestorsContent1 = [
        {

            heading: "Deal 1",
            dealList: [
                "✓ Idea Stage:$5k for 5 % Equity",
                "✓ Expected Revenue at This Stage: $0 / mth",
                "✓ Duration of Raise: 1mth",
                "✓ Who Can Invest: People with Domain Expertise and Advisors"
            ],
        },
        {
            heading: "Deal 2",
            dealList: [
                '✓ Build Stage: $25k worth of service for 10 % Equity',
                "✓ Expected Revenue at This Stage: $100 + /mth",
                "✓ Duration of Raise: 1 - 3mths",
                "✓ Who Can Invest: Developers, Engineers, Growth Marketers"
            ],
        },
        {
            heading: "Deal 3",
            dealList: [
                '✓ Validation Stage: $50k for 5 % Equity',
                "✓ Expected Revenue at This Stage: $1k + /mth",
                "✓ Duration of Raise: 3 - 6mths",
                "✓ Who Can Invest: Everyone"
            ],
        },
        {
            heading: "Deal 4",
            dealList: [
                '✓ Traction Stage: $125k worth of service for 5 % Equity',
                "✓ Expected Revenue at This Stage: $5k + /mth",
                "✓ Duration of Raise: 6 - 12mths",
                "✓ Who Can Invest: Media, Influencers, Celebrity, Platform Owners"
            ],
        },
    ]
    const sincInvestorsContent = [

        {
            heading: "Deal 5",
            dealList: [
                '✓ Pre - seed Stage: $1.5M for 10 % Equity',
                "✓ Expected Revenue at This Stage: $50k + /mth",
                "✓ Duration of Raise: 6 - 18mths",
                "✓ Who Can Invest: Angel Investors, VCs, PE, Institutions"
            ],
            boldText: ['']
        },
        {
            heading: "Deal 6",
            dealList: [
                '✓ Seed Stage: $7.5M for 20 % Equity',
                "✓ Expected Revenue at This Stage: $250k + /mth",
                "✓ Duration of Raise: 12 - 24mths",
                "✓ Who Can Invest: VCs, PE, Institutions"
            ],
        },
        {
            heading: "Deal 7",
            dealList: [
                '✓ IPO Stage: $1.5B for 20 % Equity',
                "✓ Expected Revenue at This Stage: $1M + /mth",
                "✓ Duration of Raise: 18 - 36mths",
                "✓ Who Can Invest: The Public"
            ],
        },
    ]














    return (
        <Wrapper >
            <AboutHeader headerText="SINC Investors Network"
                headerParagraph="Our deals are structured 
                not just to take in investments but 
                to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuation,
                you are guaranteed at least 2x-5x, usually been the first to invest."
            />
            <p className="text-center font-normal text-[15px] lg:text-[17px] text-textColor2 ">
                <span className="font-bold">Disclaimer</span>: These
                deal flows is a statement of our projections and may differ
                from stage to stage and from venture to venture
                and the guarantee is for deal 1, usually the first to invest"'
            </p>
            <div className="flex flex-col items-start gap-[32px]">
                <div className="flex flex-col items-start gap-4">
                    <p className="font-normal text-[15px] lg:text-[17px] text-center lg:text-start text-textColor2">
                        <span className="font-semibold">Micro Angel Investors & Service incubators</span> (Invest from $500 & above)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {sincInvestorsContent1.map((content, index) => (
                            <div className=" flex flex-col items-start gap-[12px] p-[20px] border border-l-0 border-r-0" key={index}>
                                <h1 className="text-[18px] text-textColor1 font-medium">{content.heading}</h1>
                                <ul className="flex flex-col items-start gap-3">
                                    {content.dealList.map((list) => (
                                        <li className="text-[13px] font-normal">
                                            {list}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <p className="font-normal text-[15px] lg:text-[17px] text-center lg:text-start text-textColor2">
                        <span className="font-semibold">Angel Investors & Venture Capital</span> (Invest from $50k & above)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {sincInvestorsContent.map((content, index) => (
                            <div className=" flex flex-col items-start gap-[12px] p-[20px] border border-l-0 border-r-0" key={index}>
                                <h1 className="text-[18px] text-textColor1 font-medium">{content.heading}</h1>
                                <ul className="flex flex-col items-start gap-3">
                                    {content.dealList.map((list) => (
                                        <li className="text-[13px] font-normal">
                                            {list}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className="  p-[20px] border border-l-0 border-r-0">
                            <div className="bg-[#101010] flex flex-col items-start gap-[20px] rounded-[12px] px-[18px] py-[20px]">
                                <p className="text-[17px] text-white font-semibold">
                                    Work with Service Incubators (SINC) to expedite your time to market
                                </p>
                                <Button color="bg-[#303030] font-semibold text-[16px] ">
                                    Join SINC Network
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </Wrapper>
    )
}

