
import heroBg from "../../../public/images/heroBackground.jpg";
const Hero = () => {
    return (
        <div className="min-h-screen bg-center bg-cover bg-no-repeat object-cover filter grayscale" style={{ backgroundImage: `url(${heroBg?.src})` }}>
            <div className="bg-black bg-opacity-50 min-h-screen w-full flex flex-col items-center justify-center">
                <div className="p-5 h-full w-full">
                    <h2 className=" text-7xl font-bold text-center text-white mb-5">Md. Takbir Gazi</h2>
                    <div className="text-3xl font-normal text-white text-center mb-12 flex items-center justify-center">
                        <span>I’m a&nbsp; Full Stack Web Developer</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;