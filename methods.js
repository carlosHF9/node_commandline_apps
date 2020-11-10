const fs = require('fs')

let newNote = {
    title: 'Dawn of sorrow'
}

function errorHandling(){
    fs.writeFileSync('games.json', '[]')
    throw 'No note file has been found, creating a new one . . .'
}


function addNewNote(note){
    try {
        let file = JSON.parse(fs.readFileSync('games.json'))
        file.push(note)
        fs.writeFileSync('games.json', JSON.stringify(file))
    } catch (error) {
        errorHandling()
    }
    
}

function listNotes(){
    try {
        let file = JSON.parse(fs.readFileSync('games.json'))
        for(let i = 0; i < file.length; i++){
            console.log(i+1 + ' - ' + 'Name: ' + file[i].name + ' ' + 'Planet: ' + file[i].planet)
        }
    } catch (error) {
        errorHandling()
    }
    

}

function removeNote(index){
    try {
        let file = JSON.parse(fs.readFileSync('games.json'))
        let removed = file.splice(index - 1, 1)
        if(removed !== undefined){
            fs.writeFileSync('games.json', JSON.stringify(file))
            console.log('The note' + ' ' + removed.name  +  ' ' + removed.planet + ' ' + 'has been removed')
        }

            
    } catch (error) {
        errorHandling()
    }
    

    
}

module.exports = {
    add: addNewNote,
    list: listNotes,
    remove: removeNote
}

