import { theme } from './theme'
const palette = {
    purple: '#5A31F4',
    green: '#47A38D',
    red: '#CD0E61',
    black: '#000000',
    white: '#FFFFFF',
    gold: '#FFCE48',
    grey: '#F2F2F2',
    darkGrey: '#000000A6',
    lightBlack:'#dddddd'
}
export const lightTheme = {
    ...theme,
    colors: {
        backgroundPrimary: "#F3F3FD",
        backgroundSecondary: palette.white,
        primary: palette.green,
        secondary: palette.black,
        primaryText: palette.white,
        secondaryText: palette.black,
        star: palette.gold,
        grey: palette.grey,
        disabled: palette.lightBlack,
        placeholder:'#939393',
        descriptionText: "#939393",
        primaryLight: "#C7E8DC",
    },
    textVariants: {
        ...theme.textVariants,
        primaryColor: '#000000D9'
    }
}