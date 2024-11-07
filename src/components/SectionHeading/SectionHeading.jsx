import styles from "@/public/styles/sectionHeading.module.css"

const SectionHeading = ({ description, title }) => {
    return (
        <div className="py-16 flex items-center justify-center gap-5 flex-col">
            <div>
                <p className="text-[#929292] text-center">{description}</p>
                <h2 className="text-white text-center font-bold text-5xl pb-8 pt-3">{title}</h2>
                <div className={`w-28 h-1 bg-[#00844e] relative mx-auto ${styles.animatedBar}`}></div>
            </div>
        </div>
    );
};

export default SectionHeading;