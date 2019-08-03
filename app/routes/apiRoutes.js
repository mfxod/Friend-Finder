
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
        
            // get sum of differences of answers
            const difference = newArr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue
            });
        
            return difference
        };
        
        function getDiffs() {
            // create new array of differences of answers for testing
            let diffsArr = [];
            for (let j = 0; j < friends.length; j++) {
                // replace userTest with user-supplied answers from survey
                diffsArr.push(compare(req.body.scores, friends[j].scores));
            };
            // console.log(diffsArr);
            return diffsArr
        };
        
        // index of the smallest value in the diffsArr (the most compatible friend)
        const matchIndex = getDiffs().indexOf(Math.min(...getDiffs()));
        // console.log("matchIndex: " + matchIndex);
        
        // how do I create a modal?
        
        // friends.push(req.body)
    })
};



// ===== COMPATABILITY LOGIC =====
// const userTest = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// function compare(userAnswers, friendAnswers) {
//     // create new array of differences between user answers and friend answers
//     let newArr = [];
//     for (let i = 0; i <= 9; i++) {
//         const result = Math.abs(userAnswers[i] - friendAnswers[i])
//         newArr.push(result)
//     };

//     // get sum of differences of answers
//     const difference = newArr.reduce(function (accumulator, currentValue) {
//         return accumulator + currentValue
//     });

//     return difference
// };

// function getDiffs() {
//     // create new array of differences of answers for testing
//     let diffsArr = [];
//     for (let j = 0; j < friends.length; j++) {
//         // replace userTest with user-supplied answers from survey
//         diffsArr.push(compare(userTest, friends[j].scores));
//     };
//     // console.log(diffsArr);
//     return diffsArr
// };

// // find smallest value in diffsArr and use its index to display friend match
// const matchIndex = getDiffs().indexOf(Math.min(...getDiffs()));
// // console.log(matchIndex);