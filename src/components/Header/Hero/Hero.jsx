import { BadgeCheck } from 'lucide-react';
import heroImage from '../../../assets/banner.png'
import playIcon from '../../../assets/play.png'
import heroBage from '../../../assets/hero-bage.png'


const Hero = () => {
    return (
        <div className="hero bg-base-100 min-h-[calc(100vh-89px)] mb-15">
            <div className="hero-content gap-10 flex-col lg:flex-row-reverse container mx-auto ">
                <img
                    src={heroImage}
                    className="max-w-sm rounded-lg shadow-sm"
                />
                <div className='flex flex-col items-center lg:items-start'>
                    <p className='mb-3 text-center text-primary font-medium bg-[#E1E7FF] py-1 px-3 w-fit rounded-full flex gap-2 items-center'> <img src={heroBage} alt="" /> New: AI-Powered Tools Available</p>

                    <h1 className="text-center lg:text-start text-4xl md:text-5xl xl:text-7xl font-extrabold xl:flex xl:flex-col md:max-w-175">Supercharge Your Digital Workflow</h1>
                    <p className="text-center lg:text-start py-6 text-gray-500 md:max-w-100">
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
