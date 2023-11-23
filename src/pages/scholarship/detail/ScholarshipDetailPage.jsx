import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookmarkButton from "../../../components/buttons/BookmarkButton";
import InfoTable from "../../../components/InfoTable";
import Loading from "../../../components/Loading";
import PageContainer from "../../../components/PageContainer";
import { handleAddScholarshipBookmark } from "../../../stores/actions/actionBookmark";
import { fetchScholarshipDetail } from "../../../stores/actions/actionScholarships";
import HeaderInfo from "./HeaderInfo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ScholarshipDetailPage() {
  
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();
  const scholarship = useSelector((state) => {
    return state.scholarshipsReducer.scholarshipDetail;
  });
  const dispatch = useDispatch();
  
  const addBookMark = () => {
    dispatch(handleAddScholarshipBookmark(slug))
    toast.info("success added to bookmark", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const fetchData = async () => {
    try {
      setLoading(true);
      await dispatch(fetchScholarshipDetail(slug));
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

  if (loading) {
    return <Loading className="flex-[1]" />; // You can replace this with a loading spinner or any other loading indicator
  }

  //   console.log(scholarship.Detail)
  return (
    <PageContainer>
      <div className="flex justify-between items-start">
        <HeaderInfo
          name={scholarship?.name}
          isFullyFunded={scholarship?.isFullyFunded}
          countries={scholarship?.countries}
          countryCode={scholarship?.countryCode}
          degrees={scholarship?.degrees}
          registrationOpen={scholarship?.registrationOpen}
          registrationDeadline={scholarship?.registrationDeadline}
        />
        <div className="mt-5 md:mt-10">
          {localStorage.access_token && 
            <BookmarkButton
              className={"text-4xl md:text-5xl"}
              onClick={addBookMark}
            />
          }
        </div>
      </div>
      <InfoTable className="mt-6" obj={scholarship?.Detail} />
    </PageContainer>
  );
}
