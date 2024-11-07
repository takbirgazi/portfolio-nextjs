import Image from "next/image";
import SectionHeading from "../SectionHeading/SectionHeading";
import aboutImage from "@/public/assets/images/aboutImage.jpg"
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";


const About = () => {
    return (
        <div className="p-5 w-11/12 mx-auto">
            <SectionHeading description="Get to know me" title="About Me" />
            <div className="flex flex-col md:flex-row justify-center md:gap-5 lg:gap-20">
                <div className="w-full md:w-1/3">
                    <figure className="filter grayscale">
                        <Image src={aboutImage} alt="Md. Takbir Gazi" />
                    </figure>
                </div>
                <div className="w-full md:w-2/3 flex flex-col gap-5">
                    <div>
                        <p className="text-2xl text-[#00844e]">Who am I ? 🤔</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold leading-snug">I’m Md. Takbir Gazi, a Full Stack Web Developer.</h3>
                    </div>
                    <div className="border-b-2 border-[#929292] pb-10">
                        <p className="text-[#929292] leading-loose">I am a passionate web developer with a strong foundation in front-end and full-stack development. Currently, I’m pursuing a BSS Honor’s degree in Economics at the National University of Bangladesh, but my love for technology has led me to a rewarding journey in web development.</p>
                    </div>
                    <div className="text-[#929292] flex flex-col md:flex-row gap-5 mt-5">
                        <div className="w-full md:w-1/2 flex flex-col gap-5">
                            <p><span className="text-gray-300">Name : </span> Md. Takbir Gazi</p>
                            <p><span className="text-gray-300">Age : </span> 22</p>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-5">
                            <p><span className="text-gray-300">Email : </span> <a href="mailto:takbirgazibd@gmail.com" className="text-[#00844e]">takbirgazibd@gmail.com</a></p>
                            <p><span className="text-gray-300">From : </span> Khulna, Bangladesh</p>
                        </div>
                    </div>
                    <div className="my-10 flex gap-5">
                        <div>
                            <a href="https://drive.google.com/file/d/1S51nSx-wXBZWXybeMGwm3LDbhoaQkSJJ/view?usp=sharing" target="_blank" className="px-5 py-2 rounded-3xl bg-[#00844e] text-white">My Resume</a>
                        </div>
                        <div className="border-b-2 w-20 border-[#929292] mb-[10px]">

                        </div>
                        <div className="inline-flex gap-4 items-center">
                            <a href="https://github.com/takbirgazi" target="_blank" className="text-2xl hover:text-[#00844e]"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/takbirgazi" target="_blank" className="text-2xl hover:text-[#00844e]"><FaLinkedin /></a>
                            <a href="https://x.com/takbirgazibd" target="_blank" className="text-2xl hover:text-[#00844e]"><FaTwitter /></a>
                            <a href="https://www.facebook.com/takbirgazibd" target="_blank" className="text-2xl hover:text-[#00844e]"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/takbirgazibd" target="_blank" className="text-2xl hover:text-[#00844e]"><FaInstagram /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;