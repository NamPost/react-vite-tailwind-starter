import "./App.css";
import {Outlet, RouterProvider, Link} from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
//Import Router
import {router} from "./routes/router";

//Root Layouts and Components for this App
import {SideBarMenuSlider} from "./hooks/useMenu";

function App() {
    return (
        <RouterProvider router={router}>
            <SideBarMenuSlider />
            <Outlet />
            <TanStackRouterDevtools position="bottom-right" />
        </RouterProvider>
    );
}

export default App;
