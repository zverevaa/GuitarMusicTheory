<template>
    <header class="header">
        <div class="header-container">
            <h1 class="header-title" v-if="props.headerView == 'eartrainer'">Ear Trainer</h1>
            <h1 class="header-title" v-if="props.headerView == 'fretboard'">Fretboard Reference</h1>
            <nav class="header-nav">
                <ul>
                    <li><a href="./">Home</a></li>
                    <li><a href="./eartrainer">Ear Trainer</a></li>
                    <li></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
const props = defineProps({
    headerView: String
})
</script>

<style lang="scss">
.header {
    display: flex;
    justify-content: center;
    background-color: var(--fret-color);
    padding: 10px 0;
    margin-bottom: 30px;
    color: #e8efec;

    filter: drop-shadow(0 0 2px black);
    &-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
    }
    &-title {
        font-size: 32px;
        font-weight: bold;
    }
    &-nav {
        ul {
            display: flex;
            gap: 20px;
            list-style: none;
            padding: 0;
            margin: 0;
            li {
                font-size: 24px;
                a {
                    text-decoration: none;
                    &:visited {
                        color: #e8efec;
                    }
                    &:hover {
                        color: #fff;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>
