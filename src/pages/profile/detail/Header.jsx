export default function HeaderProfile({name, profileImg, status}) {
    return (
        <>
        <div className="bg-secondary absolute h-[200px] w-[100vw] left-0">
          <div className=" flex gap-8 ">
            <img
              src={profileImg}
              alt=""
              className="object-fill w-[170px] h-[170px] rounded-full border-solid border-4 border-white ml-[130px] mt-[150px]"
            />
            <div className="mt-[220px]">
              <h1 className="text-primary text-2xl font-extrabold">
                {name}
              </h1>
              <p className="mt-2">{status}</p>
            </div>
          </div>
        </div>
        </>
    )
}