const db = require("../models/db.js");

module.exports = {
  getAllGames: (req, res, next) => {
    db.query("SELECT * FROM game LIMIT 40", function (err, data, fields) {
      if (err) return next(err);
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
  },
  getGameById: (req, res, next) => {
    db.query(
      "SELECT * FROM game WHERE id = ?",
      req.params.game_id,
      function (err, data, fields) {
        if (err) return next(err);
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
  },
  getFreeToPlayGames: (req, res, next) => {
    db.query(
      "SELECT game.name as nameGame,coverH,thumbnail,description,website,store_catalog.seller as seller,store_catalog.launcher as launcher,LOWER(s.name) as sellerName, l.name as launcherName,url,region,price, game.date " +
        "FROM game JOIN store_catalog ON game.id=store_catalog.game " +
        "JOIN store_price ON game.id=store_price.game " +
        "AND store_catalog.seller = store_price.seller " +
        "AND store_catalog.launcher = store_price.launcher " +
        "JOIN store_seller as s ON store_price.seller=s.id JOIN store_seller as l ON store_price.launcher=l.id " +
        "WHERE UPPER(store_price.region)='FR' AND store_price.price = 0 AND LOWER(s.name) in ('steam', 'epic games') AND game.date < '2099-01-01'" +
        " ORDER BY RAND(), game.date DESC LIMIT 20",
      function (err, data, fields) {
        if (err) return next(err);
        res.status(200).json({
          data,
        });
      }
    );
  },
  getMostRecentsGames: (req, res, next) => {
    db.query(
      "SELECT game.name as nameGame,coverH, description, thumbnail,website,store_catalog.seller as seller,store_catalog.launcher as launcher,LOWER(s.name) as sellerName, l.name as launcherName,url,region,ROUND(price / 60, 2) as price, game.date FROM game" +
        " JOIN store_catalog ON game.id=store_catalog.game" +
        " JOIN store_price ON game.id=store_price.game AND store_catalog.seller = store_price.seller AND store_catalog.launcher = store_price.launcher" +
        " JOIN store_seller as s ON store_price.seller=s.id" +
        " JOIN store_seller as l ON store_price.launcher=l.id" +
        " WHERE UPPER(store_price.region)='FR' AND LOWER(s.name) in ('steam', 'epic games') AND url IS NOT NULL AND game.date < '2099-01-01'" +
        " ORDER BY game.date DESC LIMIT ?",
      Number(req.params.limit),
      function (err, data, fields) {
        if (err) return next(err);
        res.status(200).json({
          data,
        });
      }
    );
  },
  getGamesUnderPrice: (req, res, next) => {
    db.query(
      "SELECT game.name as nameGame,coverH,thumbnail,website,store_catalog.seller as seller,store_catalog.launcher as launcher,LOWER(s.name)as sellerName, l.name as launcherName,url,region,ROUND(price / 60, 2) as price_game, game.date" +
        " FROM game JOIN store_catalog ON game.id=store_catalog.game" +
        " JOIN store_price ON game.id=store_price.game" +
        " AND store_catalog.seller = store_price.seller" +
        " AND store_catalog.launcher = store_price.launcher" +
        " JOIN store_seller as s ON store_price.seller=s.id JOIN store_seller as l ON store_price.launcher=l.id" +
        " WHERE UPPER(store_price.region)='FR'  and ROUND(price / 60, 2) < ? and price != 0" +
        " ORDER BY RAND()" +
        " LIMIT 20",
      req.params.price,
      function (err, data, fields) {
        if (err) return next(err);
        res.status(200).json({
          data,
        });
      }
    );
  },
  getTopDealsGames: (req, res, next) => {
    db.query(
      "SELECT game.name as nameGame,coverH,thumbnail,description,s.name, website,store_catalog.seller as seller,store_catalog.launcher as launcher,LOWER(s.name) as sellerName, l.name as launcherName,url,region,ROUND(price / 60, 2) as price, game.date" +
        " FROM game JOIN store_catalog ON game.id=store_catalog.game" +
        " JOIN store_price ON game.id=store_price.game" +
        " AND store_catalog.seller = store_price.seller" +
        " AND store_catalog.launcher = store_price.launcher" +
        " JOIN store_seller as s ON store_price.seller=s.id JOIN store_seller as l ON store_price.launcher=l.id" +
        " WHERE UPPER(store_price.region)='FR' AND game.date < '2099-01-01' AND store_price.price > 0" +
        " GROUP BY store_catalog.game" +
        " HAVING (SELECT COUNT(*)" +
        " FROM store_catalog s" +
        " WHERE s.game = store_catalog.game" +
        " GROUP BY s.game" +
        " HAVING COUNT(*) > 1) > 1" +
        " ORDER BY store_price.price , game.date DESC LIMIT 20",
      function (err, data, fields) {
        if (err) return next(err);
        res.status(200).json({
          data,
        });
      }
    );
  },
};
