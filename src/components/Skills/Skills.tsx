
import SectionHeading from "../SectionHeading/SectionHeading";
import SkillCard from "./SkillCard";


const Skills = () => {

    const skillSet = [
        {
            _id: 1,
            skillName: `HTML5 / CSS3`,
            learnFrom: `Self Learning From Internet`,
            learnStart: `2017`,
            skillCategory: `frontend`,
            description: ``
        },
        {
            _id: 2,
            skillName: `JavaScript`,
            learnFrom: `Self Learning From Internet  & Programming Hero Courses`,
            learnStart: `2018 & 2024`,
            skillCategory: `frontend`,
            description: ``
        },
        {
            _id: 3,
            skillName: `PHP`,
            learnFrom: `Self Learning From Internet`,
            learnStart: `2019`,
            skillCategory: `backend`,
            description: ``
        },
        {
            _id: 4,
            skillName: `Node Js`,
            learnFrom: `Programming Hero Courses`,
            learnStart: `2024`,
            skillCategory: `backend`,
            description: ``
        },
        {
            _id: 5,
            skillName: `Express Js`,
            learnFrom: `Programming Hero Courses`,
            learnStart: `2024`,
            skillCategory: `backend`,
            description: ``
        },
        {
            _id: 6,
            skillName: `MongoDB`,
            learnFrom: `Programming Hero Courses`,
            learnStart: `2024`,
            skillCategory: `database`,
            description: ``
        },
        {
            _id: 7,
            skillName: `PostgreSQL`,
            learnFrom: `Programming Hero Courses`,
            learnStart: `2025`,
            skillCategory: `database`,
            description: ``
        },
        {
            _id: 8,
            skillName: `VS Code`,
            learnFrom: `Self Learning From Internet`,
            learnStart: `2018`,
            skillCategory: `tools`,
            description: ``
        },
        {
            _id: 9,
            skillName: `Git / GitHub`,
            learnFrom: `Self Learning From Internet`,
            learnStart: `2021`,
            skillCategory: `tools`,
            description: ``
        },
        {
            _id: 10,
            skillName: `React Js`,
            learnFrom: `Programming Hero Courses`,
            learnStart: `2023`,
            skillCategory: `frontend`,
            description: ``
        },
        {
            _id: 11,
            skillName: `Next Js`,
            learnFrom: `Self Learning by Reading Documentation`,
            learnStart: `2025`,
            skillCategory: `frontend`,
            description: ``
        },
        {
            _id: 12,
            skillName: `Typescript`,
            learnFrom: `Self Learning by Reading Documentation`,
            learnStart: `2025`,
            skillCategory: `backend`,
            description: ``
        },

    ]

    return (
        <div className="p-5 w-11/12 mx-auto" id="skills">
            <SectionHeading description={"Level of knowledge"} title={"My Skills"} />
            <div className="pb-10">
                <div className="flex flex-col gap-10">
                    <div className="flex gap-10 flex-col md:flex-row">
                        <div className="w-full md-w-1/2">
                            <div>
                                <h3 className="text-white text-2xl font-bold py-5">Front-End</h3>
                            </div>
                            <div className="bg-[#161616] border-l-4 border-[#00844e]">
                                {
                                    skillSet.filter(skill => skill.skillCategory == "frontend").map(skill => <SkillCard key={skill._id} skillSet={skill} />)
                                }
                            </div>
                        </div>
                        <div className="w-full md-w-1/2">
                            <div>
                                <h3 className="text-white text-2xl font-bold py-5">Backend</h3>
                            </div>
                            <div className="bg-[#161616] border-l-4 border-[#00844e]">
                                {
                                    skillSet.filter(skill => skill.skillCategory == "backend").map(skill => <SkillCard key={skill._id} skillSet={skill} />)
                                }
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-10 flex-col md:flex-row">
                        <div className="w-full md-w-1/2">
                            <div>
                                <h3 className="text-white text-2xl font-bold py-5">Database</h3>
                            </div>
                            <div className="bg-[#161616] border-l-4 border-[#00844e]">
                                {
                                    skillSet.filter(skill => skill.skillCategory == "database").map(skill => <SkillCard key={skill._id} skillSet={skill} />)
                                }
                            </div>
                        </div>
                        <div className="w-full md-w-1/2">
                            <div>
                                <h3 className="text-white text-2xl font-bold py-5">Tools</h3>
                            </div>
                            <div className="bg-[#161616] border-l-4 border-[#00844e]">
                                {
                                    skillSet.filter(skill => skill.skillCategory == "tools").map(skill => <SkillCard key={skill._id} skillSet={skill} />)
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;