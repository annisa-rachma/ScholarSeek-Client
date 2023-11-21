import InfoSection from "../../components/InfoSection"
import Hero from "./Hero"
import scholarshipImg from "../../assets/scholarship-image.png"
import mentoringImg from "../../assets/mentoring-image.png"
import forumImg from "../../assets/forum-image.png"
import bannerImg from "../../assets/banner-bawah.png"
import Button from "../../components/Button"
import Carousel from "../../components/Carousel"
// import scholarships from "../../data/scholarships.json"
import ScholarshipCard from "../../components/cards/ScholarshipCard"
import Banner from "../../components/Banner"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchScholarships } from "../../stores/actions/actionScholarships"
import Loading from "../../components/Loading"

export default function Home() {
    const [loading, setLoading] = useState(false)
    const scholarshipsData = useSelector((state) => {
        return state.scholarshipsReducer.scholarships;
      });
    const dispatch = useDispatch()

    const fetchData = async () => {
        try {
            setLoading(true)
            await dispatch(fetchScholarships());
          } catch (error) {
            console.log(error);
          } 
          finally {
            setLoading(false)
          }
    }

    useEffect(() => {
        fetchData()
    }, [])
    // console.log(scholarshipsData)

    let scholarships = scholarshipsData.scholarships

    // console.log(scholarshipsData)
    // if (loading) {
    //     return <Loading className="flex-[1]" />; // You can replace this with a loading spinner or any other loading indicator
    //   }

    return (
        <>
            <Hero />
            <InfoSection
                image={scholarshipImg}
                blockColor="bg-accent_yellow"
                title="Jelajahi dan temukan bermacam beasiswa"
                desc="Telusuri informasi beasiswa terbaru dari seluruh dunia. Dapatkan berbagai jenis beasiswa, baik sebagian maupun sepenuhnya, di dalam maupun di luar negeri!"
            />
            <div className="flex flex-col">
                {loading && <Loading className="flex-[1]" />}
                {!loading && <Carousel>
                    {scholarships?.map((scholarship, i) => (
                        <ScholarshipCard
                            // slug={"ini-pura-puranya-slug-scholarship"}
                            key={i}
                            {...scholarship}
                            className="mx-2"
                        />
                    ))}
                </Carousel>}
                
                <Button
                    type="link"
                    to="scholarships"
                    className="bg-primary hover:bg-[#2f4eca] text-white max-w-max m-auto"
                >
                    Temukan beasiswa lainnya
                </Button>
            </div>

            <InfoSection
                reverse
                image={mentoringImg}
                blockColor="bg-accent_pink"
                title="Terhubung dengan para Awardee peraih beasiswa"
                desc="Ingin lebih tahu mengenai persiapan beasiswa? Tenang, kamu dapat mendengarnya langsung dari para awardee melalui sesi mentoring di ScholarSeek"
                button={
                    <Button
                        type="link"
                        to="mentors"
                        className="bg-primary text-white max-w-max"
                    >
                        Cari mentor
                    </Button>
                }
            />
            <InfoSection
                image={forumImg}
                blockColor="bg-secondary"
                title="Temukan teman-teman seperjuanganmu"
                desc="Telusuri informasi beasiswa terbaru dari seluruh dunia. Dapatkan berbagai jenis beasiswa, baik sebagian maupun sepenuhnya, di dalam maupun di luar negeri!"
                button={
                    <Button
                        type="link"
                        to="forum"
                        className="bg-primary text-white max-w-max"
                    >
                        Gabung di sini
                    </Button>
                }
            />
            <Banner color="bg-primary" className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-[80%] mx-auto font-extrabold text-xl items-center">
                    <div className="flex flex-col md:col-span-2 items-center md:items-start gap-4">
                        <h1 className="text-accent_text sm:text-2xl md:text-4xl">
                            Siap untuk blablablabla?
                        </h1>
                        <h1 className="text-white md:text-2xl">
                            lorem ipsum dor sel
                        </h1>
                        <Button
                            type="link"
                            to="login"
                            className="bg-white text-primary"
                        >
                            Gabung di sini
                        </Button>
                    </div>
                    <div className="hidden md:grid w-full h-full max-h-[200px] place-content-center">
                        <img
                            src={bannerImg}
                            className="max-w-[400px] lg:max-w-[450px]"
                            alt=""
                        />
                    </div>
                </div>
            </Banner>
        </>
    )
}
