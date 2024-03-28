let output = document.getElementById("output")
let index = 0

let cbt = [
    {
        question: "Question: What is your fav food",
        options: ['Options: Rice', 'Beans', 'Yam', 'Spag'],
        answer: "Answer: Beans"
    },
    {
        question: "Question: What is your fav course",
        options: ['Options: HTML', 'CSS', 'JS', 'BOOTSTRAP'],
        answer: "Answer: JS"
    },
    {
        question: "Question: What is your fav food",
        options: ['Options: HTML', 'CSS', 'JS', 'BOOTSTRAP'],
        answer: "Answer: JS"
    },
    {
        question: "Question: What is your fav food",
        options: ['Options: HTML', 'CSS', 'JS', 'BOOTSTRAP'],
        answer: "Answer: JS"
    },
]

function display() {
    output.innerHTML = `<h4>
    ${cbt[index].question} <br> 
    ${cbt[index].options} <br> 
    ${cbt[index].answer} <br> 
    </h4>`
}

display()

function next() {
    if (index == cbt.length - 1) {
        index = 0
    } else {
        index++
    }

    display()
}

function prev() {
    if (index == 0) {
        index = cbt.length - 1
    } else {
        index--
    }

    display()
}