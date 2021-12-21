import { createTheme } from "@material-ui/core/styles"

const lightGrey = "#efefef"
const tan = "#FECEA8"
const lightRed = "#FF847C"
const red = "#E84A5F"
const offBlack = "#2A363B"
const grey = "#747474"
const black = "#222222"

const theme = createTheme({
  palette: {
    primary: {
      main: lightGrey,
    },
    secondary: {
      main: black,
    },
    common: {
      tan,
      lightRed,
      red,
      offBlack,
    },
  },
  typography: {
    h1: {
      fontSize: "4.5rem",
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontWeight: 700,
      color: black,
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "3rem",
      fontWeight: 500,
      color: black,
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "2rem",
      fontWeight: 300,
      color: black,
    },
    h4: {
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontWeight: 700,
      fontSize: "3rem",
      color: black,
    },
    h5: {
      fontFamily: "Philosopher",
      fontSize: "2rem",
      fontWeight: 700,
      fontStyle: "italic",
      color: black,
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: "1.5rem",
      color: grey,
    },
    body2: {
      fontFamily: "Montserrat",
      fontSize: "1.5rem",
      color: black,
    },
  },
  overrides: {
    MuiChip: {
      root: {
        backgroundColor: offBlack,
      },
      label: {
        fontFamily: "Montserrat",
        fontSize: "1.5rem",
        color: black,
        fontWeight: 400,
      },
    },
  },
})

export default theme
