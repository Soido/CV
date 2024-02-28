import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./../components/pages/Home/Home";
import About from "./.././components/pages/About/About";
import Projects from "./../components/pages/Projects/Projects";
import Contacts from "./../components/pages/Contacts/Contacts";
import ForEmployer from "./../components/pages/ForEmployer/ForEmployer";
import ReduxProject from "./../components/pages/ForEmployer/ReduxProject/ReduxProject/ReduxProject";
import PostListProject from "./../components/pages/ForEmployer/PostsListProject/PosListProject/PostListProject";
import NotFound from "./../components/NotFound";
import MainLayout from "./../Layouts/MainLayout";

import ScrollToTopPage from "./../hooks/scrollToTopPage";

const Router = () => {
  return (
    <>
      <BrowserRouter /*basename="/CV"*/>
        <div className=" App">
          <ScrollToTopPage />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index={true} /*можно без true */ element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="foremployer" element={<ForEmployer />} />
              <Route
                path="foremployer/reduxproject"
                element={<ReduxProject />}
              />
              <Route
                path="foremployer/postlistproject"
                element={<PostListProject />}
              />
              <Route path="contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Router;
