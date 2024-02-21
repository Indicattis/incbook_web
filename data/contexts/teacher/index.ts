import { apiUrl } from "@/data/config";
import axios from "axios";



export async function handleLogin(data: any) {
    try {
        const response = await axios.post(`${apiUrl}/teacher-access`, data);

        if (response.data.authenticated) {
            const teacherToken = response.data.token;
            sessionStorage.setItem('teacherToken', teacherToken);
            window.location.href = `/teacher`;
        }
    } catch (error) {
        console.error(error);
    }
};