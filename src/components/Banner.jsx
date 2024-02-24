import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative md:min-h-60 md:max-h-60 mb-3 overflow-hidden">
      <Image
        src={"https://i.ibb.co/93FZkhb/apixcel-home-banner.png"}
        alt="banner"
        width={1920}
        height={1080}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 flex items-center p-5 bg-slate-950/50">
        <div>
          <h3 className="text-xs md:text-sm">Top play music station</h3>
          <h1 className="text-base md:text-xl font-bold my-3">
            The Dark Side of Music: Unveiling Its Negative Effects
          </h1>
          <p className="text-xs md:text-sm md:max-w-2xl line-clamp-4">
            Music, often regarded as a universal language, possesses a profound
            impact on individuals and societies alike. While it has long been
            celebrated for its ability to evoke emotions, foster connections,
            and uplift spirits, the flip side of the melody reveals a spectrum
            of adverse effects that are often overlooked
          </p>
          <button className="mt-3 px-6 py-2 rounded-full text-white bg-slate-950/75">
            For You?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
