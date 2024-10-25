import React from 'react';
import { Banner } from '../../components/UI_element/Banner_Product/Banner';
import { FeatureCard } from '../../components/UI_element/ProductFeature/FeatureCard';
import { BestSeller } from '../../components/UI_element/BestSeller_product/BestSeller';
import { NewProduct } from '../../components/UI_element/New_Product/NewProduct';
import { PopularProduct } from '../../components/UI_element/Popular_Product/PopularProduct';
import { Cat } from '../../components/UI_element/SideLeft_Content/Category_left_content/Cat';
import { ContactUs } from '../../components/UI_element/SideLeft_Content/Contact_left_content/ContactUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar */}
            <div className="leftSide lg:col-span-2 space-y-6 hidden lg:block">
                {/* Category */}
                <Cat />
                {/* Contact Us */}
                <ContactUs />
            </div>
    
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
                <Banner />
                <Banner />
                <Banner />
            </div>
    
            {/* Right Sidebar */}
            <div className="RightSide lg:col-span-2 space-y-6 hidden lg:block">
                {/* New Product List */}
                <NewProduct />
                {/* Best Seller List */}
                <BestSeller />
                {/* Popular List */}
                <PopularProduct />
            </div>
        </div>
    
        {/* Features Section */}
        <div className="feature mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Product Cards */}
            <FeatureCard />
        </div>
    
        {/* Footer Section */}
        <div className="mt-8 p-8 bg-teal-600 text-white rounded-lg">
            {/* Footer Main Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Company Info */}
                <div>
                    <h3 className="font-bold text-lg mb-2">About Us</h3>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quibusdam, iure nesciunt repellendus magnam totam necessitatibus inventore nostrum sed ut eveniet sunt obcaecati illo molestiae consequuntur ducimus amet perspiciatis laboriosam.
                    </p>
                </div>
    
                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Go To Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/Category" className="hover:underline">Category</a></li>
                        <li><a href="/Contact" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>
    
                {/* Follow Us Section */}
                <div className='footer'>
                    <h3 className="font-bold text-lg mb-2">Follow Us</h3>
                    <p className="text-sm mb-4">Stay connected through our social platforms.</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        {/* Facebook */}
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                        <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        {/* Telegram */}
                        <a href="https://telegram.org" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                        <FontAwesomeIcon icon={faTelegramPlane} />

                        </a>
                       
                    </div>
                </div>
            </div>
    
            {/* Footer Bottom Bar */}
            <div className="mt-8 text-center border-t border-white pt-4">
                <p className="text-sm">© 2024 Coffee & Tea Shop. All Rights Reserved.</p>
            </div>
        </div>
    </div>
    
    
    );
};

export default Home;
