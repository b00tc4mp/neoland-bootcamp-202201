/*function printPatientsNames(patients) {
    for (var i = 0; i < patients.length; i++)
        console.log(patients[i].firstName, patients[i].lastName)
}*/

function printPatientsNames(patients) {
    var names = ''

    for (var i = 0; i < patients.length; i++)
        names = names + patients[i].firstName + ' ' + patients[i].lastName + '\n'

     alert(names)
}