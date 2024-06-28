import { Menu } from 'lucide-react'
import logo from '../../assests/SINC LOGO black outline 1.svg'
import { Button } from '../Button'

export const NavBar = () => {
    const navItems = ['About', 'Sip', 'Studio', "SEEQ", "PlatForms", "Initiatives", "More"]
    return (
        <div className='max-w-6xl  m-auto p-[16px] lg:px-0'>
            <div className="flex items-center justify-between">
                <div className={`flex items-center gap-[24px]`}>
                    <img src={logo} alt="" />
                    <ul className={` hidden lg:flex items-center gap-5 `}>
                        {navItems.map((items, index) => (
                            <li className='text-[18px] font-medium cursor-pointer' key={index}>{items}</li>
                        ))}
                    </ul>
                </div>
                <div className='hidden lg:flex items-center gap-5'>
                    <Button color='bg-buttonColorBlue'>SINC With Us</Button>
                    <Button color='bg-buttonColorBlack'>Apply to SIP 1.0</Button>
                </div>
                <Menu className='lg:hidden' />
            </div>
        </div>
    )
}

