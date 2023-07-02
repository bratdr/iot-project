import Navigation from "../../../components/HistoryNav";

const History = () => {
  return (
    <>
      <div className="z-0 flex flex-row w-screen min-h-screen">
        <div className="z-10 absolute">
          <Navigation />
        </div>
        <div className="flex bg-slate-100 rounded-md w-screen items-center justify-center">
          <h1>History</h1>
        </div>
      </div>
    </>
  );
};

export default History;
