import { defineStore } from 'pinia'
import { ref, toRaw } from 'vue'
import { useStringsStore } from './strings'

export const useQuizStore = defineStore('quiz', () => {
    const strings = useStringsStore()

    const defineSingleNotes = (amount) => {
        const tempObj = {
            notes: [],
            noteNames: []
        }
        const singleNoteQuizObj = {
            notes: [],
            noteNames: []
        }
        let randInt

        for (let i = 0; i < strings.strings.length; i++) {
            if (!strings.strings[i].isMuted) {
                tempObj.notes = tempObj.notes.concat(toRaw(strings.strings[i].notes))
                tempObj.noteNames = tempObj.noteNames.concat(toRaw(strings.strings[i].noteNames))
            }
        }

        for (let i = 0; i < amount; i++) {
            randInt = Math.floor(Math.random() * tempObj.notes.length)
            singleNoteQuizObj.notes.push(tempObj.notes[randInt])
            singleNoteQuizObj.noteNames.push(tempObj.noteNames[randInt])
        }

        return singleNoteQuizObj
    }

    async function getNote(note) {
        return note
    }

    let isFunctionCalled = ref(false)

    function setFunctionCalled() {
        isFunctionCalled.value = true
    }

    return {
        defineSingleNotes,
        getNote,
        isFunctionCalled,
        setFunctionCalled
    }
})
