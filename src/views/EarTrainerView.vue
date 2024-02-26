<template>
    <div>
        <h1>Ear training view</h1>
        <InstrumentFretboard class="instrument" />
        <SingleNoteQuiz />
    </div>
</template>

<script setup>
import InstrumentFretboard from '@/components/InstrumentFretboard.vue'
import SingleNoteQuiz from '@/components/SingleNoteQuiz.vue'
</script>

<style lang="scss" scoped></style>
