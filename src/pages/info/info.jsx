import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

import React from "react";

const Info = () => {
	const validationSchema = Yup.object().shape({
		name: Yup.string("Letters only").required("This field is required"),
		phone: Yup.number("Numbers only").required("This field is required"),
		email: Yup.string()
			.email("Invalid email")
			.required("This field is required")
	});
	return (
		<div className="info__container">
			<Formik
				initialValues={{
					email: "",

					name: "",
					phone: ""
				}}
				validationSchema={validationSchema}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						actions.setSubmitting(false);
					}, 1000);
				}}>
				{() => (
					<Form className="info__form" action="submit">
						<div className="info__form-item">
							<div className="info__form-item--header">
								<label htmlFor="name">Name</label>
								<ErrorMessage name="name" />
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
								<ErrorMessage name="email" />
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
								<ErrorMessage name="phone" />
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
	);
};

export default Info;
