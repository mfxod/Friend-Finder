
// ===== ROUTES =====
const friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        
        // ===== COMPATABILITY LOGIC =====
        function compare(userAnswers, friendAnswers) {
            // create new array of differences between user answers and friend answers
            let newArr = [];
            for (let i = 0; i <= 9; i++) {
                const result = Math.abs(userAnswers[i] - friendAnswers[i])
                newArr.push(result)
            };
            // console.log("newArr: " + newArr)
        
            // get sum of differences of answers
            const difference = newArr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue
            });
            // console.log("difference: " + difference)
            return difference
        };
        
        function getDiffs() {
            // create new array of differences of answers for testing
            let diffsArr = [];
            for (let j = 0; j < friends.length; j++) {
                diffsArr.push(compare(req.body.scores, friends[j].scores));
            };
            // console.log(diffsArr);
            return diffsArr
        };
        
        // index of the smallest value in the diffsArr (the most compatible friend)
        const matchIndex = getDiffs().indexOf(Math.min(...getDiffs()));
        console.log(matchIndex);
        
        // how do I create a modal?
        
        // friends.push(req.body)
    })
};