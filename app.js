// display function
function display(val){
    document.getElementById("result").value += val;
    return val;
}

// main logic
function solve(){
    let x = document.getElementById("result").value;
    // evaluate is a default javascript function
    let y = eval (x)
    document.getElementById("result").value = y;

    return y;
}
// erase screen
function clearScreen(){
    document.getElementById("result").value = "";
}

