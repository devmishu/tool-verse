import { AiFillInstagram } from 'react-icons/ai';
import footerLogo from '../../assets/footer-logo.png'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = ({ navList }) => {
    return (
        <footer className='bg-neutral'>
            <div className="footer grid md:grid-cols-3 lg:grid-cols-5 gap-10 text-neutral-content p-10 container mx-auto border-b border-gray-500">
                <div>
                    <img src={footerLogo} alt="" />
                    <p className='max-w-70'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <nav>
                    <h6 className="font-semibold text-xl text-white">Product</h6>
                    {navList.map((item, index) => <a key={index} className="link link-hover">{item}</a>)}
                </nav>
                <nav>
                    <h6 className="font-semibold text-xl text-white">Company</h6>

                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="font-semibold text-xl text-white">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="font-semibold text-xl text-white">Social Links</h6>
                    <div className='flex gap-3 '>
                        <AiFillInstagram />
                        <FaFacebookSquare />
                        <FaXTwitter />
                    </div>
                </nav>
            </div>
            <div className='flex justify-between container mx-auto p-5 '>
                <p className='text-gray-500'>© 2026 Digitools. All rights reserved.</p>
                <div className='flex gap-3 text-gray-500 '>
                    <p>Privacy Policy</p>
                    <p>Terms of Service </p>
                    <p>Cookies</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;