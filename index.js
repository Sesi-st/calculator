var clearBtn = document.getElementById("clearBtn");
var sevenBtn = document.getElementById("sevenBtn");
var fourBtn = document.getElementById("fourBtn");
var oneBtn = document.getElementById("oneBtn");
var zeroBtn = document.getElementById("zeroBtn");
var plusminus = document.getElementById("plusminus");
var eightBtn = document.getElementById("eightBtn");
var fiveBtn = document.getElementById("fiveBtn");
var twoBtn = document.getElementById("twoBtn");
var name = document.getElementById("name");
var remender = document.getElementById("remender");
var nineBtn = document.getElementById("nineBtn")
var sixBtn = document.getElementById("sixBtn");
var threeBtn = document.getElementById("threeBtn");
var decimal = document.getElementById("decimal");
var divide = document.getElementById("divide");
var multiply = document.getElementById("multiply");
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var equalto = document.getElementById("equalto");
var number = document.getElementById("number");

var count = "";

var holdresult;
var result;

sevenBtn.onclick = function(){
    count+= "7";
    count = Number(count);
    number.textContent = count;
}

nineBtn.onclick = function(){
    count+= "9";
    count = Number(count);
    number.textContent = count;
}

clearBtn.onclick = function(){
    count = "";
    number.textContent = count;
    divide.style.backgroundColor = "orange";
    divide.style.color = "white";
    divide.style.transition = "0.3s";
    multiply.style.backgroundColor = "orange";
    multiply.style.color = "white";
    minus.style.backgroundColor = "orange";
    minus.style.color = "white";
    plus.style.backgroundColor = "orange";
    plus.style.color = "white";
    equalto.style.backgroundColor = "orange";
    equalto.style.color = "white";
}

fourBtn.onclick = function(){
    count+= "4";
    count = Number(count);
    number.textContent = count;
}

oneBtn.onclick = function(){
    count+= "1";
    count = Number(count);
    number.textContent = count;
}

zeroBtn.onclick = function(){
    count+= "0";
    number.textContent = count;
}

eightBtn.onclick = function(){
    count+= "8";
    count = Number(count)
    number.textContent = count;
}

fiveBtn.onclick = function(){
    count+= "5";
    count = Number(count)
    number.textContent  = count;
}

twoBtn.onclick = function(){
    count+= "2";
    count = Number(count)
    number.textContent = count;
}

sixBtn.onclick = function(){
    count+= "6";
    count = Number(count)
    number.textContent = count;
}

threeBtn.onclick = function(){
    count+= "3";
    count = Number(count)
    number.textContent = count;
}

divide.onclick = function(){
    count = "";
    number.textContent = count;
    divide.style.backgroundColor = "powderblue";
    divide.style.color = "orange";
    divide.style.transition = "0.3s";
    multiply.style.backgroundColor = "orange";
    multiply.style.color = "white";
    minus.style.backgroundColor = "orange";
    minus.style.color = "white";
    plus.style.backgroundColor = "orange";
    plus.style.color = "white";
    equalto.style.backgroundColor = "orange";
    equalto.style.color = "white";
}

multiply.onclick = function(){
    count = "";
    number.textContent = count;
    multiply.style.backgroundColor = "powderblue";
    multiply.style.color = "orange";
    multiply.style.transition = "0.3s";
    divide.style.backgroundColor = "orange";
    divide.style.color = "white";
    minus.style.backgroundColor = "orange";
    minus.style.color = "white";
    plus.style.backgroundColor = "orange";
    plus.style.color = "white";
    equalto.style.backgroundColor = "orange";
    equalto.style.color = "white";
}

minus.onclick = function(){
    count = "";
    number.textContent = count;
    minus.style.backgroundColor = "powderblue";
    minus.style.color = "orange";
    minus.style.transition = "0.3s";
    multiply.style.backgroundColor = "orange";
    multiply.style.color = "white";
    divide.style.backgroundColor = "orange";
    divide.style.color = "white";
    plus.style.backgroundColor = "orange";
    plus.style.color = "white";
    equalto.style.backgroundColor = "orange";
    equalto.style.color = "white";
}

plus.onclick = function(){
    holdresult = count;
    holdresult = Number(holdresult);
    number.textContent = count;
    plus.style.backgroundColor = "powderblue";
    plus.style.color = "orange";
    plus.style.transition = "0.3s";
    multiply.style.backgroundColor = "orange";
    multiply.style.color = "white";
    minus.style.backgroundColor = "orange";
    minus.style.color = "white";
    divide.style.backgroundColor = "orange";
    divide.style.color = "white";
    equalto.style.backgroundColor = "orange";
    equalto.style.color = "white";
    count = "";
}

equalto.onclick = function(){
    equalto.style.backgroundColor = "powderblue";
    equalto.style.color = "orange";
    equalto.style.transition = "0.3s";
    multiply.style.backgroundColor = "orange";
    multiply.style.color = "white";
    minus.style.backgroundColor = "orange";
    minus.style.color = "white";
    plus.style.backgroundColor = "orange";
    plus.style.color = "white";
    divide.style.backgroundColor = "orange";
    divide.style.color = "white";
    result = count + holdresult;
    number.textContent = result
    holdresult = 0
    count = 0
}