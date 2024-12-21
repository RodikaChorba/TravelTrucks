import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useId } from "react";
import * as Yup from "yup";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import css from "./FeedbackForm.module.css";
import Button from "../Button/Button.jsx";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Must be a valid email!")
    .required("Email is required!"),
  date: Yup.date().required("Required"),
  message: Yup.string().min(3, "Too short").max(256, "Too long"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
  date: "",
};

export default function FeedbackForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const msgFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log("object");
    toast.success("Your reservation has been successfully sent!");
    actions.resetForm();
  };
  // const [startDate, setStartDate] =
  //   useState(null);
  // const handleDateChange = (date) => {
  //   setStartDate(date);
  // };

  return (
    <section className={css.form_section}>
      <ToastContainer />
      <div className={css.title}>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <div>
            <label htmlFor={nameFieldId}></label>
            <Field
              type="text"
              name="name"
              id={nameFieldId}
              placeholder="Name*"
              className={css.input}
            />
            <ErrorMessage name="name" component="span" />
          </div>

          <div>
            <label htmlFor={emailFieldId}></label>
            <Field
              type="email"
              name="email"
              id={emailFieldId}
              placeholder="Email*"
              className={css.input}
            />
            <ErrorMessage name="email" component="span" />
          </div>

          <div>
            {/* <DatePicker
                selected={startDate}
                onChange={
                  handleDateChange
                }
                dateFormat="dd.MM.yyyy"
                placeholderText="Booking date*"
                className={css.input}
              /> */}
            <label htmlFor={dateFieldId}></label>
            <Field
              type="text"
              name="date"
              id={dateFieldId}
              className={css.input}
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Booking date*")}
              placeholder="Booking date*"
            />

            <ErrorMessage name="date" component="span" />
          </div>

          <div>
            <label htmlFor={msgFieldId}></label>
            <Field
              as="textarea"
              name="message"
              id={msgFieldId}
              rows="5"
              placeholder="Comment"
              className={`${css.textarea} ${css.input}`}
            />
            <ErrorMessage name="message" component="span" />
          </div>

          <Button type="submit" variant="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </section>
  );
}
