import React from "react";
import {
  MdAccountCircle,
  MdSupervisorAccount,
  MdSpeed,
  MdOutlinePayment,
} from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";
import { IoMdAddCircle, IoMdHelpCircle } from "react-icons/io";
import { HiLocationMarker, HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const Station = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], "terms must be accepted"),
  });

  return (
    <>
      <div className="row grid-com">
        <div className="col-2 grid-left-com pt-5">
          <MdAccountCircle size={120} className="icon-color" />
          <h2>Owner Name</h2>
          <h6>owner@gmail.com</h6>
          <hr />
          <p>
            <MdSpeed className="icon-color" />
            <Link to="/deshboard" className="links">
              Deshboard
            </Link>
          </p>
          <p>
            <MdSupervisorAccount className="icon-color" />
            <Link to="/Profile" className="links">
              My profile
            </Link>
          </p>

          <p>
            <AiOutlineHistory className="icon-color" />
            <Link to="/history" className="links">
              History
            </Link>
          </p>
          <p>
            <IoMdAddCircle className="icon-color" />
            <Link to="/station" className="links">
              Add Station
            </Link>
          </p>
          <p>
            <MdOutlinePayment className="icon-color" />
            <Link to="/payment" className="links">
              Payment
            </Link>
          </p>
          <p>
            <HiLocationMarker className="icon-color" />
            <Link to="/location" className="links">
              My Location
            </Link>
          </p>
          <p>
            <IoMdHelpCircle className="icon-color" />
            <Link to="/help" className="links">
              Help
            </Link>
          </p>
          <hr />
          <button class="btn btn-success">
            <HiOutlineLogout />
            Log Out
          </button>
        </div>
        <div className="col-10 grid-right-com">
          <h2 className="history">
            <IoMdAddCircle className="icon-color" />
            Add Station
          </h2>
          <div className="container mt-5">
            <Formik
              validationSchema={schema}
              onSubmit={console.log}
              initialValues={{
                firstName: "",
                lastName: "",
                username: "",
                city: "",
                state: "",
                zip: "",
                file: null,
                terms: false,
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormik101"
                      className="position-relative"
                    >
                      <Form.Label>Owner name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        isValid={touched.firstName && !errors.firstName}
                      />
                      <Form.Control.Feedback tooltip>
                        Looks good!
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormik102"
                      className="position-relative"
                    >
                      <Form.Label>Station name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        isValid={touched.lastName && !errors.lastName}
                      />

                      <Form.Control.Feedback tooltip>
                        Looks good!
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationFormikUsername2"
                    >
                      <Form.Label>Contact No.</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          aria-describedby="inputGroupPrepend"
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                          isInvalid={!!errors.username}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.username}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormik103"
                      className="position-relative"
                    >
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        isInvalid={!!errors.city}
                      />

                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.city}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="3"
                      controlId="validationFormik104"
                      className="position-relative"
                    >
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                        isInvalid={!!errors.state}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.state}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="3"
                      controlId="validationFormik105"
                      className="position-relative"
                    >
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        name="zip"
                        value={values.zip}
                        onChange={handleChange}
                        isInvalid={!!errors.zip}
                      />

                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.zip}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Form.Group className="position-relative mb-3">
                    <Form.Label>File</Form.Label>
                    <Form.Control
                      type="file"
                      required
                      name="file"
                      onChange={handleChange}
                      isInvalid={!!errors.file}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.file}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="position-relative mb-3">
                    <Form.Label>File</Form.Label>
                    <Form.Control
                      type="file"
                      required
                      name="file"
                      onChange={handleChange}
                      isInvalid={!!errors.file}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.file}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="position-relative mb-3">
                    <Form.Check
                      required
                      name="terms"
                      label="Agree to terms and conditions"
                      onChange={handleChange}
                      isInvalid={!!errors.terms}
                      feedback={errors.terms}
                      feedbackType="invalid"
                      id="validationFormik106"
                      feedbackTooltip
                    />
                  </Form.Group>
                  <Button type="submit" className="btn-success">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Station;
