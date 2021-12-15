var readline=require("readline-sync");
var chalk=require("chalk")
var username=readline.question(chalk.cyan("what is your name:"))
var score=0
console.log(chalk.yellow("welcome to sipriya's quiz"))
console.log(chalk.blue("welcome: "+username))
function check(question,answer,options){
  console.log(chalk.red(question))
  for(var i=0;i<options.length;i++){
  console.log(chalk.blue(i+1,options[i]))
}
  var useranswer=readline.questionInt("select your options:")
  if (useranswer===currentquestion.answer){
    console.log(chalk.green("you are right"))
    score++
  }
  else{
    console.log(chalk.red("you are wrong"))
  }
    console.log(chalk.yellow(" your current score "+score))
    console.log("________")
  }

  var questionBank=[
    {question:"who is know as the Iron Man of India",
    options:["Sardar Vallabhai Patel","Dr B.R.Ambedkar","Indira Gandhi","Thomas Alva Edison"],
    answer:1
    
  },
  {
    question:"who invented the Telephone ?",
    options:["Thomas Alva Edison","Alexander Graham Bell","Saipriya Munjam","Charles Babbage"],
    answer:2
  },
  {
    question:"who discovered Pencillin?",
    options:["Bankim Chandra Chatterjee","Thomas Alva Edison","Alexander Graham Bell","Alexander Fleming"],
    answer:4

  },{
      question:"The largest 4 digit number is?",
      options:["5550","30","9999","3333"],
      answer:3
  },
{
    question:"In which continent is India located ?",
    options:["hyderabad","Asia","Brazil","Pune"],
    answer:2

}]
for (var i=0;i<questionBank.length;i++){
var currentquestion=questionBank[i]
check(currentquestion.question,currentquestion.answer,currentquestion.options)

}

console.log(chalk.blueBright("boom!,if your get  high score send me a screenshot tell me i will update"))
console.log(chalk.yellow("your current scoreis",score))



