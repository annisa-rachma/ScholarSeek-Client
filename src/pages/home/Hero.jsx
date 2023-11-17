import Container from "../../components/Container"
import Button from "../../components/Button"
import heroImg from "../../assets/hero-image.png"

export default function Hero() {
    return (
        <div className="md:px-6 max-md:mb-[20vw] md:mt-6">
            <Container className="bg-primary relative md:w-[60%] md:h-[400px] md:p-14 p-8 flex md:items-center">
                <div className="flex-[1] flex flex-col text-white max-md:text-center max-sm:mb-[20vw] sm:max-md:mb-[124px] items-center md:items-start gap-4 md:gap-5 md:max-w-[85%]">
                    <h1
                        className="text-2xl md:text-3xl lg:text-4xl text-accent_text font-bold md:flex flex-col"
                        style={{ textWrap: "balance" }}
                    >
                        Raih impianmu, <span>Temukan beasiswa di sini</span>
                    </h1>
                    <p className="text-sm w-[85%] md:text-lg">
                        Temukan beasiswa, terhubung dengan mentor, dan ikut
                        serta dalam forum dinamis kami.
                    </p>
                    <Button className="text-primary bg-white ">
                        Cari tau lebih lanjut
                    </Button>
                </div>
                <div className="absolute max-md:bottom-0 md:bottom-[50%] translate-y-[50%] max-md:left-[50%] translate-x-[-50%] w-[76vw] max-w-[460px] md:w-[50vw] md:max-w-[550px] md:right-0 md:translate-x-[70%] ">
                    <img
                        className="float-animation"
                        src={heroImg}
                        alt=""
                    />
                </div>
            </Container>
        </div>
    )
}
