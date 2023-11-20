import VideoContainer from "./VideoContainer";

export default function StreamsContainer() {
  return (
    <div className="flex flex-wrap justify-center items-center pt-[50px] gap-4 mb-[100px]">
        {[...Array(4).keys()].map(el => (
            <VideoContainer key={el}>{el}</VideoContainer>
        ))}
    </div>
  )
}
