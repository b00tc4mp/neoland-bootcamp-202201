function renderResults(patients) {
    const tableHeaders = ['ID', 'First Name', 'Last Name', 'E-mail', 'Phone']

    const ths = tableHeaders.map(header => '<th>' + header + '</th>')

    const thsInline = ths.join('')

    let table = '<table class="table"><thead><tr>' + thsInline + '</tr></thead><tbody>'

    for (let i = 0; i < patients.length; i++) {
        const patient = patients[i]
        const id = patient.id
        const firstName = patient.firstName
        const lastName = patient.lastName
        const email = patient.email
        const phone = patient.phone

        const dataValues = [id, firstName, lastName, email, phone]

        const tds = dataValues.map(dataValue => '<td>' + dataValue + '</td>')

        const tdsInline = tds.join('')

        table = table + '<tr>' + tdsInline + '</tr>'
    }

    table = table + '</tbody></table>'

    const resultsPanel = document.querySelector('.results')
    resultsPanel.innerHTML = table

    mechanizeResultsClicks()

    const filePanel = document.querySelector('.file')

    filePanel.classList.add('off')

    resultsPanel.classList.remove('off')
}

function mechanizeResultsClicks() {
    const rows = document.querySelector('.table').querySelector('tbody').querySelectorAll('tr')

    rows.forEach(row => {
        row.addEventListener('click', function () {
            const cell = row.querySelector('td')

            const id = cell.innerText

            const patient = getPatientById(id)

            renderFile(patient)
        })
    })
}

function renderFile(patient) {
    const filePanel = document.querySelector('.file')

    const fileFullName = filePanel.querySelector('.file__full-name')
    fileFullName.value = patient.firstName + ' ' + patient.lastName

    const fileId = filePanel.querySelector('.file__id')
    fileId.value = patient.id

    const fileBirthdate = filePanel.querySelector('.file__birthdate')
    fileBirthdate.value = patient.birthDate.toLocaleDateString()

    const fileCity = filePanel.querySelector('.file__city')
    fileCity.value = patient.city

    const fileCountry = filePanel.querySelector('.file__country')
    fileCountry.value = patient.country

    const fileGender = filePanel.querySelector('.file__gender')
    fileGender.value = patient.gender

    const fileBloodType = filePanel.querySelector('.file__blood-type')
    fileBloodType.value = patient.bloodType

    const fileAge = filePanel.querySelector('.file__age')
    fileAge.value = calculateAge(patient.birthDate)

    const filePhone = filePanel.querySelector('.file__phone')
    filePhone.value = patient.phone

    const fileEmail = filePanel.querySelector('.file__email')
    fileEmail.value = patient.email

    const fileNoteTextarea = filePanel.querySelector('.file__note-text')

    if (patient.note)
        fileNoteTextarea.value = patient.note
    else
        fileNoteTextarea.value = ''

    mechanizeSaveNote(patient)

    const resultsPanel = document.querySelector('.results')

    resultsPanel.classList.add('off')

    filePanel.classList.remove('off')
}

function mechanizeSaveNote(patient) {
    const filePanel = document.querySelector('.file')

    const fileSaveNoteButton = filePanel.querySelector('.file__save-note')

    fileSaveNoteButton.addEventListener('click', function() {
        const fileNoteTextarea = filePanel.querySelector('.file__note-text')

        const note = fileNoteTextarea.value

        patient.note = note
    })
}