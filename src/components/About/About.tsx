
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";
import SectionHeading from "../SectionHeading/SectionHeading";
import Image from "next/image";
import aboutImage from "../../../public/images/aboutImage.jpg";
const About = () => {

    const resumeUrl = `https://drive.google.com/file/d/139eqEehEwPe1FwsOAklv6T2ghNo7b3GH/view?usp=sharing`;

    return (
        <div className="p-5 w-11/12 mx-auto" id="about">
            <SectionHeading description={"Get to know me"} title={"About Me"} />
            <div className="flex flex-col-reverse md:flex-row justify-center md:gap-5 lg:gap-20">
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
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">I’m Md. Takbir Gazi,</h3>
                    </div>
                    <div className="border-b-2 border-[#929292] pb-10">
                        <p className="text-[#929292] leading-loose">A creative frontend web developer turning ideas into fast, responsive, and visually engaging websites. I work with <b>React.js, Next.js, TailwindCSS, Firebase, Express.js, PostgreSQL,</b> and <b>Prisma</b> to build seamless digital experiences.</p>
                        <p className="text-[#929292] leading-loose">During my internships, I brought real projects to life — like <b>Motion Mark/</b>, a sleek portfolio site for a creative agency; <b>Boston</b>, a modern U.S.-based car rental website; a fully responsive <b>eCommerce template</b>; and <b>ASSK Amari Way Developers LTD</b>, a dynamic site for a construction company. Every project sharpened my skills in performance, design, and real-world problem solving.</p>
                    </div>
                    <div className="text-[#929292] flex flex-col md:flex-row gap-5 mt-5">
                        <div className="w-full md:w-1/2 flex flex-col gap-5">
                            <p><span className="text-gray-300">Name : </span> Md. Takbir Gazi</p>
                            <p><span className="text-gray-300">Email : </span> <a href="mailto:takbirgazibd@gmail.com" className="text-[#00844e]">takbirgazibd@gmail.com</a></p>

                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-5">
                            <p><span className="text-gray-300">Phone : </span> <a href="tel:+8801811947182" className="text-[#00844e]">+8801811947182</a></p>
                            <p><span className="text-gray-300">Adress : </span> Khulna, Bangladesh</p>
                        </div>
                    </div>
                    <div className="my-10 flex flex-wrap gap-5">
                        <div>
                            <a href={resumeUrl} target="_blank" className="px-5 py-2 rounded-3xl bg-[#00844e] text-white">My Resume</a>
                        </div>
                        <div className="border-b-2 w-20 border-[#929292] mb-[10px] lg:flex-grow-0 flex-grow"></div>
                        <div className="inline-flex gap-4 items-center lg:pl-0 pl-1">
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