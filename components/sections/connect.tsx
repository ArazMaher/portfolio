"use client";

import Link from 'next/link'
import React, { RefObject } from 'react'
import { MagicCard } from '../magicui/magic-card'
import { useTheme } from 'next-themes'
import { Github, Microchip, Twitter } from 'lucide-react';
import { AiFillBook, AiFillDiscord, AiOutlineSend } from 'react-icons/ai'
import { useLanguage } from '../Contexts/LanguageContext';
import { translation } from '@/app/translation';
import { SiTelegram } from "react-icons/si";

export default function ContactSection({ sectionsRef }: { sectionsRef: RefObject<(HTMLElement | null)[]> }) {

  const { language, setLanguage } = useLanguage();
  const t = translation[language];

  return (
    <section id="connect" ref={(el) => { (sectionsRef.current[3] = el) }} className="py-20 sm:py-32 opacity-0">
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-light">{t.connetcs.connect}</h2>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {t.connetcs.quote}
            </p>

            <div className="space-y-4">
              <Link href="mailto:maxi.schaefer.dev@gmail.com"
                className='group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300'
              >
                <span className="text-base sm:text-lg">{t.connetcs.gmail}</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="text-sm text-muted-foreground font-mono">{t.connetcs.socials}</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {
              [
                { name: "Github", handle: "@ArazMaher", url: "https://github.com/ArazMaher", icon: Github },
                { name: "Discord", handle: "@gokimax", url: "https://discord.com/users/1106596197306744882", icon: AiFillDiscord },
                { name: "Telegram", handle: "@Oghlanyoldashi", url: "https://t.me/Oghlanyoldashi", icon: SiTelegram },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                >
                  <MagicCard gradientColor={"#00000000"} className='rounded-sm p-4 transition-all duration-300 hover:shadow-sm' gradientFrom="#303030" gradientTo="#3d3d3d">
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300 flex items-center">
                        <social.icon className="w-4 h-4 mr-2" />
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </MagicCard>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
