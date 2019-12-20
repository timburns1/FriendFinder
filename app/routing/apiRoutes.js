let fs = require('fs');

module.exports = function (app, path) {
    app.get('/app/friends.js', function (req, res) {
        fs.readFile('/app/friends.js', 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            } else {
                res.json(JSON.parse(data));
            }
        })
    })
};

app.post('../friends.js', function (req, res) {
    let results = [];
    let postResponse = JSON.stringify(req.body);

    fs.readFile('../friends.js', function (err, data) {
        let friendFile = JSON.parse(data);

        let closestMatch = 0;
        let matchScore = 99999999;

        for (let i = 0; i < friendFile.length; i++) {
            let spaceBetween = 0;
            for (let j = 0; j < friendFile[i]['answers[]'].length; j++) {
                spaceBetween += Math.abs((parseInt(req.body['answers[]'][j]) - parseInt(friendFile[i]['answers[]'][j])));

                if (spaceBetween <= matchScore) {
                    matchScore = spaceBetween;
                    closestMatch = i;
                }
            }

            results.push(friendFile[closestMatch]);

            friendFile.push(JSON.parse(postResponse));

            fs.writeFile('../friends.js', JSON.stringify(friendFile));
            res.send(results[0]);

        }
    })


})