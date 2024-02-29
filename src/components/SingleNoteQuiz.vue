<template>
    <div class="single-note-quiz">
        <p class="current" :class="isQuizActive == false ? 'current-hidden' : ''">
            {{ checkProgress() }}
        </p>
        <div class="notes" @click="selectOption($event)">
            <div
                class="note"
                v-for="note in stringsStore.notes"
                :key="note"
                @click="(result = note), (isUserInput = true)"
            >
                {{ note }}
            </div>
        </div>
        <div class="single-note-quiz-settings">
            <input
                type="number"
                id="quiz-length"
                v-model="quizLength"
                name="quiz-length"
                min="1"
                max="25"
                required
                @change="isQuizActive = false"
            />
            <button
                v-if="isQuizActive == false"
                @click="startQuiz(quizLength)"
                class="quiz-button"
                :class="isQuizActive == false ? 'answer-correct' : ''"
            >
                Start Quiz
            </button>
            <button v-if="isQuizActive == true" @click="startQuiz(quizLength)" class="quiz-button">
                Restart Quiz
            </button>
        </div>

        <button
            class="repeat-sound"
            @click="playCurrentSound"
            :disabled="isQuizActive == false || playIndex == quizLength + 1"
        >
            <i class="fa-solid fa-music fa-2xl"></i>
        </button>
        <div class="buttons">
            <button
                class="check-answer quiz-button"
                @click="checkAnswer"
                :disabled="isQuizActive == false || playIndex == quizLength + 1"
            >
                Check answer
            </button>
            <button
                class="next-question quiz-button"
                :disabled="isUserCorrect == false"
                @click="nextQuestion"
                :class="isUserCorrect == true ? 'answer-correct' : ''"
            >
                Next
            </button>
        </div>
        <p class="quiz-message" :class="`${quizMessage}`">{{ quizMessage }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStringsStore } from '@/stores/strings'
import { useQuizStore } from '@/stores/quiz'
const stringsStore = useStringsStore()
const quizStore = useQuizStore()
let result = ''
let currentQuizNotes = {}
let quizLength = ref(3)
let playIndex = ref(0)
let isQuizActive = ref(false)
let isUserCorrect = ref(false)
let quizMessage = ref('')

const clearInputs = () => {
    document.querySelectorAll('.note').forEach((el) => {
        el.classList.remove('selected')
    })
    document.querySelector('.next-question').classList.remove('answer-correct')
}

const checkProgress = () => {
    return `Current progress: ${playIndex.value}/${quizLength.value}`
}

const startQuiz = (quizLength) => {
    clearInputs()
    currentQuizNotes = quizStore.defineSingleNotes(quizLength)
    isQuizActive.value = true
    isUserCorrect.value = false
    quizMessage.value = ''
    playIndex.value = 1
    setTimeout(stringsStore.playNote(currentQuizNotes.notes[0]), 3000)
}

const selectOption = (e) => {
    result = e.target.innerText
    e.target.parentElement.querySelectorAll('.note').forEach((el) => {
        el.classList.remove('selected')
    })

    if (e.target.classList.contains('note')) {
        e.target.classList.add('selected')
    }
    console.log(result)
}

const playCurrentSound = () => {
    stringsStore.playNote(currentQuizNotes.notes[playIndex.value - 1])
}

const checkAnswer = () => {
    if (result == currentQuizNotes.noteNames[playIndex.value - 1]) {
        isUserCorrect.value = true
        quizMessage.value = 'Correct!'
    } else {
        quizMessage.value = checkIfClose()
    }
}

const nextQuestion = () => {
    clearInputs()
    playIndex.value += 1
    if (playIndex.value == quizLength.value + 1) {
        playIndex.value = 0
        isQuizActive.value = false
    }
    isUserCorrect.value = false
    quizMessage.value = ''
    setTimeout(stringsStore.playNote(currentQuizNotes.notes[playIndex.value - 1]), 2000)
}

const checkIfClose = () => {
    document.querySelector('.quiz-message').classList.remove('hot', 'warm', 'cold')
    const indexOfCurrentNote = stringsStore.notes.indexOf(
        currentQuizNotes.noteNames[playIndex.value - 1]
    )
    if (
        result == stringsStore.notes[indexOfCurrentNote - 1] ||
        result == stringsStore.notes[indexOfCurrentNote + 1]
    ) {
        return 'hot'
    } else if (
        result == stringsStore.notes[indexOfCurrentNote - 2] ||
        result == stringsStore.notes[indexOfCurrentNote + 2]
    ) {
        return 'warm'
    } else {
        return 'cold'
    }
}
</script>

<style lang="scss">
.single-note-quiz {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-settings {
        display: flex;
        gap: 20px;
        input[type='number'] {
            border: 2px solid black;
            text-align: center;
            border-radius: 10px;
            height: 50px;
            aspect-ratio: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        input[type='number']::-webkit-inner-spin-button {
            opacity: 1;

            height: 50px;
        }
    }
    .notes {
        display: flex;
        margin-bottom: 30px;
        gap: 5px;
        .note {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            background-color: #98c8e0;
            width: 50px;
            aspect-ratio: 1;
            border: 2px solid black;
            border-radius: 15%;
            &:hover {
                cursor: pointer;
            }
        }
    }

    .current {
        margin: 30px 0;
        font-size: 24px;
        opacity: 100%;
        transition: all 0.5s ease-out;
        &-hidden {
            visibility: hidden;
            opacity: 0%;
        }
    }

    .selected {
        background-color: #49c88d !important;
    }
    .buttons {
        display: flex;
        gap: 20px;
        margin-bottom: 30px;
    }

    .quiz-button {
        height: 50px;
        width: 150px;
        border-radius: 10px;
        background-color: #e8efec;
        border: 2px solid black;
        &:disabled {
            opacity: 0.5;
        }
        &:hover {
            cursor: pointer;
        }
    }

    .answer-correct {
        background-color: #49c88d;
    }

    .repeat-sound {
        margin: 20px 0;
        background-color: #98c8e0;
        padding: 30px;
        border-radius: 50%;
        border: 2px solid black;
        &:disabled {
            opacity: 0.5;
        }

        &:hover {
            cursor: pointer;
        }

        &:active {
            background-color: #49c88d;
            transform: scale(0.9);
        }
    }

    .quiz-message {
        font-size: 24px;
    }

    .hot {
        color: #c85c49;
    }
    .warm {
        color: #c88649;
    }
    .cold {
        color: #6499d0;
    }
}
</style>
