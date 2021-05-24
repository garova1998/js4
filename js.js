const knopka1 = document.getElementById('btn');

const knopka2 = document.getElementById('btn1');

const knopka3 = document.getElementById('btn2');

let arr1 = ["true", "привет", "23.05.2021"];

let arr2 = ["true", "привет", "ssss.05.2021"];

let arr3 = ["true", "привет", "ssss.dasdasdasdasasd.2021"];

knopka1.addEventListener('click',function ffa(){

    alert(arr1);

} )



knopka2.addEventListener('click',function ff(){

    alert(arr2);

} )

knopka3.onclick = function(){
    alert(arr3);
    return arr3
}

