import { BadgeCheck } from 'lucide-react';
import heroImage from '../../../assets/banner.png'
import playIcon from '../../../assets/play.png'


const Hero = () => {
    return (
        <div className="hero bg-base-100 min-h-[calc(100vh-89px)]  ">
            <div className="hero-content gap-10 flex-col lg:flex-row-reverse container mx-auto ">
                <img
                    src={heroImage}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='flex flex-col items-center lg:items-start'>
                    <p className='text-center text-primary font-medium bg-[#E1E7FF] py-1 px-3 w-fit rounded-full flex gap-2 items-center'>  <BadgeCheck /> New: AI-Powered Tools Available</p>

                    <h1 className="text-center lg:text-start text-5xl xl:text-7xl font-extrabold xl:flex xl:flex-col">Supercharge Your <span>Digital Workflow</span></h1>
                    <p className="text-center lg:text-start py-6 text-gray-500">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>
                    <div className='space-x-3 '>
                        <button className="btn btn-primary rounded-full ">Explore Products</button>
                        <button className="btn  rounded-full border-2 border-primary text-primary "> <img src={playIcon} alt="" /> Watch Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
