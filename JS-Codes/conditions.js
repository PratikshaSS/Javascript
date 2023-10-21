// 1. if condition          >>checks 1 condition
// 2. if else condition     >> checks 2 conditions
// 3. else if condition     >> checks multiple
// 4. switch condition      >> checks equality


// if condition : SYNTAX >>

// if() {
//  code block
// }

// items greater than or equal to 50
let items = 20;
if (items > 50) {
    console.log("Stock Available");
}

// if else : SYNTAX >>
// if() {

// }
// else{

// }

if (items >= 50) {
    console.log("Stock Available");
}
else {
    console.log("Limited Stock Available");
}

// else if : SYNTAX >>
// if(){

// }
// else if(){

// }
// else if(){

// }
// else{

// }

if (items >= 50) {
    console.log("Stock is Available");
}
else if (items >= 20 && items <= 50) {
    console.log("Few Items Left");
}
else if (items >= 1 && items <= 20) {
    console.log("Hurry Up, Few Stock Available");
}
else {
    console.log("Out of Stock");
}


//switch >> SYNTAX >>
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let playerName = 'Sachin Tendulkar';
switch (playerName) {
    case 'Sachin Tendulkar':
        console.log("Cricket Player");
        break;
    case 'Virat Kohali':
        console.log("Cricket Player");
        break;   //it will continue execute all cases
    case 'Saniya Mirza':
        console.log("Tennis Player");
        break;
    case 'Messi':
        console.log("Football Player'");
        break;
    default:
        console.log("Not Found");
        
} 