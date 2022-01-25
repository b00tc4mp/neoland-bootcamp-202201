const renderPatients = patients => {
    const tableHeaders = ['ID', 'First Name', 'Last Name', 'Birth Date', 'Age', 'Gender', 'Blood Type', 'E-mail', 'Phone', 'City', 'Country']
    const ths = tableHeaders.map(header => '<th>' + header + '</th>')
    const thsInline = ths.join('')
    let table = '<table class="table"><thead><tr>' + thsInline + '</tr></thead></tbody>'

    for (let i = 0; i < patients.length; i++) {
        const patient = patients[i]
        const id = patient.id
        const firstName = patient.firstName
        const lastName = patient.lastName
        const birthDate = patient.birthDate.toLocaleDateString()
        const age = calculateAge(patient.birthDate.getFullYear(), patient.birthDate.getMonth(), patient.birthDate.getDate())
        const gender = patient.gender
        const bloodType = patient.bloodType
        const email = patient.email
        const phone = patient.phone
        const city = patient.city
        const country = patient.country

        const dataValues = [id, firstName, lastName, birthDate, age, gender, bloodType, email, phone, city, country]
        const tds = dataValues.map(dataValue => '<td>' + dataValue + '</td>')
        const tdsInline = tds.join('')
        table += '<tr>' + tdsInline + '</tr>'
    }

    table += '</tbody></table>'

    const resultsPanel = document.querySelector('.results')
    resultsPanel.innerHTML = table
    const filePanel = document.querySelector('.file')
    filePanel.classList.add('off')
    resultsPanel.classList.remove('off')  
}


const mechanizeTableClicks = () => {
    const rows = document.querySelector('.table').querySelector('tbody').querySelectorAll('tr')
   
    rows.forEach(row => {
        const cell = row.querySelector('td')
        cell.addEventListener('click', function (event) {
            const id = event.target.innerText
            const patient = getPatientById(id)
            // if (confirm('Current note: "' + patient.note + '". Wanna change it?'))
            //     patient.note = prompt('note?')
            const resultsPanel= document.querySelector('.results')
            resultsPanel.classList.add('off')
            const filePanel = document.querySelector('.file')
            const fileFullName = filePanel.querySelector('.file__full-name')
            
            const year = patient.birthDate.getFullYear() 
            const month = patient.birthDate.getMonth()
            const date = patient.birthDate.getDate()

            const age = calculateAge(year,month,date)
            
            // New
            fileFullName.innerText = patient.firstName + ' ' + patient.lastName + '(' + age + ')'
            document.querySelector('#firstName').value = patient.firstName
            document.querySelector('#lastName').value = patient.lastName
            document.querySelector('#id').value = patient.id
            document.querySelector('#birthDate').value = patient.birthDate.toLocaleDateString()
            document.querySelector('#age').value = age
            document.querySelector('#gender').value = patient.gender
            document.querySelector('#bloodType').value = patient.bloodType
            document.querySelector('#email').value = patient.email
            document.querySelector('#phone').value = patient.phone
            document.querySelector('#place').value = patient.city + ", " + patient.country
            filePanel.classList.remove('off')
        })
    })
}