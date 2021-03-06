import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./views/Home"));
const SellDigitalAsset = lazy(() => import("./views/SellDigitalAsset"));
const CreateItem = lazy(() => import("./views/CreateItem"));
const MyDigitalAssets = lazy(() => import("./views/MyDigitalAssets"));
const CreatorDashboard = lazy(() => import("./views/CreatorDashboard"));
const Pledge = lazy(() => import("./views/Pledge"));
const ReleasePledge = lazy(() => import("./views/ReleasePledge"));

// 入口组件
export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sellDigitalAsset" element={<SellDigitalAsset />} />
          <Route path="/createItem" element={<CreateItem />} />
          <Route path="/myDigitalAssets" element={<MyDigitalAssets />} />
          <Route path="/creatorDashboard" element={<CreatorDashboard />} />
          <Route path="/pledge" element={<Pledge />} />
          <Route path="/releasePledge" element={<ReleasePledge />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
