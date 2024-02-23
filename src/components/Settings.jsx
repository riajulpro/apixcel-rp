const Settings = ({ user }) => {
  return (
    <div>
      <h1 className="font-bold text-lg mb-5">User Profile</h1>
      <div className="px-3 space-y-2">
        <h3>
          <span className="font-semibold">Name:</span>{" "}
          {user?.username && user?.username}
        </h3>
        <h3>
          <span className="font-semibold">Email:</span>{" "}
          {user?.email && user?.email}
        </h3>
      </div>
    </div>
  );
};

export default Settings;
