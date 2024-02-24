import Image from "next/image";
import AudioPlayer from "./AudioPlayer";

const DetailsBannerMP3 = ({ title, preview }) => {
  return (
    <div className="relative md:min-h-60 md:max-h-60 mb-5 overflow-hidden">
      <Image
        src={"https://i.ibb.co/5j1jxH4/details-cover-apixcel.png"}
        alt="banner"
        width={1920}
        height={1080}
        className="object-cover object-top"
      />
      <div className="absolute inset-0 p-5 bg-slate-950/50">
        <AudioPlayer preview={preview} title={title} />
      </div>
    </div>
  );
};

export default DetailsBannerMP3;
