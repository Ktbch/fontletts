import Hero from "../components/header/Hero"
import { NavBar } from "../components/header/NavBar"

export const Header = () => {
    return (
        <div>
            <div className="bg-backgroundColorShade1">
                <NavBar />
            </div>
            <Hero />
        </div>
    )
}

