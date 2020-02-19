const metadata = function (req, res, next) {
    res.send({some: "json"});
}
exports.getImageMetadata = metadata;