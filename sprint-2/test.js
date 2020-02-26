var button1 = document.getElementById("bt_1")
var button2 = document.getElementById("bt_2")
var button3 = document.getElementById("bt_3")
var button4 = document.getElementById("bt_4")
var button5 = document.getElementById("bt_5")
var button6 = document.getElementById("bt_6")
var button7 = document.getElementById("bt_7")
var button8 = document.getElementById("bt_8")
var button9 = document.getElementById("bt_9")
var input_id = document.getElementById("player1_select")
var letter = input_id.value 








// var letter = letter_id.value
var cell1_id = document.querySelectorAll("td")
var count = 0
//calculations
 var array = []



function hereMe(i){
    // if()
    // console.log("Inside Function")
    // console.log(letter)
    count ++
    if(count % 2 != 0){
        letter = 'X'
    }else{
        letter = 'O'
    }
    // array[count - 1] = letter
    cell1_id[i].innerHTML = letter
    cell1_id[i].style.fontSize = 50
    // array[count-1] = letter
    if(count >= 5){
        findResult()
    }
    // if(count == 9){
    //     findResult()
    // }
}

function findResult(){
    //getting individual <td> values into Array[]
var r1c1 = document.getElementById("id_1").innerHTML
var r1c2 = document.getElementById("id_2").innerHTML
var r1c3 = document.getElementById("id_3").innerHTML
var r2c1 = document.getElementById("id_4").innerHTML
var r2c2 = document.getElementById("id_5").innerHTML
var r2c3 = document.getElementById("id_6").innerHTML
var r3c1 = document.getElementById("id_7").innerHTML
var r3c2 = document.getElementById("id_8").innerHTML
var r3c3 = document.getElementById("id_8").innerHTML
array[0] = r1c1
array[1] = r1c2
array[2] = r1c3
array[3] = r2c1
array[4] = r2c2
array[5] = r2c3
array[6] = r3c1
array[7] = r3c2
array[8] = r3c3
// console.log(array)
if((array[0] == array[4] && array[4] == array[8]) || (array[2] == array[4] && array[4] == array[6]) || (array[0] == array[1] && array[1] == array[2]) || (array[3] == array[4] && array[4] == array[5]) || (array[6] == array[7] && array[7] == array[8])|| (array[0] == array[3] && array[3] == array[6])|| (array[1] == array[4] && array[4] == array[7])|| (array[2] == array[5] && array[2] == array[8])){
    if((array[0] == 'X' && array[8] == 'X' && array[4] == 'X') || (array[2] == 'X' && array[4] == 'X' && array[6] == 'X') || (array[0] == 'X' && array[1] == 'X' && array[2] =='X') || (array[3] == 'X' && array[4] == 'X' && array[5] == 'X') || (array[6] == 'X' && array[7] == 'X'&& array[8] == 'X')|| (array[0] == 'X' && array[3] == 'X'&& array[6] == 'X')|| (array[1] == 'X' && array[4] == 'X'&& array[7] == 'X')|| (array[2] == 'X' && array[5] == 'X'&& array[8] == 'X')){
        console.log("player 1 wins")
        
    }else if((array[0] == 'O' && array[8] == 'O' && array[4] == 'O') || (array[2] == 'O' && array[4] == 'O' && array[6] == 'O') || (array[0] == 'O' && array[1] == 'O' && array[2] =='O') || (array[3] == 'O' && array[4] == 'O' && array[5] == 'O') || (array[6] == 'O' && array[7] == 'O'&& array[8] == 'O')|| (array[0] == 'O' && array[3] == 'O'&& array[6] == 'O')|| (array[1] == 'O' && array[4] == 'O'&& array[7] == 'O')|| (array[2] == 'O' && array[5] == 'O'&& array[8] == 'O')){
        console.log("Player 2 wins")
    }
}else{
    console.log(array)
    console.log("player 3")
}
    
}





button1.addEventListener("click",function(){
    hereMe(0)
})
button2.addEventListener("click",function(){
    hereMe(1)
})
button3.addEventListener("click",function(){
    hereMe(2)
})
button4.addEventListener("click",function(){
    hereMe(3)
})
button5.addEventListener("click",function(){
    hereMe(4)
})
button6.addEventListener("click",function(){
    hereMe(5)
})
button7.addEventListener("click",function(){
    hereMe(6)
})
button8.addEventListener("click",function(){
    hereMe(7)
})
button9.addEventListener("click",function(){
    hereMe(8)
})
