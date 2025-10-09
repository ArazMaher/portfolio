"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "en" | "fa";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        const stored = localStorage.getItem("app-language") as Language;
        if (stored) setLanguageState(stored);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("app-language", lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
    return context;
};

// export const LanguageDropdown = () => {
//     const { language, setLanguage } = useLanguage();

//     return (
//         <select
//             value={language}
//             onChange={(e) => setLanguage(e.target.value as Language)}
//             className="border p-1 rounded"
//             style={{
//                 backgroundColor: "transparent", // بک‌گراند شفاف
//                 color: "inherit", // رنگ فونت اصلی اپ
//                 fontFamily: "inherit", // فونت اصلی اپ
//                 border: "1px solid rgba(255,255,255,0.5)", // کمی مرز برای دیدن
//                 padding: "4px 8px",
//                 borderRadius: "4px",
//                 position: "fixed", // فیکس کردن
//                 top: "16px",
//                 right: "16px",
//                 zIndex: 9999, // همیشه روی بقیه لایه‌ها
//                 cursor: "pointer",
//             }}
//         >
//             <option value="en">English</option>
//             <option value="fa">Persian</option>
//         </select>
//     );
// }


export function LanguageDropdown() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const selectLanguage = (lang: "en" | "fa") => {
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="fixed top-4 right-4 z-50 font-sans">
            <button
                onClick={toggleDropdown}
                className="px-4 py-2 border rounded bg-white/10 backdrop-blur-sm text-white"
            >
                {language === "en" ? "English" : "Persian"}
            </button>

            {isOpen && (
                <ul className="absolute right-0 mt-2 w-32 bg-white/10 backdrop-blur-sm rounded shadow-lg text-white">
                    <li
                        className="px-4 py-2 hover:bg-white/20 cursor-pointer"
                        onClick={() => selectLanguage("en")}
                    >
                        English
                    </li>
                    <li
                        className="px-4 py-2 hover:bg-white/20 cursor-pointer"
                        onClick={() => selectLanguage("fa")}
                    >
                        Persian
                    </li>
                </ul>
            )}
        </div>
    );
}