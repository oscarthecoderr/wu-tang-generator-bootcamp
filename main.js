//Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).



// user must have options to click a answer for each question check
//once all answers are completed, click the answer button
// return the answer to the user
// after, reveal there wu-tang name.
// name generator options can be [zaddy tron ,mama pupusa, gold digger flex, stay Tru,  Cheese money] 
// display name answer into the dom
// if user wants to do the form again, reset form


document.querySelector('button').addEventListener('click', generateName)


//for(let i = 0 ; i<firstname.length ; i++) {lastName.push(Math.random())}


function generateName(){
  //let createName = ''
  let firstName = ['zaddy', 'tron' ,'mama', 'pupusa','gold','digger']

let lastName =['flex','stay','Tru','Cheese','money','yo']
  
 let answerOne = document.querySelector('#cereal-select').value
 let answerTwo = document.querySelector('#hood-select').value
 let answerThree = document.querySelector('#artist-select').value
 let answerFour = document.querySelector('#superHero-select').value
 let answerFive = document.querySelector('#hate-select').value
//  for( let i = 0 ; i < 12 ; i++){
//   let firsName = Math.floor(Math.random() * names.length)
let numberOne = Number(answerOne) + Number(answerTwo) 
let numberTwo = Number(answerThree) + Number(answerFour) + Number(answerFive)
if(numberTwo > 5){
  numberTwo = numberTwo / 2
}
let wu = firstName[numberOne]
let tang = lastName[numberTwo]
document.querySelector('.wu').innerText = wu
document.querySelector('.tang').innerText=  tang
 }






