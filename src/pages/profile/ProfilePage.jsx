import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import PageContainer from "../../components/PageContainer";
import { fetchUserDetail } from "../../stores/actions/actionUser";
import HeaderProfile from "./detail/Header";
import ProfileNav from "./detail/ProfileNav";

export default function ProfilePage() {
  const [loading, setLoading] = useState(false)
    const user = useSelector((state) => {
        return state.userReducer.userDetail
    })
    const dispatch = useDispatch()
    const { slug } = useParams();

    const fetchData = async () => {
    try {
      setLoading(true);
      await dispatch(fetchUserDetail(slug));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PageContainer className={`mb-12`}>
        <HeaderProfile name={user?.name} profileImg={user?.profileImg}  status={user?.status} />

        <div className="relative mt-[350px] flex-[1] ">
          <ProfileNav />

          {loading &&  <Loading className="flex-[1]"/> }
          {!loading && <div className="mt-8 flex flex-col gap-4 ">
            <div>
              <h1 className="text-primary text-lg font-bold">Profile</h1>
              <p className="text-slate-600 mt-2">
                {user?.description}
              </p>
            </div>
            <div>
              <h1 className="text-primary text-lg font-bold mb-2">
                Pendidikan
              </h1>

              <div className="border p-4 border-primary rounded-lg">
                {user?.schools.map((el, i) => {
                  return (
                    
                      <div key={i} className="flex-col flex gap-2 border-b-[1px] border-primary py-6">
                        <div className="flex">
                          <h1 className="w-[200px] text-primary font-bold">
                            Sekolah/Universitas
                          </h1>
                          <p>{el.school}</p>
                        </div>
                        <div className="flex">
                          <h1 className="w-[200px] text-primary font-bold">
                            Jurusan
                          </h1>
                          <p>{el.major}</p>
                        </div>
                        <div className="flex">
                          <h1 className="w-[200px] text-primary font-bold">
                            Tahun
                          </h1>
                          <p>{el.year}</p>
                        </div>
                        <div className="flex">
                          <h1 className="w-[200px] text-primary font-bold">
                            Beasiswa
                          </h1>
                          <p>{el.scholarship}</p>
                        </div>
                      </div>
                    
                  );
                })}
              </div>
            </div>
          </div> }
          
        </div>
      </PageContainer>
    </>
  );
}
