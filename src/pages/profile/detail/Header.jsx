import { useSelector } from "react-redux"

export default function HeaderProfile({ username, profileImg, status }) {
    const user = useSelector((store) => store.user)
    // console.log(user)
    return (
        <div className="min-h-[300px]">
            <div className="bg-primary min-h-[200px] w-full relative">
                <section className="absolute left-[50%]  translate-x-[-50%] bottom-0 translate-y-[50%]">
                    <img
                        className="w-[30vw] max-w-[150px] rounded-full border-white border-4 aspect-square"
                        src={profileImg}
                        alt=""
                    />
                    <div className="absolute bottom-0 translate-y-[100%] translate-x-[-50%] left-[50%] flex flex-col leading-none items-center text-center max-w-[140%] w-full">
                        <h4 className="text-primary font-extrabold text-lg">{username}</h4>
                        <p>{status}</p>
                    </div>
                </section>
            </div>
        </div>
    )
}
