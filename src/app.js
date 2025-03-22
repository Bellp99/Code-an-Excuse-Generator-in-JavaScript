import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

// 1 Create the arrays with different parts of the excuse: w
  let who = ['My grandma ', 'The dog ', 'The mailman ', 'My bird '];
  let action = ['broke ', 'ate ', 'crushed ', 'destroyed '];
  let what = ['my car ', 'my homework ', 'my phone '];
  let when = ['before class started.', 'while I was sleeping.', 'during lunchtime.'];

//2. Randomly select 1 item each of the arrays
  let selectedWho = Math.floor(Math.random()* who.length)
  let selectedAction = Math.floor(Math.random()* action.length)
  let selectedWhat = Math.floor(Math.random()* what.length)
  let selectedWhen = Math.floor(Math.random()* when.length)

 // console.log("selectedWho: ", selectedWho);
 // console.log("selectedAction: ", selectedAction);
 // console.log("selectedWhat: ", selectedWhat);
 // console.log("selectedWhen: ", selectedWhen);

//3. Combine the parts of the sentence to form the complete statement.
  let statement = who[selectedWho] 
                + action[selectedAction] 
                + what[selectedWhat] 
                + when[selectedWhen];

  console.log(statement);

  //4.  Apply the ramdon statement to the browser
  let  htmlStatement = document.querySelector('.excuse');
  htmlStatement.innerHTML = statement;
};
