const SidebarTitle = ({ title }) => {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold flex justify-between items-center">
        <span>{title}</span> <span className="-mt-3 font-thin">________</span>
      </h1>
    </div>
  );
};

export default SidebarTitle;
