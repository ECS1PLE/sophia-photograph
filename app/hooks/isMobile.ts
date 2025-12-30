"use client"

/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

const useMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if(window.innerWidth<640){
            setIsMobile(true);
        }
    }, []);
    return isMobile;
}

export default useMobile;