# W51 PROJET

## Membre du groupe
- WAWRZYNIAK Maxime
- KRAUTH Thomas

## SUJET
- choisir une ou plusieurs API en open access
- réaliser une application web client avec React et React Router qui permet d'exploiter les données fournies par cette API
- si besoin, vous pouvez mettre en place une API annexe à vous pour y stocker des données

## SUJET qu'on a choisi
Pour le projet W51 nous avons décidé de faire un comparateur de prix de jeux que nous stockons dans une base de données. Pour récupérer les données, nous avons créé une API.




## DOCUMENTATION
```shell
git clone git@git.unistra.fr:mwawrzyniak/w51-projet.git
# Lancer l'application web
cd w51-projet
npm install
npm run dev

# Lancer API
cd w51-projet/server
npm install
nodemon start
# ou
node server.js
```
<hr>

### API
- API a été fait par nous via une base de données qu'on a sur un serveur à distance.
Notre API est également hébergé sur un serveur distant.

#### URL API : http://gamedealhub.com:8080/
#### GET
| | | | 
| --- | --- | --- |
| API | URL | Description |
| Filtre Jeux | /api/games/freetoplay/:limit | Retourne (:limit) jeux gratuits |
| Filtre Jeux | /api/games/mostrecents/:limit | Retourne (:limit) jeux les plus récents |
| Filtre Jeux | /api/games/underprice/:price | Retourne les jeux en dessous du (:prix) fixé |
| Filtre Jeux | /api/games/topdeals/:limit | Retourne (:limit) jeux avec le meilleur prix |
| Filtre Jeux | /api/games/:game_id | Retourne les informations d'un jeux |


## RESSOURCES

### FRAMEWORK
- [Material UI](https://mui.com/)
- Pagination

### AUTRES
- [Sass](https://sass-lang.com/)