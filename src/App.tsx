import { Provider } from "react-redux";
import { store } from "./config/store";

function App() {
    return (
        <>
        <Provider store={store}>
            <div>hello</div>
        </Provider>
            
        </>
    );
}

export default App;