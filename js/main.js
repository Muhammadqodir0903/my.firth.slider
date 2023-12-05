var elSlider = document.querySelector('.slider')
var elItems = document.querySelectorAll('.slider__item')
var elButton = document.querySelector('.button')
console.log();
elSlider.style.width = `${600 *elItems.length }px`

var count = 0
function fnNext(){
    count = count + 1
    if (count == elItems.length) {
        count = 0
    }
    elSlider.style.transform = `translateX(-${600 * count}px)`
    elButton.style.padding = `${50}px`
}

function fnPrevious(){
    count = count - 1
    if (count == -1) {
        count = elItems.length - 1
    }
    elSlider.style.transform = `translateX(-${600 * count}px)`
}