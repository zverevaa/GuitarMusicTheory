<template>
    <div class="instrument-string">
        <div
            @click="stringsStore.muteString(props.idx), console.log(currentString.isMuted)"
            class="instrument-string-mute"
        >
            <div class="muted-icon" v-show="currentString.isMuted == true">
                <i class="fa-solid fa-plus fa-2xl"></i>
            </div>

            <div class="dash"></div>
        </div>

        <div class="instrument-string-tuning">
            <span>{{ currentString.tuning }}</span>
        </div>
        <div
            class="instrument-string-nut"
            :class="currentString.isMuted == true ? 'muted' : ''"
        ></div>
        <div class="instrument-notes" :class="currentString.isMuted == true ? 'muted' : ''">
            <div
                class="instrument-note"
                v-for="(note, index) in currentStringNoteNames"
                :key="note"
                @click="
                    () => {
                        currentString.isMuted == false
                            ? stringsStore.playNote(currentStringNotes[index])
                            : ''
                    }
                "
            >
                <div class="instrument-string-circle">{{ note }}</div>
                <div class="instrument-string-render"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStringsStore } from '@/stores/strings'
import { useQuizStore } from '@/stores/quiz'
const props = defineProps({
    idx: Number
})

const stringsStore = useStringsStore()
const quizStore = useQuizStore()
const currentString = stringsStore.strings[props.idx]
const currentStringNoteNames = currentString.noteNames
const currentStringNotes = currentString.notes

// let buffer

// const playNote = (note) => {
//     Tone.start()
//     if (currentString.isMuted == true) {
//         return
//     }
//     buffer = new Tone.ToneAudioBuffer(`../src/assets/notes/${note}.wav`, () => {
//         const player = new Tone.Player(buffer.get()).toDestination()
//         player.start()
//     })
//     console.log(note)
// }
</script>

<style lang="scss">
.instrument {
    &-string {
        display: flex;
        justify-content: center;
        align-items: center;
        &-mute {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            border: 3px solid black;
            height: 35px;
            aspect-ratio: 1;
            border-radius: 50%;
            z-index: 2;
            &:hover {
                cursor: pointer;
                i {
                    display: block;
                }
            }
            .dash {
                position: absolute;
                left: 100%;
                background-color: black;
                height: 3px;
                width: 1rem;
            }
            .muted-icon {
                rotate: 45deg;
            }
        }
        &-nut {
            height: 50px;
            width: 0.5rem;
            background-color: black;
        }
        &-tuning {
            aspect-ratio: 1;
            height: 25px;
            background-color: #98c8e0;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 2;
            left: 1.2rem;
            transform: rotate(45deg);
            span {
                transform: rotate(-45deg);
            }
        }

        &-render {
            width: inherit;
            position: absolute;
            right: 0;
            height: 6px;
            background-color: var(--string-color);
            user-select: none;
            pointer-events: none;
        }

        &-circle {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            z-index: 2;
            width: 35px;
            height: 35px;
            background-color: #98c8e0;
            border-radius: 50%;
        }
    }
    &-notes {
        width: 80%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 0;
    }

    &-note {
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: var(--fret-color);
        border-left: 6px solid black;
        &:hover {
            cursor: pointer;
        }
    }
}

.muted {
    opacity: 0.5;
}
</style>
