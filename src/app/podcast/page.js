import { getAllPodcast } from "@/lib/getPodcstData";

const Podcast = async () => {
  const podcasts = await getAllPodcast();

  return (
    <div>
      <h1>Podcast</h1>
    </div>
  );
};

export default Podcast;
