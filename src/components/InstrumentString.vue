<template>
    <div class="instrument-string">
        <div class="instrument-notes">
            <div class="instrument-note" v-for="note in notes" :key="note">{{ note }}</div>
        </div>
    </div>
</template>

<script setup>
import { useStringsStore } from '@/stores/strings'

const stringsStore = useStringsStore()
const notes = stringsStore.notes
</script>

<style lang="scss" scoped></style>
