const jwt = require("jsonwebtoken");

module.exports = class loginController {
  //Verifica se o token foi gerado
  static async verificaJWT(req, res, next) {
  const authorizationHeader = req.headers['authorization'];
  const token = authorizationHeader && authorizationHeader.startsWith('Bearer ')
    ? authorizationHeader.split(' ')[1]
    : null;    
    if (!token)
      return res
        .status(401)
        .json({ auth: false, message: "Nenhum token criado." });
    console.log(token);
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      if (err)
        return res
          .status(500)
          .json({ auth: false, message: "Falha na autenticação com o token." });
      req.userId = decoded.sub;
      console.log(token);
      next();
    });
  }
};
