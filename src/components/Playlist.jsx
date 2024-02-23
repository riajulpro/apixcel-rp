import SidebarTitle from "./SidebarTitle";
import { MdOutlineQueueMusic } from "react-icons/md";

const Playlist = () => {
  const playlists = [
    {
      name: "Playlist #A",
    },
    {
      name: "Playlist #B",
    },
    {
      name: "Playlist #C",
    },
  ];
  return (
    <div className="mt-auto p-3 ">
      <SidebarTitle title="Playlist" />
      {playlists.map((playlist) => (
        <p key={playlist?.name} className="flex items-center gap-1">
          <MdOutlineQueueMusic />
          <span>{playlist?.name}</span>
        </p>
      ))}
      <button className="flex items-center gap-1">
        <MdOutlineQueueMusic />
        <span>Add New +</span>
      </button>
    </div>
  );
};

export default Playlist;
