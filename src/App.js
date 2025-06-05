import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainContainer } from "./components/MainContainer";
import { WatchPage } from "./components/WatchPage";

const router = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path:'watch',
      element:<WatchPage/>
    }
  ],
}]);

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}
