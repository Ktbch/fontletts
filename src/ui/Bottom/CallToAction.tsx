import { Button } from "../../components/Button"
import { Wrapper } from "../About/components/Wrapper"

export const CallToAction = () => {
    return (
        <Wrapper>
            <h1 className="text-[56px] lg:text-[80px] text-center font-normal text-textColor1">
                Let's build companies that help everyone succeed
            </h1>
            <div className='flex flex-col lg:flex-row items-center gap-5 justify-center'>
                <Button color='bg-buttonColorBlue'>SINC With Us</Button>
                <Button color='bg-buttonColorBlack'>Apply to SIP 1.0</Button>
            </div>
        </Wrapper>
    )
}

