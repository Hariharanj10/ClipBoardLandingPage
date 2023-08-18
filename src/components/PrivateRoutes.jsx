import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = ({ isLogin }) => {
  let auth = { token: isLogin };
  return auth.token ? <Outlet /> : <Navigate to="/loginpage" />;
};
export default PrivateRoutes;
