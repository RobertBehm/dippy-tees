import React, { useState, useContext } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import InputAdornment from "@material-ui/core/InputAdornment"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
//import { Link } from "gatsby"

import SEO from "../components/ui/seo"
import { FeedbackContext } from "../contexts"
import { setSnackbar } from "../contexts/actions"

import address from "../images/address.svg"
import Email from "../images/EmailAdornment"
import send from "../images/send.svg"
import nameAdornment from "../images/name-adornment.svg"
import PhoneAdornment from "../images/PhoneAdornment"

import Layout from "../components/ui/layout"
import validate from "../components/ui/validate"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: "45rem",
    //backgroundColor: theme.palette.primary.main,
    marginBottom: "2rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "8rem",
      height: "90rem",
    },
  },
  contactContainer: {
    marginTop: "-15rem",
  },
  formContainer: {
    marginBottom: "-7rem",
    height: "100%",
  },
  formWrapper: {
    height: "100%",
    [theme.breakpoints.down("md")]: {
      height: "50%",
      marginTop: "-8rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  header: {
    fontSize: "60px",
    letterSpacing: "-3px",
    marginBottom: "2rem",
  },
  /*blockContainer: {
    backgroundColor: theme.palette.common.black,
    height: "8rem",
    width: "40rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  }, */
  titleContainer: {
    margin: "auto",
  },
  buttonContainer: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: "1.5rem",
    textTransform: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  sendIcon: {
    marginLeft: "2rem",
  },
  contactInfo: {
    fontSize: "1.5rem",
    marginLeft: "1rem",
    color: "#959595",
  },
  contactIcon: {
    height: "3rem",
    width: "3rem",
  },
  contactEmailIcon: {
    height: "2.25rem",
    width: "3rem",
  },
  infoContainer: {
    height: "21.25rem",
    [theme.breakpoints.down("xs")]: {
      height: "15.25rem",
    },
  },
  middleInfo: {
    borderTop: "2px solid #959595",
    borderBottom: "2px solid #959595",
  },
  iconContainer: {
    borderRight: "2px solid #959595",
    height: "7rem",
    width: "8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: "5rem",
      width: "6rem",
    },
  },
  textField: {
    width: "30rem",
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
    },
  },
  input: {
    color: "#fff",
  },
  fieldContainer: {
    marginBottom: "1rem",
  },
  multilineContainer: {
    marginTop: "1rem",
  },
  emailAdornment: {
    height: 17,
    width: 22,
    marginBottom: 10,
  },
  phoneAdornment: {
    width: 25.173,
    height: 25.122,
  },
  multiline: {
    border: "2px solid #959595",
    borderRadius: 10,
    padding: "1rem",
  },
  multilineError: {
    border: `2px solid ${theme.palette.error.main}`,
  },
  buttonDisabled: {
    backgroundColor: theme.palette.secondary.main[500],
  },
  sendMessage: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
    },
  },
  "@global": {
    ".MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before":
      {
        borderBottom: "2px solid #959595",
      },
    ".MuiInput-underline:after": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
  },
}))

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

const ContactPage = () => {
  const classes = useStyles()
  const theme = useTheme()

  const { dispatchFeedback } = useContext(FeedbackContext)

  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))
  const matchesXS = useMediaQuery(theme => theme.breakpoints.down("xs"))

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState({})

  const fields = {
    name: {
      helperText: "you must enter a name",
      placeholder: "Name",
      adornment: <img src={nameAdornment} alt="name" />,
    },
    email: {
      helperText: "invalid email",
      placeholder: "Email",
      adornment: (
        <div className={classes.emailAdornment}>
          <Email color="#959595" />
        </div>
      ),
    },
    phone: {
      helperText: "invalid phone",
      placeholder: "Phone Number",
      adornment: (
        <div className={classes.phoneAdornment}>
          <PhoneAdornment color="#959595" />
        </div>
      ),
    },
    message: {
      helperText: "you must enter a message",
      placeholder: "Message",
      inputClasses: {
        multiline: classes.multiline,
        error: classes.multilineError,
      },
    },
  }

  const info = [
    {
      label: (
        <span>
          1 Johnson Ct {matchesXS ? <br /> : null}West Warwick, RI 02893
        </span>
      ),
      icon: <img className={classes.contactIcon} src={address} alt="address" />,
    },
    {
      label: "(774) 991-1390",
      icon: (
        <div className={classes.contactIcon}>
          <PhoneAdornment color="#959595" />
        </div>
      ),
    },
    {
      label: "support@dippytees.com",
      icon: (
        <div className={classes.contactEmailIcon}>
          <Email color="#959595" />
        </div>
      ),
    },
  ]

  const disabled =
    Object.keys(errors).some(error => errors[error] === true) ||
    Object.keys(errors).length !== 4

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: values.name,
        number: values.phone,
        email: values.email,
        message: values.message,
      }),
    })
      .then(() => {
        setValues({ name: "", phone: "", email: "", message: "" })
        dispatchFeedback(
          setSnackbar({
            status: "success",
            message: "Message sent successfully.",
          })
        )
      })
      .catch(error => {
        console.error(error)
        dispatchFeedback(
          setSnackbar({
            status: "error",
            message:
              "There was a problem sending your message. Please try again.",
          })
        )
      })

    e.preventDefault()
  }

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Send us a message and learn more about the high quality clothing standards at Dippy."
      />
      <Grid container justify="center" alignItems="center">
        <Typography variant="h4" classes={{ root: classes.header }}>
          CONTACT US
        </Typography>
      </Grid>
      <Grid
        container
        justify="space-around"
        alignItems="center"
        classes={{ root: classes.mainContainer }}
        direction={matchesMD ? "column" : "row"}
      >
        {/* Contact Form */}
        <Grid
          component="form"
          name="contact"
          method="POST"
          data-netlify="true"
          item
          classes={{ root: classes.formWrapper }}
        >
          <Grid
            container
            classes={{ root: classes.formContainer }}
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            <Grid container direction="column">
              {Object.keys(fields).map(field => {
                const validateHelper = event => {
                  return validate({ [field]: event.target.value })
                }

                return (
                  <Grid
                    item
                    key={field}
                    classes={{
                      root:
                        field === "message"
                          ? classes.multilineContainer
                          : classes.fieldContainer,
                    }}
                  >
                    <TextField
                      name={field}
                      value={values[field]}
                      onChange={e => {
                        const valid = validateHelper(e)

                        if (errors[field] || valid[field] === true) {
                          setErrors({ ...errors, [field]: !valid[field] })
                        }

                        setValues({ ...values, [field]: e.target.value })
                      }}
                      onBlur={e => {
                        const valid = validateHelper(e)
                        setErrors({ ...errors, [field]: !valid[field] })
                      }}
                      error={errors[field]}
                      helperText={errors[field] && fields[field].helperText}
                      placeholder={fields[field].placeholder}
                      classes={{ root: classes.textField }}
                      multiline={field === "message"}
                      rows={field === "message" ? 8 : undefined}
                      InputProps={{
                        classes: {
                          input: classes.input,
                          ...fields[field].inputClasses,
                        },
                        disableUnderline: field === "message",
                        startAdornment:
                          field === "message" ? undefined : (
                            <InputAdornment position="start">
                              {fields[field].adornment}
                            </InputAdornment>
                          ),
                      }}
                    />
                  </Grid>
                )
              })}
              <Grid item>
                <Button
                  item
                  type="submit"
                  onClick={handleSubmit}
                  component={Button}
                  disabled={disabled}
                  color="secondary"
                  classes={{
                    root: clsx(
                      classes.buttonContainer,
                      classes.blockContainer,
                      {
                        [classes.buttonDisabled]: disabled,
                      }
                    ),
                  }}
                >
                  <Typography
                    variant="h6"
                    classes={{ root: classes.sendMessage }}
                  >
                    send message
                  </Typography>
                  <img
                    src={send}
                    className={classes.sendIcon}
                    alt="send message"
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Contact Info */}
        <Grid item classes={{ root: classes.contactContainer }}>
          <Grid
            container
            direction="column"
            justify="space-between"
            classes={{ root: classes.infoContainer }}
          >
            {info.map((section, i) => (
              <Grid
                item
                key={section.label}
                container
                alignItems="center"
                classes={{ root: i === 1 ? classes.middleInfo : undefined }}
              >
                <Grid item classes={{ root: classes.iconContainer }}>
                  {section.icon}
                </Grid>
                <Grid item>
                  <Typography
                    classes={{ root: classes.contactInfo }}
                    variant="inherit"
                  >
                    {section.label}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ContactPage
