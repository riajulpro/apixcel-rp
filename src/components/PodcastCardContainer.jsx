import PodcastCard from "./PodcastCard";

const PodcastCardContainer = ({ podcasts, startPoint, endPoint }) => {
  return (
    <div className="px-3 md:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
      {podcasts
        .slice(startPoint, endPoint || podcasts.length)
        .map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
    </div>
  );
};

export default PodcastCardContainer;
