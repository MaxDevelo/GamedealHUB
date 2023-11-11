

<img src="src/assets/img/logo.png" alt="Logo de notre site" width="400" />


## Membre du groupe

- WAWRZYNIAK Maxime
- KRAUTH Thomas

## SUJET qu'on a choisi

Pour le projet W51 nous avons décidé de faire un comparateur de prix de jeux que nous stockons dans une base de données. Pour récupérer les données, nous avons créé une API.
Cette api est hébergée sur un VPS distant.

## DOCUMENTATION

```shell
git clone git@git.unistra.fr:wawrzyniak-krauth/w51-projet.git
# Lancer l'application web
cd w51-projet
npm install
# Si il y a un soucis avec react-elastic-carousel
npm run -f 
npm run dev
```

<hr>

### API

#### URL API : http://gamedealhub.net/API_TOKEN=hvbPup569HAwx-byI2kNc1zLD-6=37DAym/

#### GET

|                                |                                     |                                                                              |
| ------------------------------ | ----------------------------------- | ---------------------------------------------------------------------------- |
| API                            | URL                                 | Description                                                                  |
| Filtre Jeux                    | /api/games/freetoplay/:limit        | Retourne (:limit) jeux gratuits                                              |
| Filtre Jeux                    | /api/games/mostrecents/:limit       | Retourne (:limit) jeux les plus récents                                      |
| Filtre Jeux                    | /api/games/underprice/:price        | Retourne les jeux en dessous du (:prix) fixé                                 |
| Filtre Jeux                    | /api/games/topdeals/:limit          | Retourne (:limit) jeux avec le meilleur prix                                 |
| Information d'un jeu           | /api/game/:game_id                  | Retourne les informations d'un jeux (avec tous ses magasins où il est vendu) |
| Trier jeux les moins cher      | /api/games/topdeals/:limit/:sort    | Trier                                                                        |
| Trier jeux les plus récents    | /api/games/mostrecents/:limit/:sort | Trier                                                                        |
| Trier jeux gratuits            | /api/games/freetoplay/:limit/:sort  | Trier                                                                        |
| Trier jeux les plus populaires | /api/games/popular/:limit/:sort     | Trier                                                                        |
| Rechercher jeux                | /api/games/search/:name             | Recherche                                                                    |
| Filtrer jeux ayant ce genre    | /api/games/:genre_id                | Filtrer                                                                      |

#### POST

|                                                  |                            |                                                  |
| ------------------------------------------------ | -------------------------- | ------------------------------------------------ |
| API                                              | URL                        | Description                                      |
| Inscription                                      | api/users/signup           | Inscription                                      |
| Se connecter                                     | api/users/signin           | Se connecter                                     |
| Ajouter jeu dans wishlist                        | api/users/wishlist         | Ajouter jeu dans wishlist                        |
| Obtenir le jeu dans la wishlist de l'utilisateur | api/users/getwishlist      | Obtenir le jeu dans la wishlist de l'utilisateur |
| Obtenir les jeux de la wishlist de l'utilisateur | api/user/:user_id/wishlist | Obtenir les jeux de la wishlist de l'utilisateur |

#### DELETE

|                                                  |                                     |                                                  |
| ------------------------------------------------ | ----------------------------------- | ------------------------------------------------ |
| API                                              | URL                                 | Description                                      |
| Supprimer jeu de la wishlist de l'utilisateur | api/user/:user_id/wishlist/:game_id | Supprimer jeu de la wishlist de l'utilisateur|



## RESSOURCES

### FRAMEWORK

- [Material UI](https://mui.com/)
- Pagination
- Carousel

### AUTRES

- [Sass](https://sass-lang.com/)

## Résultats

<img src="screens/screen_1.png" alt="Logo de notre site" width="800" /><br/><br/>
<img src="screens/screen_2.png" alt="Logo de notre site" width="800" /><br/><br/>
<img src="screens/screen_3.png" alt="Logo de notre site" width="800" /><br/><br/>
<img src="screens/screen_4.png" alt="Logo de notre site" width="800" /><br/><br/>
<img src="screens/screen_5.png" alt="Logo de notre site" width="800" />