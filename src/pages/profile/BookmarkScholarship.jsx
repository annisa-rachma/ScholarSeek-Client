import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScholarshipCard from "../../components/cards/ScholarshipCard";
import Loading from "../../components/Loading";
import PageContainer from "../../components/PageContainer";
import { fetchBookmarkScholarship } from "../../stores/actions/actionBookmark";
import HeaderProfile from "./detail/Header";
import ProfileNav from "./detail/ProfileNav";

export default function BookmarkScholarship() {
    const [loading, setLoading] = useState(false)
    const scholarships = useSelector((state) => {
        return state.bookmarkReducer.bookmarkScholarships
    })
    const dispatch = useDispatch()

    const fetchData = async () => {
    try {
      setLoading(true);
      await dispatch(fetchBookmarkScholarship());
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
        <HeaderProfile/>

        <div className="relative mt-[350px] flex-[1] ">
          <ProfileNav/>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            {loading &&  <Loading className="flex-[1]"/> }
            {!loading &&
              scholarships?.map((scholarship, i) => (
                <ScholarshipCard
                  key={i}
                  {...scholarship}
                />
              ))}
          </div>
        </div>
      </PageContainer>
    </>
  );
}
