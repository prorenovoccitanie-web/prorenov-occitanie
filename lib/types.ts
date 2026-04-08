export interface Prospect {
  id?: string
  proprietaire: 'oui' | 'non'
  produit: string
  consommation_mensuelle?: number
  energie_actuelle: string
  rfr: string
  parts_fiscales: string
  prenom: string
  nom: string
  telephone: string
  ville: string
  source?: string
  created_at?: string
}

export interface CandidatAA {
  id?: string
  prenom: string
  nom: string
  age: number
  ville: string
  situation: 'salarie' | 'demandeur_emploi' | 'etudiant' | 'independant' | 'autre'
  motivation: string
  disponibilite: 'immediate' | '1_mois' | '2_mois'
  telephone: string
  email: string
  acceptation_conditions: boolean
  created_at?: string
}

export interface ListeAttenteFormation {
  id?: string
  prenom: string
  email: string
  telephone: string
  situation: string
  message?: string
  created_at?: string
}

export interface ContactMessage {
  id?: string
  nom: string
  email: string
  telephone?: string
  sujet: string
  message: string
  created_at?: string
}

export interface Investisseur {
  id?: string
  nom: string
  prenom: string
  email: string
  telephone: string
  montant_envisage: string
  message?: string
  created_at?: string
}

export type ProduitType =
  | 'photovoltaique'
  | 'pac_air_air'
  | 'pac_air_eau'
  | 'gainable'
  | 'isolation_combles'
  | 'isolation_planchers'
  | 'isolation_sous_rampants'
  | 'vmc_simple_flux'
  | 'vmc_double_flux'
  | 'ballon_thermodynamique'

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}
