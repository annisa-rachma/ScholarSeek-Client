export default function HeaderProfile() {
    return (
        <>
        <div className="bg-secondary absolute h-[200px] w-[100vw] left-0">
          <div className=" flex gap-8 ">
            <img
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
              alt=""
              className="object-fill w-[170px] h-[170px] rounded-full border-solid border-4 border-white ml-[130px] mt-[150px]"
            />
            <div className="mt-[220px]">
              <h1 className="text-primary text-2xl font-extrabold">
                Nama Panjang
              </h1>
              <p className="mt-2">Student at Universitas Indonesia</p>
            </div>
          </div>
        </div>
        </>
    )
}