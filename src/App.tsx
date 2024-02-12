import { Provider } from "react-redux";
import { store } from "./config/store";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import "./index.css";

function App() {
    return (
        <>
        <Provider store={store}>
            <RouterProvider router={routes} />
        </Provider>
            
        </>
    );
}

export default App;