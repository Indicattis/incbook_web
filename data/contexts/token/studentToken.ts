"use client"

import { jwtDecode } from 'jwt-decode';

export const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    const token = sessionStorage.getItem("studentToken");
    return token || null;
  }
  return null;
};

export const getStudentToken = (): { student_id: any; student_name: any; student_email: any } | null => {
  const token = getToken();
  if (token) {
    try {
      const decodedToken: any = jwtDecode(token);
      const { student_id, student_name, student_email } = decodedToken;
      return {
        student_id: student_id || "eita",
        student_name: student_name || "eita",
        student_email: student_email || "eita",
      };
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  }
  return null;
};


// userUtils.ts

import { useEffect, useState } from 'react';

export const useStudent = () => {
  const [studentLoged, setStudentLoged] = useState<boolean>(false);
  const [studentId, setStudentId] = useState<string>('');
  const [studentName, setStudentName] = useState<string>('');
  const [studentMail, setStudentMail] = useState<string>('');

  useEffect(() => {
    try {
      const tokenInfo = getStudentToken();
      const token = getToken();

      if (!tokenInfo || !token) {
        setStudentLoged(false);
        setStudentId('');
        setStudentName('');
        setStudentMail('');
      } else {
        setStudentLoged(true);
        setStudentId(tokenInfo.student_id);
        setStudentName(tokenInfo.student_name);
        setStudentMail(tokenInfo.student_email);
      }
    } catch (error) {
      console.error(error);
    }
  }, [getToken()]); // Dependência para atualizar sempre que o token for atualizado

  return { studentLoged, studentId, studentName, studentMail };
};
