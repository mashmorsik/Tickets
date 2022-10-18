const time = document.getElementsByClassName('time-first')
const moreButton = document.getElementById('show-more')

function showMoreButton(targetTime) {
    if(targetTime.length > 3) {
        for(let i = 3; i < targetTime.length; i++){
            targetTime[i].hidden = true
        }
        moreButton.hidden = false
    }
}

showMoreButton(time)

function showMoreTime(targetTime) {
    for(let i = 3; i < targetTime.length; i++){
        targetTime[i].hidden = false
        // targetTime[i].style.marginTop = "5px"
    }
    moreButton.hidden = true
}

moreButton.addEventListener('click', () => showMoreTime(time))
