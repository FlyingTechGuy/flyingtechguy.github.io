setTimeout(function() {
    document.querySelector("body").classList.add("show");
}, 500);

function homeLink() {
    document.querySelector("body").style.opacity = 0;
    setTimeout(function(){
        window.location.replace("index.html#projects");
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

document.addEventListener('scroll', function() {
    if(window.scrollY > 600) {
        document.getElementById("bttBtn").classList.add("show");
    } else {
        document.getElementById("bttBtn").classList.remove("show");
    }
});

document.getElementById("bttBtn").addEventListener("click", function() {
    window.scrollTo(0, 0);
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// old filter menu:

// let list = document.querySelectorAll('.list');
// let itemBox = document.querySelectorAll('.worksCard');

// for(let i = 0; i<list.length; i++){
//   list[i].addEventListener('click', function(){
//     for(let j = 0; j<list.length; j++){
//       list[j].classList.remove('actives');
//     }
//     this.classList.add('actives');
    
//     let dataFilter = this.getAttribute('data-filter');
    
//     for(let k = 0; k<itemBox.length; k++){
//       itemBox[k].classList.add('hide');
//       if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
//         itemBox[k].classList.remove('hide');
//       }
//     }
    
//   })
// }

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

let list = document.querySelectorAll('.filterChoice');
let itemBox = document.querySelectorAll('.worksCard');
            
for(let i = 0; i<list.length; i++){
  list[i].addEventListener('click', function(){
    for(let j = 0; j<list.length; j++){
      list[j].classList.remove('actives');
    }
    this.classList.add('actives');

    let dataFilter = this.getAttribute('data-filter');
    
    for(let k = 0; k<itemBox.length; k++){
      itemBox[k].classList.add('hide');
      if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
        itemBox[k].classList.remove('hide');
      }
    }

  })
}

let showFilterCheck = 0;
function showFilter() {
    if (showFilterCheck == 0) {
        showFilterCheck = 1;
        document.getElementById('filterBox').style.display = "flex";
        setTimeout(function(){
            document.getElementById('filterBox').style.opacity = 1;
        }, 20);
        document.body.style.overflow = "hidden";
        document.getElementById("filterBtn").classList.add("clicked");
    } else {
        showFilterCheck = 0;
        document.getElementById('filterBox').style.opacity = 0;
        setTimeout(function(){
            document.getElementById('filterBox').style.display = "none";
        }, 200);
        document.body.style.overflow = "";
        document.getElementById("filterBtn").classList.remove("clicked");
    }
}

function videoPlayerPage(x) {
    localStorage.setItem("~videoNum", x);
    vidLink();
}