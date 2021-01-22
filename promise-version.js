// const fetch = require('node-fetch')  // we don't need it bec we work in the browser

export function getClue(){
    return fetch("https://jservice.xyz/api/random-clue")
        .then(res=> {
        if(res.ok){
            return res.json()
        } else{
            throw new Error(res)
            }
        })
}
