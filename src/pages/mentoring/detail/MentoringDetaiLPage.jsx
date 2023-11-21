import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookmarkButton from "../../../components/buttons/BookmarkButton";
import Loading from "../../../components/Loading";
import PageContainer from "../../../components/PageContainer";
import { fetchMentoringDetail } from "../../../stores/actions/actionMentoring";
import BodyInfo from "./BodyInfo";
import HeaderInfo from "./HeaderInfo";

export default function MentoringDetailPage() {
  function addBookMark() {
    alert("mentor bookmarked!");
  }
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();
  const mentoringDetail = useSelector((state) => {
    return state.mentoringReducer.mentoringDetail;
  });
  const dispatch = useDispatch();


  
  const fetchData = async () => {
    try {
      setLoading(true);
      await dispatch(fetchMentoringDetail(slug));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [slug]);

  if (loading) {
    return <Loading className="flex-[1]" />; // You can replace this with a loading spinner or any other loading indicator
  }
  // console.log(mentoringDetail)
  return (
    <PageContainer>
      <div className="flex justify-between items-center">
        <HeaderInfo
          title={mentoringDetail?.title}
          date={mentoringDetail?.date}
          time={mentoringDetail?.time}
        />
        {/* <div className="text-4xl md:text-5xl">
          <BookmarkButton onClick={addBookMark} />
        </div> */}
      </div>
      <BodyInfo
        className="mt-4"
        image={mentoringDetail?.imageUrl}
        desc={
          "Excepteur incididunt eiusmod et reprehenderit velit dolore. Et enim enim excepteur velit quis cupidatat deserunt fugiat anim fugiat incididunt consequat. Lorem Lorem sunt labore ex duis quis. Eu commodo in labore nisi officia sit et.Nulla proident nostrud laborum sint cillum qui magna sunt. Irure proident adipisicing ut nulla dolore. Proident et amet reprehenderit elit est ea laboris sit ut voluptate amet occaecat. Sint dolore enim id esse culpa labore nisi magna pariatur adipisicing voluptate exercitation in."
        }
        user={{
          profilePicture: mentoringDetail?.profilePicture,
          username: mentoringDetail?.username,
          status: mentoringDetail?.status,
        }}
        topics={mentoringDetail?.topics}
        totalAttendees={mentoringDetail?.totalAtendees}
        atendees={mentoringDetail?.atendees}
      />
    </PageContainer>
  );
}
