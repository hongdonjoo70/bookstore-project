//Main Header Swiper Set
var swiper1 = new Swiper('.mySwiper', {
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper('.mySwiper2', {
    loop: true,
    spaceBetween: 9,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: swiper1,
    },
});
function stopMySwiper() {
    if (swiper2.autoplay.paused != true) {
        swiper2.autoplay.pause();
        stopslide.innerHTML = '<img src ="img/play.png" alt="play">';
    }
    else {
        swiper2.autoplay.resume();
        stopslide.innerHTML = '<img src ="img/stop.png" alt="stop">'
    }
}

// Display Book Title
function displayBookData(id, data) {
    const section = document.querySelector(id);
    const box = section.querySelectorAll(".book");
    for (const index in box) {
        if (data[index].length === 0) {
            box[index].innerHTML = "No data found";
            continue;
        }

        // 요소 생성 및 추가
        box[index].innerHTML = `<div class="image">
            <a href="buybook.html?id=${index % 3}">
            <img src="${data[index].thumbnail}">
            </a>
            </div>
            <h5>${data[index].title}</h5>`;
    }
}

bookData(editorChoiceTitle, editorChoiceBooks).then(() => {
    displayBookData("#editorChoiceBook", editorChoiceBooks);
});
bookData(bookOfTheWeekTitle, bookOfTheWeekBooks).then(() => {
    displayBookData("#weekBook", bookOfTheWeekBooks);
});
bookData(newBookTitle, newBookBooks).then(() => {
    displayBookData("#newBook", newBookBooks);
});
bookData(noticeableNewTitle, noticeableNewBooks).then(() => {
    displayBookData("#noticeableNewBook", noticeableNewBooks);
});
bookData(hotIssueTitle, hotIssueBooks).then(() => {
    displayBookData("#hotIssueBook", hotIssueBooks);
});
bookData(eventGoodsTitle, eventGoodsBooks).then(() => {
    displayBookData("#eventGoodBook", eventGoodsBooks);
});
bookData(bookFundTitle, bookFundBooks).then(() => {
    displayBookData("#bookFundBook", bookFundBooks);
});


var swiper3 = new Swiper('.mySwiper3', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
});
var swiper20 = new Swiper('.mySwiper20', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
});
var swiper21 = new Swiper('.mySwiper21', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
});
var swiper22 = new Swiper('.mySwiper22', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
});
var swiper23 = new Swiper('.mySwiper23', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
});

var swiper5 = new Swiper('.mySwiper5', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
function displayMain2BookData(id, data) {
    const section = document.querySelector(id);
    const box = section.querySelectorAll(".swiper-slide");
    for (const index in box) {
        if (data[index].length === 0) {
            box[index].innerHTML = "No data found";
            continue;
        }

        // 요소 생성 및 추가
        box[index].innerHTML = `<a href="buybook.html?id=${index % 3}">
            <img src="${data[index].thumbnail}">
            <h5>${data[index].title}</h5>
            </a>`;
    }
}
bookData(editorChoiceTitle, editorChoiceBooks2).then(() => {
    displayMain2BookData("#editorChoiceBookmain2", editorChoiceBooks2);
});

bookData(ebookTitles, ebookBooks).then(() => {
    displayMain2BookData("#ebookmain2", ebookBooks);
});

bookData(foreignBookTitles, foreignBooks).then(() => {
    displayMain2BookData("#foreignbookmain2", foreignBooks);
});
function clearDisplayMain2(selectIndex) {
    let blocks = [editorChoiceBookmain2, ebookmain2, foreignbookmain2, ytube, main2eventgood];
    let choices = [selectEditochoice, selectEbook, selectForeinBook, selectYTube, selectGoods];
    for (let index = 0; index < blocks.length; index++) {
        if (index != selectIndex) {
            blocks[index].style.display = "none";
            choices[index].style.backgroundColor = "#ccc";
        }
        else {
            blocks[index].style.display = "flex";
            choices[index].style.backgroundColor = "white";
            choices[index].style.borderBottom = "2px solid white";
        }
    }
}

selectEditochoice.addEventListener('mouseenter', () => {
    clearDisplayMain2(0);
});
selectEbook.addEventListener('mouseenter', () => {
    clearDisplayMain2(1);

});
selectForeinBook.addEventListener('mouseenter', () => {
    clearDisplayMain2(2);
});
selectYTube.addEventListener('mouseenter', () => {
    clearDisplayMain2(3);
});
selectGoods.addEventListener('mouseenter', () => {
    clearDisplayMain2(4);
});
function displayTop10Data(data) {
    const top10left = document.querySelector(".top10-left");
    top10left.innerHTML = `
                <div class="smallbook">
                <img src="${data[0].thumbnail}" alt ="${data[0].title}">
                <h3>1</h3>
                <h5>${data[0].title}</h5> </div>
                <div class="smallbook">
                <img src="${data[1].thumbnail}" alt="${data[1].title}">
                <h3>2</h3>
                <h5>${data[1].title}</h5> </div>
            `
    const top10lists = document.querySelectorAll(".top10-list");
    for (let i = 2; i < 6; i++) {
        top10lists[0].innerHTML += `<div><h3>${i + 1}</h3>
                <h6>${data[i].title}</h6></div>
                `
    }
    for (let i = 6; i < 10; i++) {
        top10lists[1].innerHTML += `<div><h3>${i + 1}</h3>
                <h6>${data[i].title}</h6>
                `
    }
}

bookData(bestsellerTitle, bestsellersBooks).then(() => {
    displayTop10Data(bestsellersBooks);
});
var swiper15 = new Swiper('.mySwiper15', {
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const nevents = document.querySelector("#nevents");
const neventbox = nevents.querySelectorAll(".swiper-slide");
for (let index = 0; index < neventbox.length; index++) {
    neventbox[index].innerHTML = `<img src="img/event/nevent${index + 1}.jpg" alt ="nevent${index+1}">`;
}
function displaySwiperData(id, data) {
    const section = document.querySelector(id);
    const box = section.querySelectorAll(".swiper-slide");
    for (const index in box) {
        if (data[index].length === 0) {
            box[index].innerHTML = "No data found";
            continue;
        }

        // 요소 생성 및 추가
        box[index].innerHTML = `<div class="image">
                <a href="buybook.html?id=${index % 3}">
                  <img src="${data[index].thumbnail}">
                </a>
            </div>
            <h4><a href="buybook.html?id=${index % 3}">${data[index].title}</a></h4>`;
    }
}

var swiper6 = new Swiper('.mySwiper6', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
bookData(mysteryTitle, mysteryBooks).then(() => {
    displaySwiperData("#misterybook", mysteryBooks);
});

var swiper7 = new Swiper('.mySwiper7', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
bookData(mdChoiceTitle, mdChoiceBooks).then(() => {
    displaySwiperData("#chosenbook", mdChoiceBooks);
});

function displaySwiperData3(id, data) {
    const section = document.querySelector(id);
    const box = section.querySelectorAll(".swiper-slide");
    for (const index in box) {
        if (data[index].length === 0) {
            box[index].innerHTML = "No data found";
            continue;
        }

        // 요소 생성 및 추가
        box[index].innerHTML = `<a href="buybook.html?id=${index % 3}">
                <img src="${data[index].thumbnail}" alt ="${data[index].title}">
                <div> 
                   <h4>${data[index].title}</h4><br>
                   <h5>${data[index].contents}</h5>
                </div></a>
                `;
    }
}
var swiper9 = new Swiper('.mySwiper9', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
bookData(hotIssueTitle, hotIssueBooks2).then(() => {
    displaySwiperData3("#issuebook", hotIssueBooks2);
});

var swiper8 = new Swiper('.mySwiper8', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
bookData(aladinerChoiceTitle, aladinerChoiceBooks).then(() => {
    displaySwiperData("#chosen2book", aladinerChoiceBooks);
});

var swiper14 = new Swiper('.mySwiper14', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const section = document.querySelector("#events");
const box = section.querySelectorAll(".swiper-slide");
for (let index = 0; index < box.length; index++) {
    box[index].innerHTML = `<img src="img/goods/eventgood${index + 1}.jpg" alt="eventgood${index+1}">`;
}

var swiper10 = new Swiper('.mySwiper10', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
bookData(notableTitle, notableBooks).then(() => {
    displaySwiperData("#chosen3book", notableBooks);
});

var swiper11 = new Swiper('.mySwiper11', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
bookData(specialPriceTitle, specialPriceBooks).then(() => {
    displaySwiperData("#weekbook", specialPriceBooks);
});

var swiper12 = new Swiper('.mySwiper12', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
bookData(specialBookTitles, specialBooks).then(() => {
    displaySwiperData("#selectedbook", specialBooks);
});

var swiper13 = new Swiper('.mySwiper13', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiper16 = new Swiper('.mySwiper16', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});