import PodcastCardContainer from "@/components/PodcastCardContainer";
import { getAllPodcast } from "@/lib/getPodcastData";

const Podcast = async () => {
  const podcasts = await getAllPodcast();

  return (
    <div>
      <PodcastCardContainer podcasts={podcasts} startPoint={0} />
    </div>
  );
};

export default Podcast;
