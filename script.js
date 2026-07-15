
// =========================
// Loader
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});




// =========================
// Mobile Menu
// =========================


const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");


menu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



// Close menu when clicking link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", (e)=>{

        e.preventDefault();

        navLinks.classList.remove("active");

    });

});




// =========================
// Counter Animation
// =========================


const counters = document.querySelectorAll(".counter");


let started = false;


function startCounter(){


    const statsSection = document.querySelector(".stats");

    const position = statsSection.getBoundingClientRect().top;


    if(position < window.innerHeight - 100 && !started){


        counters.forEach(counter=>{


            const target = +counter.dataset.target;


            let count = 0;


            const update = ()=>{


                const speed = target / 100;


                if(count < target){


                    count += speed;

                    counter.innerText = Math.ceil(count);

                    setTimeout(update,20);


                }else{


                    counter.innerText = target;


                }


            };


            update();


        });


        started = true;


    }


}


window.addEventListener("scroll",startCounter);





// =========================
// Scroll Reveal Animation
// =========================


const hiddenElements = document.querySelectorAll(

    ".card, .stat, .about, .price-card, .testimonial, .gallery-grid img, .contact"

);



function reveal(){


    hiddenElements.forEach(el=>{


        const top = el.getBoundingClientRect().top;


        if(top < window.innerHeight - 100){


            el.classList.add("show");


        }


    });


}


hiddenElements.forEach(el=>{

    el.classList.add("hidden");

});


window.addEventListener("scroll",reveal);

reveal();






// =========================
// Back To Top Button
// =========================


const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){


        topBtn.style.display="flex";

        topBtn.style.justifyContent="center";

        topBtn.style.alignItems="center";


    }else{


        topBtn.style.display="none";


    }


});



topBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});






// =========================
// Smooth Button Animation
// =========================


document.querySelectorAll(".btn").forEach(button=>{


    button.addEventListener("mouseenter",()=>{


        button.style.letterSpacing="1px";


    });



    button.addEventListener("mouseleave",()=>{


        button.style.letterSpacing="0";


    });


});

// =========================
// Button Actions
// =========================


// Start Now Button
document.querySelector(".main-btn").addEventListener("click", function(){

    const about = document.querySelector(".contact");

    const position = about.offsetTop - 100; // غير الرقم ده زي ما تحب

    window.scrollTo({

        top: position,

        behavior:"smooth"

    });


});


// Watch Video Button

document.querySelector(".second-btn").addEventListener("click", function(){

    const about = document.querySelector(".contact");

    const position = about.offsetTop - -20000; // غير الرقم ده زي ما تحب

    window.scrollTo({

        top: position,

        behavior:"smooth"

    });

});

// Join Buttons

document.querySelectorAll(".price-card .btn, .about .btn").forEach(btn=>{

    btn.addEventListener("click", function(){

        const about = document.querySelector(".contact");

        const position = about.offsetTop - 100; // غير الرقم ده زي ما تحب

        window.scrollTo({

            top: position,

            behavior:"smooth"

        });

    });

});



// =========================
// Dynamic Year
// =========================


const year = new Date().getFullYear();


const footerText = document.querySelector("footer p:last-child");


if(footerText){

    footerText.innerHTML = 
    `© ${year} Kareem ELSaqa. All Rights Reserved.`;

}



// =========================
// Navbar Smooth Scroll With Offset
// =========================

document.querySelectorAll(".nav-links a").forEach(link=>{


    link.addEventListener("click",function(e){

        e.preventDefault();


        const section = document.getElementById(this.dataset.target);


        const position = section.offsetTop - 100; 
        // غير الرقم ده للتحكم في مكان النزول


        window.scrollTo({

            top: position,

            behavior:"smooth"

        });


        navLinks.classList.remove("active");


    });


});


// =========================
// Contact Form
// =========================


const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const pack = document.getElementById("package").value;
    const goal = document.getElementById("goal").value;

    const message =
`• New Client

• Name: ${name}
• Age: ${age}
• Package: ${pack}

• Goal:
${goal}`;

    const phone = "201000146914"; // حط رقمك هنا

    const url =
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    form.reset();

});

// =========================
// Program Details Popup
// =========================


const modal = document.querySelector(".program-modal");

const modalTitle = document.querySelector(".modal-box h2");

const modalText = document.querySelector(".modal-box p");


const programs = {


muscle:{

title:"Muscle Building 💪",

text:"A complete hypertrophy program focused on increasing muscle size, strength training, progressive overload and proper nutrition plans."

},


fat:{

title:"Fat Loss 🔥",

text:"A fat burning program combining cardio, resistance training and nutrition strategies to help you lose fat while keeping muscle."

},


strength:{

title:"Strength Training ⚡",

text:"Advanced strength program designed to improve power, lifting performance and overall athletic ability."

},


fitness:{

title:"Fitness Program ❤️",

text:"A complete fitness plan to improve stamina, mobility, health and create a balanced strong body."

}


};



document.querySelectorAll(".read-more").forEach(btn=>{


btn.addEventListener("click",()=>{


    const data = programs[btn.dataset.program];


    modalTitle.innerHTML=data.title;

    modalText.innerHTML=data.text;


    modal.style.display="flex";


});


});



document.querySelector(".close-modal").onclick=()=>{


    modal.style.display="none";


};



modal.onclick=(e)=>{


    if(e.target===modal){

        modal.style.display="none";

    }


};
