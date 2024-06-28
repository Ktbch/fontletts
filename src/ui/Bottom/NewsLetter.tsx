import { Wrapper } from "../About/components/Wrapper"

export const NewsLetter = () => {
    return (
        <Wrapper>
            <div className="flex flex-col items-center lg:items-start gap-[61px]">
                <div className="flex flex-col items-center lg:items-start gap-2 ">
                    <h1 className="text-[36px] lg:text-[60px]  font-medium text-white">
                        Newsletter
                    </h1>
                    <p className="text-[13px] lg:text-[16px] text-center lg:text-start text-white text-wrap font-normal">
                        Get the latest about SINC Partners, our startup Incubator program, Portfolio, company offerings - straight into your inbox.
                    </p>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-[10px] justify-center lg:relative">
                    <input type="text" className="rounded-[25px] border bg-transparent border-[#676767] p-3 h-[50px] text-center lg:text-start w-[300px] lg:w-[468px] text-[#BABABA] text-[15px]" placeholder="Enter your email address" />
                    <div className="lg:absolute top-0 left-[80%]">
                        <button className="bg-white text-black text-[16px] rounded-[24px] font-bold w-[150px] h-[49px]" >Subscribe</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
