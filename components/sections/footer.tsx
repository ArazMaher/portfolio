"use client";

import React from 'react'
import { ModeToggle } from '../ui/mode-toggle'
import { useLanguage } from '../Contexts/LanguageContext'
import { translation } from '@/app/translation'

export default function Footer() {

  const { language, setLanguage } = useLanguage();
  const t = translation[language];

  return (
    <div className='max-w-6xl mx-auto px-6 sm:px-8 lg:px-16'>
      <footer className="py-12 sm:py-16 border-t border-border">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} {t.footer.right}</div>
            <div className="text-xs text-muted-foreground">{t.footer.love}</div>
          </div>

          <div className="flex items-center gap-4">
            <ModeToggle />
          </div>
        </div>
      </footer>
    </div>
  )
}
