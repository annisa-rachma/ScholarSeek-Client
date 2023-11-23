import { useSelector } from "react-redux"

export default function HeaderProfile({ username, profileImg, status }) {
    const user = useSelector((store) => store.user)
    // console.log(user)
    return (
        <div className="min-h-[340px]">
            <div className="bg-primary min-h-[200px] w-full flex justify-center">
                <div className="relative w-full max-w-[1300px] lg:mx-6">
                    <section className="absolute left-[50%] lg:left-0 lg:translate-x-[0px] translate-x-[-50%] bottom-0 translate-y-[50%] lg:translate-y-[80%] lg:flex lg:items-center lg:gap-6">
                        <div className="w-[30vw] max-w-[150px] aspect-square rounded-full bg-slate-200 border-white border-4">
                            <img
                                className="w-full h-full object-cover"
                                src={profileImg}
                                alt={`${username}'s profilePic`}
                            />
                        </div>
                        <div className="max-lg:absolute bottom-0 max-lg:translate-y-[100%] max-lg:translate-x-[-50%] left-[50%] flex flex-col leading-none max-lg:items-center max-lg:text-center max-w-[140%] w-full">
                            <h4 className="text-primary font-extrabold text-lg">
                                {username}
                            </h4>
                            <p>{status}</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
