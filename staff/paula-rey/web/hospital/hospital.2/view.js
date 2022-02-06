// function renderPatients(patients) {
//     console.table(patients)
// }

function renderPatients(patients) {
    var names = '<table class="table"><thead><tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Gender</th><th>Blood Type</th></tr></thead><tbody>'

    for (var i = 0; i < patients.length; i++)
        names =  names + '<tr><td>' + patients[i].firstName + '</td><td>' + patients[i].lastName + '</td><td>' + patients[i].age + '</td><td>' + patients[i].gender + '</td><td>' + patients[i].bloodType + '</td></tr>'

    names = names + '</tbody></table>'

    //document.body.innerHTML = document.body.innerHTML + names

    var results = document.querySelector('.results')
    results.innerHTML = names
}
