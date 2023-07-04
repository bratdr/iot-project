import UserSearch from "../../../components/UserSearch";

const TrackingKeys = () => {
  return (
    <>
      <div className="flex w-screen flex-col items-center justify-center gap-4">
        <h1 className="text-center text-3xl font-bold">
          Insert Your
          <br />
          Tracking Keys
        </h1>
        <div>
          <UserSearch />
        </div>
      </div>
    </>
  );
};

export default TrackingKeys;
