"use client"
import { useEffect, useState } from "react";

const getBanglaDate = () =>{
    return new Date().toLocaleDateString("bn-bd",{
        dateStyle:"full",
    });
};

const BanglaDate = () => {
    const [date, setDate] = useState("");
    useEffect(() => {
        const timeOut = setTimeout(() => setDate(getBanglaDate()),0);
        return() => clearTimeout(timeOut);
    }, []);
    return <span>{date}</span>
};

export default BanglaDate;