const fs = require('fs');
const path = require('path');

const travel = (req, res) => {
    const tripsPath = path.join(__dirname, '../../data/trips.json');
    const trips = JSON.parse(fs.readFileSync(tripsPath, 'utf8'));
    res.render('travel', {
        title: 'Travlr Getaways',
        trips
    });
};

module.exports = {
    travel
};