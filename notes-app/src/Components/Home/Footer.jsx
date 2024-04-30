// import React from 'react'

// function Header() {
//     return (
//         <header className="bg-gray-800">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//             <div className="text-xl font-bold text-white">Your Company Name</div>
//             <nav className="flex space-x-4">
//             <a href="#" className="text-gray-300 hover:text-white">About</a>
//             <a href="#" className="text-gray-300 hover:text-white">Blog</a>
//             <a href="#" className="text-gray-300 hover:text-white">Jobs</a>
//             <a href="#" className="text-gray-300 hover:text-white">Press</a>
//             <a href="#" className="text-gray-300 hover:text-white">Accessibility</a>
//             <a href="#" className="text-gray-300 hover:text-white">Partners</a>
//             </nav>
//         </div>
//         </header>
//     )
//     }

//     function Footer1() {
//     return (
//         <footer className="bg-gray-800 text-center text-gray-300 py-4">
//         © 2024 Your Company, Inc. All rights reserved.
//         </footer>
//     )
//     }

//     function Footer() {
//     return (
//         <div className="flex flex-col min-h-screen">
//         <Header />
//         {/* Your page content here */}
//         <Footer1 />
//         </div>
//     )
// }

// export default Footer
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
                <p className="text-center md:text-left mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} InkWell, Inc. All rights reserved.
                </p>
                <ul className="flex flex-wrap items-center justify-center md:justify-end">
                    <li className="mr-4">
                        <a href="#" className="hover:underline">About</a>
                    </li>
                    <li className="mr-4">
                        <a href="#" className="hover:underline">Blog</a>
                    </li>
                    <li className="mr-4">
                        <a href="#" className="hover:underline">Jobs</a>
                    </li>
                    <li className="mr-4">
                        <a href="#" className="hover:underline">Press</a>
                    </li>
                    <li className="mr-4">
                        <a href="#" className="hover:underline">Accessibility</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Partners</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;