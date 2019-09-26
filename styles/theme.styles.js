import { 
  StyleSheet, 
  Dimensions, 
  Platform, 
  StatusBar,
  PixelRatio
} from 'react-native'

let {height, width} = Dimensions.get('window')
let scaleFactor = PixelRatio.get();
let scaleFactorFont = PixelRatio.getFontScale();

let theme =  {
  FONT: {
    SIZE: {
      SMALL: 12 * scaleFactorFont,
      MEDIUM: 14 * scaleFactorFont,
      LARGE: 16 * scaleFactorFont,

      H1: 96 * scaleFactorFont,
      H2: 60 * scaleFactorFont,
      H3: 48 * scaleFactorFont,
      H4: 34 * scaleFactorFont,
      H5: 24 * scaleFactorFont,
      H6: 20 * scaleFactorFont,
      SUBTITLE1: 16 * scaleFactorFont,
      SUBTITLE2: 14 * scaleFactorFont,
      BODY1: 16 * scaleFactorFont,
      BODY2: 14 * scaleFactorFont,
      BUTTON: 14 * scaleFactorFont,
      CAPTION: 12 * scaleFactorFont,
      OVERLINE: 10 * scaleFactorFont
    },
    CATEGORY: {
      H1: {
        SIZE: 96 * scaleFactorFont,
        CASE: 'none' ,
        LETTERSPACING: -1.5 * scaleFactorFont,
        WEIGHT: 'LIGHT'
      },
      H2: {
        SIZE: 60 * scaleFactorFont,
        CASE: 'none' ,
        LETTERSPACING: -0.5 * scaleFactorFont, 
        WEIGHT: 'LIGHT'
      },
      H3: {
        SIZE: 48 * scaleFactorFont,
        CASE: 'none' ,
        LETTERSPACING: 0,
        WEIGHT: 'REGULAR'
      },
      H4: {
        SIZE: 34 * scaleFactorFont,
        CASE: 'none' ,
        LETTERSPACING: 0.25 * scaleFactorFont,
        WEIGHT: 'REGULAR'
      },
      H5: {
        SIZE: 24 * scaleFactorFont,
        CASE: 'none' ,
        LETTERSPACING: 0 * scaleFactorFont,
        WEIGHT: 'REGULAR'
      },
      H6: {
        SIZE: 20 * scaleFactorFont,
        CASE: 'none' ,
        LETTERSPACING: 0.15 * scaleFactorFont,
        WEIGHT: 'SEMIBOLD'
      },
      SUBTITLE1: {
        SIZE: 16 * scaleFactorFont,
        CASE: 'none' ,
        LETTERSPACING: 0.15 * scaleFactorFont,
        WEIGHT: 'REGULAR'
      },
      SUBTITLE2: {
        SIZE: 14 * scaleFactorFont,
        CASE: 'none' ,
        LETTERSPACING: 0.1 * scaleFactorFont,
        WEIGHT: 'SEMIBOLD'
      },
      BODY1: {
        SIZE: 16 * scaleFactorFont,
        CASE: 'none' ,
        LETTERSPACING: 0.5 * scaleFactorFont,
        WEIGHT: 'REGULAR'
      },
      BODY2: {
        SIZE: 12 * scaleFactorFont,
        CASE: 'none' ,
        LETTERSPACING: 0.25 * scaleFactorFont,
        WEIGHT: 'REGULAR'
      },
      BUTTON: {
        SIZE: 14 * scaleFactorFont,
        CASE: 'uppercase' ,
        LETTERSPACING: 1.25 * scaleFactorFont,
        WEIGHT: 'SEMIBOLD'
      },
      CAPTION: {
        SIZE: 12 * scaleFactorFont,
        CASE: 'none' ,
        LETTERSPACING: 0.4 * scaleFactorFont,
        WEIGHT: 'REGULAR'
      },
      OVERLINE: {
        SIZE: 10 * scaleFactorFont,
        CASE: 'none' ,
        LETTERSPACING: 1.5 * scaleFactorFont,
        WEIGHT: 'REGULAR'
      },
    },
    WEIGHT: {
      LIGHT: 200,
      MEDIUM: 600,
      HEAVY: 800
    },
    FAMILY: {
      NUNITO: {
        LIGHT: 'NunitoLight',
        REGULAR: 'NunitoRegular',
        SEMIBOLD: 'NunitoSemiBold',
        BOLD: 'NunitoBold',
        BLACK: 'NunitoBlack'
      },
      IBMPLEXMONO: {
        REGULAR: 'IBMPlexMonoRegular',
        MEDIUM: 'IBMPlexMonoMedium'
      }
    }
  },
  DEVICE: {
    HEIGHT: height - StatusBar.currentHeight,
    WIDTH: width
  },
  COLOR: {
    RED_SD: '#E23A3F',
    BLUE_SMP: '#3A58AA',
    BLUE_SMA: '#A5D2FF',
    PURE_WHITE: '#fff',
    BLACK_PURE: '#000',
    BLACK_PRIMARY: '#121212',
    GRAY: '#95A5A6',
    BLACK80: 'rgba(0,0,0,0.8)',
    BLACK50: 'rgba(0,0,0,0.5)',
    GREEN: '#2ECC71',
    YELLOW: '#F1C40F',
    RED: '#E74C3C',
    GRAYCHARTDARK: '#9C9C9C',
    GRAYCHARTLIGHT: '#C4C4C4',
    GRAY_LIGHT: '#E9E9E9',
    COMPONENT: {
      BACKGROUND: '#EDF0F5'
    }
  },
}

const globalStyles = StyleSheet.create({
  textBody: {
    fontFamily: theme.FONT.FAMILY.NUNITO.REGULAR,
    fontSize: theme.FONT.CATEGORY.BODY1.SIZE,
    letterSpacing: theme.FONT.CATEGORY.BODY1.LETTERSPACING
  },
  textBody2: {
    fontFamily: theme.FONT.FAMILY.NUNITO.REGULAR,
    fontSize: theme.FONT.CATEGORY.BODY2.SIZE,
    letterSpacing: theme.FONT.CATEGORY.BODY2.LETTERSPACING
  },
  textSectionTitle: {
    fontWeight: 'bold',
    fontSize: theme.FONT.CATEGORY.SUBTITLE1.SIZE,
    letterSpacing: theme.FONT.CATEGORY.SUBTITLE1.LETTERSPACING
  },
  textUsername: {
    fontSize: theme.FONT.CATEGORY.H6.SIZE,
    letterSpacing: theme.FONT.CATEGORY.H6.LETTERSPACING
  },
  textH4: {
    fontFamily: theme.FONT.FAMILY.NUNITO.BOLD,
    fontSize: theme.FONT.CATEGORY.H4.SIZE,
    letterSpacing: theme.FONT.CATEGORY.H4.LETTERSPACING
  },
  textH5: {
    fontFamily: theme.FONT.FAMILY.NUNITO.BOLD,
    fontSize: theme.FONT.CATEGORY.H5.SIZE,
    letterSpacing: theme.FONT.CATEGORY.H5.LETTERSPACING
  },
  textH6: {
    fontFamily: theme.FONT.FAMILY.NUNITO.BOLD,
    fontSize: theme.FONT.CATEGORY.H6.SIZE,
    letterSpacing: theme.FONT.CATEGORY.H6.LETTERSPACING
  },
  textHSub: {
    fontFamily: theme.FONT.FAMILY.NUNITO.REGULAR,
    fontSize: theme.FONT.CATEGORY.BODY1.SIZE,
    letterSpacing: theme.FONT.CATEGORY.BODY1.LETTERSPACING,
    color: theme.COLOR.BLACK50
  },
  textCaption: {
    fontSize: theme.FONT.CATEGORY.CAPTION.SIZE,
    letterSpacing: theme.FONT.CATEGORY.CAPTION.LETTERSPACING,
    color: theme.COLOR.BLACK50
  },
  container: {
    backgroundColor: theme.COLOR.COMPONENT.BACKGROUND
  }
})

export default globalStyles;
export { theme, scaleFactor, scaleFactorFont };