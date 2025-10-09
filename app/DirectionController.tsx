"use client";

import { useEffect } from "react";
import { useLanguage } from "@/components/Contexts/LanguageContext";

export function DirectionController() {
    const { language } = useLanguage();

    useEffect(() => {
        document.body.dir = language === "fa" ? "rtl" : "ltr";
    }, [language]);

    return null; // فقط تغییر direction انجام میده
}
