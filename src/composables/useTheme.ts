import { useDark, useToggle } from '@vueuse/core';

export const useTheme = () => {
    const isThemeDark = useDark({
        attribute: 'color-scheme',
        valueDark: 'dark',
        valueLight: 'light',
        storageKey: 'dark-theme',
    });

    const themeMap = computed(() => isThemeDark.value ? 'dark' : 'light')

    const toggleTheme = useToggle(isThemeDark)

    return {
        isThemeDark,
        toggleTheme,
        themeMap,
    }
}