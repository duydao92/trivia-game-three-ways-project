import fetch from "node-fetch";

export async function getClue (){
    let res = await fetch("https://jservice.xyz/api/random-clue");
    if(res.ok){
        return res.json()
    } else{
        throw new Error(res)
        }

    }

