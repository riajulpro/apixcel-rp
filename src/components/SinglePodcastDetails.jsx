import { getAllPodcast } from "@/lib/getPodcastData";
import DetailsBannerMP3 from "./DetailsBannerMP3";
import PodcastCardContainer from "./PodcastCardContainer";

const SinglePodcastDetails = async ({ podcast }) => {
  const podcasts = await getAllPodcast();

  const relatedPodcast = podcasts.filter(
    (pod) => pod.album.type === podcast.album.type
  );

  return (
    <div>
      <DetailsBannerMP3 title={podcast?.title} preview={podcast?.preview} />
      <p className="mb-5">{podcast?.album?.title}</p>
      <span className="px-5 py-2 rounded-full bg-sidebar">Related</span>
      <PodcastCardContainer
        podcasts={relatedPodcast}
        startPoint={0}
        endPoint={5}
      />
    </div>
  );
};

export default SinglePodcastDetails;
