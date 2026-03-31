export const PHONE = '05 00 00 00 00'
export const PHONE_HREF = 'tel:+33500000000'
export const EMAIL = 'contact@plomberie31.fr'
export const COMPANY = 'Plomberie31'

export const IMG = {
  hero: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1400&h=900&fit=crop&q=90',
  plumber: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&q=85',
  plumber2: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=500&fit=crop&q=85',
  bath1: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=700&h=500&fit=crop&q=85',
  bath2: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=700&h=500&fit=crop&q=85',
  bath3: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=700&h=500&fit=crop&q=85',
  bath4: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=500&fit=crop&q=85',
  bath5: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=700&h=500&fit=crop&q=85',
  bath6: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=700&h=500&fit=crop&q=85',
  team: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=500&fit=crop&q=85',
  kitchen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&h=500&fit=crop&q=85',
  pipe: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=700&h=500&fit=crop&q=85',
  renovation: 'https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=1200&h=700&fit=crop&q=90',
  contact: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop&q=85',
}

export const NAV_LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'Prestations', to: '/prestations' },
  { label: 'Urgence', to: '/urgence' },
  { label: 'Réalisations', to: '/realisations' },
  { label: 'Avis', to: '/avis' },
  { label: 'Contact', to: '/contact' },
]

export const SERVICES = [
  { slug: 'recherche-fuite', title: 'Recherche de fuite', desc: 'Détection précise et réparation rapide de toute fuite d\'eau dans votre habitation.', icon: 'Search', gradient: 'from-blue-50 to-brand-50' },
  { slug: 'debouchage', title: 'Débouchage', desc: 'Canalisations, WC, évier — intervention propre et efficace, résultat garanti.', icon: 'ShowerHead', gradient: 'from-cyan-50 to-blue-50' },
  { slug: 'reparation', title: 'Réparation sanitaire', desc: 'Robinets, chasse d\'eau, joints — remise en état rapide de vos équipements.', icon: 'Wrench', gradient: 'from-slate-50 to-gray-50' },
  { slug: 'chauffe-eau', title: 'Chauffe-eau', desc: 'Installation, remplacement et dépannage de tous types de chauffe-eau.', icon: 'Flame', gradient: 'from-orange-50 to-amber-50' },
  { slug: 'renovation-sdb', title: 'Rénovation SDB', desc: 'Votre salle de bain idéale, conception et réalisation clé en main.', icon: 'Sparkles', gradient: 'from-violet-50 to-purple-50' },
  { slug: 'robinetterie', title: 'Robinetterie', desc: 'Pose et remplacement de robinetterie, toutes marques premium.', icon: 'Droplets', gradient: 'from-sky-50 to-blue-50' },
  { slug: 'entretien', title: 'Entretien préventif', desc: 'Maintenance pour éviter les pannes et prolonger vos installations.', icon: 'Shield', gradient: 'from-emerald-50 to-green-50' },
  { slug: 'urgence', title: 'Urgence 7j/7', desc: 'Intervention rapide jour et nuit pour toute urgence plomberie.', icon: 'Zap', accent: true },
]

export const REVIEWS = [
  { initials: 'SC', name: 'Sophie C.', date: 'Il y a 2 semaines', text: 'Intervention très rapide pour une fuite sous l\'évier. Le plombier était ponctuel, propre et vraiment efficace. Le devis a été respecté à l\'euro près. Je recommande sans hésiter !', tag: 'Réparation fuite', color: 'from-blue-100 to-blue-50' },
  { initials: 'ML', name: 'Marc L.', date: 'Il y a 1 mois', text: 'Rénovation complète de notre salle de bain. Résultat impeccable — douche italienne, meuble vasque sur-mesure. Tout a été livré dans les délais et le budget annoncé.', tag: 'Rénovation SDB', color: 'from-violet-100 to-violet-50' },
  { initials: 'JD', name: 'Julie D.', date: 'Il y a 3 semaines', text: 'WC complètement bouché un dimanche matin. Ils sont venus en moins d\'une heure. Problème réglé rapidement et proprement. Prix très honnête pour un dimanche.', tag: 'Débouchage urgent', color: 'from-amber-100 to-amber-50' },
  { initials: 'PM', name: 'Pierre M.', date: 'Il y a 2 mois', text: 'Remplacement de mon vieux chauffe-eau. Très bon conseil sur le choix du modèle, installation impeccable et nettoyage nickel. Professionnel du début à la fin.', tag: 'Chauffe-eau', color: 'from-emerald-100 to-emerald-50' },
  { initials: 'LB', name: 'Laure B.', date: 'Il y a 1 mois', text: 'Fuite dans la salle de bain en pleine nuit, intervention en urgence. Très réactif, le plombier était là en 40 minutes. Travail propre et efficace. Merci !', tag: 'Urgence nuit', color: 'from-rose-100 to-rose-50' },
  { initials: 'TG', name: 'Thomas G.', date: 'Il y a 3 mois', text: 'Installation complète d\'une nouvelle salle d\'eau dans les combles. Travail remarquable, dans les temps et le budget. L\'équipe est vraiment professionnelle.', tag: 'Installation SDB', color: 'from-sky-100 to-sky-50' },
]

export const GALLERY = [
  { img: 'bath1', badge: 'Rénovation complète', title: 'Salle de bain moderne', loc: 'Toulouse centre', tag: 'Douche italienne · Meuble vasque' },
  { img: 'bath2', badge: 'Transformation', title: 'Baignoire vers douche', loc: 'Blagnac', tag: 'Gain de place · Design épuré' },
  { img: 'bath3', badge: 'Haut de gamme', title: 'Suite parentale', loc: 'Balma', tag: 'Double vasque · Faïence premium' },
  { img: 'bath4', badge: 'Optimisation', title: 'Petit espace maximisé', loc: 'Colomiers', tag: 'Rangements intégrés · Lumière' },
  { img: 'bath5', badge: 'Rénovation', title: 'SDB contemporaine', loc: 'Tournefeuille', tag: 'Carrelage grand format · Niche' },
  { img: 'bath6', badge: 'Design', title: 'Salle d\'eau luxe', loc: 'Ramonville', tag: 'Mosaïque · Éclairage LED' },
]

export const ZONES = [
  { name: 'Toulouse', main: true },
  { name: 'Blagnac' }, { name: 'Colomiers' }, { name: 'Balma' },
  { name: 'Tournefeuille' }, { name: 'Ramonville' }, { name: 'Castanet-Tolosan' },
  { name: 'Muret' }, { name: 'Saint-Orens' }, { name: 'L\'Union' },
  { name: 'Cugnaux' }, { name: 'Labège' },
]
