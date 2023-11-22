import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/Programming.png";
import Button from "../../../components/Button";
import Container from "../../../components/Container";

export default function Step1({ nextStep, handleChange, values }) {

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="md:px-6 max-md:mb-[20vw] md:mt-6">
      <Container className=" relative mb-8 right-0 md:w-[60%] md:h-[100vh] md:p-14 p-8 flex md:items-center">
        <div className="flex-[1]  flex flex-col text-white max-md:text-center max-sm:mb-[20vw] sm:max-md:mb-[124px] items-center md:items-start gap-4 md:gap-5 md:max-w-[85%]">
          <form
            action=""
            className="text-sm w-[85%] md:text-lg text-primary flex flex-col"
          >
            <div className="border-b-[1px] mb-4 flex-1 border-primary">
              <h1
                className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold md:flex flex-col"
                style={{ textWrap: "balance" }}
              >
                Daftar Sebagai Awardee
              </h1>
              <p className="text-slate-400 ">Step 1/3</p>
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                className="border border-primary text-primary p-4 h-[52px] rounded-lg mt-2"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                className="border border-primary text-primary p-4 h-[52px] rounded-lg mt-2"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="">Username</label>
              <input
                type="text"
                onChange={handleChange("username")}
                defaultValue={values.username}
                className="border border-primary text-primary p-4 h-[52px] rounded-lg mt-2"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="">Email</label>
              <input
                onChange={handleChange("email")}
                defaultValue={values.email}
                type="email"
                className="border border-primary text-primary h-[52px] p-4 rounded-lg mt-2"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="">Password</label>
              <input
                type="password"
                onChange={handleChange("password")}
                defaultValue={values.password}
                className="border border-primary text-primary p-4 h-[52px] rounded-lg mt-2"
              />
            </div>

            <Button
              onClick={Continue}
              type="submit"
              className="text-white bg-primary mt-8  hover:bg-[#2948c4]"
            >
              Next
            </Button>
            <div className="text-slate-500 text-center mt-8">
              Sudah punya akun?{" "}
              <Link
                to={"/log-in"}
                className={"text-primary hover:text-[#2948c4] "}
              >
                Masuk
              </Link>
            </div>
          </form>
        </div>
        <div className="absolute bg-secondary rounded-2xl max-md:bottom-0 md:bottom-[50%] translate-y-[50%] max-md:left-[50%] translate-x-[-50%] w-[76vw] max-w-[460px] md:w-[50vw] md:max-w-[550px] md:right-0 md:translate-x-[70%] ">
          <img className="float-animation" src={image} alt="" />
        </div>
      </Container>
    </div>
  );
}
