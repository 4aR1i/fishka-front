<template>
    <button v-if="isLoaded" :class="['button-theme', {'button-theme_dark': isDark}]" @click="toggleDark()">
        <div class="button-theme__wrapper">
            <WeatherSunny24Filled :class="['button-theme__sun', {'button-theme__sun_active': !isDark}]" />
            <WeatherMoon24Filled :class="['button-theme__moon', {'button-theme__moon_active': isDark}]" />

            <div class="button-theme__thumb"/>
        </div>
    </button>
</template>

<script setup lang="ts">
import { WeatherSunny24Filled, WeatherMoon24Filled } from '@vicons/fluent';
import { useDark, useToggle } from '@vueuse/core';

const isLoaded = ref(false)
const themeDark = useDark({
    attribute: 'color-scheme',
    valueDark: 'dark',
    valueLight: 'light',
    storageKey: 'dark-theme',
});
const isDark = ref(themeDark.value)

const toggleDark = useToggle(themeDark)

onMounted(() => {
  isLoaded.value = true;
});

watch(themeDark, (value) => {
    nextTick(() => {
        isDark.value = value;
    });
});

</script>

<style lang="scss" scoped>
.button-theme {
    position: fixed;
    z-index: 1;
    top: 1rem;
    right: 1rem;
    background-color: var(--background);
    box-shadow: 0 2px 6px 0 #0003;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &__wrapper {
        position: relative;
        padding: 8px;
        display: flex;
        gap: 16px;
    }

    &__thumb {
        position: absolute;
        padding: 6px;
        top: 0;
        left: 0;
        height: 100%;
        width: 50%;
        display: flex;
        will-change: transform;
        transform: translateX(0);
        transition: transform 0.3s ease;
        // animation: animationToLight 0.3s ease forwards;

        .button-theme_dark & {
            transform: translateX(40px);
            // animation: animationToDark 0.3s ease forwards;
        }

        &::before {
            content: '';
            display: block;
            flex-grow: 1;
            background: var(--color-gold);
            transition: background 0.3s ease;
            border-radius: 50%;
            box-shadow: 0 0 6px 0 $color-white;

            .button-theme_dark & {
                background: var(--color-dark);
            }
        }
    }

    &__sun {
        color: $color-white;
    }

    &__moon {
        color: var(--color-dark);
    }

    &__sun,
    &__moon {
        z-index: 1;
        height: 24px;
        transition: color 0.4s ease;

        &_active {
            color: $color-white;
        }
    }
}

@keyframes animationToDark {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(40px);
    }
}

@keyframes animationToLight {
    from {
        transform: translateX(40px);
    }

    to {
        transform: translateX(0);
    }
}
</style>