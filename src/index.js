import './css/style.scss'

const btnArr = document.querySelectorAll('.accordion-item__header')
const contentTextArr = document.querySelectorAll('.accordion-item__content')
const slider = document.querySelector('.switch-btn')

btnArr.forEach(item => {
    item.addEventListener('click', function () {

        let contentText = this.nextElementSibling;
        contentText.classList.toggle('active');

        if(slider.classList.contains('switch-on')) {
            closeOtherAccordion(contentText)
        }
    })
})

slider.addEventListener('click', function () {
    this.classList.toggle('switch-on');
    resetAccordionState()
});

function closeOtherAccordion(item) {
    for(let i = 0; i < contentTextArr.length; i++) {
        if(contentTextArr[i] !== item) {
            contentTextArr[i].classList.remove('active');
        }
    }
}

function resetAccordionState() {
    contentTextArr.forEach(item => {
        if(item.classList.contains('active')) {
            item.classList.remove('active')
        }
    })  
}