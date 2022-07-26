//Get hold of the score element first.
//FOR HOME
let homeScore= document.getElementById('home-score')
let countHome=0

function add1home() {
    countHome+=1
    homeScore.textContent=countHome
    colour()
}
function add2home() {
    countHome+=2
    homeScore.textContent=countHome
    colour()
}
function add3home() {
    countHome+=3
    homeScore.textContent=countHome
    colour()
}

//FOR GUEST
let guestScore= document.getElementById("guest-score")
let countGuest=0

function add1guest() {
    countGuest+=1
    guestScore.textContent=countGuest
    colour()
}
function add2guest() {
    countGuest+=2
    guestScore.textContent=countGuest
    colour()
}
function add3guest() {
    countGuest+=3
    guestScore.textContent=countGuest
    colour()
}

//NOw let's have our new game.
function newGame() {
    countHome=0
    countGuest=0
    homeScore.textContent=countHome
    guestScore.textContent=countGuest
    homeScore.style.color = '#F94F6D' 
    guestScore.style.color = '#F94F6D' 
}

// attempt to change text colorr
function colour() {
     if (countHome > countGuest) {
            homeScore.style.color = 'lightgreen' 
            guestScore.style.color = '#F94F6D' 
            }
     else if (countHome < countGuest){
            guestScore.style.color = 'lightgreen'
            homeScore.style.color = '#F94F6D'
            }
    else {
            guestScore.style.color = '#F49FAE'
            homeScore.style.color = '#F49FAE'

    }


}