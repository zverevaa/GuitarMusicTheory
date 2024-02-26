<template>
    <div class="single-note-quiz">
        <div class="notes">
            <div class="note" v-for="note in stringsStore.notes" :key="note">{{ note }}</div>
        </div>
    </div>
</template>

<script setup>
import { useStringsStore } from '@/stores/strings'
const stringsStore = useStringsStore()
</script>

<style lang="scss">
.single-note-quiz {
    display: flex;
    justify-content: center;
    .notes {
        display: flex;
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
        }
    }
}
</style>
