<template>
    <div class="instrument-string">
        <div class="instrument-notes">
            <div class="instrument-note" v-for="note in notes" :key="note">
                <div class="instrument-string-circle">{{ note }}</div>
                <div class="instrument-string-render"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStringsStore } from '@/stores/strings'

const stringsStore = useStringsStore()
const notes = stringsStore.notes
</script>

<style lang="scss">
.instrument {
    &-string {
        display: flex;
        justify-content: center;

        &-render {
            width: inherit;
            position: absolute;
            left: 0;
            height: 6px;
            background-color: var(--string-color);
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
</style>
