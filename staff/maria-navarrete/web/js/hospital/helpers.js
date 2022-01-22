function generateId(){
    return parseInt(Math.random()*1000000000).toString()
}

function newDate (year, month, day){
    return new Date (year, month-1, day)
}

function calculateAge (year,month,day){
    var date = new Date
    var yearNow = date.getFullYear()
    var monthNow = date.getMonth()
    var dayNow = date.getDate()

    var age

    if(monthNow === month && dayNow>=day || monthNow >= month)
        age = yearNow-year
    else
        age= yearNow-year-1

    return age
}