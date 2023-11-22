import React, { Component, useState } from 'react'
import Step1 from './Step1';
import Step2 from './Step2';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function SignupMentee() {
  const navigate = useNavigate()
  // state = {
  //   step: 1,
  //   email: '',
  //   username: '', 
  //   password: '',
  //   description: '',
  //   school: ''
  // }
  const [values, setValues] = useState({
    step: 1,
    email: '',
    username: '', 
    password: '',
    description: '',
    school: ''
  });
  const [file, setFile] = useState()
  

  // go back to previous step
  const prevStep = () => {
    setValues(prevValues => ({ ...prevValues, step: prevValues.step - 1 }));
  }
  // proceed to the next step
  const nextStep = () => {
    setValues(prevValues => ({ ...prevValues, step: prevValues.step + 1 }));
  }

  const handleChange = input => e => {
    setValues({ ...values, [input]: e.target.value });
  }

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData()
      formData.append("image", file)
      formData.append("input", JSON.stringify(input))

      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/mentoring`, formData, {
        // method: "post",
        // body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          access_token: localStorage.access_token,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw data;
      }
      navigate('/log-in')
      // setInput({
      //   title: "",
      // });
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

  console.log(values, file)
  const { step } = values;
    
    switch(step) {
      case 1: 
        return (
          <Step1 
            nextStep={ nextStep }
            handleChange={ handleChange }
            values={ values }
          />
        )
      case 2: 
        return (
          <Step2 
            prevStep={ prevStep }
            nextStep={ nextStep }
            handleChange={ handleChange }
            values={ values }
            file={file}
            handleFile={handleFile}
          />
        )
     
      default: 
          // do nothing
    }
  
}