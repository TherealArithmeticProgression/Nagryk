'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavArrowDownSolid, Menu, Xmark, Check } from 'iconoir-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/LanguageContext'
import { Language } from '@/lib/translations'
import { ProfileModal } from './profile-modal'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { key: 'hunar', href: '/skillshub.html' },
    { key: 'helping_hand', href: '#' },
    { key: 'schemes', href: '/schemematchmaker.html' },
    // { key: "login", href: "https://www.digilocker.gov.in/web/dashboard/issuers/005931"}
  ]

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'gu', label: 'ગુજરાતી' },
    { code: 'sa', label: 'संस्कृतम्' },
    { code: 'bho', label: 'भोजपुरी' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'bn', label: 'বাংলা' },
    { code: 'mr', label: 'मराठी' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'ur', label: 'اردو' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'or', label: 'ଓଡ଼ିଆ' },
    { code: 'ml', label: 'മലയാളം' },
    { code: 'pa', label: 'ਪੰਜਾਬੀ' },
    { code: 'as', label: 'অসমীয়া' },
    { code: 'mai', label: 'मैथिली' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-amber-200/20 bg-gradient-to-r from-orange-100 via-amber-50 to-orange-100 backdrop-blur-xl transition-all shadow-sm"
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              {t('navbar.logo')}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '7rem' }}>
            {navLinks.map((link) =>
              link.href && link.href !== '#' ? (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-sm font-bold text-slate-800 hover:text-amber-600 transition-colors"
                >
                  {t(`navbar.${link.key}`)}
                </a>
              ) : (
                <button
                  key={link.key}
                  className="text-sm font-bold text-slate-800 hover:text-amber-600 transition-colors"
                >
                  {t(`navbar.${link.key}`)}
                </button>
              ),
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 py-2">
                {t('navbar.language')}
                <NavArrowDownSolid className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              {/* Dropdown */}
              <div className="absolute right-0 top-full hidden w-40 pt-2 group-hover:block">
                <div className="rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl ring-1 ring-slate-900/5 max-h-[300px] overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={cn(
                        'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-slate-50',
                        language === lang.code
                          ? 'bg-slate-50 font-medium text-amber-600'
                          : 'text-slate-600',
                      )}
                    >
                      {lang.label}
                      {language === lang.code && (
                        <Check className="h-3.5 w-3.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="https://www.digilocker.gov.in/web/dashboard/issuers/005931"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:scale-105 hover:shadow-slate-900/30 active:scale-95"
            >
              <img
                src="/digilocker_new.png"
                alt="DigiLocker"
                className="h-6 w-auto object-contain rounded-sm"
              />
              {t('navbar.login')}
            </a>

            <button
              onClick={() => setIsProfileOpen(true)}
              className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-md hover:scale-105 transition-transform"
            >
              <img
                src="/user-profile.png"
                alt="Profile"
                className="h-full w-full object-cover bg-amber-100"
              />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <Xmark strokeWidth={2.5} />
            ) : (
              <Menu strokeWidth={2.5} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full border-b border-slate-200 bg-white p-4 shadow-lg md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.href && link.href !== '#' ? (
                  <a
                    key={link.key}
                    href={link.href}
                    className="text-left text-sm font-medium text-slate-700 hover:text-amber-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(`navbar.${link.key}`)}
                  </a>
                ) : (
                  <button
                    key={link.key}
                    className="text-left text-sm font-medium text-slate-700 hover:text-amber-600"
                  >
                    {t(`navbar.${link.key}`)}
                  </button>
                ),
              )}
              <div className="h-px bg-slate-100 my-1" />
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-slate-600">
                  Select Language:
                </p>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setIsMenuOpen(false)
                    }}
                    className={cn(
                      'text-left text-sm p-2 rounded-md hover:bg-slate-50',
                      language === lang.code && 'bg-slate-100 font-medium',
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              <a
                href="https://www.digilocker.gov.in/web/dashboard/issuers/005931"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
              >
                <img
                  src="/digilocker_new.png"
                  alt="DigiLocker"
                  className="h-6 w-auto object-contain rounded-sm"
                />
                {t('navbar.login')}
              </a>
              <button
                onClick={() => {
                  setIsProfileOpen(true)
                  setIsMenuOpen(false)
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-100 px-5 py-2.5 text-sm font-semibold text-amber-900"
              >
                View Profile
              </button>
            </div>
          </div>
        )}
      </motion.nav>

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  )
}
