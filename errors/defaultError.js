module.exports = function (err, req, res, next) {
    if (err) {
        res.status(500).send({ ERROR: err })
    } else {
        next()
    }
}