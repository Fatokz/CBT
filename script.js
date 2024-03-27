let output = document.getElementById("output")
let index = 0

let cbt = [
    {
        question: "What is your fav food",
        options: ['Rice', 'Beans', 'Yam', 'Spag'],
        answer: "Beans"
    },
    {
        question: "What is your fav course",
        options: ['HTML', 'CSS', 'JS', 'BOOTSTRAP'],
        answer: "JS"
    },
    {
        question: "What is your fav food",
        options: ['HTML', 'CSS', 'JS', 'BOOTSTRAP'],
        answer: "JS"
    },
    {
        question: "What is your fav food",
        options: ['HTML', 'CSS', 'JS', 'BOOTSTRAP'],
        answer: "JS"
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