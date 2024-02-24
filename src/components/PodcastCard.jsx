import Image from "next/image";
import Link from "next/link";
import { PiPlayCircleThin } from "react-icons/pi";

const PodcastCard = ({ podcast }) => {
  return (
    <div>
      <Link href={`/podcast/details/${podcast.id}`}>
        <div className="relative overflow-hidden rounded-[16px]">
          <Image
            src={podcast?.album?.cover}
            alt={podcast?.title}
            width={500}
            height={500}
            className="rounded-[16px]"
          />
          <div className="absolute inset-0 bg-slate-950/50 flex justify-center items-center">
            <PiPlayCircleThin className="w-16 h-16" />
          </div>
        </div>
        <p className="line-clamp-1 mt-2">{podcast?.title}</p>
      </Link>
    </div>
  );
};

export default PodcastCard;
