import FormikRadioGroup from "components/FormikRadioGroup";
import { Form, Formik } from "formik";
import React from "react";
const HomePage = () => {
  return (
    // initialize formik here
    <Formik
      onSubmit={(values) => console.log(JSON.stringify(values))}
      initialValues={{
        myoption: null,
      }}
    >
      <Form className="w-fit m-4">
        <FormikRadioGroup
          name="myoption" //add name props
          label="My Radio Group"
          options={[
            {
              label: "option 1",
              value: 1,
            },
            {
              label: "option 2",
              value: 2,
            },
            {
              label: "option 3",
              value: 3,
            },
          ]}
        ></FormikRadioGroup>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default HomePage;
