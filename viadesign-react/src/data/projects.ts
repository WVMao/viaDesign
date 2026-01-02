export interface Project {
    id: number;
    category: 'beaute' | 'evenement' | 'vente' | 'streaming' | 'web' | 'autre' | 'cuisine' | 'sport' | 'business';
    title: string;
    description: string;
    image: string;
    link?: string;
    tags?: string[];
    caseStudy?: {
        problem: string;
        solution: string;
        result: string;
    };
}

export const graphicPortfolio: Project[] = [
    {
        id: 202501,
        category: 'streaming',
        title: 'Podcast Alikpak',
        description: 'Design pour podcast : Parlons de Foi, d\'Affaires, d\'Argent',
        image: 'assets/graphic-2025-1.jpg',
        caseStudy: {
            problem: "Le podcast 'Parlons de Foi, d'Affaires, d'Argent' avait besoin d'une identité visuelle équilibrée entre professionnalisme financier et valeurs spirituelles.",
            solution: "Combinaison d'une typographie sérif élégante avec des éléments graphiques dorés pour symboliser la richesse, le tout sur un fond sombre.",
            result: "Une pochette de podcast distinctive qui se démarque sur Spotify et Apple Podcasts par son aura sérieuse et inspirante."
        }
    },
    {
        id: 202502,
        category: 'vente',
        title: 'Pack Créativité',
        description: 'Promotion pack ressources design & mockups',
        image: 'assets/graphic-2025-2.jpg',
        caseStudy: {
            problem: "Lancer une promotion pour un pack de ressources créatives nécessitait un visuel capable de montrer la diversité du contenu à l'intérieur.",
            solution: "Layout dynamique de type 'Grid' mettant en avant plusieurs types de mockups et ressources avec des pastilles de prix percutantes.",
            result: "Une augmentation de 40% des clics sur la publicité grâce à la clarté de l'offre et l'attrait visuel des ressources présentées."
        }
    },
    {
        id: 202503,
        category: 'beaute',
        title: 'Crown & Glow Beauty',
        description: 'Identité visuelle salon : Votre Beauté, Votre Couronne',
        image: 'assets/graphic-2025-3.jpg',
        caseStudy: {
            problem: "Positionner 'Crown & Glow Beauty' comme un salon de coiffure et beauté premium tout en restant accessible.",
            solution: "Charte graphique rose poudré et or avec un logo minimaliste mêlant une couronne et des cheveux stylisés.",
            result: "Une identité visuelle forte qui a facilité le lancement du salon et attiré sa clientèle cible dès le premier mois."
        }
    },
    {
        id: 202504,
        category: 'cuisine',
        title: 'Restaurant Vient Tchop',
        description: 'Affiche publicitaire pour restaurant local',
        image: 'assets/graphic-2025-4.jpg',
        caseStudy: {
            problem: "Créer une affiche appétissante pour le restaurant 'Vient Tchop' afin de booster les ventes de plats locaux en livraison.",
            solution: "Mise en scène d'une photo culinaire haute résolution entourée d'éléments graphiques dynamiques et de couleurs épicées.",
            result: "Une identité locale forte qui a créé un buzz sur WhatsApp et augmenté les commandes directes par téléphone."
        }
    },
    {
        id: 202505,
        category: 'cuisine',
        title: 'Menu Taro',
        description: 'Design de menu détaillé avec tarifs',
        image: 'assets/graphic-2025-5.jpg',
        caseStudy: {
            problem: "Le plat traditionnel Taro méritait une présentation visuelle digne d'un grand restaurant, avec des prix clairs.",
            solution: "Design d'un menu spécifique utilisant des tons terreux et une structure en colonnes pour une lisibilité parfaite.",
            result: "Les clients apprécient la modernité apportée à ce plat traditionnel, renforçant l'image de marque du restaurant."
        }
    },
    {
        id: 202509,
        category: 'cuisine',
        title: 'Fried Rice Belingua',
        description: 'Packaging design pour produit alimentaire',
        image: 'assets/graphic-2025-9.jpg',
        caseStudy: {
            problem: "Lancer un nouveau packaging pour le riz frit Belingua qui soit compétitif en rayon.",
            solution: "Design épuré mettant l'accent sur les ingrédients frais et l'origine locale avec un code couleur vert/jaune.",
            result: "Une présence visuelle forte en rayon qui a aidé le produit à gagner ses premières parts de marché."
        }
    },
    {
        id: 202510,
        category: 'cuisine',
        title: 'Menu Complet',
        description: 'Carte de restaurant : Plats Africains & Cocktails',
        image: 'assets/graphic-2025-10.jpg',
        caseStudy: {
            problem: "Fusionner les deux univers (plats et cocktails) de manière harmonieuse sur un seul support.",
            solution: "Design à double volet avec des codes couleurs distincts mais une typographie commune pour l'unité.",
            result: "Ventes croisées augmentées (plats + cocktails) grâce à la présentation visuelle attrayante."
        }
    },
    {
        id: 202511,
        category: 'evenement',
        title: 'Conférence Santé',
        description: 'Poster pour conférence médicale à Malabo',
        image: 'assets/graphic-2025-11.jpg',
        caseStudy: {
            problem: "Transmettre l'importance d'un sujet médical sérieux lors d'une conférence à Malabo sans effrayer le public.",
            solution: "Utilisation de tons bleus apaisants, d'icônes médicales claires et d'un layout structuré type infographie.",
            result: "Une communication professionnelle qui a attiré un grand nombre de participants et facilité la lecture."
        }
    },
    {
        id: 202513,
        category: 'sport',
        title: 'Fitness Élégane',
        description: 'Visuel inspirant pour marque de sport',
        image: 'assets/graphic-2025-13.jpg',
        caseStudy: {
            problem: "Inspirer les femmes à se mettre au sport avec un visuel à la fois dynamique et esthétique.",
            solution: "Photographie d'action avec des contrastes élevés et une typographie dynamique type 'italique'.",
            result: "Forte identification de la cible féminine et engagement accru sur les réseaux de la marque."
        }
    }
];

export const webPortfolio: Project[] = [
    {
        id: 201,
        category: 'web',
        title: 'Elgoz Media',
        description: 'Site vitrine immersif pour agence média avec animations modernes',
        image: 'assets/web-elgoz.png',
        link: 'https://www.elgoz.media/'
    },
    {
        id: 202,
        category: 'web',
        title: 'Dashboard Analytics',
        description: 'Interface de gestion et tableau de bord interactif',
        image: 'assets/web-dashboard.png',
        link: '#'
    },
    {
        id: 203,
        category: 'web',
        title: 'E-Commerce Mode',
        description: 'Boutique en ligne responsive avec panier dynamique',
        image: 'assets/web-ecommerce.png',
        link: '#'
    },
    {
        id: 204,
        category: 'web',
        title: 'Application Mobile',
        description: 'Landing page optimisée pour téléchargement d\'application',
        image: 'assets/web-mobile.png',
        link: '#'
    }
];
