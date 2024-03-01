<template>
    <div class="instrument-string">
        <div
            @click="stringsStore.muteString(props.idx), console.log(currentString.isMuted)"
            class="instrument-string-mute"
        >
            <div
                class="muted-icon"
                :class="currentString.isMuted == true ? 'muted-icon-active' : ''"
            >
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
                <div class="instrument-string-render" :class="`string${props.idx + 1}`"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStringsStore } from '@/stores/strings'
const props = defineProps({
    idx: Number
})

const stringsStore = useStringsStore()
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
            }
            .dash {
                position: absolute;
                left: 100%;
                background-color: black;
                height: 3px;
                width: 1rem;
            }
            .muted-icon {
                opacity: 0%;
                transition: all 0.2s ease-in-out;
                &:hover {
                    opacity: 100%;
                    rotate: 45deg;
                }
            }
            .muted-icon-active {
                opacity: 100%;
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
            background-color: var(--fret-color);
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 2;
            left: 1.2rem;
            transform: rotate(45deg);
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
            user-select: none;
            span {
                transform: rotate(-45deg);
                font-family: Inter, sans-serif;
                font-weight: bold;
                font-size: 1rem;
                color: #fff;
            }
        }

        &-render {
            width: inherit;
            position: absolute;
            right: 0;

            background-color: var(--string-color);
            user-select: none;
            pointer-events: none;
            filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        }
        .string1 {
            height: 3px;
        }
        .string2 {
            height: 3.5px;
        }
        .string3 {
            height: 4px;
        }
        .string4 {
            height: 4.5px;
        }
        .string5 {
            height: 5px;
        }
        .string6 {
            height: 5.5px;
        }

        &-circle {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            z-index: 2;
            width: 35px;
            height: 35px;
            font-family: Inter, sans-serif;
            font-weight: bold;
            background-color: #98c8e0;
            border-radius: 50%;
            filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
            user-select: none;
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
        border-left: 7px solid black;
        &:hover {
            cursor: pointer;
        }
    }
}

.muted {
    opacity: 0.5;
    transition: opacity 0.1s ease-in-out;
}
</style>
