import { Provider } from "urql";
import { client } from "./lib/api";
import { Main } from "./features/Main";

// i am adding new content

function App() {
  return (
    <Provider value={client}>
      <Main />
    </Provider>
  );
}

export default App;
