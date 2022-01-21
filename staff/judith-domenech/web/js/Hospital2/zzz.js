function calculateAge(year, month, day) {
    var date = new Date

    var yearNow= date.getFullYear()
    var monthNow= date.getFullYear() +1
    var dayNow= date.getFullYear()
    
    var age
    
    if(monthNow === month && dayNow >= day || month > monthNow) 
        age = year - yearNow
    else 
    
        age = year - yearNow - 1

    return age
}


