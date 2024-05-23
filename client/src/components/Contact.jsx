import React, { useState } from "react";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import isEmail from "validator/lib/isEmail";
import { makeStyles } from "@material-ui/core/styles";

import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
// import { SiLeetcode, SiHashnode } from "react-icons/si";
// F2F3F4
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import contactsGreen from "../assets/images/contactsGreen.svg";

import { socialsData } from "./SocialData";
import { contactsData } from "./ContactData";
import "./Contacts.css";
import emailjs from "emailjs-com";
// import { PUBLIC_KEY, TEMPLATE_ID, SERVICE_ID } from "../../../../SECURE.JS";

const useStyles = makeStyles((t) => ({
  input: {
    border: `4px solid #60a5fa`,
    backgroundColor: "#60a5fa",

    color: `#60a5fa`,

    fontWeight: 500,
    transition: "border 0.2s ease-in-out",
    "&:focus": {
      border: `4px solid #60a5fa`,
    },
  },
  message: {
    border: `4px solid #60a5fa`,
    backgroundColor: "#152b61",
    color: `white`,
    fontWeight: 500,
    transition: "border 0.2s ease-in-out",
    "&:focus": {
      border: `4px solid #60a5fa`,
    },
  },
  label: {
    backgroundColor: "#0f172a",
    color: `#60a5fa`,
    fontWeight: 600,
    fontSize: "1rem",
    padding: "0 5px",
    transform: "translate(25px,50%)",
    display: "flex",
    alignItems: "flex-start",
    width: "fit-content",
    justifyContent: "center",
  },
  socialIcon: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "21px",

    backgroundColor: "#000005",
    boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
    color: `white`,
    transition: "250ms ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      border: `4px solid #60a5fa`,
      backgroundColor: "#60a5fa",
      color: `#000005`,
    },
  },
  freecodecamp: {
    "&:hover": {
      color: "black !important",
    },
  },
  detailsIcon: {
    border: `4px solid #000005`,
    backgroundColor: "#000005",
    boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
    color: `white`,
    borderRadius: "50%",
    width: "45px",
    height: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "23px",
    transition: "250ms ease-in-out",
    flexShrink: 0,
    "&:hover": {
      transform: "scale(1.1)",

      border: `4px solid #60a5fa`,
      backgroundColor: "#60a5fa",
      color: `#fff`,
    },
  },
  submitBtn: {
    border: `4px solid #60a5fa`,
    backgroundColor: "#10265ddc",
    padding: "0 1rem",
    color: `white`,
    boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
    transition: "250ms ease-in-out",
    "&:hover": {
      transform: "scale(1.08)",

      backgroundColor: "#60a5fa",
      color: `#FFF`,
    },
  },
}));

const Contact = () => {
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  

  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleContactForm = (e) => {
    e.preventDefault();

    if (name && email && message) {
      if (isEmail(email)) {
        const templateParams = {
          from_name: name,
          from_email: email,
          message: message,
          to_email: email,
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
          (response) => {
            console.log("Email sent successfully!", response);
            setSuccess(true);

            setErrMsg("");
            setName("");
            setEmail("");
            setMessage("");
            setOpen(false);
          },
          (error) => {
            console.error("Failed to send email:", error);
            setErrMsg("Failed to send email");
            setOpen(true);
          }
        );
      } else {
        setErrMsg("Invalid email");
        setOpen(true);
      }
    } else {
      setErrMsg("Enter all the fields");
      setOpen(true);
    }
  };

  React.useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        setSuccess(false);
      }, 5000); // Change 5000 to the desired duration in milliseconds (5 seconds in this case)
    }
    return () => clearTimeout(timer);
  }, [success]);

  return (
    <div style={{backgroundColor: "#0f172a" , paddingTop : "2rem" , color : "#fff"}}>
      <div className="contact" style={{ textAlign: "center" ,    }}>
        <h1
          style={{
            marginTop: "3rem",
            fontFamily: "Fira Code",
            position: "static",
            color: "#FFF",
        
          }}
        >
          Have a <span style={{ color: "#60a5fa" }}>Question</span> on your
          mind??
        </h1>

        <p style={{ color: "#FFF" }}>
          Or just want to discuss a project? Contact Us using any of the links!!
        </p>
      </div>

      <div className="contacts" id="contacts">
        <div className="contacts--container">
          <h1
            style={{
  
              fontFamily: "Fira Code",
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginTop : "-0.5rem"
            }}
          >
            <span style={{ color: "#60a5fa" }}>Hire</span> Us!
          </h1>
          <div className="contacts-body">
            <div className="contacts-form">
              <form onSubmit={handleContactForm}>
                <div className="input-container">
                  <label
                    htmlFor="Name"
                    className={classes.label}
                    style={{ backgroundColor: "#0f172a" }}
                  >
                    Name
                  </label>
                  <input
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    className={`form-input ${classes.input}`}
                    style={{
                      backgroundColor: "#0f172a",
                      outline: "4px solid #60a5fa",
                    }}
                  />
                </div>
                <div className="input-container">
                  <label
                    htmlFor="email"
                    className={classes.label}
                    style={{ backgroundColor: "#0f172a" }}
                  >
                    Email
                  </label>
                  <input
                    placeholder="John@doe.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="Email"
                    className={`form-input ${classes.input}`}
                    style={{
                      backgroundColor: "#0f172a",
                      outline: "4px solid #60a5fa",
                    }}
                  />
                </div>
                <div className="input-container">
                  <label
                    htmlFor="Message"
                    className={classes.label}
                    style={{ backgroundColor: "#0f172a" }}
                  >
                    message
                  </label>
                  <textarea
                    placeholder="Type your message...."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    name="Message"
                    className={`form-message ${classes.message}`}
                    style={{
                      backgroundColor: "#0f172a",
                      outline: "4px solid #60a5fa",
                    }}
                  />
                </div>

                <div className="submit-btn">
                  <button
                    type="submit"
                    className={classes.submitBtn}
                    onClick={handleContactForm}
                    style={{ background: "#60a5fa" }}
                  >
                    <p style={{ alignSelf: "center" }}>
                      {!success ? "Send" : "Sent"}
                    </p>
                    <div className="submit-icon">
                      {!success ? (
                        <>
                          <AiOutlineSend className="send-icon" />
                        </>
                      ) : (
                        <>
                          <AiOutlineCheckCircle className="success-icon" />
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </form>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
              >
                <SnackbarContent
                  action={
                    <React.Fragment>
                      <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </React.Fragment>
                  }
                  style={{
                    backgroundColor: errMsg
                      ? "#ff0000"
                      : success
                      ? "#32CD32"
                      : "#FFA500",
                    color: "white",
                  }}
                  message={
                    errMsg ||
                    (success
                      ? "Message sent successfully!"
                      : "Warning message here")
                  }
                />
              </Snackbar>
            </div>

            <div className="contacts-details">
              <a href={`mailto:$ lavaniagouri@gmail.com`} className="personal-details">
                <div className={classes.detailsIcon}>
                  <FiAtSign />
                </div>
                <p style={{ color: "#60a5fa" }} className="email">
                lavaniagouri@gmail.com
                </p>
              </a>
              <a
                href={`mailto:$palgarima2505@gmail.com}`}
                className="personal-details"
              >
                <div className={classes.detailsIcon}>
                  <FiAtSign />
                </div>
                <p style={{ color: "#60a5fa" }} className="email">
                palgarima2505@gmail.com
                </p>
              </a>
              <a
                href={`tel:$+917703033982`}
                className="personal-details"
              >
                <div className={classes.detailsIcon}>
                  <FiPhone />
                </div>
                <p style={{ color: "#60a5fa" }}>+917703033982</p>
              </a>
              <a
                href={`tel:$+919140696796`}
                className="personal-details"
              >
                <div className={classes.detailsIcon}>
                  <FiPhone />
                </div>
                <p style={{ color: "#60a5fa" }}>+919140696796</p>
              </a>

             <div style={{display : "flex" , justifyContent : "space-between" , alignItems : "center"}}>

             <div className="socialmedia-icons">
                {socialsData.whatsapp && (
                  <a
                    href="917703033982"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <FaWhatsapp
                      aria-label="WhatsApp"
                      // style={{ color: "#25D366" }}
                    />
                  </a>
                )}
              
                {socialsData.github && (
                  <a
                    href="https://github.com/garima-2505"
                    target="_blank"
                    rel="noreferrer"
                    className={`${classes.socialIcon} socialIcon`}
                  >
                    <FaGithub
                      aria-label="GitHub"
                      // style={{ color: "#1d1a1a" }}
                      className={`${classes.GitHub} GitHub`}
                    />
                  </a>
                )}
                {socialsData.linkedIn && (
                  <a
                    href="https://www.linkedin.com/in/garima-pal-496146222/"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <FaLinkedinIn
                      aria-label="LinkedIn"
                      style={{ color: "#0C63BC" }}
                    />
                  </a>
                )}
              

              </div>
              <div className="socialmedia-icons" style={{marginLeft : "20px"}}>
                {socialsData.whatsapp && (
                  <a
                    href="+919140696796"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <FaWhatsapp
                      aria-label="WhatsApp"
                      // style={{ color: "#25D366" }}
                    />
                  </a>
                )}
               
                {socialsData.github && (
                  <a
                    href="https://github.com/Gouri-18"
                    target="_blank"
                    rel="noreferrer"
                    className={`${classes.socialIcon} socialIcon`}
                  >
                    <FaGithub
                      aria-label="GitHub"
                      // style={{ color: "##1d1a1a" }}
                      className={`${classes.GitHub} GitHub`}
                    />
                  </a>
                )}
                {socialsData.linkedIn && (
                  <a
                    href="https://www.linkedin.com/in/gouri-lavania1803"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <FaLinkedinIn
                      aria-label="LinkedIn"
                      style={{ color: "#0C63BC" }}
                    />
                  </a>
                )}
             

         
              </div>
             </div>
            </div>
          </div>
        </div>

        <img src={contactsGreen} alt="contacts" className="contacts--img" />
      </div>
      <div
        className="contact"
        style={{
          textAlign: "center",
          marginTop: "2rem",
    
          paddingBottom: "2rem",
        }}
      >
        <p style={{ color: "#fff" }}>
          App developed by: <strong style ={{color : "#60a5fa"}}>Gouri Lavania</strong> & <strong style ={{color : "#60a5fa"}} >Garima Pal</strong>
        </p>
        <p style={{ color: "#fff" }}>© 2024 All rights reserved</p>
      </div>
    </div>
  );
};

export default Contact;
