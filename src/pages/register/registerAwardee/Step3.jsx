import React from "react";
import image from "../../../assets/Programming.png";
import Button from "../../../components/Button";
import Container from "../../../components/Container";

export default function Step3({handleSubmit,  prevStep, nextStep, handleChange, values }) {
  
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  
  return (
    <div className="md:px-6 max-md:mb-[20vw] md:mt-6">
      <Container className=" relative right-0 md:w-[60%] md:h-[100vh] md:p-14 p-8 flex md:items-center">
        <div className="flex-[1] flex flex-col text-white max-md:text-center max-sm:mb-[20vw] sm:max-md:mb-[124px] items-center md:items-start gap-4 md:gap-5 md:max-w-[85%]">
          <form
            onSubmit={handleSubmit}
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
              <p className="text-slate-400 ">Step 3/3</p>
            </div>

            <h1 className="text-xl font-semibold">Dimanakah kamu bersekolah?</h1>

            <div className="flex flex-col mt-2">
              <label htmlFor="">Sekolah / Universitas</label>
              <input
                type="text"
                onChange={handleChange("school")}
                defaultValue={values.school}
                className="border border-primary text-primary p-4 h-[52px] rounded-lg mt-2"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="">Jurusan</label>
              <input
                type="text"
                onChange={handleChange("major")}
                defaultValue={values.major}
                className="border border-primary text-primary p-4 h-[52px] rounded-lg mt-2"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="">Beasiswa</label>
              <input
                type="text"
                onChange={handleChange("scholarship")}
                defaultValue={values.scholarship}
                className="border border-primary text-primary p-4 h-[52px] rounded-lg mt-2"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="">Tahun</label>
              <input
                type="text"
                onChange={handleChange("year")}
                defaultValue={values.year}
                className="border border-primary text-primary p-4 h-[52px] rounded-lg mt-2"
              />
            </div>


            {/* <div className="w-[full] flex flex-row gap-2"> */}
              <Button
                onClick={Previous}
                type="button"
                className="text-white bg-slate-400 mt-8  hover:bg-slate-700"
              >
                Previous
              </Button>
              <Button
                // onClick={Continue}
                type="submit"
                className="text-white bg-primary mt-2 hover:bg-[#2948c4]"
              >
                Submit
              </Button>
            {/* </div> */}
            
          </form>
        </div>
        <div className="absolute bg-secondary rounded-2xl max-md:bottom-0 md:bottom-[50%] translate-y-[50%] max-md:left-[50%] translate-x-[-50%] w-[76vw] max-w-[460px] md:w-[50vw] md:max-w-[550px] md:right-0 md:translate-x-[70%] ">
          <img className="float-animation" src={image} alt="" />
        </div>
      </Container>
    </div>
  );
}
