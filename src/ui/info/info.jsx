import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import React from "react";
import { useInfoContext } from "./info-context";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const { handleUserInfo, pageData } = useInfoContext();

  const validationSchema = Yup.object().shape({
    name: Yup.string("Letters only").required("This field is required"),
    phone: Yup.number("Numbers only").required("This field is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("This field is required")
  });
  const navigate = useNavigate();
  const submitUserInfo = (userInfo) => {
    handleUserInfo(userInfo);
    navigate(pageData.footer.next);
  };
  return (
    <>
      <Header title={pageData.header.title} content={pageData.header.content} />
      <div className="info__container ">
        <Formik
          initialValues={{
            email: "",

            name: "",
            phone: ""
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));

              submitUserInfo(values);
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {() => (
            <Form className="info__form" action="submit" id="user-form">
              <div className="info__form-item">
                <div className="info__form-item--header">
                  <label htmlFor="name">Name</label>
                  <span>
                    <ErrorMessage name="name" />
                  </span>
                </div>
                <Field
                  className="info__form-item--input"
                  type="text"
                  name="name"
                  placeholder="e.g Stephen King"
                />
              </div>
              <div className="info__form-item">
                <div className="info__form-item--header">
                  <label htmlFor="email">Email Address</label>
                  <span>
                    <ErrorMessage name="email" />
                  </span>
                </div>
                <Field
                  className="info__form-item--input"
                  type="email"
                  name="email"
                  placeholder="e.g stephenking@lorem.com"
                />
              </div>
              <div className="info__form-item">
                <div className="info__form-item--header">
                  <label htmlFor="phone">Phone Number</label>
                  <span>
                    <ErrorMessage name="phone" />
                  </span>
                </div>
                <Field
                  className="info__form-item--input"
                  name="phone"
                  placeholder="e.g +1 234 567 890"
                  type="text"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <Footer
        next={pageData.footer.next}
        prev={pageData.footer.prev}
        both={false}
        goToNext={false}
        form={"user-form"}
      />
    </>
  );
};

export default Info;
