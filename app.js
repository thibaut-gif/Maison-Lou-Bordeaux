const apartments = {
  miroir: {
    id: "miroir",
    name: "Le Miroir d'eau",
    subtitle: "Duplex - 4 couchages",
    capacity: "4 couchages",
    tone: "bordeaux",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/138%20-%20Place%20de%20la%20Bourse%20et%20le%20miroir%20d%27eau%20-%20Bordeaux.jpg?width=1600",
    accent: "#7b2434",
    address: "32 rue des Remparts, 33000 Bordeaux",
    wifi: {
      network: "Maison LOU - Miroir",
      password: "A renseigner",
    },
  },
  pont: {
    id: "pont",
    name: "Le Pont de Pierre",
    subtitle: "Appartement - 2 couchages",
    capacity: "2 couchages",
    tone: "terracotta",
    image: "assets/pont-de-pierre-bordeaux.png",
    accent: "#c85f45",
    address: "32 rue des Remparts, 33000 Bordeaux",
    wifi: {
      network: "Maison LOU - Pont",
      password: "A renseigner",
    },
  },
};

const homeImage =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Porte%20Cailhau.jpg?width=1600";

const photoCredits = [
  {
    label: "Accueil Bordeaux",
    credit: "Alexandre Duret-Lutz, CC BY-SA 2.0",
    url: "https://commons.wikimedia.org/wiki/File:Porte_Cailhau.jpg",
  },
  {
    label: "Le Miroir d'eau",
    credit: "Patrick Despoix, CC BY-SA 4.0",
    url: "https://commons.wikimedia.org/wiki/File:138_-_Place_de_la_Bourse_et_le_miroir_d%27eau_-_Bordeaux.jpg",
  },
];

const categories = [
  {
    id: "entry",
    title: "Entrer",
    shortTitle: "Entrer",
    kicker: "Adresse, serrure Nuki, accès de secours",
    body: [
      "L'immeuble se situe au 32 rue des Remparts, 33000 Bordeaux.",
      "Pour entrer, utilisez l'accès transmis par la conciergerie avant votre arrivée.",
      "La serrure connectée Nuki doit être utilisée depuis les consignes reçues pour votre séjour.",
      "Si l'ouverture ne fonctionne pas, gardez votre calme et utilisez la rubrique Code de secours.",
    ],
    tips: ["Vérifiez que le Bluetooth est activé.", "Gardez votre téléphone suffisamment chargé avant l'arrivée."],
  },
  {
    id: "wifi",
    title: "Wi-Fi et équipements",
    shortTitle: "Wi-Fi",
    kicker: "Internet, TV, cuisine et appareils",
    body: [
      "Le nom du réseau et le mot de passe Wi-Fi seront affichés ici pour votre appartement.",
      "La télévision s'allume avec la télécommande principale. Si l'écran reste noir, vérifiez la source HDMI ou TV.",
      "Les notices simples des équipements de cuisine seront ajoutées ici : plaques, four, machine à café et lave-vaisselle.",
    ],
    tips: ["En cas de coupure internet, vérifiez d'abord que la box est allumée.", "Ne débranchez pas les équipements réseau."],
  },
  {
    id: "comfort",
    title: "Chauffage et clim",
    shortTitle: "Confort",
    kicker: "Température, chauffage, climatisation",
    body: [
      "Réglez la température de façon raisonnable pour garder un logement agréable.",
      "Fermez les fenêtres lorsque le chauffage ou la climatisation fonctionne.",
      "Avant votre départ, pensez à couper ou réduire le chauffage et la climatisation.",
    ],
    tips: ["Température conseillée : 19 à 21 degrés en hiver.", "En été, évitez les écarts trop importants avec l'extérieur."],
  },
  {
    id: "living",
    title: "Vie dans le logement",
    shortTitle: "Logement",
    kicker: "Couchages, règles, immeuble, poubelles",
    body: [
      "Respectez les voisins et les parties communes de l'immeuble.",
      "Les explications du canapé-lit seront ajoutées ici : ouverture, repliage, couettes et oreillers.",
      "Le linge supplémentaire, les couettes et les oreillers seront indiqués précisément pour chaque appartement.",
      "Merci de respecter les horaires de calme, notamment le soir et tôt le matin.",
    ],
    tips: ["Ne laissez rien dans les parties communes.", "Les informations de tri des déchets seront complétées avant mise en ligne."],
  },
  {
    id: "bordeaux",
    title: "Quartier et Bordeaux",
    shortTitle: "Bordeaux",
    kicker: "Commerces, restaurants, musées, balades",
    body: [
      "Vous êtes dans un emplacement idéal pour découvrir Bordeaux à pied.",
      "Les quais, le Miroir d'eau, le Pont de Pierre et le centre historique sont des incontournables.",
      "Nous ajouterons ici une sélection de boulangeries, restaurants, pharmacies, parkings et activités proches.",
    ],
    tips: ["Le tram est souvent le plus simple pour circuler.", "Gardez un peu de temps pour une balade le long de la Garonne."],
  },
  {
    id: "checkout",
    title: "Départ et aide",
    shortTitle: "Départ",
    kicker: "Check-out, contacts, urgences",
    body: [
      "L'heure de départ et les consignes de check-out seront affichées ici.",
      "Avant de partir, fermez les fenêtres, éteignez les lumières et vérifiez que vous n'oubliez rien.",
      "En cas de problème urgent, contactez la conciergerie avec les coordonnées transmises pour votre réservation.",
    ],
    tips: ["Ne laissez pas les clés dans un endroit non prévu.", "Prévenez rapidement si quelque chose est cassé ou ne fonctionne pas."],
  },
];

const gdprNotice = {
  title: "Vidéosurveillance des parties communes",
  short:
    "Pour votre sécurité, les parties communes peuvent être placées sous vidéosurveillance. Les images sont consultées uniquement en cas d'incident et conservées 30 jours maximum.",
  long: [
    "Les caméras ont pour seule finalité la sécurité des personnes et des biens.",
    "Elles ne filment pas l'intérieur des appartements.",
    "Les images ne sont consultées qu'en cas d'incident par les personnes habilitées.",
    "Les images sont conservées 30 jours maximum via l'abonnement des caméras Tapo.",
    "Un contact RGPD Maison LOU sera ajouté avant la mise en ligne.",
  ],
};

const emergencyAccess = {
  testCode: "LOU2026",
  visibleCode: "Code réel à renseigner avant mise en ligne",
  location: "Emplacement exact à renseigner avant mise en ligne",
};

const state = {
  apartmentId: null,
  sectionId: null,
  emergencyUnlocked: false,
};

const app = document.querySelector("#app");

function getApartment() {
  return apartments[state.apartmentId];
}

function getSection() {
  return categories.find((category) => category.id === state.sectionId);
}

function setRoute(apartmentId, sectionId = null) {
  state.apartmentId = apartmentId;
  state.sectionId = sectionId;
  state.emergencyUnlocked = false;
  render();
}

function render() {
  if (!state.apartmentId) {
    renderHome();
    return;
  }

  if (state.sectionId === "emergency") {
    renderEmergency();
    return;
  }

  if (state.sectionId === "gdpr") {
    renderGdpr();
    return;
  }

  if (state.sectionId) {
    renderSection();
    return;
  }

  renderApartment();
}

function renderHome() {
  app.className = "app home-app";
  app.innerHTML = `
    <main class="home-screen">
      <section class="home-hero" style="--home-image: url('${homeImage}')">
        <div class="brand-pill">Maison Lou</div>
        <h1>Bienvenue chez Maison Lou Bordeaux</h1>
        <p>Votre guide simple pour entrer, vous installer, profiter du quartier et trouver de l'aide pendant votre séjour.</p>
      </section>

      <section class="choice-section" aria-label="Choisir un appartement">
        <p class="section-label">Choisissez votre appartement</p>
        <div class="apartment-grid">
          ${Object.values(apartments).map(apartmentCard).join("")}
        </div>
      </section>

      ${gdprCard(false)}
      ${creditsCard()}
    </main>
  `;
}

function apartmentCard(apartment) {
  return `
    <button class="apartment-card ${apartment.tone}" type="button" data-apartment="${apartment.id}">
      <img src="${apartment.image}" alt="" />
      <span class="apartment-overlay"></span>
      <span class="apartment-content">
        <span>${apartment.capacity}</span>
        <strong>${apartment.name}</strong>
        <small>${apartment.address}</small>
      </span>
    </button>
  `;
}

function renderApartment() {
  const apartment = getApartment();

  app.className = `app apartment-app ${apartment.tone}`;
  app.innerHTML = `
    ${topBar("Maison LOU", "Changer", () => "home")}

    <main>
      <section class="apartment-hero" style="--hero-image: url('${apartment.image}'); --accent: ${apartment.accent}">
        <div>
          <p>${apartment.address}</p>
          <h1>${apartment.name}</h1>
          <span>${apartment.subtitle}</span>
        </div>
      </section>

      <section class="quick-help">
        <button class="urgent-button" type="button" data-section="emergency">
          <strong>Problème pour entrer ?</strong>
          <span>Accéder au code de secours</span>
        </button>
      </section>

      <section class="menu-section">
        <p class="section-label">Informations utiles</p>
        <div class="menu-grid">
          ${categories.map(categoryButton).join("")}
        </div>
      </section>

      ${gdprCard(true)}
    </main>
  `;
}

function categoryButton(category) {
  return `
    <button class="menu-button" type="button" data-section="${category.id}">
      <strong>${category.shortTitle}</strong>
      <span>${category.kicker}</span>
    </button>
  `;
}

function renderSection() {
  const apartment = getApartment();
  const section = getSection();
  const wifiBlock =
    section.id === "wifi"
      ? `
        <div class="info-box">
          <span>Réseau Wi-Fi</span>
          <strong>${apartment.wifi.network}</strong>
          <span>Mot de passe</span>
          <strong>${apartment.wifi.password}</strong>
        </div>
      `
      : "";

  app.className = `app detail-app ${apartment.tone}`;
  app.innerHTML = `
    ${topBar(apartment.name, "Retour", () => "apartment")}

    <main class="detail-screen">
      <section class="detail-header">
        <p>${section.kicker}</p>
        <h1>${section.title}</h1>
      </section>

      ${wifiBlock}

      <section class="content-list">
        ${section.body.map((item) => `<article><p>${item}</p></article>`).join("")}
      </section>

      <section class="tips-panel">
        <h2>À retenir</h2>
        ${section.tips.map((tip) => `<p>${tip}</p>`).join("")}
      </section>
    </main>
  `;
}

function renderEmergency() {
  const apartment = getApartment();

  app.className = `app detail-app ${apartment.tone}`;
  app.innerHTML = `
    ${topBar(apartment.name, "Retour", () => "apartment")}

    <main class="detail-screen">
      <section class="detail-header emergency">
        <p>Accès sensible</p>
        <h1>Code de secours</h1>
        <span>Cette partie simulera plus tard une vérification avec votre nom et votre numéro de réservation.</span>
      </section>

      ${
        state.emergencyUnlocked
          ? `
            <section class="secure-result">
              <span>Boîte à clés</span>
              <strong>${emergencyAccess.visibleCode}</strong>
              <p>${emergencyAccess.location}</p>
              <small>Après utilisation, refermez la boîte et replacez la clé exactement au même endroit.</small>
            </section>
          `
          : `
            <form class="secure-form" id="secureForm">
              <label>
                Code de test MVP
                <input type="password" name="code" autocomplete="one-time-code" placeholder="LOU2026" required />
              </label>
              <button class="primary-button" type="submit">Afficher le code de secours</button>
              <p class="form-hint">Pour la démo locale, utilisez le code LOU2026. Le vrai système demandera une réidentification.</p>
            </form>
          `
      }
    </main>
  `;
}

function renderGdpr() {
  const apartment = getApartment();

  app.className = `app detail-app ${apartment.tone}`;
  app.innerHTML = `
    ${topBar(apartment.name, "Retour", () => state.apartmentId ? "apartment" : "home")}

    <main class="detail-screen">
      <section class="detail-header">
        <p>Information RGPD</p>
        <h1>${gdprNotice.title}</h1>
      </section>
      <section class="content-list">
        ${gdprNotice.long.map((item) => `<article><p>${item}</p></article>`).join("")}
      </section>
    </main>
  `;
}

function gdprCard(compact) {
  return `
    <section class="gdpr-card">
      <div>
        <h2>${gdprNotice.title}</h2>
        <p>${gdprNotice.short}</p>
      </div>
      ${compact ? '<button type="button" data-section="gdpr">En savoir plus</button>' : ""}
    </section>
  `;
}

function creditsCard() {
  return `
    <footer class="credits-card">
      <strong>Crédits photos</strong>
      ${photoCredits
        .map(
          (item) => `
            <a href="${item.url}" target="_blank" rel="noreferrer">
              ${item.label} - ${item.credit}
            </a>
          `,
        )
        .join("")}
    </footer>
  `;
}

function topBar(title, actionLabel, routeFactory) {
  return `
    <header class="app-header">
      <button class="back-button" type="button" data-route="${routeFactory()}">${actionLabel}</button>
      <strong>${title}</strong>
      <span></span>
    </header>
  `;
}

app.addEventListener("click", (event) => {
  const apartmentButton = event.target.closest("[data-apartment]");
  const sectionButton = event.target.closest("[data-section]");
  const routeButton = event.target.closest("[data-route]");

  if (apartmentButton) {
    setRoute(apartmentButton.dataset.apartment);
  }

  if (sectionButton) {
    setRoute(state.apartmentId, sectionButton.dataset.section);
  }

  if (routeButton) {
    if (routeButton.dataset.route === "home") {
      setRoute(null);
    } else {
      setRoute(state.apartmentId);
    }
  }
});

app.addEventListener("submit", (event) => {
  if (event.target.id !== "secureForm") {
    return;
  }

  event.preventDefault();
  const formData = new FormData(event.target);
  const inputCode = String(formData.get("code")).trim().toUpperCase();

  if (inputCode === emergencyAccess.testCode) {
    state.emergencyUnlocked = true;
    renderEmergency();
    return;
  }

  event.target.classList.add("has-error");
});

render();
