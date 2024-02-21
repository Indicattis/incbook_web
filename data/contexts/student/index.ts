import { apiUrl } from "@/data/config";
import axios from "axios";



export async function handleLogin(data: any) {
    try {
        const response = await axios.post(`${apiUrl}/student-access`, data);

        if (response.data.authenticated) {
            const studentToken = response.data.token;
            sessionStorage.setItem('studentToken', studentToken);
            window.location.href = `/`;
        }
    } catch (error) {
        console.error(error);
    }
};