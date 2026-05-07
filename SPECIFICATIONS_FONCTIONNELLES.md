# Specifications fonctionnelles - Maison LOU

## 1. Objectif du projet

Maison LOU est un site web mobile-first destine aux locataires de deux appartements situes dans un immeuble appartenant aux proprietaires, au :

**32 rue des Remparts, 33000 Bordeaux**

Les locataires accederont au site en scannant un QR code place dans l'immeuble ou dans les appartements. L'objectif est de leur donner un acces simple, rapide et rassurant aux informations utiles pendant leur sejour.

Le site doit etre pense comme un guide pratique de sejour, avec des boutons lisibles, peu de navigation, et des informations classees par grandes thematiques.

## 2. Appartements concernes

Le projet regroupe deux appartements sous la marque **Maison LOU**.

### Appartement 1 - Le Miroir d'eau

- Capacite pressentie : 4 couchages
- Configuration : duplex
- Theme couleur propose : bordeaux
- Inspiration : le Miroir d'eau, Bordeaux, elegance, calme, reflet urbain

### Appartement 2 - Le Pont de Pierre

- Capacite pressentie : 2 couchages
- Theme couleur propose : terracotta
- Inspiration : le Pont de Pierre, Bordeaux, pierre chaude, sejour plus intime

Les noms, capacites et associations couleur/appartement restent a confirmer. La version actuelle retient l'hypothese suivante : **Le Miroir d'eau = duplex 4 couchages** et **Le Pont de Pierre = 2 couchages**.

## 3. Parcours utilisateur cible

### Phase 1 - Version sans identification

Dans la premiere version, l'utilisateur scanne le QR code et arrive directement sur Maison LOU.

Comme l'identification ne sera pas encore connectee a l'outil de gestion des reservations, l'utilisateur devra choisir manuellement son appartement :

1. Arrivee sur l'ecran Maison LOU
2. Choix entre :
   - Le Miroir d'eau
   - Le Pont de Pierre
3. Acces a la page de l'appartement selectionne
4. Consultation des informations pratiques et touristiques

### Phase 2 - Version avec identification

Plus tard, apres connexion a l'application de gestion des reservations de la conciergerie, l'utilisateur devra s'identifier avec :

- Son nom
- Son numero de reservation

Le numero de reservation devra etre accepte quelle que soit la plateforme de reservation utilisee.

Une fois l'utilisateur identifie, le site devra automatiquement l'amener vers le bon appartement, en fonction de la reservation en cours.

Cette phase necessitera une integration technique avec l'outil de gestion des reservations de la conciergerie. Les specifications techniques de cette connexion seront ajoutees plus tard.

## 4. Principes d'interface

L'application doit etre tres simple a utiliser, notamment sur telephone.

Principes a respecter :

- Interface mobile-first
- Tres gros boutons
- Menu court et comprehensible
- Peu de texte sur les ecrans de navigation
- Informations detaillees uniquement apres clic sur une rubrique
- Ton clair, pratique et rassurant
- Pas de jargon technique
- Acces rapide aux informations urgentes
- Differenciation visuelle forte entre les deux appartements

## 5. Thematique visuelle

### Maison LOU

L'univers general doit rester chaleureux, simple et premium, sans donner une impression de site trop touristique ou trop institutionnel.

Proposition :

- Fond clair
- Typographie tres lisible
- Boutons larges
- Photos ou visuels de Bordeaux, de l'immeuble et des lieux iconiques lies aux noms des appartements
- Identite sobre autour de Maison LOU
- Ambiance locale, chaleureuse et accueillante

### Le Miroir d'eau

Palette proposee :

- Couleur principale : bordeaux
- Couleurs secondaires : blanc, bleu grise, pierre claire
- Ambiance : elegante, calme, urbaine
- Visuel de reference : photo Wikimedia Commons de la Place de la Bourse et du Miroir d'eau, auteur Patrick Despoix, licence CC BY-SA 4.0

### Le Pont de Pierre

Palette proposee :

- Couleur principale : terracotta
- Couleurs secondaires : blanc casse, pierre claire, gris chaud
- Ambiance : chaleureuse, ancree dans Bordeaux
- Visuel de reference cree pour le projet : `assets/pont-de-pierre-bordeaux.png`

## 6. Grandes rubriques proposees

Le menu principal de chaque appartement pourrait etre compose de grands boutons thematiques.

### 1. Arriver et entrer

Cette rubrique regroupe tout ce qui concerne l'acces au batiment et a l'appartement.

Contenus possibles :

- Adresse complete
- Acces a l'immeuble
- Utilisation de la serrure connectee Nuki
- Que faire si la serrure ne fonctionne pas
- Acces d'urgence a la boite a cles
- Informations sur les badges, codes ou cles physiques si besoin

Cette rubrique est prioritaire, car elle concerne l'entree dans le logement.

### 2. Code de secours

Cette rubrique doit etre traitee comme une zone sensible.

Objectif :

- Permettre au locataire d'acceder au code de la boite a cles en cas de probleme avec la serrure Nuki

Regle fonctionnelle cible :

- L'utilisateur ne doit pas voir directement le code
- Il doit d'abord se reidentifier
- Apres verification, le site affiche :
  - l'emplacement de la boite a cles
  - le code
  - les consignes pour recuperer puis remettre la cle

En phase 1, sans connexion a la conciergerie, cette rubrique pourra etre affichee comme "bientot disponible" ou protegee par un code temporaire fourni par le proprietaire.

### 3. Wi-Fi et internet

Cette rubrique permet de se connecter rapidement au reseau internet.

Contenus possibles :

- Nom du reseau Wi-Fi
- Mot de passe
- QR code Wi-Fi si disponible
- Que faire si internet ne fonctionne pas
- Emplacement de la box

### 4. Television et divertissement

Cette rubrique explique comment utiliser les equipements media.

Contenus possibles :

- Allumer la television
- Changer de source
- Utiliser les applications type Netflix, YouTube ou autre
- Utiliser Chromecast, AirPlay ou equivalent si disponible
- Que faire si la television ne s'allume pas

### 5. Chauffage et climatisation

Cette rubrique couvre le confort thermique.

Contenus possibles :

- Utiliser le chauffage
- Utiliser la climatisation
- Regler la temperature conseillee
- Modes a eviter
- Consignes d'economie d'energie
- Que faire en cas de panne

### 6. Equipements de l'appartement

Cette rubrique rassemble les notices pratiques du logement.

Contenus possibles :

- Cuisine
- Four
- Plaques de cuisson
- Lave-vaisselle
- Machine a cafe
- Lave-linge si present
- Seche-cheveux
- Fer a repasser
- Tri des dechets

### 7. Vie pratique dans l'immeuble

Cette rubrique explique les usages communs, les regles de voisinage et les informations utiles pour bien vivre dans le logement.

Contenus possibles :

- Couchages disponibles
- Ou trouver les couettes et oreillers
- Comment ouvrir et replier le canape-lit
- Linge de lit supplementaire
- Horaires de calme
- Parties communes
- Gestion des poubelles
- Respect des voisins
- Interdiction de fumer si applicable
- Animaux si applicable
- Que faire en cas de probleme dans l'immeuble

### 8. Depart de l'appartement

Cette rubrique aide le locataire a quitter le logement correctement.

Contenus possibles :

- Heure de depart
- Consignes de menage
- Que faire avec les draps et serviettes
- Fermer les fenetres
- Eteindre chauffage/climatisation
- Remettre les cles
- Verrouiller l'appartement

### 9. Quartier et commerces

Cette rubrique donne des informations utiles autour de l'appartement.

Contenus possibles :

- Supermarches proches
- Boulangeries
- Pharmacies
- Parkings
- Transports
- Restaurants recommandes
- Cafes
- Marches

### 10. Decouvrir Bordeaux

Cette rubrique propose des idees de visites et d'activites.

Contenus possibles :

- Musees
- Monuments
- Activites avec enfants
- Balades a pied
- Quais de Bordeaux
- Miroir d'eau
- Pont de Pierre
- Cite du Vin
- Excursions possibles autour de Bordeaux

### 11. Besoin d'aide

Cette rubrique doit permettre au locataire de savoir quoi faire rapidement.

Contenus possibles :

- Contact de la conciergerie
- Contact urgence proprietaire si applicable
- Probleme de serrure
- Probleme d'eau, electricite, chauffage
- Numeros d'urgence
- Procedure si le locataire est bloque dehors

## 7. Proposition de menu simplifie

Pour eviter un menu trop long, les rubriques peuvent etre regroupees en 6 gros boutons principaux :

1. **Entrer dans l'appartement**
   - Adresse
   - Nuki
   - Boite a cles de secours

2. **Wi-Fi et equipements**
   - Wi-Fi
   - TV
   - Cuisine
   - Appareils

3. **Chauffage et clim**
   - Chauffage
   - Climatisation
   - Reglages conseilles

4. **Vie dans le logement**
   - Regles de l'appartement
   - Immeuble
   - Couchages
   - Canape-lit
   - Couettes et oreillers
   - Poubelles
   - Voisinage

5. **Quartier et Bordeaux**
   - Commerces
   - Restaurants
   - Musees
   - Activites

6. **Depart et aide**
   - Checkout
   - Contacts
   - Urgences

Cette version est probablement la plus simple pour les locataires.

## 8. Informations sensibles

Certaines informations ne doivent pas etre affichees librement.

Informations sensibles identifiees :

- Code de boite a cles
- Emplacement exact de la boite a cles
- Eventuels codes d'acces fixes
- Contacts personnels si presents

Recommandation :

- Afficher les informations generales sans identification forte
- Demander une reidentification avant tout acces au code de secours
- Journaliser a terme les consultations du code de secours, si techniquement possible

## 9. Information RGPD et videosurveillance

L'immeuble est equipe de cameras de videosurveillance dans les parties communes. Cette information doit apparaitre rapidement dans l'application, idealement depuis la page d'accueil Maison LOU et dans la rubrique **Vie dans le logement**.

Objectifs du pave :

- Informer les locataires de facon claire et rassurante
- Expliquer que les cameras sont installees pour la securite des personnes et des biens
- Preciser que seules les parties communes sont concernees
- Indiquer que les images ne sont consultees qu'en cas d'incident
- Preciser que l'acces aux images est limite aux personnes habilitees
- Indiquer une duree de conservation de 30 jours maximum
- Rappeler l'existence des droits RGPD et la possibilite de contacter le responsable

Points de vigilance fonctionnelle :

- Le pave ne doit pas remplacer l'affichage obligatoire dans l'immeuble
- Les cameras ne doivent pas filmer l'interieur des appartements, les portes des appartements, les balcons, terrasses ou fenetres
- La duree de conservation doit etre definie precisement et ne doit pas etre choisie en fonction de la seule capacite technique de stockage
- Les informations de contact du responsable devront etre ajoutees avant publication
- Le texte final devra etre valide juridiquement ou administrativement avant mise en ligne

Proposition de texte court pour l'application :

> Pour votre securite, les parties communes de l'immeuble peuvent etre placees sous videosurveillance. Les cameras ont pour seule finalite la securite des personnes et des biens. Elles ne filment pas l'interieur des appartements. Les images ne sont consultees qu'en cas d'incident par les personnes habilitees, et sont conservees 30 jours maximum. Vous pouvez exercer vos droits relatifs aux donnees personnelles en contactant le responsable de Maison LOU.

Version courte pour un petit pave :

> Parties communes sous videosurveillance pour votre securite. Les images ne sont consultees qu'en cas d'incident, par des personnes habilitees, et conservees 30 jours maximum. Contact Maison LOU pour toute demande RGPD.

Informations a completer avant mise en ligne :

- Duree de conservation des images : 30 jours maximum, via l'abonnement aux cameras Tapo
- Identite ou qualite du responsable du traitement
- Moyen de contact RGPD
- Emplacement des panneaux d'information dans l'immeuble
- Confirmation que le dispositif respecte les regles applicables

Reference de travail :

- CNIL - Videosurveillance / videoprotection dans les immeubles d'habitation

## 10. Contenus differencies par appartement

Chaque appartement aura sa propre page et ses propres contenus.

Contenus qui peuvent varier :

- Photos
- Visuel local de l'appartement ou du lieu iconique associe au nom
- Couleur dominante
- Capacite
- Nom du Wi-Fi
- Mot de passe Wi-Fi
- Instructions Nuki
- Code de boite a cles
- Equipements disponibles
- Consignes specifiques
- Informations de depart

Contenus communs :

- Adresse de l'immeuble
- Vie de quartier
- Activites a Bordeaux
- Regles generales de l'immeuble
- Information RGPD et videosurveillance des parties communes
- Contacts d'aide

## 11. Ecrans principaux a prevoir

### Ecran d'accueil Maison LOU

En phase 1 :

- Logo ou titre Maison LOU
- Adresse courte : 32 rue des Remparts, Bordeaux
- Deux gros boutons :
  - Le Miroir d'eau
  - Le Pont de Pierre

En phase 2 :

- Formulaire d'identification
- Nom
- Numero de reservation
- Bouton d'acces

### Pave RGPD / videosurveillance

- Visible depuis l'accueil ou le bas de la page appartement
- Ton simple, rassurant, non anxiogene
- Lien ou bouton "En savoir plus"
- Acces a une version plus complete dans "Vie dans le logement"

### Ecran appartement

- Nom de l'appartement
- Capacite
- Couleur associee
- Menu avec gros boutons
- Acces rapide a "Besoin d'aide"

### Ecran rubrique

- Titre clair
- Instructions etapes par etapes
- Bouton retour
- Eventuellement photos ou pictogrammes

### Ecran code de secours

- Message rassurant
- Demande de reidentification
- Affichage du code uniquement apres validation
- Consignes pour remettre la cle

## 12. Points a completer plus tard

- Confirmer les capacites exactes des appartements
- Confirmer que Le Miroir d'eau est bien le duplex 4 couchages
- Confirmer que Le Pont de Pierre est bien l'appartement 2 couchages
- Confirmer l'association couleur/appartement
- Confirmer les informations de couchage : canape-lit, linge, couettes, oreillers
- Ajouter les photos des appartements
- Ajouter les informations Wi-Fi
- Ajouter les instructions exactes Nuki
- Ajouter les codes et emplacements des boites a cles
- Ajouter les contacts utiles
- Ajouter les consignes de depart
- Ajouter les informations de connexion a l'application de reservation
- Definir la methode de protection du code de secours en phase 1
- Ajouter le contact RGPD ou contact responsable Maison LOU
- Valider le texte RGPD / videosurveillance avant mise en ligne

## 13. Priorites de developpement

### Version 1

- Accueil Maison LOU
- Choix manuel de l'appartement
- Pages dediees aux deux appartements
- Menu simplifie en 6 gros boutons
- Pave court RGPD / videosurveillance visible rapidement
- Contenus exemples modifiables
- Design mobile-first avec deux themes couleur

### Version 2

- Contenus complets par appartement
- Ajout de photos
- Rubrique code de secours protegee par un code temporaire
- Amelioration de l'ergonomie mobile

### Version 3

- Connexion a l'outil de reservation
- Identification par nom et numero de reservation
- Redirection automatique vers le bon appartement
- Acces securise au code de boite a cles
- Eventuelle journalisation des acces sensibles
