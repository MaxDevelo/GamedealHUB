const db = require("../models/db.js");
module.exports = {
  getAllGames: (req, res, next) => {
    db.query("SELECT * FROM game LIMIT 40", function (err, data, fields) {
      if (err) return next(new AppError(err));
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
  },
  getGameById: (req, res, next) => {
    db.query("SELECT * FROM game WHERE id = ?", req.params.game_id, function (err, data, fields) {
      if (err) return next(new AppError(err));
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
  },
  
};
