import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import loginImage from "../assets/login-image.png"
import Button from "../components/Button"
import "react-toastify/dist/ReactToastify.css"
import UserrAction from "../stores/actions/actionUserr"
import showToast from "../utlis/showToast"
import TextInput from "../components/form/TextInput"
import PageContainer from "../components/PageContainer"

export default function LoginPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const inputs = [
        { id: "email", type: "email", label: "Email" },
        { id: "password", type: "password", label: "Password" },
    ]

    const handleChange = (e) => {
        setForm((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!form.email || !form.password)
            return showToast(
                "error",
                "Please fill in both email and password field!"
            )
        try {
            dispatch(await UserrAction.login(form))
            navigate("/scholarships")
        } catch (error) {
            showToast("error", error.message)
        }
    }

    return (
        <PageContainer className="min-h-screen flex items-center justify-center lg:grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:col-span-1 flex justify-end">
                <div className="flex flex-col gap-5 items-center w-full xl:max-w-[80%]">
                    <h1
                        className="text-2xl md:text-3xl lg:text-4xl text-primary font-bold md:flex flex-col"
                        style={{ textWrap: "balance" }}
                    >
                        Selamat datang kembali!
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="text-sm w-[85%] md:text-lg text-primary flex flex-col"
                    >
                        {inputs.map((input) => (
                            <div key={input.id} className="flex flex-col">
                                <label htmlFor={input.id}>{input.label}</label>
                                <TextInput
                                    className="border border-primary"
                                    type={input.type}
                                    onChange={handleChange}
                                    id={input.id}
                                    value={form[input.id]}
                                />
                            </div>
                        ))}
                        <Button
                            type="submit"
                            className="text-white bg-primary mt-8  hover:bg-[#2948c4]"
                        >
                            Login
                        </Button>
                        <div className="text-slate-500 text-center mt-8">
                            Belum punya akun?{" "}
                            <Link
                                to={"/register"}
                                className={"text-primary hover:text-[#2948c4] "}
                            >
                                Ayo daftar!
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className="hidden lg:block lg:col-span-1">
                <img className="float-animation max-w-[550px]" src={loginImage} alt="" />
            </div>
        </PageContainer>
    )
}
