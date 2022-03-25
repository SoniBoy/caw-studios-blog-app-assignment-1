import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import RootRouter from "./RootRouter";

import { store } from "./Store/Store";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <RootRouter />
      </HashRouter>
    </Provider>
  );
}

export default App;
