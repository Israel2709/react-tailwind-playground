import "./App.css";
import SortControlArrows from "./Components/SortControlArrows";
import SortControlArrowsByIcon from "./Components/SortControlArrowsByIcon";
import SortControlChevron from "./Components/SortControlChevron";
import SortControlChevronByIcon from "./Components/SortControlChevronByIcon";

function App() {
  return (
    <>
      <div className="container mx-auto border border-gray-800 rounded-md my-4 p-4">
        <div className="p-4">
          <h1 className="font-bold text-2xl">Control in whole button</h1>
        </div>
        <div className="flex gap-4 p-4">
          <div>
            <h2 className="font-bold text-xl">Using Chevrons</h2>
            <SortControlChevron className="my-4" />
          </div>
        </div>
        <div className="flex gap-4 p-4">
          <div>
            <h2 className="font-bold text-xl">Using Arrows</h2>
            <SortControlArrows className="my-4" />
          </div>
        </div>
        <br />
        <div className="p-4">
          <h1 className="font-bold text-2xl">Control in icons</h1>
        </div>
        <div className="flex gap-4 p-4">
          <div>
            <h2 className="font-bold text-xl">Using Chevrons</h2>
            <SortControlChevronByIcon className="my-4" />
          </div>
        </div>
        <div className="flex gap-4 p-4">
          <div>
            <h2 className="font-bold text-xl">Using Arrows</h2>
            <SortControlArrowsByIcon className="my-4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
