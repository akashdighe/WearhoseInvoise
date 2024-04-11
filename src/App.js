import "./App.css";
import OrderList from "../src/component/OrderList";
import WearHouseInfo from "./component/WearHouseInfo";
import UpdateList from "./component/UpdateList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen   ">
      {/* <OrderList /> */}
      {/* <WearHouseInfo/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OrderList />}></Route>
          <Route path="/WearHouseInfo" element={<WearHouseInfo />}></Route>
          <Route path="/update/:id" element={<UpdateList/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
