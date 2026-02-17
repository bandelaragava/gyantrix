import React, { useEffect } from 'react';
import './Header.css';
import Navbar from './Navbar';

const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            const topBar = document.getElementById('topBar');
            if (window.scrollY > 50) {
                topBar?.classList.add('hidden');
            } else {
                topBar?.classList.remove('hidden');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="site-header">
            <div className="top-bar" id="topBar">
                <div className="top-right">
                    <svg className="svgicon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                    <span className="ga-name">gyantrix@academy.com</span>
                </div>
                <div>
                    <span>📞 7386879818</span>
                </div>
                <div className="top-left">
                    <span>Follow us:</span>
                    <a href="https://www.linkedin.com/company/109240608/admin/dashboard/" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /></a>
                    <a href="https://www.facebook.com/photo/?fbid=122101027089065794&set=a.122101027125065794" target="_blank" rel="noopener noreferrer"><img src="https://acbrd.org.au/wp-content/uploads/2020/08/facebook-circular-logo.png" alt="Facebook" /></a>
                    <a href="https://www.instagram.com/gyantrix_academy/" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" /></a>
                    <a href="https://wa.me/7386879818" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174879.png" alt="Whatsapp" /></a>
                    <a href="https://x.com/GyantixAcademy" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
                    </a>
                </div>
            </div>

            <Navbar />
        </div>
    );
};

export default Header;
