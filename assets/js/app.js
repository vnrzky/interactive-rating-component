const submitBtn = document.querySelector('.submit-btn');
const card1 = document.querySelector('.card-content-1');
const card2 = document.querySelector('.card-content-2');
const ratingBtn = document.querySelectorAll('.rating-btn');
const rating = document.querySelector('.rating-score');
let stars_score = 4 //default value

submitBtn.addEventListener('click', onsubmit);
ratingBtn.forEach(btn => {
     btn.addEventListener('click', handleRatingBtnClick);
});

function onsubmit() {

    card1.classList.add('hide');
    rating.textContent = stars_score;
    card2.classList.remove('hide');

}

function handleRatingBtnClick(event) {
    
    ratingBtn.forEach(btn => {
        btn.classList.remove('active');
    });

    if(event.target.classList.contains('.rating-btn')){
        event.target.classList.add('active');
    }else {
        event.target.parentElement.classList.add('.active');
    }

    // Parse Stars score
    stars_score = event.target.textContent;
}