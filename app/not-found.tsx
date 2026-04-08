import Link from 'next/link'
import { Sun, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center px-4">
        <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6"
          style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
          <Sun className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Page introuvable</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Cette page n&apos;existe pas ou a été déplacée.
          Retournez à l&apos;accueil pour continuer.
        </p>
        <Link href="/" className="btn-primary text-lg px-8 py-4">
          Retour à l&apos;accueil
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  )
}
