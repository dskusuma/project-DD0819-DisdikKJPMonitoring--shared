import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native'

let {height, width} = Dimensions.get('window')

let theme =  {
  FONT: {
    SIZE: {
      SMALL: 12,
      MEDIUM: 14,
      LARGE: 16,

      H1: 96,
      H2: 60,
      H3: 48,
      H4: 34,
      H5: 24,
      H6: 20,
      SUBTITLE1: 16,
      SUBTITLE2: 14,
      BODY1: 16,
      BODY2: 14,
      BUTTON: 14,
      CAPTION: 12,
      OVERLINE: 10
    },
    CATEGORY: {
      H1: {
        SIZE: 96,
        CASE: 'none' ,
        LETTERSPACING: -1.5,
        WEIGHT: 'LIGHT'
      },
      H2: {
        SIZE: 60,
        CASE: 'none' ,
        LETTERSPACING: -0.5,
        WEIGHT: 'LIGHT'
      },
      H3: {
        SIZE: 48,
        CASE: 'none' ,
        LETTERSPACING: 0,
        WEIGHT: 'REGULAR'
      },
      H4: {
        SIZE: 34,
        CASE: 'none' ,
        LETTERSPACING: 0.25,
        WEIGHT: 'REGULAR'
      },
      H5: {
        SIZE: 24,
        CASE: 'none' ,
        LETTERSPACING: 0,
        WEIGHT: 'REGULAR'
      },
      H6: {
        SIZE: 20,
        CASE: 'none' ,
        LETTERSPACING: 0.15,
        WEIGHT: 'SEMIBOLD'
      },
      SUBTITLE1: {
        SIZE: 16,
        CASE: 'none' ,
        LETTERSPACING: 0.15,
        WEIGHT: 'REGULAR'
      },
      SUBTITLE2: {
        SIZE: 14,
        CASE: 'none' ,
        LETTERSPACING: 0.1,
        WEIGHT: 'SEMIBOLD'
      },
      BODY1: {
        SIZE: 16,
        CASE: 'none' ,
        LETTERSPACING: 0.5,
        WEIGHT: 'REGULAR'
      },
      BODY2: {
        SIZE: 12,
        CASE: 'none' ,
        LETTERSPACING: 0.25,
        WEIGHT: 'REGULAR'
      },
      BUTTON: {
        SIZE: 14,
        CASE: 'uppercase' ,
        LETTERSPACING: 1.25,
        WEIGHT: 'SEMIBOLD'
      },
      CAPTION: {
        SIZE: 12,
        CASE: 'none' ,
        LETTERSPACING: 0.4,
        WEIGHT: 'REGULAR'
      },
      OVERLINE: {
        SIZE: 10,
        CASE: 'none' ,
        LETTERSPACING: 1.5,
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
    fontSize: theme.FONT.CATEGORY.H5.SIZE,
    letterSpacing: theme.FONT.CATEGORY.H5.LETTERSPACING
  },
  textHSub: {
    fontFamily: theme.FONT.FAMILY.NUNITO.REGULAR,
    fontSize: theme.FONT.CATEGORY.BODY1.SIZE,
    letterSpacing: theme.FONT.CATEGORY.BODY1.LETTERSPACING,
    color: theme.COLOR.BLACK50
  },
  container: {
    backgroundColor: theme.COLOR.COMPONENT.BACKGROUND
  }
})

export default globalStyles;
export { theme };