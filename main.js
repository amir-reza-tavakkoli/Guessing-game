let number;
let chances=3
let c =1;
let s=0;

function start() {
    // document.getElementsByTagName("DIV")[0].style.transition= 'display 1s'
    if(1)document.getElementsByTagName("DIV")[0].style.opacity="0";
    document.getElementsByTagName("DIV")[0].style.visibility="hidden"
    generate();
    document.getElementsByClassName('layer1')[0].style.display="flex"
    document.getElementsByClassName('layer1')[0].style.opacity="1"
}

function generate(params) {
    number=Math.floor((Math.random() * 90) + 10);
    // number=2;
}
function first() {

    chances--;

    let guess=Number(document.getElementById('input1').value)
    compare(guess);
    if(guess==number){
        s=1;congrates();return 1;
    }
    else{
        if(c==0){
            document.getElementById("response").          innerText="Aww missed again";
        }
        if(c==1){
            document.getElementById("response"). innerText="aww missed";c=0;
        }
 }
 document.getElementsByTagName("span")[0].innerText=String(Number(document.getElementsByTagName("span")[0].innerText)-1)
 if(chances==0 && s!=1){
     sorry();
     return 0;}
}

function sorry() {
    document.getElementsByTagName("MAIN")[0].style.display="none"
    // document.getElementsByTagName("MAIN")[0].style.visibility="hidden"
    document.getElementsByTagName("DIV")[3].style.display="grid"
    document.getElementsByTagName("span")[1].innerText=String(number)
}
function congrates() {
    document.getElementsByTagName("MAIN")[0].style.display="none"
    document.getElementsByTagName("*")[0].style.backgroundColor="white"
    document.getElementsByTagName("DIV")[2].style.display="grid"
}

function compare(x) {document.getElementById('compare').style.opacity="1";
    if(isNaN(x)){document.getElementById('compare').innerText="Not a number"}
    else if(x>number)document.getElementById('compare').innerText="Go lower"
    else if(x<number)document.getElementById('compare').innerText="Go upper"
}

function doit() {
    document.getElementsByTagName("DIV")[0].style.display="none";
}

function changec(xxx) {
    chances=xxx;
    document.getElementById("cool").style.transition = "all 1s";
    document.getElementById('five').style.display="none";
    document.getElementsByTagName("span")[0].innerText=String(xxx)
    document.getElementsByTagName("dfn")[0].innerText=String(xxx)
if(xxx==6){start();return 1;}
if(xxx=5){    document.getElementById('xxx').style.display="none";}
    document.getElementById('coolp').style.visibility="visible";
    document.getElementById('cool').style.visibility="visible";

    document.getElementById('cool').style.transform= "translateX(-0.001%)"


    // document.getElementById("cool").style.transform = "rotate(7deg)";

    setTimeout(function name() {
        // document.getElementById('cool').style.trasform= "translateY(100%)";

        document.getElementById('cool').style.opacity="0";
    },2000);

}
