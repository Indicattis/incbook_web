
interface CourseProps {
    id?: number;
    course_name: string;
    course_description: string;
    course_image: string;
    course_price: number;
    course_time: number;
}
export default function TeacherCourse(props: CourseProps) {
    return (
        <div className="relative h-44 rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-all">
            <img className="" src={props.course_image} alt="" />
            <div className="absolute flex bottom-0 w-full h-12 bg-gradient-to-t from-black to-[#ffffff00]">
                <span className="">{props.course_name}</span>
            </div>
        </div>
    )
}