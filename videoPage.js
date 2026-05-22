setTimeout(function() {
    document.querySelector("body").classList.add("show");
}, 500);

function homeLink() {
    document.querySelector("body").style.opacity = 0;
    document.querySelector("body").style.background = "radial-gradient(ellipse at bottom, #000 0%, #000 100%)";
    setTimeout(function(){
        window.location.replace("index.html");
    }, 250);
}

function projLink() {
    document.querySelector("body").style.opacity = 0;
    document.querySelector("body").style.background = "radial-gradient(ellipse at bottom, #000 0%, #000 100%)";
    setTimeout(function(){
        window.location.replace("projects.html");
    }, 250);
}

function vidLink() {
    document.querySelector("body").style.opacity = 0;
    document.querySelector("body").style.background = "radial-gradient(ellipse at bottom, #000 0%, #000 100%)";
    setTimeout(function(){
        window.location.replace("videoPage.html");
    }, 250);
}

function privacyPolicyLink() {
    document.querySelector("body").style.opacity = 0;
    setTimeout(function(){
        window.location.replace("privacyPolicy.html");
    }, 250);
}

function websiteRegulationsLink() {
    document.querySelector("body").style.opacity = 0;
    setTimeout(function(){
        window.location.replace("websiteRegulations.html");
    }, 250);
}

function accessibilityStatementLink() {
    document.querySelector("body").style.opacity = 0;
    setTimeout(function(){
        window.location.replace("accessibilityStatement.html");
    }, 250);
}

const vidTitle = document.getElementById("videoTitle");
const vidSubtitle = document.getElementById("videoSubtitle");
// const vidVid = document.getElementById("videoVid");
const vidVid = document.getElementById("ytVideo");

function setVid() {
    if (localStorage.getItem("~videoNum") != null) {
        switch(localStorage.getItem("~videoNum")) {
            case "1":
                vidTitle.innerHTML = "בר מצווה לשוהם";
                vidSubtitle.innerHTML = "סרטון תמונות רצות אלגנטי לאירוע בר המצווה של שוהם";
                vidVid.src = "https://www.youtube.com/embed/axXoJ_d6nSI?si=CK1xs_ee3oQVwzBK";
                // vidVid.src = "src/shohambbarmitzva.mp4";
                // vidVid.poster = "src/pjvBarMizvaShoham.png";
                break;
            case "2":
                vidTitle.innerHTML = "Microsoft Campus Herzelia";
                vidSubtitle.innerHTML = "A video of Microsoft campus in Herzelia from the birds eyes";
                vidVid.src = "";
                // vidVid.src = "src/microsoft.mp4";
                // vidVid.poster = "src/pjdMicrosoftHerzelia.png";
                break;
            case "3":
                vidTitle.innerHTML = "Mandarin Hotel Tel  Aviv";
                vidSubtitle.innerHTML = "A video of Mandarin hotel in Tel Aviv from the birds eyes";
                vidVid.src = "";
                // vidVid.src = "src/mandarin.mp4";
                // vidVid.poster = "src/pjdMandarinHotel.png";
                break;
            case "4":
                vidTitle.innerHTML = "קדמה נווה אילן";
                vidSubtitle.innerHTML = "סרטון של אולם האירועים קדמה בנווה אילן מלמעלה";
                vidVid.src = "https://www.youtube.com/embed/n4_wP-lUI8w?si=2o9hiQtvPTcn7-PK";
                // vidVid.src = "src/kedma.mp4";
                // vidVid.poster = "src/pjdKedma.png";
                break;
            case "5":
                vidTitle.innerHTML = "יום מירוץ של ProDrive ב MotorCity";
                vidSubtitle.innerHTML = " סרטון ערוך של אירוע מירוץ של ProDrive במסלול MotorCity בדרום הארץ";
                vidVid.src = "https://www.youtube.com/embed/Rm4rUz1TcxQ?si=OBZu6wULi6WqYo8d";
                // vidVid.src = "src/motorCityVideo.mov";
                // vidVid.poster = "src/pjvMotorCity.png";
                break;
            case "6":
                vidTitle.innerHTML = "עין כרם מהאוויר";
                vidSubtitle.innerHTML = "צילום רחפן של עין כרם והאיזור סביבה מנקודת מבט של ציפור";
                vidVid.src = "https://www.youtube.com/embed/k0yTxyUk3yY?si=zB-TeACwe7lPUegS";
                // vidVid.src = "src/einKaremVideo.mov";
                // vidVid.poster = "src/pjdEinKarem.png";
                break;
            case "7":
                vidTitle.innerHTML = "סרטון תדמית לקיטנת קוסל";
                vidSubtitle.innerHTML = "סרטון התדמית שמראה איך קייטנת קוסל הופכת את הקיץ הקרוב למושלם עבור ילדיכם";
                vidVid.src = "https://www.youtube.com/embed/gV45NJuQohM?si=qQw7d1X5ZK_enHcw";
                // vidVid.src = "src/einKaremVideo.mov";
                // vidVid.poster = "src/pjdEinKarem.png";
                break;
            default:
                window.location.replace("index.html");
        }
    } else {
        window.location.replace("index.html");
    }
}

setVid();

// function playVid() {
//     vidVid.play();
//     vidVid.controls = true;
//     // vidVid.muted = true;
//     document.querySelector('.fa-circle-play').style.display = "none";
// }