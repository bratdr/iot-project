import Navigation from "./HistoryNav";

const History = () => {
  return (
    <>
      <div className="flex flex-row w-screen min-h-screen">
        <div className="z-10">
          <Navigation />
        </div>
        <div className="z-0 flex bg-white rounded-md w-screen mx-4 items-center justify-center">
          <h1>History</h1>
        </div>
      </div>
    </>
  );
};

export default History;
