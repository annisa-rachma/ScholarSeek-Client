import PageContainer from "../../components/PageContainer";
import HeaderProfile from "./detail/Header";
import ProfileNav from "./detail/ProfileNav";

export default function ProfilePage() {

    let schools = [
        {
          "id": 3,
          "UserId": 3,
          "school": "ITB",
          "major": "S1 Arsitektur",
          "scholarship": null,
          "year": "2020-present"
        }
      ]
  return (
    <>
      <PageContainer className={`mb-12`}>
        <HeaderProfile/>

        <div className="relative mt-[350px] flex-[1] ">
          <ProfileNav/>
          
          <div className="mt-8 flex flex-col gap-4 ">
            <div>
                <h1 className="text-primary text-lg font-bold">Profile</h1>
                <p className="text-slate-600 mt-2">Hey, I'm Sarah, currently immersing myself in the world of architecture at Institut Teknologi Bandung (ITB). The creative vibes here are incredible, fueling my passion for blending design and functionality. I'm all about envisioning spaces that go beyond the ordinary and finding innovative solutions. Keep an eye out—I'm on my way to leave my mark in the architecture scene, courtesy of ITB's inspiring program.</p>
            </div>
            <div>
                <h1 className="text-primary text-lg font-bold mb-2">Pendidikan</h1>

                <div className="border p-4 border-primary rounded-lg">
                    {schools?.map((el, i) => {
                        return(
                            <>
                            
                            <div key={i} className="flex-col flex gap-2">
                                <div className="flex">
                                    <h1 className="w-[200px] text-primary font-bold">Sekolah/Universitas</h1>
                                    <p>{el.school}</p>
                                </div>
                                <div className="flex">
                                    <h1 className="w-[200px] text-primary font-bold">Jurusan</h1>
                                    <p>{el.major}</p>
                                </div>
                                <div className="flex">
                                    <h1 className="w-[200px] text-primary font-bold">Tahun</h1>
                                    <p>{el.year}</p>
                                </div>
                                <div className="flex">
                                    <h1 className="w-[200px] text-primary font-bold">Beasiswa</h1>
                                    <p>{el.scholarship}</p>
                                </div>
                            </div>
                            </>
                        )
                    })}
                </div>

            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
