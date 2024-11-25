"use client"

import Image from "next/image";
import androidAppImg from "@/public/assets/images/downloadApp.png";

const Footer = () => {
    return (
        <div className="bg-black p-5">
            <div className="flex flex-col-reverse md:flex-row gap-3 justify-between items-center">
                <div className="flex-grow ">
                    <p className="text-center md:text-left">&copy; {new Date().getFullYear()} All Right Are Resurved by Md. Takbir Gazi</p>
                </div>
                <div className="flex items-center justify-center">
                    <a href="../../public/assets/appFile/portfolio.apk" download>
                        <figure className="h-10 w-36 border rounded-md border-gray-300 overflow-hidden">
                            <Image className="h-full w-full" src={androidAppImg} alt="Download App" />
                        </figure>
                    </a>
                </div>
            </div>
        </div> 
    );
};

export default Footer;