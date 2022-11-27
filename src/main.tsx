import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtoolsPanel} from "@tanstack/react-query-devtools";
import "./index.css";
//React Query Client
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
            {/* <ReactQueryDevtoolsPanel
                className=""
                setIsOpen={function (isOpen: boolean): void {
                    console.log("Function not implemented.");
                }}
                onDragStart={function (
                    e: React.MouseEvent<HTMLDivElement, MouseEvent>
                ): void {
                  console.log("Function not implemented.");
                }}
            /> */}
        </QueryClientProvider>
    </React.StrictMode>
);
