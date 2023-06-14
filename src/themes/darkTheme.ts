import { theme } from './theme'
const palette = {
    purple: '#5A31F4',
    green: '#0ECD9D',
    red: '#CD0E61',
    black: '#0B0B0B',
    white: '#F0F2F3',
}
export const darkTheme = {
    ...theme,
    colors: {
        backgroundPrimary: palette.black,
        backgroundSecondary: palette.black,
        primary: palette.green,
        secondary: palette.white,
        primaryText: palette.black,
        secondaryText: palette.white,
        star: palette.white,
        grey: palette.white,
        disabled: palette.white,
        placeholder: '#939393',
        descriptionText: "#939393",
        primaryLight: "#C7E8DC",
    },
    textVariants: {
        ...theme.textVariants,
        primaryColor: '#000000D9'
    }
}