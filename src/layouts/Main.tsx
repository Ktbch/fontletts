import Qoutes from "../components/Qoutes"
import { About } from "../ui/About/About"
import { CallToAction } from "../ui/Bottom/CallToAction"

export const MainApp = () => {
    return (
        <main className="bg-backgroundColorShade1 ">
            <div className="lg:max-w-6xl m-auto px-4 py-2">
                <Qoutes />
                <About />
                <CallToAction />
            </div>
        </main>
    )
}

