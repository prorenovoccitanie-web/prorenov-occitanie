# Pro Rénov Occitanie — Site Web Complet

Site web de Pro Rénov Occitanie, régie commerciale en rénovation énergétique à Toulouse.
Partenaire officiel Urban Solar (batterie virtuelle), Daikin, Atlantic, Dual Sun, Trina Solar.
Installateur partenaire : Green Confort (4 certifications RGE).

## Stack Technique

- **Next.js 14** (App Router, TypeScript strict)
- **Tailwind CSS** (design system personnalisé)
- **Framer Motion** (animations)
- **React Hook Form + Zod** (formulaires avec validation)
- **Supabase** (base de données prospects et candidats)
- **Resend** (emails de notification)
- **Vercel** (déploiement recommandé)

## Installation

### 1. Cloner et installer les dépendances

```bash
cd prorenov-occitanie
npm install
```

### 2. Configurer les variables d'environnement

```bash
cp .env.local.example .env.local
```

Remplissez `.env.local` avec vos vraies valeurs :

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJ...
RESEND_API_KEY=re_xxxxxxxxxxxx
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://prorenov-occitanie.fr
```

### 3. Configurer Supabase

Créez un projet sur [supabase.com](https://supabase.com) et exécutez ce SQL dans l'éditeur SQL :

```sql
-- Table prospects (formulaires clients)
CREATE TABLE prospects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  proprietaire TEXT NOT NULL,
  produit TEXT NOT NULL,
  consommation_mensuelle INTEGER,
  energie_actuelle TEXT NOT NULL,
  rfr TEXT NOT NULL,
  parts_fiscales TEXT NOT NULL,
  prenom TEXT NOT NULL,
  nom TEXT NOT NULL,
  telephone TEXT NOT NULL,
  ville TEXT NOT NULL,
  source TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table candidats AA
CREATE TABLE candidats_aa (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  prenom TEXT NOT NULL,
  nom TEXT NOT NULL,
  age INTEGER NOT NULL,
  ville TEXT NOT NULL,
  situation TEXT NOT NULL,
  motivation TEXT NOT NULL,
  disponibilite TEXT NOT NULL,
  telephone TEXT NOT NULL,
  email TEXT NOT NULL,
  acceptation_conditions BOOLEAN NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table liste d'attente formation
CREATE TABLE liste_attente_formation (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  prenom TEXT NOT NULL,
  email TEXT NOT NULL,
  telephone TEXT NOT NULL,
  situation TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Activer Row Level Security (recommandé)
ALTER TABLE prospects ENABLE ROW LEVEL SECURITY;
ALTER TABLE candidats_aa ENABLE ROW LEVEL SECURITY;
ALTER TABLE liste_attente_formation ENABLE ROW LEVEL SECURITY;

-- Permettre l'insertion depuis l'API (service key)
CREATE POLICY "Enable insert for service role" ON prospects FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for service role" ON candidats_aa FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for service role" ON liste_attente_formation FOR INSERT WITH CHECK (true);
```

### 4. Configurer Resend

1. Créez un compte sur [resend.com](https://resend.com)
2. Vérifiez votre domaine `prorenov-occitanie.fr`
3. Créez une clé API et ajoutez-la dans `.env.local`

### 5. Lancer en développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

### 6. Build de production

```bash
npm run build
npm start
```

## Déploiement sur Vercel

### Méthode recommandée

1. Connectez votre repo GitHub à [vercel.com](https://vercel.com)
2. Ajoutez toutes les variables d'environnement dans les settings Vercel
3. Déployez — Vercel détecte automatiquement Next.js

### Variables à ajouter sur Vercel

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_SITE_URL` = `https://prorenov-occitanie.fr`

## Structure des pages

```
/                          → Home (page principale)
/photovoltaique           → Panneaux PV + Batterie Virtuelle Urban Solar
/renovation-energetique   → PAC air/air, PAC air/eau, Gainable, Isolation...
/aides-financement        → MPR, CEE, Aide Toulouse Métropole
/pourquoi-nous            → Green Confort, certifications RGE
/temoignages              → Avis clients et apporteurs
/devenir-apporteur        → Rejoindre l'équipe comme AA
/formation                → Formation CPF + liste d'attente
/vision                   → Manifeste Gauthier Jory
/contact                  → Formulaire de contact
/investir                 → [DISCRET] Page investisseurs
/mentions-legales         → Légal + RGPD + Cookies
```

## Points importants — Règles des aides

> CRITIQUE : Ne jamais mélanger les aides

- **Photovoltaïque** : Éligible UNIQUEMENT à l'Aide Toulouse Métropole (25% du HT). PAS de MPR, PAS de CEE.
- **PAC, VMC, Isolation, Ballon** : Éligibles à MaPrimeRénov' + CEE. PAS d'aide Toulouse Métropole.

Ces règles sont respectées dans tout le site. Ne pas les modifier.

## Personnalisation

### Changer les couleurs

Dans `tailwind.config.ts`, les couleurs personnalisées sont :
- `solar-orange` : `#F97316`
- `solar-gold` : `#F59E0B`
- `navy` : `#1E3A5F`
- `navy-light` : `#2D5A8E`
- `navy-dark` : `#0F2340`

### Ajouter un vrai numéro de téléphone

Recherchez `gauthier@prorenov-occitanie.fr` dans les composants et ajoutez le numéro dans `Header.tsx` et `Footer.tsx`.

### Google Analytics et Meta Pixel

Ajoutez vos IDs dans `.env.local`. Le tracking s'active automatiquement.

## Performance attendue

- PageSpeed Insights Desktop : > 95
- PageSpeed Insights Mobile : > 90
- Core Web Vitals : tous verts
- SEO Score : > 95

## Support

Pour toute question technique sur ce site :
gauthier@prorenov-occitanie.fr
