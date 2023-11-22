import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import menteeImage from "../../assets/banner-bawah.png";
import mentorImage from "../../assets/scholarship-image.png";
import Button from "../../components/Button";

export default function RegisterPage() {
  return (
    <PageContainer className={"mt-8"}>
      <div className="">
        <h1
          className="text-2xl text-center md:text-3xl lg:text-4xl text-primary font-bold md:flex flex-col"
          style={{ textWrap: "balance" }}
        >
          Selamat datang di ScholarSeek
        </h1>
        <div className="flex flex-row gap-12 justify-center mt-8">
          <div>
            <div className="bg-secondary mb-4 rounded-xl overflow-hidden place-content-center grid h-[350px] w-[350px]">
              <img
                className="float-animation h-[350px]  "
                src={menteeImage}
                alt=""
              />
            </div>
            <Link to={"/register/mentee"}>
              <Button className={"bg-primary text-white w-[100%]"}>
                Daftar sebagai mentee
              </Button>
            </Link>
          </div>
          <div>
            <div className="bg-secondary mb-4 rounded-xl overflow-hidden place-content-center grid h-[350px] w-[350px]">
              <img
                className="float-animation h-[350px]  "
                src={mentorImage}
                alt=""
              />
            </div>
            <Link to={"/register/awardee"}>
              <Button className={"bg-primary text-white w-[100%]"}>
                Daftar sebagai awardee
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
