
import styles from "../../../public/styles/sectionHeading.module.css";
type sectionProps = {
    description: string;
    title: string
}

const SectionHeading = (props: sectionProps) => {
    return (
        <div className="py-16 flex items-center justify-center gap-5 flex-col">
            <div>
                <p className="text-[#929292] text-center">{props.description}</p>
                <h2 className="text-white text-center font-bold text-5xl pb-8 pt-3">{props.title}</h2>
                <div className={`w-28 h-1 bg-[#00844e] relative mx-auto ${styles.animatedBar}`}></div>
            </div>
        </div>
    );
};

export default SectionHeading;