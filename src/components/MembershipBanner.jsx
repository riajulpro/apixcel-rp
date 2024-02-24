import Image from "next/image";
import { PiCrownSimpleLight } from "react-icons/pi";

const MembershipBanner = () => {
  return (
    <div className="relative md:max-h-60 mb-5 overflow-hidden">
      <Image
        src={"https://i.ibb.co/LZ5B8Px/Rectangle-2.png"}
        alt="background"
        height={1080}
        width={1920}
        className=""
      />
      <div className="absolute inset-0 flex items-center md:p-5 bg-slate-950/50">
        <div className="p-2 md:p-5 lg:p-10">
          <h3 className="text-xs md:text-sm flex items-center gap-2">
            <PiCrownSimpleLight /> No Ads & Unlock All Paid Songs
          </h3>
          <h1 className="text-base md:text-xl font-bold my-1 md:my-3">
            Premium Membership
          </h1>
          <p className="text-xs md:text-sm md:max-w-2xl line-clamp-1 md:line-clamp-4">
            It is a long established fact that a is that it has a more-or-less
            normal distribution of letters, as opposed to using Content here,
            content here, making it look like readable English.
          </p>
          <button className="text-xs md:text-base md:t-3 px-6 py-1 md:py-2 rounded-full text-white bg-slate-950/75 mr-2">
            Upgrade Now
          </button>
          <button className="text-xs md:text-base md:mt-3 px-6 py-1 md:py-2 rounded-full text-white bg-slate-500/75">
            Learn more
          </button>
        </div>
      </div>
      <Image
        src={"https://i.ibb.co/8mLVrPV/member-apixcel.png"}
        height={295}
        width={174}
        alt="banner-member"
        className="hidden md:block object-cover absolute bottom-0 right-5"
      />
    </div>
  );
};

export default MembershipBanner;
