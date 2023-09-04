let score = document.querySelector(".homeText")


let vlaue1 = document.querySelector(".homefirstbtn")
let value2 =document.querySelector(".homesecondbtn")
let value3 = document.querySelector(".homethirdbtn")
let firstValue = score.textContent
function addHomeFirstValue(){
   let secondValue = vlaue1.textContent
   let sum = Number(firstValue) + Number(secondValue)
   score.textContent  = sum
}

function addHomeSecondValue(){
    let secondValue = value2.textContent
    let sum = Number(firstValue) + Number(secondValue)
    score.textContent  = sum
 }
 function addHomeThirdValue(){
    let secondValue = value3.textContent
    let sum = Number(firstValue) + Number(secondValue)
    score.textContent  = sum
 }


 let guestscore = document.querySelector(".guestText")
 let guestfirstvalue = guestscore.textContent
 let guestvlaue1 = document.querySelector(".homefirstbtn")
 let guestvalue2 =document.querySelector(".homesecondbtn")
 let guestvalue3 = document.querySelector(".homethirdbtn")

 function addGuestFirstValue(){
    let sum = Number(guestfirstvalue) + Number(guestvlaue1.textContent)
    guestscore.textContent  = sum
 }
 
 function addGuestSecondValue(){
     let sum = Number(guestfirstvalue) + Number(guestvalue2.textContent)
     guestscore.textContent  = sum
  }
  function addGuestThirdValue(){
     let sum = Number(guestfirstvalue) + Number(guestvalue3.textContent)
     guestscore.textContent  = sum
  }
 
