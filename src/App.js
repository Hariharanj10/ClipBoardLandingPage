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
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/ClipBoard" element={<ClipBoard />} />

          {isLogin &&(
            <Route
              path="/TransactionPage"
              element={<TransactionPage setTrackChanges={setTrackChanges} />}
            />
          )}
          <Route path="/" element={<LoginPage setIsLogin={setIsLogin} />} />

          <Route element={<PrivateRoutes isLogin={isLogin} />}>
            <Route element={<TransactionPage/>}/>
          </Route>
          <Route
            path="/ReviewChanges"
            element={
              <ReviewChanges
                trackChanges={trackChanges}
                setTrackChanges={setTrackChanges}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
