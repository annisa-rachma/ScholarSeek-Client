import InfoSection from "../../components/InfoSection"
import Hero from "./Hero"
import scholarshipImg from "../../assets/scholarship-image.png"
import mentoringImg from "../../assets/mentoring-image.png"
import forumImg from "../../assets/forum-image.png"
import Button from "../../components/Button"
import Carousel from "../../components/Carousel"
import scholarships from '../../data/scholarships.json'
import ScholarshipCard from "../../components/ScholarshipCard"

export default function Home() {
    return (
        <>
            <Hero />
            <InfoSection
                image={scholarshipImg}
                blockColor="bg-accent_yellow"
                title="Jelajahi dan temukan bermacam beasiswa"
                desc="Telusuri informasi beasiswa terbaru dari seluruh dunia. Dapatkan berbagai jenis beasiswa, baik sebagian maupun sepenuhnya, di dalam maupun di luar negeri!"
            />
            <Carousel>
                {scholarships.map((data, i) => (
                        <ScholarshipCard key={i} {...data} className="mx-2" />
                    ))}
            </Carousel>
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
        </>
    )
}
