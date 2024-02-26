import { apiUrl } from "@/data/config";
import axios from "axios";



export async function handleLogin(data: any) {
    try {
        const response = await axios.post(`${apiUrl}/student-access`, data);
        console.log(data);
        if (response.data.authenticated) {
            const studentToken = response.data.token;
            sessionStorage.setItem('studentToken', studentToken);
            window.location.href = `/`;
        }
        else {
            console.log("Usuário ou senha incorretos");
        }
    } catch (error) {
        console.error(error);
    }
};