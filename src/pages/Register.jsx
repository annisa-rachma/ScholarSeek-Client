import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/login-image.png";
import Button from "../components/Button";
import Container from "../components/Container";
import { handleLogin } from "../stores/actions/actionUser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    email : "",
    password : ""
  })
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await dispatch(handleLogin(input));
      toast.info("Signing in, please wait...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/scholarships");
    } catch (error) {
        console.log(error)
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
  
    return (
    <div className="md:px-6 max-md:mb-[20vw] md:mt-6">
      <Container className=" relative right-0 md:w-[60%] md:h-[600px] md:p-14 p-8 flex md:items-center">
        <div className="flex-[1] flex flex-col text-white max-md:text-center max-sm:mb-[20vw] sm:max-md:mb-[124px] items-center md:items-start gap-4 md:gap-5 md:max-w-[85%]">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold md:flex flex-col"
            style={{ textWrap: "balance" }}
          >
            Register
          </h1>
          <form onSubmit={handleSubmit}
            action=""
            className="text-sm w-[85%] md:text-lg text-primary flex flex-col"
          >
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input
              value={input.email}
              name="email"
              onChange={handleChange}
                type="email"
                className="border border-primary text-primary h-[52px] p-4 rounded-lg mt-2"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="">Password</label>
              <input
                type="password"
                value={input.password}
                name="password"
                onChange={handleChange}
                className="border border-primary text-primary p-4 h-[52px] rounded-lg mt-2"
              />
            </div>
            <Button
              type="submit"
              className="text-white bg-primary mt-8  hover:bg-[#2948c4]"
            >
              Login
            </Button>
            <div className="text-slate-500 text-center mt-8">Sudah punya akun? <Link to={'/log-in'} className={"text-primary hover:text-[#2948c4] "} >Login</Link></div>
          </form>
        </div>
        <div className="absolute bg-secondary rounded-2xl max-md:bottom-0 md:bottom-[50%] translate-y-[50%] max-md:left-[50%] translate-x-[-50%] w-[76vw] max-w-[460px] md:w-[50vw] md:max-w-[550px] md:right-0 md:translate-x-[70%] ">
          <img className="float-animation" src={loginImage} alt="" />
        </div>
      </Container>
    </div>
  );
}
