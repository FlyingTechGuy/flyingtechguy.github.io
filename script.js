setTimeout(function() {
    document.querySelector("body").classList.add("show");
}, 500);

function homeLink() {
    document.querySelector("body").style.opacity = 0;
    setTimeout(function(){
        window.location.replace("index.html");
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

function webLink() {
    document.querySelector("body").style.opacity = 0;
    setTimeout(function(){
        window.location.replace("webdev.html");
    }, 250);
}

function editLink() {
    document.querySelector("body").style.opacity = 0;
    setTimeout(function(){
        window.location.replace("videoedit.html");
    }, 250);
}

function droneLink() {
    document.querySelector("body").style.opacity = 0;
    setTimeout(function(){
        window.location.replace("dronephotography.html");
    }, 250);
}

function projLink() {
    document.querySelector("body").style.opacity = 0;
    setTimeout(function(){
        window.location.replace("projects.html");
    }, 250);
}

function vidLink() {
    document.querySelector("body").style.opacity = 0;
    setTimeout(function(){
        window.location.replace("videoPage.html");
    }, 250);
}

// const root = document.documentElement;
// const body = document.body;
// window.addEventListener('mousemove', (e) => {
//     root.style.setProperty('--mouse-x', `${e.clientX}px`);
//     root.style.setProperty('--mouse-y', `${e.clientY}px`);
// });
// const links = document.querySelectorAll('.interactive-element');
// links.forEach(link => {
//     link.addEventListener('mouseenter', () => body.classList.add('cursor-active'));
//     link.addEventListener('mouseleave', () => body.classList.remove('cursor-active'));
// });
// window.addEventListener('mousedown', () => body.classList.add('cursor-click'));
// window.addEventListener('mouseup', () => body.classList.remove('cursor-click'));
// document.addEventListener('mouseleave', () => {
//     document.getElementById('dot').style.opacity = '0';
//     document.getElementById('outline').style.opacity = '0';
// });
// document.addEventListener('mouseenter', () => {
//     document.getElementById('dot').style.opacity = '1';
//     document.getElementById('outline').style.opacity = '1';
// });

let aboutTextTypingEffectBool = false;

window.addEventListener('scroll', function() {
    // sticky navbar:
    document.getElementById('navCont').classList.toggle("sticky", window.scrollY > 0);
    
    // paralex home bg effect:
    let valueScroll = window.scrollY;
    const homeBg = document.getElementById('homeBg');
    const homeBgMan = document.getElementById('homeBgMan');
    const homeTxtBox = document.getElementById('homeTxtBox');
    homeBg.style.transform = 'translate3d(0, ' + (valueScroll * 0.5) + 'px, 0)';
    homeBgMan.style.transform = 'translate3d(0, ' + (valueScroll * 0.18) + 'px, 0)';
    homeTxtBox.style.transform = 'translate3d(0, ' + (valueScroll * 0.6) + 'px, 0)';
    homeTxtBox.style.opacity = 1-(valueScroll/100 * 0.08);
    homeTxtBox.style.filter ="blur(" + ((valueScroll/100 * 0.01)) + "px)";
    // if (window.innerWidth <= 880) {
    //     homeTxtBox.style.top = valueScroll * 0.5 + 'px'; //0.80
    // } else {
    //     homeTxtBox.style.top = valueScroll * 0.5 + 'px'; //0.75
    // }

    if (document.getElementById('aboutImgBox').getBoundingClientRect().top + 100 < (window.innerHeight || document.documentElement.clientHeight)) {
        document.getElementById('aboutImgBox').classList.add("show");
        if (aboutTextTypingEffectBool == false) {
            aboutTextTypingEffectBool = true;
            setTimeout(function(){
                aboutTextTypingEffect();
            }, 1400);
        }
    }

    if (document.getElementById('aboutTxtBox').getBoundingClientRect().top + 100 < (window.innerHeight || document.documentElement.clientHeight)) {
        document.getElementById('aboutTxtBox').classList.add("show");
    }

    if (document.getElementById('serviceTitle').getBoundingClientRect().top + 100 < (window.innerHeight || document.documentElement.clientHeight)) {
        document.getElementById('serviceTitle').classList.add("show");
    }

    if (document.getElementById('card1').getBoundingClientRect().top + 100 < (window.innerHeight || document.documentElement.clientHeight)) {
        document.getElementById('card1').classList.add("show");
    }

    if (document.getElementById('card2').getBoundingClientRect().top + 100 < (window.innerHeight || document.documentElement.clientHeight)) {
        document.getElementById('card2').classList.add("show");
    }

    if (document.getElementById('card3').getBoundingClientRect().top + 100 < (window.innerHeight || document.documentElement.clientHeight)) {
        document.getElementById('card3').classList.add("show");
    }

    if (document.getElementById('worksTitle').getBoundingClientRect().top + 100 < (window.innerHeight || document.documentElement.clientHeight)) {
        document.getElementById('worksTitle').classList.add("show");
    }

    if (document.getElementById('worksCard1').getBoundingClientRect().top + 100 < (window.innerHeight || document.documentElement.clientHeight)) {
        document.getElementById('worksCard1').classList.add("show");
    }

    if (document.getElementById('worksCard2').getBoundingClientRect().top + 100 < (window.innerHeight || document.documentElement.clientHeight)) {
        document.getElementById('worksCard2').classList.add("show");
    }

    if (document.getElementById('worksCard3').getBoundingClientRect().top + 100 < (window.innerHeight || document.documentElement.clientHeight)) {
        document.getElementById('worksCard3').classList.add("show");
    }

    if (document.getElementById('worksMoreBtn').getBoundingClientRect().top + 100 < (window.innerHeight || document.documentElement.clientHeight)) {
        document.getElementById('worksMoreBtn').classList.add("show");
    }
})

function textTypingEffect(element, text, i = 0) {
    element.innerHTML += text[i];
    if (i === text.length-1) {return;}
    setTimeout(() => textTypingEffect(element, text, i+1), 100);
}

const subtitleText = document.getElementById("homeSubtitleTypingEffect");
let subtitleTextTxt = "";
let subtitleTextArray = ["מפתח אתרים","עורך וידאו","צלם אווירי"];
let typingSpeed = 70;
let deletingSpeed = 40;
let subtitlePauseTime = 1500;
let textIndex = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeSubtitleText(text) {
    for (let i = 0; i < text.length; i++) {
        subtitleTextTxt += text.charAt(i);
        subtitleText.innerHTML = subtitleTextTxt;
        await sleep(typingSpeed);
    }
}

async function deleteSubtitleText() {
    while (subtitleTextTxt.length > 0) {
        subtitleTextTxt = subtitleTextTxt.slice(0, -1);
        subtitleText.innerHTML = subtitleTextTxt;
        await sleep(deletingSpeed);
    }
}

async function subtitleTypingEffect() {
    while (true) {
        await typeSubtitleText(subtitleTextArray[textIndex]);
        await sleep(subtitlePauseTime);
        await deleteSubtitleText();
        textIndex = (textIndex+1)%subtitleTextArray.length;
    }
}

window.addEventListener('load', function() {
    // setTimeout(function() {
    //     textTypingEffect(document.getElementById('homeTitle'), "שלום! אני");
    // }, 1000);
    // setTimeout(function() {
    //     textTypingEffect(document.getElementById('homeMain'), "גיא שמש");
    // }, 2500);
    // setTimeout(function() {
    //     textTypingEffect(document.getElementById('homeSub1'), "בונה אתרים, עורך וידאו");
    // }, 4000);
    // setTimeout(function() {
    //     textTypingEffect(document.getElementById('homeSub2'), "צלם רחפנים");
    // }, 7000);
    setTimeout(function() {
        document.getElementById('homeTitle').classList.add("show");
    }, 1000);
    setTimeout(function() {
        document.getElementById('homeSubtitle').classList.add("show");
    }, 1400);
    setTimeout(function() {
        document.getElementById('scrollDown').classList.add("show");
    }, 2000);
    setTimeout(function() {
        subtitleTypingEffect();
    }, 2200);
});

const aboutInfoTxt = document.getElementById("aboutInfoTxt");
let aboutTextTextArray = ["היי!", " אני גיא שמש ואני בן 19.", " אני עוסק במגוון פתרונות טכנולוגיים כמו פיתוח אתרי אינטרנט, עריכת וידאו וצילום אווירי עם רחפנים.", " אני פועל כמיטב יכולתי על מנת לספק את השירות הטוב ביותר שאני יכול תוך עבודה בצורה מקצועית ובמחיר נוח לכל כיס.\n"];
let aboutTextTxt = "";
let aboutTextIndex = 0;
let aboutTypingSpeed = 20;
let aboutTextPauseTime = 500;

async function typeAboutTextText(text) {
    for (let i = 0; i < text.length; i++) {
        aboutTextTxt += text.charAt(i);
        aboutInfoTxt.innerHTML = aboutTextTxt;
        await sleep(aboutTypingSpeed);
    }
}

async function aboutTextTypingEffect() {
    while (aboutTextIndex < aboutTextTextArray.length) {
        await typeAboutTextText(aboutTextTextArray[aboutTextIndex]);
        aboutTextIndex++;
        await sleep(aboutTextPauseTime);
    }
    setTimeout(function() {
        document.getElementById("aboutInfoLine1").style.display = "none";
        aboutTextMoreInfoTypingEffect();
    }, 1000);
}

const aboutInfoMoreInfo = document.getElementById("aboutInfoMoreInfo");
let aboutTextMoreInfoArray = ["לפרטים נוספים ניתן לדבר איתי ", `<a href="https://wa.me/972548000872" target="_blank">כאן</a>`, "."];
let aboutTextMoreInfoTxt = "";
let aboutTextMoreInfoIndex = 0;
let aboutMoreInfoTypingSpeed = 20;
let aboutTextMoreInfoPauseTime = 20;

async function typeAboutTextMoreInfoText(text) {
    for (let i = 0; i < text.length; i++) {
        if (aboutTextMoreInfoIndex == 1) {
            aboutTextMoreInfoTxt += text;
            await sleep(aboutMoreInfoTypingSpeed);
            break;
        } else {
            aboutTextMoreInfoTxt += text.charAt(i);
        }
        aboutInfoMoreInfo.innerHTML = aboutTextMoreInfoTxt;
        await sleep(aboutMoreInfoTypingSpeed);
    }
}

async function aboutTextMoreInfoTypingEffect() {
    document.getElementById("aboutInfoLine2").style.display = "inline-flex";
    while (aboutTextMoreInfoIndex < aboutTextMoreInfoArray.length) {
        await typeAboutTextMoreInfoText(aboutTextMoreInfoArray[aboutTextMoreInfoIndex]);
        aboutTextMoreInfoIndex++;
        await sleep(aboutTextMoreInfoPauseTime);
    }
}

let isMenu = false;
let isMenuClicked = false;
function toggleMenu() {
    const hamburger = document.getElementById('hamburgerBar');
    const sideBar = document.getElementById('sideBar');
    hamburger.classList.toggle("active");
    sideBar.classList.toggle("active");
    if (isMenu) {
        document.body.style.overflow = "";
    } else {
        document.body.style.overflow = "hidden";
    } isMenu = !isMenu;
}
document.getElementById('hamburgerBar').addEventListener('click', function() {
    if (isMenuClicked == false) {
        toggleMenu();
        isMenuClicked = true;
        setTimeout(function() {isMenuClicked = false;}, 500);
    }
});

function videoPlayerPage(x) {
    localStorage.setItem("~videoNum", x);
    vidLink();
}

const textarea = document.getElementById('message');
textarea.addEventListener("input", function() {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + 4 + "px";
});

function createWhatsappLink() {
    event.preventDefault();
    if (document.getElementById("name").value == "" || document.getElementById("name").value == " " || document.getElementById("message").value == "" || document.getElementById("message").value == " ") {
        alert("נא הקלידו את שמכם ואת ההודעה שלכם לפני שליחת ההודעה");
    } else {
        let msg = `שלום גיא, שמי ${document.getElementById("name").value},\n${document.getElementById("message").value}`;
        const phoneNumber = "972548000872";
        let encodedMessage = encodeURIComponent(msg);
        let whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodedMessage}`;
        window.open(whatsappLink,'_blank');
    }
}

document.getElementById("sentMessageBtn").addEventListener("click", createWhatsappLink);