import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  return (
    <div>
     <Provider store={store}>
      <Header />
      <Body/>
      </Provider>
    </div>
  );
}
