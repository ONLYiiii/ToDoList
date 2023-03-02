import {THEME as commonTheme} from './theme';

export const COLORS = {
    text: '#252F40',
    primary: '#CB0C9F',
    secondary: '#627594', // '#8392AB',
    tertiary: '#E8AE4C',


    black: '#252F40',
    white: '#FFFFFF',

    dark: '#252F40',
    light: '#E9ECEF',

    gray: '#A7A8AE',

    danger: '#EA0606',
    warning: '#FFC107',
    success: '#82D616',
    info: '#17C1E8',

    card: '#FFFFFF',
    background: '#E9ECEF',

    shadow: '#000000',
    overlay: 'rgba(0,0,0,0.3)',

    focus: '#E293D3',
    input: '#252F40',

    switchOn: '#3A416F',
    switchOff: '#E9ECEF',

    checkbox: ['#3A416F', '#141727'],
    checkboxIcon: '#FFFFFF',

    facebook: '#3B5998',
    twitter: '#55ACEE',
    dribbble: '#EA4C89',

    icon: '#8392AB',
    link: '#CB0C9F',
};

export const GRADIENTS = {
    primary: ['#FF0080', '#7928CA'],
    secondary: ['#A8B8D8', '#627594'],
    info: ['#21D4FD', '#2152FF'],
    success: ['#98EC2D', '#17AD37'],
    warning: ['#FBCF33', '#F53939'],
    danger: ['#FF667C', '#EA0606'],

    light: ['#EBEFF4', '#CED4DA'],
    dark: ['#3A416F', '#141727'],

    white: [String(COLORS.white), '#EBEFF4'],
    black: [String(COLORS.black), '#141727'],

    divider: ['rgba(255,255,255,0.3)', 'rgba(102, 116, 142, 0.6)'],
    menu: [
        'rgba(255, 255, 255, 0.2)',
        'rgba(112, 125, 149, 0.5)',
        'rgba(255, 255, 255, 0.2)',
    ],
};

export const SIZES = {
    // global sizes
    base: 8,
};

export const SPACING = {
    /** xs: 4px */
    xs: SIZES.base * 0.5,
    /** s: 8px */
    s: SIZES.base * 1,
    /** sm: 16px */
    sm: SIZES.base * 2,
    /** m: 24px */
    m: SIZES.base * 3,
    /** md: 32px */
    md: SIZES.base * 4,
    /** l: 40px */
    l: SIZES.base * 5,
    /** xl: 48px */
    xl: SIZES.base * 6,
    /** xxl: 56px */
    xxl: SIZES.base * 7,
};

export const THEME = {
    ...commonTheme,
    colors: COLORS,
    gradients: GRADIENTS,
    sizes: {...commonTheme.sizesWidget, ...SPACING},
}
