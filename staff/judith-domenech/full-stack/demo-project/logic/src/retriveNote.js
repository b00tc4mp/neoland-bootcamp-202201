const { models: { Note } } = require('data')
const { validators: { validateId } } = require('commons')

function retriveNote(userId, noteId){
    validateId(userId)
    validateId(noteId)

    return Note.findById(noteId).populate('user')
        .then(note =>{
            if(!note) throw new Error(`note with id ${noteId} does not exist`)
            if(!note.user._id.toString() === userId || note.public){

                   const doc = user._doc
        
                    // sanitize
                    delete doc._id
                    delete doc.__v

                    doc.userId = doc.user._id
                    doc.userName = doc.user.name

                    delete doc.user
        
                    return doc 
            } else throw new Error(`note with id ${noteId} is not public`)
        })
}

module.exports = retriveNote