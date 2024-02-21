"use client"

import { jwtDecode } from 'jwt-decode';

export const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    const token = sessionStorage.getItem("teacherToken");
    return token || null;
  }
  return null;
};

export const getTeacherToken = (): { teacher_id: any; teacher_name: any; teacher_email: any } | null => {
  const token = getToken();
  if (token) {
    try {
      const decodedToken: any = jwtDecode(token);
      const { teacher_id, teacher_name, teacher_email } = decodedToken;
      return {
        teacher_id: teacher_id || "eita",
        teacher_name: teacher_name || "eita",
        teacher_email: teacher_email || "eita",
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

export const useTeacher = () => {
  const [teacherLoged, setTeacherLoged] = useState<boolean>(false);
  const [teacherId, setTeacherId] = useState<number>()
  const [teacherName, setTeacherName] = useState<string>('')
  const [teacherMail, setTeacherMail] = useState<string>('')

  useEffect(() => {
    try {
      const tokenInfo = getTeacherToken();
      if (!tokenInfo) {
        setTeacherLoged(false);
      } else {
        setTeacherLoged(true);
        setTeacherId(tokenInfo.teacher_id);
        setTeacherName(tokenInfo.teacher_name);
        setTeacherMail(tokenInfo.teacher_email);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { teacherLoged, teacherId, teacherName, teacherMail};
};