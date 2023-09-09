var questions = [
    {
        type: 'boolean',
        description: 'Singleton pattern is structure pattern'
    },
    {
        type: 'choose',
        description: 'What is your favourite course ?',
        options: ['ES6', 'JavaScript', 'JS DP']
    },
    {
        type: 'text',
        description: 'Describe builder pattern in details'
    }
];

function printQuiz(questions)
{
    questions.forEach(question=>{
        console.log(question.description);
        if(question.type=="boolean")
        {
            console.log("1 :true");
            console.log("2 :false");
        }
        else if(question.type=="choose")
        {
            question.options.forEach((option,index)=>{
                console.log(`${index+1} . ${option}`)
            })
        }
        else if(question.type=="text")
        {
            console.log("Answer is : --------------------------")
        }
    })
}

printQuiz(questions);