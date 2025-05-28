import Header from "./components/Header";
import "./App.css";
import SideBar from "./components/dashboard/SideBar";
import { Divider } from "@mui/material";
import InventoryDetail from "./components/inventoryDetail/InventoryDetail";
import CardDetails from "./components/cardDetails/CardDetails";

export default function App() {
  return (
    <div className="App-layout">
      <Header />
      <SideBar />
      <Divider
        variant="fullWidth"
        style={{
          height: "1px",
          backgroundColor: "gray",
          marginBlock: "1rem",
          marginLeft: "-0.2rem",
        }}
      />
      <InventoryDetail />
      <CardDetails />
    </div>
  );
}
