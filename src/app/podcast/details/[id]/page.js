import SinglePodcastDetails from "@/components/SinglePodcastDetails";
import { getSinglePodcast } from "@/lib/getPodcastData";

const PodcastDetails = async ({ params: { id } }) => {
  const singlePodcast = await getSinglePodcast(id);

  return (
    <div>
      {singlePodcast.map((podcast) => (
        <SinglePodcastDetails key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
};

export default PodcastDetails;
