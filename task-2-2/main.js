let route = document.getElementById('route')
let timeOptions = document.getElementById('time-options')
let returnTime = document.getElementById('return-time')
let button = document.getElementById('button')

route.addEventListener('change', () => {
    selectType()
    selectTimeHandler()
    backTimeAppear()
})

returnTime.addEventListener('click', () => {
    returnTimeSelect()
    selectReturnHandler()
})

button.addEventListener('click', createResponse)

// INIT VARIABLES
const TypeA = "A"
const TypeB = "B"
const TypeAB = "AB"
const travelTimeMin = 50

let routeValue = TypeA
let arriveTime

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
    { date: '2021-08-21 18:00:00 GMT+0300', type: TypeA },
    { date: '2021-08-21 18:30:00 GMT+0300', type: TypeA },
    { date: '2021-08-21 18:45:00 GMT+0300', type: TypeA },
    { date: '2021-08-21 19:00:00 GMT+0300', type: TypeA },
    { date: '2021-08-21 19:15:00 GMT+0300', type: TypeA },
    { date: '2021-08-21 21:00:00 GMT+0300', type: TypeA },
    { date: '2021-08-21 18:30:00 GMT+0300', type: TypeB },
    { date: '2021-08-21 18:45:00 GMT+0300', type: TypeB },
    { date: '2021-08-21 19:00:00 GMT+0300', type: TypeB },
    { date: '2021-08-21 19:15:00 GMT+0300', type: TypeB },
    { date: '2021-08-21 19:35:00 GMT+0300', type: TypeB },
    { date: '2021-08-21 21:50:00 GMT+0300', type: TypeB },
    { date: '2021-08-21 21:55:00 GMT+0300', type: TypeB },

]

function selectType() {
    routeValue = route.options[route.selectedIndex].value
}

function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for (i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
}

function selectTimeHandler() {
    removeOptions(timeOptions)
    fillSelect = (i) => {
        let opt = document.createElement("option")
        opt.value = dateDic[i].date
        opt.text = getFormattedTime(dateDic[i].date)
        timeOptions.options.add(opt, null)
    }

    for (let i = 0; i < dateDic.length; i++) {
        if (routeValue === TypeA || routeValue === TypeAB) {
            dateDic[i].type === TypeA ? fillSelect(i) : null
        } else if (dateDic[i].type === TypeB) {
            fillSelect(i)
        }
    }
}

// INIT FUNCTION
selectTimeHandler()

function backTimeAppear() {
    if (routeValue === TypeAB) {
        returnTime.hidden = false
        document.getElementById('return-time-label').hidden = false
    }
}

Date.prototype.addMinutes = function (date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
}

function returnTimeSelect() {
    let value = timeOptions.options[timeOptions.selectedIndex].value
    let leaveTime = new Date(value)
    arriveTime = leaveTime.addMinutes(leaveTime, travelTimeMin)
    console.log(arriveTime)
}

function selectReturnHandler() {
    removeOptions(returnTime)
    fillSelect = (i) => {
        let opt = document.createElement("option")
        opt.value = dateDic[i].date
        opt.text = getFormattedTime(dateDic[i].date)
        returnTime.options.add(opt, null)
    }
    for (let i = 0; i < dateDic.length; i++)
        if (new Date(dateDic[i].date).getTime() > arriveTime.getTime()) {
            dateDic[i].type === TypeB ? fillSelect(i) : null
        }
}

let response = document.getElementById('response')

function createResponse(event) {
    event.preventDefault()
    let tickets = document.getElementById("tickets-number").value
    let destination = route.options[route.selectedIndex].text
    let startTime = timeOptions.options[timeOptions.selectedIndex].text
    let value = timeOptions.options[timeOptions.selectedIndex].value
    let leaveTime = new Date(value)
    let finishTime = leaveTime.addMinutes(leaveTime, travelTimeMin)
    finishTime = getFormattedTime(finishTime)
    let routeValue = route.options[route.selectedIndex].value
    let sumMoney
    let sumTime

    if (routeValue === TypeA || routeValue === TypeB) {
        sumMoney = tickets * 700
        sumTime = 50
    } else {
        sumMoney = tickets * 1200
        sumTime = 100
    }
    return response.innerHTML = `Вы выбрали ${tickets} ${tickets > 4 ? 'билетов' : `билет${tickets === 1 ? '' : 'а'}`} по маршруту ${destination} стоимостью ${sumMoney}р.
    Время в пути ${sumTime} минут. Теплоход отправляется в ${startTime}, а прибудет в ${finishTime}.`
}
