
let friendsArr = [
    {
        "name": "Joe F.",
        "photo": "https://picsum.photos/id/1025/300",
        "scores": ["10", "2", "9", "4", "8", "6", "7", "8", "6", "10"]
    },
    {
        "name": "Matt O.",
        "photo": "https://picsum.photos/id/22/300",
        "scores": ["4", "2", "3", "8", "8", "6", "7", "6", "1", "3"]
    },
    {
        "name": "Mary Q.",
        "photo": "https://picsum.photos/id/1005/300",
        "scores": ["5", "7", "10", "3", "5", "10", "7", "8", "2", "10"]
    },
    {
        "name": "Tracy Z.",
        "photo": "https://picsum.photos/id/177/300",
        "scores": ["10", "7", "7", "7", "5", "6", "7", "4", "9", "3"]
    },
    {
        "name": "John W.",
        "photo": "https://picsum.photos/id/1077/300",
        "scores": ["8", "4", "8", "10", "5", "6", "3", "2", "3", "3"]
    }
];

module.exports = friendsArr;



// ===== COMPATABILITY LOGIC =====

const userTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function compare(userAnswers, friendAnswers) {
    // create new array of differences between user answers and friend answers
    let newArr = [];
    for (let i = 0; i <= 9; i++) {
        const result = Math.abs(userAnswers[i] - friendAnswers[i])
        newArr.push(result)
    };
    console.log(newArr)

    // get sum of differences of answers
    const difference = newArr.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
    });
    console.log(difference);
};

// compare(userTest, friendsArr[0].scores)

function getDiffs () {
    // create new array of differences of answers for testing
    let diffsArr = [];
    for (let j = 0; j <= friendsArr.length; j++) {
        // replace userTest with user-supplied answers from survey
        diffsArr.push(compare(userTest, friendsArr[j].scores));
    };
    console.log(diffsArr);
};

// getDiffs()

console.log(Math.abs("6"))