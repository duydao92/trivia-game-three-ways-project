// const fetch = require('node-fetch')  // we don't need it bec we work in the browser

 export function getClue(){
    fetch("https://jservice.xyz/api/random-clue")
    .then( res=> {
       if(res.ok){
        res.json()
       } else{
           throw new Error(res)
       }
    })
}

getClue()
