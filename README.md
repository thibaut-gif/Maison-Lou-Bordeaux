# Maison LOU

MVP mobile du guide locataire Maison LOU pour les deux appartements du 32 rue des Remparts, 33000 Bordeaux.

## Tester en local

Depuis ce dossier :

```bash
python3 -m http.server 4173
```

Puis ouvrir :

```text
http://localhost:4173
```

## Parcours MVP

- Accueil "Bienvenue chez Maison Lou Bordeaux"
- Choix manuel entre Le Miroir d'eau et Le Pont de Pierre
- Page appartement avec grand visuel local
- Menu mobile en gros boutons
- Rubriques pratiques avec contenus exemples
- Pavé RGPD / vidéosurveillance
- Code de secours simulé, protégé par le code de test `LOU2026`

## Fichiers

- `index.html` - structure de l'application
- `styles.css` - interface mobile-first
- `app.js` - contenus et navigation
- `assets/pont-de-pierre-bordeaux.png` - visuel Pont de Pierre

## Crédits photos

- Accueil Bordeaux : Alexandre Duret-Lutz, CC BY-SA 2.0, via Wikimedia Commons
- Le Miroir d'eau : Patrick Despoix, CC BY-SA 4.0, via Wikimedia Commons
