import Nav from "./Nav";
import Playlist from "./Playlist";
import TitleFauget from "./TitleFauget";

const Sidebar = () => {
  return (
    <div className="absolute z-50 top-0 md:static min-h-screen max-h-screen flex flex-col bg-sidebar">
      <TitleFauget />
      <Nav />
      <Playlist />
    </div>
  );
};

export default Sidebar;
