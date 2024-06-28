import Gauis from '../../assests/GASUS white SVG-01 1.png'
import nigeriaFlag from '../../assests/twemoji_flag-nigeria (1).png'
import facebook from '../../assests/Facebook Icon.png'
import unname from '../../assests/Instagram Icon (1).png'
import youtube from '../../assests/Instagram Icon.png'
import linkind from '../../assests/linkedin-round-svgrepo-com 1.png'
import twitter from '../../assests/twitter-round-svgrepo-com.png'
import instagram from '../../assests/instagram-svgrepo-com.png'
import medium from '../../assests/medium-fill-svgrepo-com.png'

export const Policy = () => {
    return (
        <div className='flex flex-col items-center lg:items-start gap-5 pb-5'>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-40  ">
                <h1 className="font-light text-[14px] text-white text-center lg:text-start">
                    Guaranteed 2x on your service or cash investment, usually been the first to invest. <span className="font-medium">Get in early and SINC your guaranty!</span>
                </h1>
                <div className="flex flex-col lg:flex-row items-center gap-2">
                    <img src={Gauis} alt="" />
                    <div className="flex flex-col items-center lg:items-start gap-1 font-light text-[12px] text-white">
                        <p className=''>We are a business built on the </p>
                        <p>foundation of Christian values and belief</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-[50px] lg:gap-[100px] ">
                <h1 className=' font-medium text-[16px] text-white'>
                    2023 SINC Partners Ltd. All rights reserved
                </h1>
                <div className="flex flex-col items-center gap-4 text-white">
                    <div className="flex items-center gap-5">
                        <span className="font-medium text-[16px] underline">Privacy Policy </span>
                        <span className="font-medium text-[16px] underline">Terms of Service</span>
                        <span className="font-medium text-[16px] underline">Security</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <h3 className="font-semibold text-[16px]">
                            Web In Nigeria
                        </h3>
                        <img src={nigeriaFlag} alt='' />
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <img src={facebook} alt='' />
                    <img src={twitter} alt='' />
                    <img src={instagram} alt='' />
                    <img src={linkind} alt='' />
                    <img src={medium} alt='' />
                    <img src={youtube} alt='' />
                    <img src={unname} alt='' />
                </div>
            </div>
        </div>
    )
}

