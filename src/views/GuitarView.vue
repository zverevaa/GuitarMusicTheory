<template>
    <TrainerHeader :header-view="'fretboard'" />
    <InstrumentFretboard class="instrument" />
</template>

<script setup>
import TrainerHeader from '@/components/TrainerHeader.vue'
import InstrumentFretboard from '@/components/InstrumentFretboard.vue'
</script>

<style lang="scss" scoped></style>
