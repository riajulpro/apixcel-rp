import BannerContainer from "@/components/BannerContainer";
import Category from "@/components/Category";
import PodcastCardContainer from "@/components/PodcastCardContainer";
import { getAllPodcast } from "@/lib/getPodcastData";

const Home = async () => {
  const podcasts = await getAllPodcast();

  return (
    <>
      <BannerContainer />
      <Category />
      <PodcastCardContainer podcasts={podcasts} startPoint={0} endPoint={5} />
    </>
  );
};

export default Home;
