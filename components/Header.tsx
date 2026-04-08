'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun, Menu, X, ChevronDown, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { label: 'Photovoltaïque', href: '/photovoltaique' },
  { label: 'Rénovation Énergétique', href: '/renovation-energetique' },
  { label: 'Aides & Financement', href: '/aides-financement' },
  { label: 'Pourquoi Nous', href: '/pourquoi-nous' },
  { label: 'Formation', href: '/formation' },
  { label: 'Devenir AA', href: '/devenir-apporteur' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
                <Sun className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span
                  className={cn(
                    'font-extrabold text-sm leading-tight transition-colors',
                    isScrolled ? 'text-navy' : 'text-white'
                  )}
                >
                  Pro Rénov
                </span>
                <span
                  className={cn(
                    'font-bold text-xs leading-tight transition-colors',
                    isScrolled ? 'text-slate-500' : 'text-white/80'
                  )}
                >
                  Occitanie
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
                    pathname === item.href
                      ? 'text-solar-orange bg-orange-50'
                      : isScrolled
                      ? 'text-slate-700 hover:text-solar-orange hover:bg-orange-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-xs font-bold text-amber-700">RGE Certifié</span>
              </div>
              <Link
                href="/#formulaire"
                className="btn-primary text-sm px-5 py-2.5"
              >
                Étude gratuite
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              )}
              aria-label={isMobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-white shadow-2xl lg:hidden transition-transform duration-300 ease-in-out',
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileOpen(false)}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
              <Sun className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-navy">Pro Rénov</div>
              <div className="font-bold text-xs text-slate-500">Occitanie</div>
            </div>
          </Link>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-5 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200',
                pathname === item.href
                  ? 'text-solar-orange bg-orange-50'
                  : 'text-slate-700 hover:text-solar-orange hover:bg-orange-50'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-5 border-t border-slate-100 space-y-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-amber-50 border border-amber-200 w-fit">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-xs font-bold text-amber-700">Partenaire RGE Certifié</span>
          </div>
          <Link
            href="/#formulaire"
            className="btn-primary w-full justify-center"
            onClick={() => setIsMobileOpen(false)}
          >
            Obtenir mon étude gratuite
          </Link>
          <Link
            href="/devenir-apporteur"
            className="btn-outline-navy w-full justify-center text-sm"
            onClick={() => setIsMobileOpen(false)}
          >
            Devenir apporteur d&apos;affaires
          </Link>
        </div>

        <div className="px-5 pb-5">
          <p className="text-xs text-slate-500 text-center">
            gauthier@prorenov-occitanie.fr
          </p>
        </div>
      </div>
    </>
  )
}
