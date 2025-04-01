let homeScore=document.getElementById("home-score")
let guestScore=document.getElementById("guest-score")
let countHome=0;
let countGuest=0
function homeOne(){
    countHome+=1
    homeScore.textContent=countHome
}
function homeTwo(){
    countHome+=2
    homeScore.textContent=countHome
}

function homeThree(){
    countHome+=3
    homeScore.textContent=countHome
}


function guestOne(){
    countGuest+=1
    guestScore.textContent=countGuest
}

function guestTwo(){
    countGuest+=2
    guestScore.textContent=countGuest
}

function guestThree(){
    countGuest+=3
    guestScore.textContent=countGuest
}

function reset(){
    guestScore.textContent="0"
    homeScore.textContent="0"
}


