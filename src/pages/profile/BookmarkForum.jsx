import PageContainer from "../../components/PageContainer";
import HeaderProfile from "./detail/Header";
import ProfileNav from "./detail/ProfileNav";

export default function BookmarkForum() {

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
            forum
          </div>
        </div>
      </PageContainer>
    </>
  );
}
