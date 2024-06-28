import imgvideo2 from '../../../assests/Frame 49268.png'
import imgVideo3 from '../../../assests/Frame 49269.png'
import img4 from '../../../assests/Frame 49270.png'
import img5 from '../../../assests/Frame 49275.png'
import img6 from '../../../assests/Frame 49275 (1).png'
import img7 from '../../../assests/Frame 49275 (2).png'
import { AboutHeader } from '../components/Header'
import { Wrapper } from '../components/Wrapper'
import { BottomArrText } from '../components/BottomArrText'

export const BlogsResources = () => {
    const blogresourceContent = [
        {
            headingImage: imgvideo2,
            image: img7,
        },
        {
            headingImage: imgVideo3,
            image: img5,
        }, {
            headingImage: img4,
            image: img6,
        },
    ]
    return (
        <Wrapper >
            <AboutHeader headerText='Blogs & Resources' style='pb-16' />
            <div className='grid grid- cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[48px]'>
                {blogresourceContent.map((content, index) => (
                    <div className='flex flex-col items-start gap-[15px]' key={index}>
                        <img src={content.headingImage} alt='' />
                        <div className='flex items-center gap-5'>
                            <div className='flex flex-col items-start' >
                                <h1 className='font-semibold text-[14x] text-textColor1'>Top Ten Most Powerful Startup</h1>
                                <p className='font-normal text-[13px] text-textColor1'>
                                    Top Ten Most Powerful Startup.
                                    Top Ten Most Powerful Startup.
                                    Top Ten Most Powerful Startup
                                </p>
                            </div>
                            <img src={content.image} alt='' />
                        </div>
                    </div>
                ))}
            </div>
            <div className='pt-10'>
                <BottomArrText text='See More Blogs & Resources' isArrowVisble={false} />
            </div>
        </Wrapper>
    )
}

