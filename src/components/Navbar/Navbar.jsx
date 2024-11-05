"use client"

import Image from "next/image";
import Link from "next/link";
import logoImage from "@/public/assets/images/img-kitzu-logo.png";

const Navbar = () => {
    return (
        <div className="py-5 bg-black sticky">
            <div className="flex justify-between items-center container mx-auto">
                <div className="w-4/12">
                    <figure className="w-[110px] overflow-hidden">
                        <Image src={logoImage} alt="Kitzu" />
                    </figure>
                </div>
                <div className="w-8/12">
                    <div className="flex justify-end items-center">
                        <ul>
                            <li className="flex gap-8">
                                <Link href="#about" >About</Link>
                                <Link href="#resume" >Resume</Link>
                                <Link href="#portfolio" >Portfolio</Link>
                                <Link href="#blog" >Blog</Link>
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