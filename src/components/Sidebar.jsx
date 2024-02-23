import { Niconne } from "next/font/google";
import Nav from "./Nav";
import Playlist from "./Playlist";

const niconne = Niconne({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Sidebar = () => {
  return (
    <div className="absolute z-50 top-0 md:static min-h-screen max-h-screen flex flex-col bg-sidebar">
      <div className={`${niconne.className} border-b p-3 text-lg`}>Fauget</div>
      <Nav />
      <Playlist />
    </div>
  );
};

export default Sidebar;
