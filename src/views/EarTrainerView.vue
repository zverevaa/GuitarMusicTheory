<template>
    <div>
        <TrainerHeader :header-view="'eartrainer'" />
        <InstrumentFretboard class="instrument" />
        <SingleNoteQuiz />
    </div>
</template>

<script setup>
import InstrumentFretboard from '@/components/InstrumentFretboard.vue'
import SingleNoteQuiz from '@/components/SingleNoteQuiz.vue'
import TrainerHeader from '@/components/TrainerHeader.vue'
</script>

<style lang="scss" scoped></style>
