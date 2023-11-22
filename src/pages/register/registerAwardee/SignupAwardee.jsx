import React, { useState } from "react";
// Step2
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Swal from 'sweetalert2'

export default function SignupAwardee() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    description: "",
    school: "",
    linkedinUrl: "",
    major: "",
    scholarship: "",
    year: "",
  });
  const [file, setFile] = useState();

  const prevStep = () => {
    setValues((prevValues) => ({ ...prevValues, step: prevValues.step - 1 }));
  };
  const nextStep = () => {
    setValues((prevValues) => ({ ...prevValues, step: prevValues.step + 1 }));
  };

  const handleChange = (input) => (e) => {
    setValues({ ...values, [input]: e.target.value });
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      toast.loading("Submitting...", {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      const formData = new FormData();
      formData.append("image", file);
      formData.append("input", JSON.stringify(values));

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/register/awardee`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      //add modal di sini
      toast.dismiss();
      Swal.fire("please wait a few days for our team to validate your mentor application");
      toast.success("Please login", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/log-in");
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // console.log(values, file);
  const { step } = values;

  switch (step) {
    case 1:
      return (
        <Step1
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <Step2
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          file={file}
          handleFile={handleFile}
        />
      );
    case 3:
      return (
        <Step3
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          file={file}
          handleFile={handleFile}
          handleSubmit={handleSubmit}
        />
      );
    default:
  }
}
