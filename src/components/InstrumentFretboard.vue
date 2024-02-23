<template>
    <div>
        <InstrumentString v-for="(string, index) in stringTuning" :idx="index" :key="index" />
    </div>
</template>

<script setup>
import InstrumentString from './InstrumentString.vue'
import { useStringsStore } from '@/stores/strings'

const stringsStore = useStringsStore()

const stringTuning = stringsStore.tuning
</script>

<style lang="scss" scoped></style>
