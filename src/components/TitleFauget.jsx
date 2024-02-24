import { GiMusicSpell } from "react-icons/gi";
import { Niconne } from "next/font/google";

const niconne = Niconne({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const TitleFauget = () => {
  return (
    <div>
      <div
        className={`${niconne.className} p-3 text-lg flex items-center gap-1 mt-5 md:mt-0`}
      >
        <GiMusicSpell /> Fauget
      </div>
    </div>
  );
};

export default TitleFauget;
