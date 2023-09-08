let score = document.querySelector(".homeText")


let vlaue1 = document.querySelector(".homefirstbtn")
let value2 =document.querySelector(".homesecondbtn")
let value3 = document.querySelector(".homethirdbtn")
let secondValue = vlaue1.textContent
function addHomeFirstValue(){
   let sum = Number(score.textContent) + Number(secondValue)
   score.textContent = sum
}

function addHomeSecondValue(){
    let sum = Number(score.textContent) + Number(value2.textContent)
    score.textContent  = sum
 }
 function addHomeThirdValue(){
    let sum = Number(score.textContent) + Number(value3.textContent)
    score.textContent  = sum
 }


 let guestscore = document.querySelector(".guestText")
 let guestfirstvalue = guestscore.textContent
 let guestvlaue1 = document.querySelector(".homefirstbtn")
 let guestvalue2 =document.querySelector(".homesecondbtn")
 let guestvalue3 = document.querySelector(".homethirdbtn")

 function addGuestFirstValue(){
    let sum = Number(guestscore.textContent) + Number(guestvlaue1.textContent)
    guestscore.textContent  = sum
 }
 
 function addGuestSecondValue(){
   let sum = Number(guestscore.textContent) + Number(guestvalue2.textContent)
   guestscore.textContent  = sum
  }
  function addGuestThirdValue(){
     let sum = Number(guestscore.textContent) + Number(guestvalue3.textContent)
     guestscore.textContent  = sum
  }
 
