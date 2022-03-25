import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import RootRouter from "./RootRouter";

import { store } from "./Store/Store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
