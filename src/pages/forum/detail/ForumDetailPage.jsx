import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchForumDetail } from "../../../stores/actions/actionForum";
import Loading from "../../../components/Loading";
import HeadThread from "./HeadThread";
import Comments from "./Comments";
import PageContainer from "../../../components/PageContainer";
import { IoSearchOutline } from "react-icons/io5";
import CommentBar from "./CommentBar";

export default function ForumDetailPage() {
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();
  const thread = useSelector((state) => {
    return state.forumReducer.forumDetail;
  });
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      setLoading(true);
      await dispatch(fetchForumDetail(slug));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [slug]);
  //   console.log(scholarship)
  //  console.log(thread?.Comments)
  if (loading) {
    return <Loading className="flex-[1]" />; // You can replace this with a loading spinner or any other loading indicator
  }

  return (
    <>
      <HeadThread thread={thread} />
      <CommentBar/>
      <PageContainer className="flex flex-col gap-6 -mt-16">
        {thread?.Comments.length > 0 && (
          <div className="border border-primary relative rounded-xl py-4 px-6 flex flex-col gap-3">
            {thread &&
              thread?.Comments.map((el, i) => (
                <Comments comment={el} key={i} />
              ))}
          </div>
        )}
      </PageContainer>
    </>
  );
}
