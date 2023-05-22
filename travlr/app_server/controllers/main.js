/*  GET homepage */
const index = (req, res) => {
    res.render('inded', {title: 'Travlr Getaways'});
};
module.exports = {
    index
};