let number;
let chances=3
let c =1;s=0;
function start() {
    if(1)document.getElementsByTagName("DIV")[0].style.opacity="0";

    document.getElementsByTagName("DIV")[0].style.display="none";
    generate();
    document.getElementsByClassName('layer1')[0].style.display="flex"
    document.getElementsByClassName('layer1')[0].style.opacity="1"
}
function generate(params) {
    // number=Math.floor((Math.random() * 90) + 10);
    number=2;
}
function first() {
    chances--;

    let guess=Number(document.getElementById('input1').value)
    compare(guess);
    if(guess==number){s=1;congrates();return 1;}else{
        if(c==0){document.getElementById("response").innerText="Aww missed again";}
        if(c==1){document.getElementById("response").innerText="aww missed";c=0;}

 }
 document.getElementsByTagName("span")[0].innerText=String(Number(document.getElementsByTagName("span")[0].innerText)-1)
 if(chances==0 && s!=1){sorry();return 0;}
}

function sorry() {
    document.getElementsByTagName("MAIN")[0].style.display="none"
    document.getElementsByTagName("DIV")[3].style.display="grid"
}
function congrates() {
    document.getElementsByTagName("MAIN")[0].style.display="none"
    document.getElementsByTagName("*")[0].style.backgroundColor="white"
    document.getElementsByTagName("DIV")[2].style.display="grid"
}

function compare(x) {document.getElementById('compare').style.display="block";
    if(x>number)document.getElementById('compare').innerText="Go lower"
    else if(x<number)document.getElementById('compare').innerText="Go upper"


}