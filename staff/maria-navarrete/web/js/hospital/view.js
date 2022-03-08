const renderResults = patients => {
    const tableHeaders = ['ID', 'First Name', 'Last Name', 'E-mail', 'Phone']
    
    const headers = tableHeaders.map(header => `<th>${header}</th>`).join('')

    const rows = patients.map(patient => {
        const {id, firstName, lastName, email, phone} = patient
        const dataValues = [id, firstName, lastName, email, phone]
        const rowsInline = dataValues.map(dataValue => `<td>${dataValue}</td>`).join('')
        return `<tr>${rowsInline}</tr>`
    }).join('')
    
    const resultsPanel = document.querySelector('.results')
        
    resultsPanel.innerHTML = `<table class ="table">
                                <thead>
                                    <tr>${headers}</tr>
                                </thead>
                                <tbody>
                                    ${rows}
                                </tbody>
                            </table>`

    resetInputs()
    mechanizeResultsClicks()
    const filePanel = document.querySelector('.file')
    filePanel.classList.add('off')
    resultsPanel.classList.remove('off')
}

const resetInputs = () => {
    const searchInputs = document.querySelectorAll('search>*')
    for(let i=0; searchInputs.length; i++){
        if(!(searchInputs[i] === document.activeElement))
            searchInputs[i].value = ""
    }
}

const mechanizeResultsClicks = () => {
    const rows = document.querySelector('.table').querySelector('tbody').querySelectorAll('tr')

    rows.forEach(row => {
        row.addEventListener('click', function () {
            const cell = row.querySelector('td')
            const id = cell.innerText
            const patient = getPatientById(id)
            renderFile(patient)
            // if (confirm('Current note: "' + patient.note + '". Wanna change it?'))
            //     patient.note = prompt('note?')
        })
    })
}

const renderFile = patient => {
    const filePanel = document.querySelector('.file')

    filePanel.innerHTML = `<h2 class="file__title">Personal File</h2>
    <div class="file__body">
        <div class="file__column">
            <div class="file__field">
                <label class="file__label" for="file__full-name">Full Name</label>
                <input type="text" id="file__full-name" class="file__full-name" name="file__full-name" disabled/>
            </div>
            <div class="file__field">
                <label class="file__label" for="file__id">ID</label>
                <input type="text" id="file__id" class="file__id" name="file__id" disabled/>
            </div>
            <div class="file__field">
                <label class="file__label" for="file__birthdate">Date of Birth</label>
                <input type="text" id="file__birthdate" class="file__birthdate" name="file__birthdate" disabled/>
            </div>
            <div class="file__field">
                <label class="file__label" for="file__city">City</label>
                <input type="text" id="file__city" class="file__city" name="file__city" disabled/>
            </div>
            <div class="file__field">
                <label class="file__label" for="file__country">Country</label>
                <input type="text" id="file__country" class="file__country" name="file__country" disabled/>
            </div>
        </div>
        <div class="file__column">
            <div class="file__field">
                <label class="file__label" for="file__gender">Gender</label>
                <input type="text" id="file__gender" class="file__gender" name="file__gender" disabled/>
            </div>
            <div class="file__field">
                <label class="file__label" for="file__blood-type">Blood Type</label>
                <input type="text" id="file__blood-type" class="file__blood-type" name="file__blood-type" disabled/>
            </div>
            <div class="file__field">
                <label class="file__label" for="file__age">Age</label>
                <input type="number" id="file__age" class="file__age" name="file__age" disabled/>
            </div>
            <div class="file__field">
                <label class="file__label" for="file__phone">Phone</label>
                <input type="tel" id="file__phone" class="file__phone" name="file__phone" disabled/>
            </div>
            <div class="file__field">
                <label class="file__label" for="file__email">E-mail</label>
                <input type="email" id="file__email" class="file__email" name="file__email" disabled/>
            </div>
        </div>
    </div>
    <div class="file__note">
            <textarea class="file__note-text" name="" id="" cols="30" rows="10"></textarea>
            <button class="file__save-note">Save Note</button>
    </div>`

    const fileFullName = filePanel.querySelector('.file__full-name')
    fileFullName.value=patient.firstName + ' ' + patient.lastName
    
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
    fileAge.value = patient.getAge()

    const filePhone = filePanel.querySelector('.file__phone')
    filePhone.value = patient.phone

    const fileEmail = filePanel.querySelector('.file__email')
    fileEmail.value = patient.email

    const fileNoteTextarea = filePanel.querySelector('.file__note-text')

    if(patient.note)
        fileNoteTextarea.value = patient.note
    else
        fileNoteTextarea.value = ''
    
    mechanizeSaveNote(patient)

    const resultsPanel = document.querySelector('.results')
    resultsPanel.classList.add('off')
    filePanel.classList.remove('off')
}

const mechanizeSaveNote = patient =>{
    const filePanel = document.querySelector('.file')

    const fileSaveNoteButton = filePanel.querySelector('.file__save-note')

    fileSaveNoteButton.addEventListener('click', function (){
        const fileNoteTextarea = filePanel.querySelector('.file__note-text')
        const note = fileNoteTextarea.value
        patient.note = note
    })
}