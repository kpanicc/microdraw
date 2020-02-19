const https = require("https")
const constants = require("../../constants.js")

module.exports = function (req, res, next) {
    https.get("http://" + constants.VISILABServer.IP + ":" + constants.VISILABServer.port + 
            "/getImageMetadata", (resp) => {
                let data = "";
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                resp.on('end', () => {
                    console.log(data);
                    datajson = JSON.parse(data);
                    res.send(datajson);
                });
            }).on("error", (err) => {
                res.status(404).send("Invalid response from the VISILAB server");
            });
    res.send({some: "json"});
};