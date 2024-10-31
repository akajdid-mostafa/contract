

export const heroSectionContent = {
    title: 'Get a work contract in Europe as soon as possible',
    description: "Bienvenue à OceanConnecting ! Nous sommes là pour vous aider à trouver des opportunités d'emploi satisfaisantes en Europe, en vous fournissant des contrats de travail et en nous occupant de tous les documents nécessaires pour une transition en douceur. Laissez-nous vous guider vers un emploi intéressant à travers le continent.",
    avatars: [
      {
        src: 'https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png',
        alt: 'Avatar 1',
      },
      {
        src: 'https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png',
        alt: 'Avatar 2',
      },
      {
        src: 'https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png',
        alt: 'Avatar 3',
      },
    ],
    joinText1: "S'associer à ",
    joinText2: "Plus de 600 travailleurs à l'étranger ",
    joinText3: ' et commencez à réaliser vos rêves et vos désirs avec OceanConnecting',
    buttons: [
      {
        text: 'Contact US',
        link: '/contract',
        className: 'inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-red-600 border rounded-xl font-pj hover:bg-gray-600 hover:to-red-500 transform hover:scale-105',
      },
      {
        text: 'Télécharger le formulaire',
        link: '/contract',
        className: 'inline-flex items-center px-4 py-4 text-lg font-bold transition-all duration-200 bg-transparent border rounded-xl hover:bg-gradient-to-r from-blue-600 to-red-600 hover:text-white hover:to-red-500 transform hover:scale-105',
        icon: {
          svgPath: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
        },
      },
    ],
  };

  export const contractCardSectionContent = {
    title: "Pays disponibles pour la recherche d'emploi à l'étranger",
    description: "Vous trouverez des opportunités d'emploi dans toute l'Europe. Chez OceanConnecting, nous vous donnons accès aux marchés du travail de plusieurs pays européens et nous vous aidons à obtenir un contrat de travail et les documents nécessaires. Rejoignez-nous et commencez votre carrière en Europe facilement et en douceur.",
    button:'To Apply',
    contracts: [
      {
        id: 1,
        imageUrl:'/assets/contract/paneau.jpg' ,
        country: 'Croatie',
        sector: 'Construction / Forge / Menuiserie / Peinture / Mécanique électrique / Climatisation / Permis de conduire D / Boucherie / Hôtellerie',
        language: 'Langue non requise',
        visaDuration: 'La durée du visa est de 5 mois.',
        contractDuration: "Contrat de travail d'un 1 an",
        contractPrice: 'Le prix du contrat est de 60 000 DH.',
        additionalInfo: 'Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.',
        international: 'International',
        latitude: 45.1,
        longitude: 15.2,
        icon:'/assets/contract/bulgim.svg' ,
        label:'Croatie' ,
        link:"https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D9%83%D8%B1%D9%88%D8%A7%D8%AA%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
      },
      {
        id: 2,
        imageUrl:'/assets/contract/paneau.jpg' ,
        country: 'Allemagne',
        sector: 'Santé et soins infirmiers / Hôtels / Programmation',
        language: 'Langue requise B1',
        visaDuration: 'La durée du visa est de 8 mois.',
        contractDuration: "Contrat de travail d'un 1 an",
        contractPrice: 'Le prix du contrat est de 80 000 DH.',
        additionalInfo: 'Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.',
        international: 'International',
        latitude: 51.1657,
        longitude: 10.4515,
        icon:'/assets/contract/bulgim.svg' ,
        label:'Allemagne' ,
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A3%D9%84%D9%85%D8%A7%D9%86%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
  
      },
      {
        id: 3,
        imageUrl:'/assets/contract/paneau.jpg' ,
        country: 'Belgique',
        sector: 'Santé et soins infirmiers / Hôtels / Programmation',
        language: 'Langue requise B1',
        visaDuration: 'La durée du visa est de 8 mois.',
        contractDuration: "Contrat de travail d'un 1 an",
        contractPrice: 'Le prix du contrat est de 60 000 DH.',
        additionalInfo: 'Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.',
        international: 'International',
        latitude: 50.8503,
        longitude: 4.3517,
        icon:'/assets/contract/bulgim.svg' ,
        label:'Belgique' ,
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A8%D9%84%D8%AC%D9%8A%D9%83%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
  
      },
      {
        id: 4,
        imageUrl:'/assets/contract/paneau.jpg' ,
        country: 'Italie',
        sector: 'Santé et soins infirmiers / Hôtellerie / Agriculture',
        language: 'Langue requise B1',
        visaDuration: 'La durée du visa est de 8 mois.',
        contractDuration: "Contrat de travail d'un 1 an",
        contractPrice: 'Le prix du contrat est de 60 000 DH.',
        additionalInfo: 'Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.',
        international: 'International',
        latitude: 41.8719,
        longitude: 12.5674,
        icon:'/assets/contract/bulgim.svg' ,
        label:'Italie' ,
        link:"https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
  
      },
      {
        id: 5,
        imageUrl:'/assets/contract/paneau.jpg' ,
        country: 'Espagne',
        sector: 'Santé et soins infirmiers / Hôtellerie / Agriculture',
        language: 'Langue requise B1',
        visaDuration: 'La durée du visa est de 8 mois.',
        contractDuration: "Contrat de travail d'un 1 an",
        contractPrice: 'Le prix du contrat est de 60 000 DH.',
        additionalInfo: 'Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.',
        international: 'International',
        latitude: 40.4637,
        longitude: -3.7492,
        icon:'/assets/contract/bulgim.svg' ,
        label:'Espagne' ,
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A5%D8%B3%D8%A8%D8%A7%D9%86%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",   
  
      },
      // Add more contracts as needed
    ]
  };