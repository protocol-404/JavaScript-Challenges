const challenges = {
    "Débutant": [
        {
            id: "change-color",
            title: "Changer la couleur du corps de la page lors d'un clic",
            description: "Créez un bouton qui change la couleur de fond de la page de manière aléatoire à chaque clic.",
            link: "level_1/change-color.html"
        },
        {
            id: "custom-alert",
            title: "Afficher une alerte avec un message personnalisé",
            description: "Créez un formulaire avec un champ de texte et un bouton. Lorsque l'utilisateur clique sur le bouton, affichez le message saisi dans une alerte.",
            link: "level_1/custom-alert.html"
        },
        {
            id: "mouse-position",
            title: "Afficher la position de la souris en temps réel",
            description: "Affichez les coordonnées X et Y de la souris lorsqu'elle se déplace sur la page.",
            link: "level_1/mouse-position.html"
        },
        {
            id: "modal-box",
            title: "Créer une boîte modale qui s'affiche et se ferme avec un bouton",
            description: "Ajoutez un bouton qui affiche une boîte modale. Ajoutez un autre bouton dans la boîte pour la fermer.",
            link: "level_1/modal-box.html"
        },
        {
            id: "click-counter",
            title: "Compter le nombre de fois qu'un bouton est cliqué",
            description: "Créez un bouton qui affiche le nombre total de clics effectués par l'utilisateur.",
            link: "level_1/click-counter.html"
        },
        {
            id: "toggle-visibility",
            title: "Alterner la visibilité d'un élément lors d'un clic",
            description: "Créez un bouton qui montre ou cache un élément lors d'un clic.",
            link: "level_1/toggle-visibility.html"
        },
        {
            id: "hover-text",
            title: "Modifier le texte d'un élément au survol de la souris",
            description: "Modifiez le texte d'un élément lorsque la souris le survole.",
            link: "level_1/hover-text.html"
        },
        {
            id: "validate-input",
            title: "Valider un champ de saisie",
            description: "Validez un champ pour qu'il contienne au moins 5 caractères.",
            link: "level_1/validate-input.html"
        },
        {
            id: "add-class",
            title: "Ajouter une classe CSS à un élément",
            description: "Ajoutez une classe CSS à un élément lors d'un clic.",
            link: "level_1/add-class.html"
        },
        {
            id: "countdown-timer",
            title: "Créer une minuterie avec compte à rebours",
            description: "Ajoutez une minuterie qui affiche un compte à rebours dynamique.",
            link: "level_1/countdown-timer.html"
        }
    ],
    "Intermédiaire": [
        {
            id: "dynamic-list",
            title: "Créer une liste d'éléments dynamique",
            description: "Permettez à l'utilisateur d'ajouter et de supprimer des éléments d'une liste en utilisant un formulaire.",
            link: "level_2/dynamic-list.html"
        },
        {
            id: "delete-items",
            title: "Supprimer des éléments d'une liste",
            description: "Ajoutez un bouton pour supprimer des éléments spécifiques d'une liste.",
            link: "level_2/delete-items.html"
        },
        {
            id: "drag-drop",
            title: "Réorganiser une liste par glisser-déposer",
            description: "Créez une liste d'éléments que l'utilisateur peut réorganiser en utilisant le glisser-déposer.",
            link: "level_2/drag-drop.html"
        },
        {
            id: "image-gallery",
            title: "Créer une galerie d'images avec agrandissement au clic",
            description: "Ajoutez une galerie où cliquer sur une image miniature l'affiche en grand.",
            link: "level_2/image-gallery.html"
        },
        {
            id: "form-validation",
            title: "Valider un formulaire avec plusieurs champs",
            description: "Ajoutez une validation pour les champs comme e-mail et mot de passe.",
            link: "level_2/form-validation.html"
        },
        {
            id: "progress-bar",
            title: "Créer une barre de progression dynamique",
            description: "Ajoutez une barre de progression qui se remplit selon une action utilisateur.",
            link: "level_2/progress-bar.html"
        },
        {
            id: "random-numbers",
            title: "Générer des nombres aléatoires",
            description: "Affichez des nombres aléatoires dans un tableau dynamique.",
            link: "level_2/random-numbers.html"
        },
        {
            id: "filter-list",
            title: "Filtrer les éléments d'une liste",
            description: "Permettez de filtrer les éléments selon une saisie utilisateur.",
            link: "level_2/filter-list.html"
        },
        {
            id: "pagination",
            title: "Mettre en place un système de pagination",
            description: "Créez une liste paginée pour gérer un grand nombre d'éléments.",
            link: "level_2/pagination.html"
        },
        {
            id: "media-player",
            title: "Créer un lecteur audio/vidéo simple",
            description: "Ajoutez un lecteur avec des contrôles basiques pour lire des médias.",
            link: "level_2/media-player.html"
        }
    ],
    "Avancé": [
        {
            id: "todo-app",
            title: "Application Todo List complète",
            description: "Créez une application de liste de tâches avec stockage local, filtres et édition.",
            link: "level_3/todo-app.html"
        },
        {
            id: "drag-drop-tasks",
            title: "Réorganiser les tâches par glisser-déposer",
            description: "Ajoutez une fonctionnalité de glisser-déposer pour organiser les tâches dans une Todo List.",
            link: "level_3/drag-drop-tasks.html"
        },
        {
            id: "notes-app",
            title: "Système de notes avec localStorage",
            description: "Créez une application de gestion de notes avec sauvegarde locale.",
            link: "level_3/notes-app.html"
        },
        {
            id: "theme-toggle",
            title: "Implémenter un mode sombre et un mode clair",
            description: "Ajoutez un bouton pour basculer entre les modes sombre et clair.",
            link: "level_3/theme-toggle.html"
        },
        {
            id: "keyboard-events",
            title: "Gérer les événements clavier",
            description: "Ajoutez des combinaisons de touches pour déclencher des actions spécifiques.",
            link: "level_3/keyboard-events.html"
        },
        {
            id: "css-animation",
            title: "Ajouter une animation CSS avec JavaScript",
            description: "Créez une animation déclenchée par une action utilisateur.",
            link: "level_3/css-animation.html"
        },
        {
            id: "dynamic-content",
            title: "Charger dynamiquement du contenu HTML",
            description: "Ajoutez une fonctionnalité pour charger un fichier HTML externe dynamiquement.",
            link: "level_3/dynamic-content.html"
        },
        {
            id: "carousel",
            title: "Créer un carrousel d'images",
            description: "Ajoutez un carrousel avec navigation automatique et manuelle.",
            link: "level_3/carousel.html"
        },
        {
            id: "canvas-chart",
            title: "Créer un graphique avec Canvas",
            description: "Ajoutez un graphique simple utilisant l'API Canvas.",
            link: "level_3/canvas-chart.html"
        },
        {
            id: "game",
            title: "Créer un jeu simple",
            description: "Créez un jeu interactif comme Pierre-Papier-Ciseaux.",
            link: "level_3/game.html"
        }
    ],
    "Expert": [
        {
            id: "api-fetch",
            title: "Récupérer des données d'une API publique",
            description: "Affichez des données récupérées d'une API sous forme de tableau.",
            link: "level_4/api-fetch.html"
        },
        {
            id: "api-promises",
            title: "Gérer plusieurs appels API avec Promise.all",
            description: "Combinez plusieurs appels API et affichez les résultats.",
            link: "level_4/api-promises.html"
        },
        {
            id: "live-search",
            title: "Implémenter une recherche en temps réel",
            description: "Créez une barre de recherche qui interagit en direct avec une API.",
            link: "level_4/live-search.html"
        },
        {
            id: "spa-navigation",
            title: "Créer une application avec navigation SPA",
            description: "Ajoutez une navigation entre plusieurs vues avec une architecture SPA.",
            link: "level_4/spa-navigation.html"
        },
        {
            id: "jwt-auth",
            title: "Intégrer un système d'authentification avec JWT",
            description: "Simulez ou implémentez une authentification avec JSON Web Tokens.",
            link: "level_4/jwt-auth.html"
        },
        {
            id: "canvas-game",
            title: "Jeu simple avec Canvas",
            description: "Créez un jeu simple utilisant l'API Canvas avec animation et contrôles utilisateur.",
            link: "level_4/canvas-game.html"
        },
        {
            id: "advanced-charts",
            title: "Créer des graphiques avancés avec Chart.js",
            description: "Ajoutez des graphiques interactifs à l'aide de Chart.js.",
            link: "level_4/advanced-charts.html"
        },
        {
            id: "realtime-app",
            title: "Créer une application en temps réel avec WebSocket",
            description: "Ajoutez une fonctionnalité en temps réel comme un chat avec WebSocket.",
            link: "level_4/realtime-app.html"
        },
        {
            id: "3d-animation",
            title: "Créer une animation 3D avec Three.js",
            description: "Ajoutez une scène 3D interactive en utilisant Three.js.",
            link: "level_4/3d-animation.html"
        },
        {
            id: "full-stack-app",
            title: "Construire une application Full Stack",
            description: "Développez une application complète avec une API back-end et une interface front-end.",
            link: "level_4/full-stack-app.html"
        }
    ]
};
