module.exports.homeView = function (req, res) {
   return res.sendFile("/landingPage.html", { root: __dirname });
};
