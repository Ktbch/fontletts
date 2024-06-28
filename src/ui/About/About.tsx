import { BlogsResources } from "./aboutUi/BlogsResources"
import CoFounderWithUs from "./aboutUi/CoFounderWithUs"
import { EquityJobs } from "./aboutUi/EquityJobs"
import { FeaturedAt } from "./aboutUi/FeaturedAt"
import { OurAreaOfFocus } from "./aboutUi/OurAreaOfFocus"
import { OurConceptInovations } from "./aboutUi/OurConceptInovations"
import { OurItWorks } from "./aboutUi/OurItWorks"
import { OurServiceIncubationModel } from "./aboutUi/OurServiceIncubationModel"
import { OurStudioPortifilo } from "./aboutUi/OurStudioPortifilo"
import { SincInvestorsNetwork } from "./aboutUi/SincInvestorsNetwork"
import { StartUpScaleUI } from "./aboutUi/StartUpScaleUI"

export const About = () => {
    return (
        <div className="py-20">
            <StartUpScaleUI />
            <OurAreaOfFocus />
            <OurConceptInovations />
            <OurServiceIncubationModel />
            <OurStudioPortifilo />
            <CoFounderWithUs />
            <OurItWorks />
            <SincInvestorsNetwork />
            <EquityJobs />
            <BlogsResources />
            <FeaturedAt />
        </div>
    )
}

