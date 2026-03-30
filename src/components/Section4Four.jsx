import "../styles/Section4Four.css";
import ScrollAnchor from "./ScrollAnchor";
import { useState, useRef, useEffect } from "react";
import emailjs, { sendForm } from "@emailjs/browser";
import Loader from "./Loader";
import.meta.env;
import * as bootstrap from "bootstrap";
import cv_pdf from "../assets/cv_pinguel.pdf";

export default function Section4Four({ setCurrentSection }) {
  const [isCurrent, setIsCurrent] = useState(false);
  const [loader, setLoader] = useState(false);

  const form = useRef(null);

  const toastSuccessRef = useRef(null);
  const toastSuccessMessage = new bootstrap.Toast(toastSuccessRef.current, {
    autohide: false,
  });
  const toastFailRef = useRef(null);
  const toastFailMessage = new bootstrap.Toast(toastFailRef.current, {
    autohide: false,
  });
  const toastIncRef = useRef(null);
  const toastIncMessage = new bootstrap.Toast(toastIncRef.current, {
    autohide: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);

    if (
      !form.current.name.value ||
      !form.current.email.value ||
      !form.current.message.value
    ) {X
      setLoader(false);
      toastIncMessage.show();
      return;
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,

          form.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          },
        )
        .then(() => {
          toastSuccessMessage.show();
        })
        .catch((error) => {
          toastFailMessage.show();
          console.log(error);
        })
        .finally(() => {
          setLoader(false);
        });
    }
  };

  return (
    <>
      {loader && (
        <div
          style={{
            position: "fixed",
            zIndex: "1000",
            top: "0%",
            left: "0%",
            width: "100%",
            height: "100vh",
            backgroundColor: "#000000d6",
          }}>
          <Loader />
        </div>
      )}

      {/* ANCHOR */}
      <div id="contact">
        <ScrollAnchor
          setIsCurrent={setIsCurrent}
          setCurrentSection={setCurrentSection}
          sectionNumber={3}
          anchorname={"scroll_anchor"}
          // idName={"contact"}
        />
      </div>

      {/* PAGE TITLE */}
      <div
        style={{
          position: "relative",
          top: "0%",
          zIndex: -10,
          color: "white",
          opacity: 0.15,
        }}>
        <div
          style={{
            position: "absolute",
            height: "100vh",
            right: "10%",
          }}>
          <h1
            style={{
              position: "sticky",
              top: "10%",
              writingMode: "sideways-lr",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "end",
            }}>
            CONTACTS//
          </h1>
        </div>
      </div>

      <div id="contacts" className="section_five">
        <div className="section_five_container container d-flex flex-column justify-content-center d-md-block overflow-hidden overflow-y-auto">
          <div className="hero-name">
            CONTACTS
            {/* <br />
            <span>Pinguel</span> */}
          </div>

          <div className="row mt-5 ">
            {/* INFO */}
            <div className="col d-flex flex-column gap-4 mb-3 mb-md-0 left ">
              <div className=" d-flex justify-content-between">
                <span className="info-key">Email</span>
                <span className="info-val">pingueljansel@gmail.com</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="info-key">Phone</span>
                <span className="info-val">09281536775</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="info-key">Location</span>
                <span className="info-val">Cavite, Philippines 4103</span>
              </div>

              <p className="bio">
                Seeking a challenging role in Information Technology where I can
                apply and further develop my technical skills and continuously
                grow within a dynamic organization.
              </p>

              <a className="resume-link" href={`${cv_pdf}`} target="_blank">
                View Resume →
              </a>

              <button
                className="d-block me-auto border px-3 py-2 text-black d-lg-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasResponsiveForm"
                aria-controls="offcanvasResponsiveForm"
                style={{ backgroundColor: "var(--main-theme-color2)" }}>
                Send Message →
              </button>
            </div>

            {/* DIVIDER */}
            <div className="col-1 d-none d-lg-block contact-divider">
              <div
                className=" position-relative contact-divider-line"
                style={{ left: "50%" }}></div>
            </div>

            {/* MESSAGE FORM */}
            <div
              className=" offcanvas-lg offcanvas-bottom col right "
              tabIndex="-1"
              id="offcanvasResponsiveForm"
              aria-labelledby="offcanvasResponsiveLabel">
              {/* CANVAS CLOSE BTN */}
              <button
                type="button"
                className="btn-close btn-close-white shadow-none mt-5 d-lg-none"
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasResponsiveForm"
                aria-label="Close"></button>
              <div className=" mt-5 mb-5 mt-lg-auto section-label">
                Send a message
              </div>
              {/* FORM */}
              <form className="" ref={form} onSubmit={(e) => sendEmail(e)}>
                <div className="form-field">
                  <label htmlFor="name-form" className="form-label">
                    Name
                  </label>
                  <input
                    id="name-form"
                    className="form-input"
                    type="text"
                    placeholder="Full name"
                    name="name"
                    required={true}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email-form" className="form-label">
                    Email
                  </label>
                  <input
                    id="email-form"
                    className="form-input"
                    type="email"
                    placeholder="@email.com"
                    name="email"
                    required={true}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="message-form" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message-form"
                    className="form-input"
                    placeholder="What's on your mind"
                    name="message"
                    required={true}></textarea>
                </div>
                <button type="submit" className="send-btn m-0">
                  Send Message
                </button>
              </form>

              {/* TOAST SUCCESS */}
              <div
                ref={toastSuccessRef}
                className="toast align-items-center text-bg-light border-0 rounded-0 position-fixed bottom-0 start-50 translate-middle z-1"
                role="alert"
                aria-live="assertive"
                aria-atomic="true">
                <div className="d-flex">
                  <div className="toast-body">
                    Message Sent{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="green"
                        className="bi bi-check-circle-fill ms-2"
                        viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg>
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn-close btn-close-black me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close"></button>
                </div>
              </div>

              {/* TOAST FAIL */}
              <div
                ref={toastFailRef}
                className="toast align-items-center text-bg-danger border-0 rounded-0 position-fixed bottom-0 start-50 translate-middle z-1 "
                role="alert"
                aria-live="assertive"
                aria-atomic="true">
                <div className="d-flex">
                  <div className="toast-body">
                    Message failed to send!{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-circle-fill ms-2"
                      viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                    </svg>
                    <br />
                    Please try again or contact me directly via email.
                  </div>
                  <button
                    type="button"
                    className="btn-close btn-close-white me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close"></button>
                </div>
              </div>

              {/* TOAST FAIL */}
              <div
                ref={toastIncRef}
                className="toast align-items-center text-bg-light border-0 rounded-0 position-fixed bottom-0 start-50 translate-middle z-1 "
                role="alert"
                aria-live="assertive"
                aria-atomic="true">
                <div className="d-flex">
                  <div className="toast-body">
                    Make sure to fill up all forms!
                  </div>
                  <button
                    type="button"
                    className="btn-close btn-close-black me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
