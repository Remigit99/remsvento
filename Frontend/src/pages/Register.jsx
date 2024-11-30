import { Formik, Field, Form, ErrorMessage } from "formik"
import { z } from "zod"
import { toFormikValidationSchema } from "zod-formik-adapter"
import "../../styles/regStyles.css"



const registrationSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name must not exceed 50 characters"),
  email: z
    .string()
    .email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Password must include a lowercase letter")
    .regex(/[A-Z]/, "Password must include an uppercase letter")
    .regex(/[0-9]/, "Password must include a number")
    .regex(/[^a-zA-Z0-9]/, "Password must include a special character"),
});



const Register = () => {

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };


  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      console.log('Submitting form data:', values);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async operation
      alert('Form submitted successfully!');
      resetForm(); 
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <main>

      <div className="reg__main">
        <div className="reg__main-header">
          <h2>
            Register
          </h2>

          <p>
            Join remsVento to enjoy amazing deals
            and secure investment opportunities!
          </p>

        </div>

        <div className="reg__form">

          <Formik

            initialValues={initialValues}

            validationSchema={toFormikValidationSchema(registrationSchema)}

            onSubmit={handleSubmit}
          >


            {({ isSubmitting }) => (
              <Form className="registration-form">
                <div className="inputGroup">
                  <label htmlFor="name">Name</label>
                  <div className="inputField"><Field className="input" name="name" type="text" /></div>
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div className="inputGroup">
                  <label htmlFor="email">Email</label>
                  <div className="inputField">
                    <Field className="input" name="email" type="email" /> </div>
                  <ErrorMessage name="email" component="div" className="error" />
                </div>

                <div className="inputGroup">
                  <label htmlFor="password">Password</label>
                  <div className="inputField">
                    <Field className="input" name="password" type="password" /> </div>
                  <ErrorMessage name="password" component="div" className="error" />
                </div>

                <button className="btn submitBtn"  type="submit" disabled={isSubmitting}>
                  Register
                </button>
              </Form>
            )}


          </Formik>


        </div>
      </div>
    </main>
  )
}

export default Register