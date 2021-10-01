import { colors, typography } from '../../theme/';

const BASE = {
    fontFamily: typography.primary,
    fontSize: 14,
    color: colors.white,
}

const BASE_BOLD = {
    fontFamily: typography.primaryBold,
    color: colors.white,
}

const BOLD = {
    fontFamily: typography.bold,
    color: colors.white,
}

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32,
    },
    h2: {
        ...BOLD,
        fontSize: 28,
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 24,
    },
    h4: {
        ...BASE_BOLD,
        fontSize: 13,
    }
}