//calendar
const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date()

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 0);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const monthYearString = currentDate.toLocaleString('default', {month: 'long', year: 'numeric'});
    monthYearElement.textContent = monthYearString;

    let datesHTML = '';

    for (let i = firstDayIndex; i > 0; i--) {
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }

    for (let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML += `<div class="date ${activeClass}">${i}</div>`;
    }

    for (let i = 1; i <= 7 - lastDayIndex; i++) {
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
    }

    datesElement.innerHTML = datesHTML;
}

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
})

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
})

updateCalendar();

//button animation in reservation bar
const locationButtons = document.querySelectorAll('.loc-btn');

locationButtons.forEach(button => {
    button.addEventListener('click', function() {
        const isActive = this.classList.contains('active');
        locationButtons.forEach(btn => btn.classList.remove('active'));
        
        if (!isActive) {
            this.classList.add('active');
        }
    });
});

//switch from page to page

const homeSection = document.getElementById("home-page");
const menuSection = document.getElementById("menu-page");
const quoteSection = document.getElementById("quote");
const scarboroughMenu = document.getElementById("scarborough");
const torontoMenu = document.getElementById("toronto")


const homeBtn = document.querySelector('a[href="#home-page"]');
const menuBtn = document.querySelector('a[href="#menu-page"]');
const scarboroughAddr = document.querySelector('a[href="#scarborough"]');
const torontoAddr = document.querySelector('a[href="#toronto"]');

function hideAllSections() {
    homeSection.style.display = "none";
    quoteSection.style.display = "none";
    menuSection.style.display = "none";
    scarboroughMenu.style.display = "none";
    torontoMenu.style.display = "none";
}

//click HOME
homeBtn.addEventListener("click", () => {
    hideAllSections();
    homeSection.style.display = "flex";
    quoteSection.style.display = "flex"
});

//click MENU
menuBtn.addEventListener("click", () => {
    hideAllSections();
    menuSection.style.display = "flex"; 
});

//switch from menu to scarborough menu

scarboroughAddr.addEventListener("click", () => {
    hideAllSections();
    scarboroughMenu.style.display = "flex";
});

torontoAddr.addEventListener("click", () => {
    hideAllSections();
    torontoMenu.style.display = "flex";
});

//switch from menu section to other menu section - SCARBOROUGH
const scarboroughSpecial = document.getElementById("scarborough-special-menu");
const scarboroughRegular = document.getElementById("scarborough-regular-menu");
const scarboroughDrinks = document.getElementById("scarborough-drinks-menu");
const scarboroughDesserts = document.getElementById("scarborough-desserts-menu")

const scarboroughMenuLinks = document.querySelectorAll('.menu-section a');

scarboroughMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
        scarboroughMenuLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    
        const targetHref = this.getAttribute("href");

        if (targetHref === "#scarborough-special-menu") {
            scarboroughSpecial.style.display = "flex";
            scarboroughRegular.style.display = "none";
            scarboroughDrinks.style.display = "none";
            scarboroughDesserts.style.display = "none";
        } 
        else if (targetHref === "#scarborough-regular-menu") {
            scarboroughSpecial.style.display = "none";
            scarboroughRegular.style.display = "flex";
            scarboroughDrinks.style.display = "none";
            scarboroughDesserts.style.display = "none";
        }
        else if (targetHref === "#scarborough-drinks-menu") {
            scarboroughSpecial.style.display = "none";
            scarboroughRegular.style.display = "none";
            scarboroughDrinks.style.display = "flex";
            scarboroughDesserts.style.display = "none";
        }
        else {
            scarboroughSpecial.style.display = "none";
            scarboroughRegular.style.display = "none";
            scarboroughDrinks.style.display = "none";
            scarboroughDesserts.style.display = "flex";
        }
    });
});

//switch from menu section to other menu section - TORONTO
const torontoSpecial = document.getElementById("toronto-special-menu");
const torontoRegular = document.getElementById("toronto-regular-menu");
const torontoKeto = document.getElementById("toronto-keto-menu");
const torontoDrinks = document.getElementById("toronto-drinks-menu");
const torontoDesserts = document.getElementById("toronto-desserts-menu");

const torontoMenuLinks = document.querySelectorAll('.menu-section a');

torontoMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
        torontoMenuLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    
        const targetHref = this.getAttribute("href");

        if (targetHref === "#toronto-special-menu") {
            torontoSpecial.style.display = "flex";
            torontoRegular.style.display = "none";
            torontoKeto.style.display = "none";
            torontoDrinks.style.display = "none";
            torontoDesserts.style.display = "none";
        } 
        else if (targetHref === "#toronto-regular-menu") {
            torontoSpecial.style.display = "none";
            torontoRegular.style.display = "flex";
            torontoKeto.style.display = "none";
            torontoDrinks.style.display = "none";
            torontoDesserts.style.display = "none";
        }
        else if (targetHref === "#toronto-keto-menu") {
            torontoSpecial.style.display = "none";
            torontoRegular.style.display = "none";
            torontoKeto.style.display = "flex";
            torontoDrinks.style.display = "none";
            torontoDesserts.style.display = "none";
        } 
        else if (targetHref === "#toronto-drinks-menu") {
            torontoSpecial.style.display = "none";
            torontoRegular.style.display = "none";
            torontoKeto.style.display = "none";
            torontoDrinks.style.display = "flex";
            torontoDesserts.style.display = "none";
        }
        else {
            torontoSpecial.style.display = "none";
            torontoRegular.style.display = "none";
            torontoKeto.style.display = "none";
            torontoDrinks.style.display = "none";
            torontoDesserts.style.display = "flex";
        }
    });
});

// reload handle
function checkHashAndDisplay() {
    const hash = window.location.hash; 

    if (!hash || hash === "#home-page") {
        homeBtn.click();
    } 
    else if (hash === "#menu-page") {
        menuBtn.click(); 
    } 
    else if (hash === "#scarborough") {
        scarboroughAddr.click(); 
        document.querySelector('a[href="#scarborough-special-menu"]').click();
    }
    else if (hash.includes("scarborough-")) {
        hideAllSections();
        scarboroughMenu.style.display = "flex";
        
        const targetLink = document.querySelector(`.menu-section a[href="${hash}"]`);
        if (targetLink) {
            targetLink.click();
        }
    }
    else if (hash === "#toronto") {
        torontoAddr.click();
        document.querySelector('a[href="#toronto-special-menu"]').click();
    }
    else if (hash.includes("toronto-")) {
        hideAllSections();
        torontoMenu.style.display = "flex";

        const targetLink = document.querySelector(`.menu-section a[href="${hash}"]`);
        if (targetLink) {
            targetLink.click();
        }
    }
}

window.addEventListener('load', checkHashAndDisplay);

