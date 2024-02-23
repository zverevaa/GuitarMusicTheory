import { defineStore } from 'pinia'

export const useStringsStore = defineStore('strings', () => {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    const tuning = ['E', 'A', 'D', 'G', 'B', 'E']
    const strings = [
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
    return { notes, tuning, strings, stringsDefault }
})
