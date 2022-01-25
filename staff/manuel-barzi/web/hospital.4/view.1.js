function renderPatients(patients) {
    const tableHeaders = ['ID', 'First Name', 'Last Name', 'Birth Date', 'Gender', 'Blood Type', 'E-mail', 'Phone', 'City', 'Country']

    // const ths = []

    // for (let i = 0; i < tableHeaders.length; i++) {
    //     var header = tableHeaders[i]

    //     ths[i] = '<th>' + header + '</th>'
    // }

    // const ths = tableHeaders.map(function(header) { 
    //     return '<th>' + header + '</th>' 
    // })

     const ths = tableHeaders.map(header => '<th>' + header + '</th>')

    // let thsInline = ''

    // for (let i = 0; i < ths.length; i++) {
    //     const th = ths[i]

    //     thsInline = thsInline + th
    // }

    const thsInline = ths.join('')

    let table = '<table class="table"><thead><tr>' + thsInline + '</tr></thead><tbody>'

    for (let i = 0; i < patients.length; i++) {
        const patient = patients[i]
        const id = patient.id
        const firstName = patient.firstName
        const lastName = patient.lastName
        const birthDate = patient.birthDate.toLocaleDateString()
        const gender = patient.gender
        const bloodType = patient.bloodType
        const email = patient.email
        const phone = patient.phone
        const city = patient.city
        const country = patient.country

        const dataValues = [id, firstName, lastName, birthDate, gender, bloodType, email, phone, city, country]

        // const tds = []

        // for (let i = 0; i < dataValues.length; i++) {
        //     const dataValue = dataValues[i]

        //     tds[i] = '<td>' + dataValue + '</td>'
        // }

        // const tds = dataValues.map(function(dataValue) {
        //     return '<td>' + dataValue + '</td>'
        // })

        const tds = dataValues.map(dataValue => '<td>' + dataValue + '</td>')

        // let tdsInline = ''

        // for (let i = 0; i < tds.length; i++) {
        //     const td = tds[i]

        //     tdsInline = tdsInline + td
        // }

        const tdsInline = tds.join('')

        table = table + '<tr>' + tdsInline + '</tr>'
    }

    table = table + '</tbody></table>'

    const results = document.querySelector('.results')
    results.innerHTML = table
}

function mechanizeTableClicks() {
    const rows = document.querySelector('.table').querySelector('tbody').querySelectorAll('tr')

    // for (let i = 0; i < rows.length; i++) {
    //     const row = rows[i]

    //     const cell = row.querySelector('td')

    //     cell.addEventListener('click', function (event) {
    //         const id = event.target.innerText

    //         const patient = getPatientById(id)

    //         if (confirm('Current note: "' + patient.note + '". Wanna change it?'))
    //             patient.note = prompt('note?')
    //     })
    // }

    rows.forEach(row => {
        const cell = row.querySelector('td')

        cell.addEventListener('click', function (event) {
            const id = event.target.innerText

            const patient = getPatientById(id)

            if (confirm('Current note: "' + patient.note + '". Wanna change it?'))
                patient.note = prompt('note?')
        })
    })
}