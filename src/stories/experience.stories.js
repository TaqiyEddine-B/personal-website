
import Experience from "../components/experience.js";
import {work_experiences} from "../portfolio.js";

export default {
    title :"Experience",
    component: Experience,
}

export const MainC = () => <Experience experience={work_experiences.data[0]} defaultValue={false} />;
export const ShowDescription = () => <Experience experience={work_experiences.data[0]} defaultValue={true} />;
