# W51 PROJET

## Membre du groupe
- WAWRZYNIAK Maxime
- KRAUTH Thomas


## SUJET qu'on a choisi
Pour le projet W51 nous avons décidé de faire un comparateur de prix de jeux que nous stockons dans une base de données. Pour récupérer les données, nous avons créé une API.




## DOCUMENTATION
```shell
git clone git@git.unistra.fr:mwawrzyniak/w51-projet.git
# Lancer l'application web
cd w51-projet
npm install
npm run dev
```
<hr>

### API
- API a été fait par nous via une base de données qu'on a sur un serveur à distance.
Notre API est également hébergé sur un serveur distant.

#### URL API : http://gamedealhub.com:8080/API_TOKEN=hvbPup569HAwx-byI2kNc1zLD-6=37DAym/
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