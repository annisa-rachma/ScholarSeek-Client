import PageContainer from "../../components/PageContainer";
import HeaderProfile from "./detail/Header";
import ProfileNav from "./detail/ProfileNav";
import MentoringCard from "../../components/cards/MentoringCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookmarkMentoring } from "../../stores/actions/actionBookmark";
import Loading from "../../components/Loading";
import { fetchUserDetail } from "../../stores/actions/actionUser";
import Button from "../../components/Button";

export default function BookmarkMentoring() {
  const [loading, setLoading] = useState(false);
  const mentoring = useSelector((state) => {
    return state.bookmarkReducer.bookmarkMentoring;
  });
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      setLoading(true);
      await dispatch(fetchBookmarkMentoring());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const user = useSelector((state) => {
    return state.userReducer.userDetail;
  });

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

  const addMentoringSession = async () => {
    
  }

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

            {localStorage.role == "awardee" && 
            <div className="flex justify-end mt-8">
              <Button onClick={addMentoringSession} className={"bg-primary text-white hover:bg-[#2e4cc5]"} >Add new session</Button>
            </div>
            
            }
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {loading && <Loading className="flex-[1]" />}
            {!loading &&
              mentoring?.map((mentoring, i) => (
                <MentoringCard key={i} {...mentoring} />
              ))}
          </div>
        </div>
      </PageContainer>
    </>
  );
}
