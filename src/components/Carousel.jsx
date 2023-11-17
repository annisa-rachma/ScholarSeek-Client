import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const datas = [
    {
        img: "https://i.pinimg.com/750x/f3/5a/00/f35a0046c6802f1c34c010474da3b866.jpg",
        title: "THIS IS A TITLE",
        desc: "Do non velit consequat et laborum proident amet Lorem pariatur laboris ea eiusmod aute. Consectetur laborum laboris exercitation exercitation id dolore pariatur laborum adipisicing magna duis. Pariatur ut amet nulla fugiat consequat et ex minim non in enim enim. Ad commodo ea adipisicing pariatur deserunt nulla occaecat.",
        price: 69_000,
    },
    {
        img: "https://i.pinimg.com/564x/17/a9/b8/17a9b83fc22209f6145b4a1a0dfeb8c7.jpg",
        title: "THIS IS A TITLE",
        desc: "Do non velit consequat et laborum proident amet Lorem pariatur laboris ea eiusmod aute. Consectetur laborum laboris exercitation exercitation id dolore pariatur laborum adipisicing magna duis. Pariatur ut amet nulla fugiat consequat et ex minim non in enim enim. Ad commodo ea adipisicing pariatur deserunt nulla occaecat.",
        price: 69_000,
    },
    {
        img: "https://i.pinimg.com/originals/a2/eb/d9/a2ebd949efb31a6a84881960ef07fa6a.jpg",
        title: "THIS IS A TITLE",
        desc: "Do non velit consequat et laborum proident amet Lorem pariatur laboris ea eiusmod aute. Consectetur laborum laboris exercitation exercitation id dolore pariatur laborum adipisicing magna duis. Pariatur ut amet nulla fugiat consequat et ex minim non in enim enim. Ad commodo ea adipisicing pariatur deserunt nulla occaecat.",
        price: 69_000,
    },
    {
        img: "https://i.pinimg.com/originals/19/07/8a/19078a1c668213f4e11e8d7ea5fb8b02.jpg",
        title: "THIS IS A TITLE",
        desc: "Do non velit consequat et laborum proident amet Lorem pariatur laboris ea eiusmod aute. Consectetur laborum laboris exercitation exercitation id dolore pariatur laborum adipisicing magna duis. Pariatur ut amet nulla fugiat consequat et ex minim non in enim enim. Ad commodo ea adipisicing pariatur deserunt nulla occaecat.",
        price: 69_000,
    },
    {
        img: "https://i.pinimg.com/736x/77/37/0b/77370bac0bea36bc2c065309c1429c80.jpg",
        title: "THIS IS A TITLE",
        desc: "Do non velit consequat et laborum proident amet Lorem pariatur laboris ea eiusmod aute. Consectetur laborum laboris exercitation exercitation id dolore pariatur laborum adipisicing magna duis. Pariatur ut amet nulla fugiat consequat et ex minim non in enim enim. Ad commodo ea adipisicing pariatur deserunt nulla occaecat.",
        price: 69_000,
    },
]

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
}

function Card({ img, title, desc, price }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="w-[100px] h-[100px] overflow-hidden rounded-md">
                <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
            <p className="font-bold">{title}</p>
            <p className="font-light text-slate-600 ellipsis-3">{desc}</p>
            <p className="font-light text-slate-600">{price}</p>
        </div>
    )
}

export default function Carousel() {
    return (
        <div className="px-20 mb-4">

        <Slider {...settings}>
            {datas.map((data) => (
                <Card key={data.img} {...data} />
                ))}
        </Slider>
        </div>
    )
}
