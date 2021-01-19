import { emptyLight } from '../../../empty/styles'
import { scrollbarLight } from '../../../scrollbar/styles'
import { commonLight } from '../../../_styles/new-common'
import type { ThemeCommonVars } from '../../../_styles/new-common'
import commonVariables from './_common'
import { createTheme } from '../../../_mixins'

const self = (vars: ThemeCommonVars) => {
  const {
    borderRadius,
    popoverColor,
    boxShadow2,
    textColor3,
    dividerColorOverlay,
    textColor2,
    primaryColorPressed,
    textColorDisabled,
    primaryColor,
    opacityDisabled,
    hoverColorOverlay
  } = vars
  return {
    ...commonVariables,
    borderRadius: borderRadius,
    color: popoverColor,
    boxShadow: boxShadow2,
    groupHeaderTextColor: textColor3,
    actionDividerColor: dividerColorOverlay,
    optionTextColor: textColor2,
    optionTextColorPressed: primaryColorPressed,
    optionTextColorDisabled: textColorDisabled,
    optionTextColorActive: primaryColor,
    optionOpacityDisabled: opacityDisabled,
    optionCheckColor: primaryColor,
    optionColorPending: hoverColorOverlay,
    actionTextColor: textColor2
  }
}

export type BaseSelectMenuThemeVars = ReturnType<typeof self>

const baseSelectMenuLight = createTheme({
  name: 'BaseSelectMenu',
  common: commonLight,
  peers: {
    Scrollbar: scrollbarLight,
    Empty: emptyLight
  },
  self
})

export default baseSelectMenuLight
export type BaseSelectMenuTheme = typeof baseSelectMenuLight
