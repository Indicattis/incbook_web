import Image from "next/image";
import TeacherCourse from "./course";





export default function TeacherCourses() {
    return (
        <div className=" grid grid-cols-4 gap-3 transition-all py-3">
            <TeacherCourse course_time={240} course_price={39.90} course_name="Tatuagem Prática" course_description="Um curso daora" course_image="https://source.unsplash.com/featured/300x300?tattoo"/>
        </div>
    )
}