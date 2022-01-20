/*function printPatientsNames(patients) {
    for (var i = 0; i < patients.length; i++)
        console.log(patients[i].firstName, patients[i].lastName)
}

function printPatientsNames(patients) {
    var names = ''
    for (var i = 0; i < patients.length; i++)
        names += patients[i].firstName + ' ' + patients[i].lastName + '\n'
    alert(names)
}

function renderPatients(patients) {
     console.table(patients)
}


function printPatientsNames(patients){
    var names = '<ul>'

    for(var i = 0; i<patients.length; i++)
        names+= '<li>'+patients[i].firstName + ' '+ patients[i].lastName + '</li>'
    names+= '</ul>'
    
    document.body.innerHTML = names
}
*/

function renderPatients(patients){
    var names = `<table class="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Blood Type</th>
                        </tr>
                    </thead>
                    <tbody>`
    for(var i = 0; i<patients.length; i++)
        names = names + '<tr><td>' + patients[i].firstName + '</td><td>' + patients[i].lastName + '</td><td>' + patients[i].age + '</td><td>' + patients[i].gender + '</td><td>' + patients[i].bloodType + '</td></tr>'

    names = names + '</tbody></table>'

    var results = document.querySelector('.results')
    results.innerHTML=names
}