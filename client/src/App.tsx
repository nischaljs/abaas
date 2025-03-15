import { Route, Routes, useLocation } from "react-router";
import NavBar from "./components/NavBar";
import HomePage from "./routes/HomePage";
import ListPage from "./routes/ListPage";
import LoginPage from "./routes/LoginPage";
import ProfilePage from "./routes/ProfilePage";
import SinglePage from "./routes/SinglePage";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import NotFound from "./routes/NotFound";
import RegisterPage from "./routes/RegisterPage";


const App = () => {
  const location = useLocation();


  const shouldShowNavBar = !["/login", "/register"].includes(location.pathname);

  return (
    <div className="bg-amber-100">
      <div className="lg:w-[75%] lg:m-auto ">
        {shouldShowNavBar && <NavBar />}

        <Routes>
          {/* Public Routes */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>


          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/:id(\\d+)" element={<SinglePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;