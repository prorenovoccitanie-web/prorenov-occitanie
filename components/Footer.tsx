import Link from 'next/link'
import { Sun, Mail, Award, Shield, Zap, Wind } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Panneaux Photovoltaïques', href: '/photovoltaique' },
    { label: 'PAC Air/Air', href: '/renovation-energetique#pac-air-air' },
    { label: 'PAC Air/Eau', href: '/renovation-energetique#pac-air-eau' },
    { label: 'Gainable', href: '/renovation-energetique#gainable' },
    { label: 'Isolation', href: '/renovation-energetique#isolation' },
    { label: 'VMC', href: '/renovation-energetique#vmc' },
    { label: 'Ballon Thermodynamique', href: '/renovation-energetique#ballon' },
  ],
  entreprise: [
    { label: 'Pourquoi Nous', href: '/pourquoi-nous' },
    { label: 'Témoignages', href: '/temoignages' },
    { label: 'Notre Vision', href: '/vision' },
    { label: 'Formation AA', href: '/formation' },
    { label: 'Devenir Apporteur', href: '/devenir-apporteur' },
  ],
  informations: [
    { label: 'Aides & Financement', href: '/aides-financement' },
    { label: 'Aide Toulouse Métropole', href: '/aides-financement#toulouse-metropole' },
    { label: 'MaPrimeRénov\'', href: '/aides-financement#maprimerenov' },
    { label: 'CEE', href: '/aides-financement#cee' },
    { label: 'Contact', href: '/contact' },
  ],
}

const certifications = [
  { icon: Award, label: 'RGE QUALIBAT' },
  { icon: Sun, label: 'RGE QUALIPV' },
  { icon: Zap, label: 'RGE QUALISOL' },
  { icon: Wind, label: 'RGE QUALIAIR' },
]

const brands = [
  { name: 'Urban Solar', flag: true, country: 'FR' },
  { name: 'Daikin', flag: false, country: '' },
  { name: 'Atlantic', flag: false, country: '' },
  { name: 'Dual Sun', flag: true, country: 'FR' },
  { name: 'Trina Solar', flag: false, country: '' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
                <Sun className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-extrabold text-lg leading-tight">Pro Rénov Occitanie</div>
                <div className="text-xs text-white/60">Rénovation Énergétique Toulouse</div>
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Votre spécialiste en rénovation énergétique sur Toulouse et en Occitanie.
              Partenaire officiel Urban Solar — Batterie Virtuelle. Installations réalisées
              par Green Confort, certifié RGE, 100% salariés diplômés.
            </p>

            {/* Contact */}
            <div className="flex items-center gap-2 text-sm text-white/80 mb-3">
              <Mail className="w-4 h-4 text-solar-orange" />
              <a href="mailto:gauthier@prorenov-occitanie.fr" className="hover:text-solar-orange transition-colors">
                gauthier@prorenov-occitanie.fr
              </a>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-2 mt-6">
              {certifications.map((cert) => (
                <div key={cert.label} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10">
                  <cert.icon className="w-4 h-4 text-solar-gold" />
                  <span className="text-xs font-bold text-solar-gold">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-solar-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.entreprise.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-solar-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Informations</h3>
            <ul className="space-y-2">
              {footerLinks.informations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-solar-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Brands */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-xs text-white/50 uppercase tracking-wider mb-4">
            Nos marques partenaires
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <span className="font-bold text-sm text-white">{brand.name}</span>
                {brand.flag && (
                  <span className="text-xs text-white/60">🇫🇷</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/50">
              © {currentYear} Pro Rénov Occitanie — Gauthier Jory. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/mentions-legales" className="text-xs text-white/50 hover:text-white/80 transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-xs text-white/50 hover:text-white/80 transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/politique-confidentialite#cookies" className="text-xs text-white/50 hover:text-white/80 transition-colors">
                Cookies
              </Link>
              <Link href="/investir" className="text-xs text-white/20 hover:text-white/40 transition-colors">
                Investisseurs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
