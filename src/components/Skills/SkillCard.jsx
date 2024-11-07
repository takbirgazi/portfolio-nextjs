import styles from "@/public/styles/skills.module.css"

const SkillCard = ({skillSet}) => {
    const {skillName, learnFrom, learnStart, description} = skillSet;
    return (
        <div className={`border-b border-[#9292923e] p-5 pl-7 ${styles.resumeCard}`}>
            <h4 className="font-bold ">{skillName}</h4>
            <p className="text-sm text-[#929292]">{learnFrom} / {learnStart}</p>
            <p className="mt-4 text-[#929292]">{description}</p>
        </div>
    );
};

export default SkillCard;