import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as Tone from 'tone'

export const useStringsStore = defineStore('strings', () => {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    const tuning = ['E', 'A', 'D', 'G', 'B', 'E']
    const strings = ref([
        {
            id: 1,
            isMuted: false,
            tuning: 'E',
            notes: ['F4', 'Fs4', 'G4', 'Gs4', 'A4', 'As4', 'B4', 'C5', 'Cs5', 'D5', 'Ds5', 'E5'],
            noteNames: ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']
        },
        {
            id: 2,
            isMuted: false,
            tuning: 'B',
            notes: ['C4', 'Cs4', 'D4', 'Ds4', 'E4', 'F4', 'Fs4', 'G4', 'Gs4', 'A4', 'As4', 'B4'],
            noteNames: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
        },
        {
            id: 3,
            tuning: 'G',
            isMuted: false,
            notes: ['Gs3', 'A3', 'As3', 'B3', 'C4', 'Cs4', 'D4', 'Ds4', 'E4', 'F4', 'Fs4', 'G4'],
            noteNames: ['G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G']
        },
        {
            id: 4,
            isMuted: false,
            tuning: 'D',
            notes: ['Ds3', 'E3', 'F3', 'Fs3', 'G3', 'Gs3', 'A3', 'As3', 'B3', 'C4', 'Cs4', 'D4'],
            noteNames: ['D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D']
        },
        {
            id: 5,
            isMuted: false,
            tuning: 'A',
            notes: ['As2', 'B2', 'C3', 'Cs3', 'D3', 'Ds3', 'E3', 'F3', 'Fs3', 'G3', 'Gs3', 'A3'],
            noteNames: ['A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A']
        },
        {
            id: 6,
            isMuted: false,
            tuning: 'E',
            notes: ['F2', 'Fs2', 'G2', 'Gs2', 'A2', 'As2', 'B2', 'C3', 'Cs3', 'D3', 'Ds3', 'E3'],
            noteNames: ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']
        }
    ])
    const stringsDefault = [
        {
            id: 1,
            tuning: 'E',
            notes: ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']
        },
        {
            id: 2,
            tuning: 'B',
            notes: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
        },
        {
            id: 3,
            tuning: 'G',
            notes: ['G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G']
        },
        {
            id: 4,
            tuning: 'D',
            notes: ['D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D']
        },
        {
            id: 5,
            tuning: 'A',
            notes: ['A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A']
        },
        {
            id: 6,
            tuning: 'E',
            notes: ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']
        }
    ]

    const muteString = (id) => {
        strings.value[id].isMuted = !strings.value[id].isMuted
        console.log(strings.value[id].isMuted)
    }

    let buffer
    let activeNote = ref('')

    const playNote = (note) => {
        Tone.start()
        // if (currentString.isMuted == true) {
        //     return
        // }
        buffer = new Tone.ToneAudioBuffer(`../src/assets/notes/${note}.wav`, () => {
            const player = new Tone.Player(buffer.get()).toDestination()
            player.start()
        })
        activeNote.value = note
        console.log(note)
    }

    return {
        notes,
        tuning,
        strings,
        stringsDefault,
        activeNote,
        muteString,
        playNote
    }
})
