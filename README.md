<p align="center">
    <img src="src/img/logo.png" width="400">
</p>

## À propos

Pour le projet Laravel, Jeevesen et moi-même avons choisi de réaliser un site d'immobilier.
Sur ce site, l'utilisateur peut consulter des annonces d'appartements, de maisons ou de villas. Afin d'afiner sa recherche, il peut aussi filtrer en fonction de ses besoins, c'est-à-dire de sélectionner s'il souhaite rechercher des appartements, des maisons ou des villas.
Une fois que ce dernier a trouvé l'appartement, la maison ou la villa de ses rêves, il peut réserver le bien afin de demander une visite. Pour se faire, l'utilisateur devra sélectionner la date à laquelle il souhaite visiter.

## Impératifs techniques

L'application répond à tous les critères imposés, c'est-à-dire que nous avons 4 models, des migrations de bases de données, des relations de tables, le CRUD complet, un système d'administration, un système utilisateur avec inscription et connexion, un design libre, un GIT, et un README.
Ci-dessous le détail des réponses aux critères imposés :
<ol>4 Models : Les catégories, les habitations, les réservations, et les utilisateurs</ol>
<ol>Migrations : Voir le dossier database/migrations</ol>
<ol>Des relations de table : Plusieurs clés étrangères, par exemple la table réservation qui récupère l'id de l'utilisateur et l'id de l'habitation à réserver</ol>
<ol>Le CRUD : Système de création, lecture, mise à jour et suppresion d'utilisateurs et d'habitations</ol>
<ol>Un système d'administration : À voir quand on se connecte en admin (email : admin@gmail.com / password : rootroot [voire les seeders])</ol>
<ol>Un système de connexion utilisateur : Voir sur le site directement</ol>
<ol>Design libre : On a fait ce qu'on pouvait</ol>
<ol>GIT : Oui</ol>
<ol>README : Vous êtes en train de le lire ☺</ol>

## Répartition des tâches

Les tâches ont été réparties de la manière suivante : <br>
Jeevesen :
<ol>Création des migrations</ol>
<ol>Mise en page côté Front</ol>
<ol>Création du système utilisateur</ol>
<ol>Création des catégories</ol>
<ol>Création des annonces d'habitations</ol>
<ol>Création du système de réservation</ol>
<ol>Organisation du site en fonction des rôles</ol>

Simon :
<ol>Déploiement du GIT</ol>
<ol>Mise en page côté Front</ol>
<ol>Création des migrations</ol>
<ol>Création des seeders</ol>
<ol>Organisation du site en fonction des rôles</ol>
<ol>Création du système de réservation</ol>
<ol>Rédaction du README</ol>

## Axes d'amélioration

Notre projet de l'AgenceJS peut-être améliorer, et nous vous proposons les améliorations suivantes :
<ol>Mise en place d'un système de date et heure de réservation unique</ol>
<ol>Vérification de l'âge de l'utilisateur lors de son inscription</ol>
<ol>Fin du système de la page contact</ol>
