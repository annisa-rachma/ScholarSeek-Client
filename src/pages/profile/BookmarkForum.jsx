import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageContainer from "../../components/PageContainer";
import { fetchUserDetail } from "../../stores/actions/actionUser";
import HeaderProfile from "./detail/Header";
import ProfileNav from "./detail/ProfileNav";

export default function BookmarkForum() {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => {
    return state.userReducer.userDetail;
  });
  const dispatch = useDispatch();

  const fetchDataUser = async () => {
    try {
      setLoading(true);
      await dispatch(fetchUserDetail(localStorage.slug));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataUser();
  }, []);
  return (
    <>
      <PageContainer className={`mb-12`}>
        <HeaderProfile
          name={user?.name}
          profileImg={user?.profileImg}
          status={user?.status}
        />

        <div className="relative mt-[350px] flex-[1] ">
          <ProfileNav />

          <div className="mt-8 flex flex-col gap-4 ">forum</div>
        </div>
      </PageContainer>
    </>
  );
}
