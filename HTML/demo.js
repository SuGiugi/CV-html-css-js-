function Infomation() {
    var currentvalue = document.getElementById('info').style.display;
    console.log(currentvalue);
    if(currentvalue == "none") {
        document.getElementById('info').style.display='block';
    } else {
        document.getElementById('info').style.display='none';
    }

}

function Ability() {
    var currentvalue = document.getElementById('Exp').style.display;
    console.log(currentvalue);
    if(currentvalue == "none") {
        document.getElementById('Exp').style.display='block';
    } else {
        document.getElementById('Exp').style.display='none';
    }

}