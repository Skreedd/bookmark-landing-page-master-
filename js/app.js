// Nav bar
const hamburgerMenu = document.querySelector('.hamburgerMenu');
const openMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');

hamburgerMenu.addEventListener('click', () => {
    if (hamburgerMenu.classList.contains('open')) {
        hamburgerMenu.classList.remove('open');
        openMenu.classList.add('hide');
        body.classList.remove('noscroll');
    }
    else {
        openMenu.classList.remove('hide');
        hamburgerMenu.classList.add('open');
        body.classList.add('noscroll');
    }
});

// Tabs 
const tabContentEl = document.querySelector('.tab__content');
const tabEl = document.querySelector('.tab');
const tabItems = [
    {
        id: 1,
        img: "./images/illustration-features-tab-1.svg",
        txt: "Organize your bookmarks however you like. Our  simple drag-and-drop interface gives you complete  control over how you manage your favourite sites.",
        h3El: "Bookmark in one click",
        butttonsTab: "Simple Bookmarking",
    },
    
    {
        id: 2,
        img: "./images/illustration-features-tab-2.svg",
        txt: `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks`,
        h3El: "Intelligent search",
        butttonsTab: "Speedy Searching"
    },
    {
        id: 3,
        img: "./images/illustration-features-tab-3.svg",
        txt: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        h3El: "Share your bookmarks",
        butttonsTab: "Easy Sharing" ,
    },
];

function displayTabs(tabItem) {
    let displayTabsContent = tabItem.map((item) => {
        return `
        <div class="tab__content grid">
        <div class="tab__markup">
        <img src=${item.img} alt="">
        </div>
        <div class="tab__text">
        <h3>
        ${item.h3El}
        </h3>
        <p>
        ${item.txt}
        </p>
        <button class="btn__moreInfo"><a href="#">More Info</a></button>
        </div>
        </div>
        `
    });
    displayTabsContent = displayTabsContent.join("");
    tabContentEl.innerHTML = displayTabsContent;
}
               // BTNs Tabs
function displayTab() {
    const btnTabs = tabItems.reduce(function (values, items) {
        if (!values.includes(items.butttonsTab)) {
            values.push(items.butttonsTab);
        }
        return values;
    },[])

    const allBtns = btnTabs.map( function(butttonsTab) {
        return `
        <button class="tab__btn" data-id="${butttonsTab}">${butttonsTab}</button>
        `
    }).join("");
    tabEl.innerHTML = allBtns

    const filterbtns = document.querySelectorAll('.tab__btn');

    filterbtns.forEach( function(btns) {
    btns.addEventListener('click', (e) => {
        const butttonsTab = e.currentTarget.dataset.id;
        const mainBtns = tabItems.filter((tabContents) => {
            if (tabContents.butttonsTab === butttonsTab) {
                return tabContents
            }
        });
        if (butttonsTab === []) {
            displayTabs(tabItems);
        }
        else {
            displayTabs(mainBtns);
        }
    })
})
}
displayTab()



     // ACCORDION
        
const accordion = document.getElementsByClassName('faq__btn');
const showAcc = document.getElementsByClassName('faq__collapse')


for (i=0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
    this.classList.toggle('open');

        let faq__collapse = this.nextElementSibling;
        if (faq__collapse.style.display === "block") {
            faq__collapse.style.display = "none";
        }
        else {
            faq__collapse.style.display = "block";
        }
    })
}


