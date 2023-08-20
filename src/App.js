import ClipBoard from "./Clipboard";
import ReviewChanges from "./components/ReviewChanges";
import TransactionPage from "./components/TransactionPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import PrivateRoutes from "./components/PrivateRoutes";
import { Navigate } from "react-router-dom";
function App() {
  const [trackChanges, setTrackChanges] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [OpenReview, setOpenReview] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClipBoard />} />
          <Route path="/LoginPage" element={<LoginPage setIsLogin={setIsLogin} />} />

          <Route element={<PrivateRoutes isLogin={isLogin}  />}>
            <Route path="/TransactionPage" element={<TransactionPage setTrackChanges={setTrackChanges} setOpenReview={setOpenReview} setIsLogin={setIsLogin}/>}/>
          </Route>
          <Route
            path="/ReviewChanges"
            element={
              <ReviewChanges
                trackChanges={trackChanges}
                setTrackChanges={setTrackChanges}
                setOpenReview={setOpenReview}
                OpenReview={OpenReview}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
