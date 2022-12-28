// mobile navigation logic
const openNavigation_btn = document.getElementById("open-mobile-navigation-toggle");
openNavigation_btn.addEventListener("click", () => {
    openCloseNavigation("hidden", "grid")
});

const closeNavigation_btn = document.getElementById("close-mobile-navigation-btn");
closeNavigation_btn.addEventListener("click", () => {
    openCloseNavigation("grid", "hidden");
});

function openCloseNavigation (removeClass, addClass){
    const navigation = document.getElementById("mobile-navigation");

    navigation.classList.remove(removeClass);
    navigation.classList.add(addClass);
}

// tab section logic
const tabData = [
    {
        title: "Bookmark in one click",
        text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorites sites.",
        image: "images/illustration-features-tab-1.svg"
    },
    {
        title: "Intelligent search",
        text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        image: "images/illustration-features-tab-2.svg"
    },
    {
        title: "Share your bookmarks",
        text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        image: "images/illustration-features-tab-3.svg"
    }
]

const switchTab_buttons = document.querySelectorAll(".tab-navigation-btns");
const tabContainer = document.getElementById("tab-container");

switchTab_buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        switchTab_buttons.forEach((btn) => {
            btn.style.color = "hsl(229, 8%, 60%)";
            btn.parentElement.children[1].classList.add("hidden");
            tabContainer.innerHTML = "";
        });
        btn.style.color = "hsl(229, 31%, 21%)";
        btn.parentElement.children[1].classList.remove("hidden")

        const pseudoBorder = document.getElementById("pseudo-broder");

        if(index == 0){
            pseudoBorder.style.left = "0"
        }
        if(index == 1){
            pseudoBorder.style.left = "33%"
        }
        if(index == 2){
            pseudoBorder.style.left = "67%"
        }

        const tabTemplate = document.getElementById("tab-template").content.cloneNode(true);
        tabTemplate.querySelector("#tab-title").innerText = `${tabData[index].title}`;
        tabTemplate.querySelector("#tab-text").innerText = `${tabData[index].text}`;
        tabTemplate.querySelector("#tab-image").setAttribute("src", tabData[index].image);

        tabContainer.append(tabTemplate)
    });
});

// this is to avoid that the tab container is empty
window.addEventListener("load", () => {
    const tabTemplate = document.getElementById("tab-template").content.cloneNode(true);
    tabTemplate.querySelector("#tab-title").innerText = `${tabData[0].title}`;
    tabTemplate.querySelector("#tab-text").innerText = `${tabData[0].text}`;
    tabTemplate.querySelector("#tab-image").setAttribute("src", tabData[0].image);
    tabContainer.append(tabTemplate)
});

// question accordion logic
const expandButtons = document.querySelectorAll(".expand-buttons");
expandButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const accordionContent = btn.parentElement.children[1];
        const arrowIcon = btn.children[1];

        expandButtons.forEach((btn) => {
            const accordionContent = btn.parentElement.children[1];
            const arrowIcon = btn.children[1];

            accordionContent.classList.add("hidden");
            arrowIcon.style.transform = "rotate(0)";
            arrowIcon.style.color = "hsl(229, 31%, 21%)";
        });
        accordionContent.classList.remove("hidden");
        arrowIcon.style.transform = "rotate(180deg)";
        arrowIcon.style.color = "hsl(0, 94%, 66%)";
    });
});

// footer email validation
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    const mailInput = document.getElementById("email-input");
    const email_regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorMessages = document.querySelectorAll(".error-message");

    if(mailInput.value.match(email_regEx)){
        e.currentTarget.submit();

        mailInput.value = "";
        errorMessages.forEach((message) => {
            message.classList.add("hidden");
            message.classList.remove("grid");
        });
    }
    else{
        e.preventDefault();

        errorMessages.forEach((message) => {
            message.classList.remove("hidden");
            message.classList.add("grid");
        });

        mailInput.value = "";
        mailInput.classList.add("placeholder:text-very_dark_blue")
        mailInput.setAttribute("placeholder", "example@email/com");
    }
});