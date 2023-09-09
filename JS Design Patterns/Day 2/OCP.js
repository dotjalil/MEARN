class ChoiceQuestion {
    constructor(description, options) {
        this.description = description;
        this.options = options;
    }

    printQuestion() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1} . ${option}`)
        })
    }
}

class BooleanQuestion{
    constructor(description)
    {
        this.description=description;
    }

    printQuestion()
    {
        console.log("1. true");
        console.log("2  false")
    }
}

class TextQuestion {
    constructor(description)
    {
        this.description=description;
    }

    printQuestion()
    {
        console.log("Answer is : -----------------------")
    }
}

class RangeQuestion{
    constructor(description)
    {
        this.description=description;
    }

    printQuestion()
    {
        console.log("Min :- -----------------")
        console.log("Max :- -----------------")

    }
}

var questions = [
    new BooleanQuestion("Singleton pattern is structure pattern ?"),
    new ChoiceQuestion("What is your favourite course ?",['ES6', 'JavaScript', 'JS DP']),
    new TextQuestion("Describe builder pattern in details"),
    new RangeQuestion("How To evaluate JS DP Course ?")
];

function printQuiz(questions)
{
    questions.forEach(question=>{
        console.log(question.description);
        question.printQuestion();
    })
}

printQuiz(questions);