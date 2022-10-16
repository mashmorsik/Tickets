let route = document.getElementById('route')
let timeOptions = document.getElementById('time-options')
let returnTime = document.getElementById('return-time')
let timeOptionsNew = document.getElementById('time-options-new')


route.addEventListener('change', () => selectType())

// additional zero 
function getFullMinutes(targetDate) {
    if (targetDate.getMinutes() < 10) {
        return '0' + targetDate.getMinutes();
    }
    return targetDate.getMinutes();
}


function getFormattedTime(targetDate) {
    targetDate = new Date(targetDate)
    return targetDate.getHours() + ":" + getFullMinutes(targetDate)
};

const dateDic = [
    { date:'2021-08-21 18:00:00 GMT+0300', type: 'A' },
    { date:'2021-08-21 18:30:00 GMT+0300', type: 'AB' },
    { date:'2021-08-21 18:45:00 GMT+0300', type: 'AB' },
    { date:'2021-08-21 19:00:00 GMT+0300', type: 'AB' },
    { date:'2021-08-21 19:15:00 GMT+0300', type: 'AB' },
    { date:'2021-08-21 19:35:00 GMT+0300', type: 'B' },
    { date:'2021-08-21 21:00:00 GMT+0300', type: 'A' },
    { date:'2021-08-21 21:50:00 GMT+0300', type: 'B' },
    { date:'2021-08-21 21:55:00 GMT+0300', type: 'B' },

]

const TypeA = "A"
const TypeB = "B"
const TypeAB = "AB" 

let routeValue = "A"

function selectType() {
    routeValue = route.options[route.selectedIndex].value
}



function selectTimeHandler() {
    for (let i = 0; i < dateDic.length; i++) {
        if (dateDic[i].type !== routeValue) {
            continue
        }
        let opt = document.createElement("option")

        opt.value = i
        opt.text = getFormattedTime(dateDic[i].date)
        timeOptionsNew.options.add(opt, null)
    }
}

// let route1800aTime = new Date('2021-08-21 18:00:00 GMT+0300')
// timeOptions.options[1].text = getFormattedTime(route1800aTime)

// console.log(getFormattedTime(route1800aTime))

// route1800aTime.getHours() + ':' + route1800aTime.getFullMinutes()

// let route2100aTime = new Date('2021-08-21 21:00:00 GMT+0300')
// timeOptions.options[6].text = route2100aTime.getHours() + ':' + route2100aTime.getFullMinutes()

// let route1935bTime = new Date('2021-08-21 19:35:00 GMT+0300')
// timeOptions.options[11].text = route1935bTime.getHours() + ':' + route1935bTime.getFullMinutes()

// let route2150bTime = new Date('2021-08-21 21:50:00 GMT+0300')
// timeOptions.options[12].text = route2150bTime.getHours() + ':' + route2150bTime.getFullMinutes()

// let route2155bTime = new Date('2021-08-21 21:55:00 GMT+0300')
// timeOptions.options[13].text = route2155bTime.getHours() + ':' + route2155bTime.getFullMinutes()

// let route1830abTime = new Date('2021-08-21 18:30:00 GMT+0300')
// timeOptions.options[2, 7].text = route1830abTime.getHours() + ':' + route1830abTime.getFullMinutes()

// let route1845abTime = new Date('2021-08-21 18:45:00 GMT+0300')
// timeOptions.options[3, 8].text = route1845abTime.getHours() + ':' + route1845abTime.getFullMinutes()

// let route1900abTime = new Date('2021-08-21 19:00:00 GMT+0300')
// timeOptions.options[4, 9].text = route1900abTime.getHours() + ':' + route1900abTime.getFullMinutes()

// let route1915abTime = new Date('2021-08-21 19:15:00 GMT+0300')
// timeOptions.options[5, 10].text = route1915abTime.getHours() + ':' + route1915abTime.getFullMinutes()

function selectTime() {

    let option = route.options[route.selectedIndex].value

    if (option === 'B') {
        timeOptions.options[1].hidden = true
        timeOptions.options[2].hidden = true
        timeOptions.options[3].hidden = true
        timeOptions.options[4].hidden = true
        timeOptions.options[5].hidden = true
        timeOptions.options[6].hidden = true

        timeOptions.options[7].hidden = false
        timeOptions.options[8].hidden = false
        timeOptions.options[9].hidden = false
        timeOptions.options[10].hidden = false
        timeOptions.options[11].hidden = false
        timeOptions.options[12].hidden = false
        timeOptions.options[13].hidden = false

        document.getElementById('return-time').hidden = true
        document.getElementById('return-time-label').hidden = true
    }

    if (option === 'A' || option === 'AB') {
        timeOptions.options[1].hidden = false
        timeOptions.options[2].hidden = false
        timeOptions.options[3].hidden = false
        timeOptions.options[4].hidden = false
        timeOptions.options[5].hidden = false
        timeOptions.options[6].hidden = false

        timeOptions.options[7].hidden = true
        timeOptions.options[8].hidden = true
        timeOptions.options[9].hidden = true
        timeOptions.options[10].hidden = true
        timeOptions.options[11].hidden = true
        timeOptions.options[12].hidden = true
        timeOptions.options[13].hidden = true

        document.getElementById('return-time').hidden = true
        document.getElementById('return-time-label').hidden = true
    }

    if (option === 'AB') {
        document.getElementById('return-time').hidden = false
        document.getElementById('return-time-label').hidden = false
    }

}

function selectReturnTime() {
    let option = timeOptions.options[timeOptions.selectedIndex].value

    returnTime.disabled = false

    if (option === '1800A') {
        returnTime.options[0].hidden = false
        returnTime.options[1].hidden = false
        returnTime.options[2].hidden = false
        returnTime.options[3].hidden = false
        returnTime.options[4].hidden = false
        returnTime.options[5].hidden = false
    }
    if (option === '1830A' || option === '1845A') {
        returnTime.options[0].hidden = true
        returnTime.options[1].hidden = true
        returnTime.options[2].hidden = true
        returnTime.options[3].hidden = false
        returnTime.options[4].hidden = false
        returnTime.options[5].hidden = false
    }
    if (option === '1900A' || option === '1915A') {
        returnTime.options[0].hidden = true
        returnTime.options[1].hidden = true
        returnTime.options[2].hidden = true
        returnTime.options[3].hidden = true
        returnTime.options[4].hidden = false
        returnTime.options[5].hidden = false
    }
    if (option === '2100A') {
        returnTime.options[0].hidden = true
        returnTime.options[1].hidden = true
        returnTime.options[2].hidden = true
        returnTime.options[3].hidden = true
        returnTime.options[4].hidden = true
        returnTime.options[5].hidden = false
    }
}

let response = document.getElementById('response')



function count() {
    event.preventDefault()
    let tickets = document.getElementById("tickets-number").value
    let destination = route.options[route.selectedIndex].text
    let sumMoney
    let startTime = timeOptions.options[timeOptions.selectedIndex].text
    let finishTime

    let time = timeOptions.options[timeOptions.selectedIndex].value
    let backTime = returnTime.options[returnTime.selectedIndex].value

    if (time === "1800A") {
        finishTime = '18:50'
    }

    if (time === "1830A" || time === "1830B") {
        finishTime = '19:20'
    }

    if (time === "1845A" || time === "1845B") {
        finishTime = '19:35'
    }

    if (time === "1900A" || time === "1900B" || backTime === "1900B") {
        finishTime = '19:45'
    }

    if (time === "1915A" || time === "1915B" || backTime === "1915B") {
        finishTime = '20:05'
    }

    if (time === "2100A") {
        finishTime = '21:50'
    }

    if (time === "1935B" || backTime === "1935B") {
        finishTime = '20:25'
    }

    if (time === "2150B" || backTime === "2150B") {
        finishTime = '22:40'
    }

    if (time === "2155B" || backTime === "2155B") {
        finishTime = '22:35'
    }

    if (destination === 'из А в В' || destination === 'из В в А') {
        sumMoney = tickets * 700
        sumTime = 50
    }
    if (destination === 'из А в В и обратно в А') {
        sumMoney = tickets * 1200
        sumTime = 100
    }

    return response.innerHTML = `Вы выбрали ${tickets} ${tickets > 4 ? 'билетов' : `билет${tickets === 1 ? '' : 'а'}`} по маршруту ${destination} стоимостью ${sumMoney}р.
    Время в пути ${sumTime} минут. 
    Теплоход отправляется в ${startTime}, а прибудет в ${finishTime}.`
}
