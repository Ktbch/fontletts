import { InfoSection } from "../ui/Bottom/InfoSection"
import { NewsLetter } from "../ui/Bottom/NewsLetter"
import { Policy } from "../ui/Bottom/Policy"

export const Footer = () => {
    return (
        <footer className="bg-textColor1 ">
            <div className="lg:max-w-6xl m-auto px-4 ">
                <NewsLetter />
                <InfoSection />
                <Policy />
            </div>
        </footer >
    )
}

