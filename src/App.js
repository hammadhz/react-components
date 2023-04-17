// import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import D from "./components/D";
import F from "./components/F";

function App() {
  return (
    // <div className="container mt-2">
    //   <div className="flex flex-col gap-4 ">
    //     {/* button components */}
    //     <div className="h-[200px] w-full bg-slate-200 p-4 rounded-md space-x-2">
    //       <Button.Semantic
    //         label="Button Large"
    //         variant="primary"
    //         className="w-[351px]"
    //         size="regular"
    //       />
    //       <Button.Semantic
    //         label={"Login with OneCENT"}
    //         variant="secondary"
    //         className="w-[351px]"
    //       />
    //       <Button.Semantic
    //         label={"Delivery"}
    //         variant="primary"
    //         className="w-[175px]"
    //         size="large"
    //       />

    //       <Button.Semantic
    //         label={"Deny"}
    //         variant="tertiary"
    //         className="w-[163px]"
    //         size="small"
    //       />
    //     </div>
    //     {/* Text components */}
    //     <div className="h-[200px] w-full bg-slate-200 p-4 rounded-md">
    //       <Text
    //         variant="text-regular"
    //         element="p"
    //         className="text-black font-medium"
    //       >
    //         {"Text"}
    //       </Text>
    //     </div>
    //     <div className="h-[200px] w-full bg-slate-200 p-4 rounded-md">
    //       <Heading element="h1" variant="heading-one" label="heading 1" />
    //     </div>
    //   </div>
    // </div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/d" element={<D />} />
        <Route path="/f" element={<F />} />
      </Route>
    </Routes>
  );
}

export default App;
