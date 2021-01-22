import {getClue as getClueFromPromise} from './promise-version.js'

document.addEventListener('DOMContentLoaded', () => {
    document
        .getElementById('use-promise')
        .addEventListener('click', () => {
            getClueFromPromise()
                .then((clueObj) => {
                    document
                        .getElementById('category-title')
                        .innerHTML = (clueObj.category.title)
                    document
                        .getElementById('question')
                        .innerHTML = (clueObj.question)
                    document
                        .getElementById('value')
                        .innerHTML = (clueObj.value)
                    document
                        .getElementById('answer')
                        .innerHTML = (clueObj.answer)
                    if (clueObj.invalid_count && clueObj.invalidCount > 0) {
                        document
                            .getElementById('invalid-count')
                            .innerHTML = 'valid'
                    } else {
                        document
                            .getElementById('invalid-count')
                            .innerHTML = 'invalid'
                    }
                }
            ).catch ((err) => console.log(err))
        }
    )
})


// {id: 328790, answer: "Homicide", category: {id: 38327, title: "HOW CHEAP WERE THEY?", canon: true}, question: "It's murder,"H is for..."", value: 200, categoryId: 38607, …}

// #question
// #answer
// #value
// #categoryTitle
