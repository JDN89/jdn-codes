import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    presetWebFonts,
    // transformerDirectives,
    // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
    theme: {

        colors: {
            'gruGreen': '#b8bb26',
            'gruRed': '#fb4934',
            'gruYellow': '#fabd2f',
            'gruBlue': '#83a598',
            'gruPurple': '#d3869b',
            'gruGrey': '#928374',
            'gruOrange': '#fe8019'
        },
    },
    shortcuts: [
        ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
        ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],

    ],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            warn: true,
        }),
        presetWebFonts({
            fonts: {
                sans: 'DM Sans',
                serif: 'DM Serif Display',
                mono: 'DM Mono',
            },
        }),
    ],
    // transformers: [
    //   transformerDirectives(),
    //   transformerVariantGroup(),
    // ],
})
