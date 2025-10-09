"use client";

import Head from "next/head";
import { useState, RefObject, useRef } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../Contexts/LanguageContext";
import { translation, type Translation } from "@/app/translation";
import ScrollReveal from "../ScrollReveal";
import {
    ReactOriginal,
    TypescriptOriginal,
    JavascriptOriginal,
    TailwindcssOriginal,
    NextjsOriginal,
    MongodbOriginal,
    NodejsOriginal,
    GitOriginal,
    VscodeOriginal,
    Html5Original,
    Css3Original,
    BootstrapOriginal,
} from "devicons-react";
import { SiFramer, SiGithub, SiNpm, SiMysql, SiPostman } from "react-icons/si";

const Skills = ({ sectionsRef }: { sectionsRef: RefObject<(HTMLElement | null)[]> }) => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const { language } = useLanguage();
    const t = translation[language] as Translation;

    const skillGroups = [
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: ReactOriginal, level: 90 },
                { name: "Next.js", icon: NextjsOriginal, level: 60 },
                { name: "Tailwind CSS", icon: TailwindcssOriginal, level: 90 },
                { name: "JavaScript", icon: JavascriptOriginal, level: 90 },
                { name: "TypeScript", icon: TypescriptOriginal, level: 90 },
                { name: "Html", icon: Html5Original, level: 100 },
                { name: "Css", icon: Css3Original, level: 100 },
                { name: "Bootstrap", icon: BootstrapOriginal, level: 80 },
                { name: "Framer Motion", icon: SiFramer, level: 70 },
                { name: "MUI (Material UI)", icon: TypescriptOriginal, level: 90 },
            ],
        },
        {
            title: "Tools",
            skills: [
                { name: "Git", icon: GitOriginal, level: 90 },
                { name: "GitHub", icon: SiGithub, level: 90 },
                { name: "Visual Studio Code", icon: VscodeOriginal, level: 100 },
                { name: "Node.js", icon: NodejsOriginal, level: 60 },
                { name: "NPM", icon: SiNpm, level: 80 },
                { name: "MongoDB", icon: MongodbOriginal, level: 50 },
                { name: "MySQL", icon: SiMysql, level: 60 },
                { name: "Postman", icon: SiPostman, level: 60 },
            ],
        },
    ];

    const getGroupTitle = (title: string) => {
        const titleMap = {
            Frontend: t.skills.groups.frontend,
            Tools: t.skills.groups.tools,
        };
        return titleMap[title as keyof typeof titleMap] || title;
    };

    return (
        <section
            id="skills"
            ref={(el) => { (sectionsRef.current[2] = el) }}
            className="min-h-screen flex flex-col w-full opacity-0"
        >
            <Head>
                <title>Skills</title>
                <meta name="description" content={'Araz'} />
            </Head>

            <ScrollReveal variant="pageTitle">
                <h1 className="text-3xl sm:text-4xl font-light mb-10">{t.skills.skill}</h1>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-rows-2">
                {skillGroups.map((group, groupIndex) => (
                    <ScrollReveal key={groupIndex} variant="default" delay={groupIndex * 100}>
                        <div className="h-full p-5 rounded-lg border border-foreground/10 bg-foreground/5 backdrop-blur-sm flex flex-col">
                            <div className="mb-4 sm:mb-6">
                                <h2 className="text-xl font-medium">{getGroupTitle(group.title)}</h2>
                            </div>
                            <div className="flex-1 space-y-4 sm:space-y-5">
                                {group.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: groupIndex * 0.1 + skillIndex * 0.1 }}
                                        onHoverStart={() => setHoveredSkill(skill.name)}
                                        onHoverEnd={() => setHoveredSkill(null)}
                                        className="space-y-2"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <skill.icon />
                                                <span className="text-sm font-medium">{skill.name}</span>
                                            </div>
                                        </div>
                                        <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: groupIndex * 0.1 + skillIndex * 0.1 }}
                                                className={`h-full transition-colors duration-300 ${hoveredSkill === skill.name ? "bg-primary" : "bg-primary/60"
                                                    }`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default Skills;
