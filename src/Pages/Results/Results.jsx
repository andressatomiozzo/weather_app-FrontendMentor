import TodayMain from "./TodayMain";
import TodayDetails from "./TodayDetails";
import Daily from "./Daily";
import Hourly from "./Hourly";

const Results = () => {
  return (
    <main className="results">
      <TodayMain />
      <TodayDetails />
      <Daily />
      <Hourly />
    </main>
  );
};

export default Results;
