import Image from "next/image";
import Link from "next/link";
import logoImage from "../../../public/images/logo-main.png"

const Navbar = () => {
    return (
        <div className="p-5 bg-black sticky top-0 z-10 shadow-md shadow-[#374c4438]">
            <div className="flex justify-between items-center">
                <div className="w-4/12">
                    <Link href="#">
                        <figure className="w-[110px] overflow-hidden">
                            <Image src={logoImage} alt="Kitzu" />
                        </figure>
                    </Link>
                </div>
                <div className="w-8/12 hidden md:block">
                    <div className="flex justify-end items-center">
                        <ul>
                            <li className="flex gap-8">
                                <Link href="#about" >About</Link>
                                <Link href="#skills" >Skills</Link>
                                <Link href="#projects" >Projects</Link>
                                <Link href="#contact" >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;