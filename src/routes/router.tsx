import React from "react";
import {createReactRouter, createRouteConfig} from "@tanstack/react-router";

import {fetchPost} from "../components/screens/DataItem";
import {fetchPosts} from "../components/screens/Data";

//Import Root COmponents for This Router
import Home from "../components/screens/Home";
import About from "../components/screens/About";
import Data from "../components/screens/Data";
import DataItem from "../components/screens/DataItem";

// export const routeConfig = createRouteConfig().createChildren((createRoute) => [
//     createRoute({
//         path: "/",
//         component: () => <Home />,
//     }),
//     createRoute({
//         path: "about",
//         component: () => <About />,
//     }),
//     createRoute({
//         path: "data",
//         component: () => <Data />,
//     }),
// ]);

let rootRoute = createRouteConfig();

const indexRoute = rootRoute.createRoute({
    path: "/",
    component: () => <Home />,
});
const aboutRoute = rootRoute.createRoute({
    path: "about",
    component: () => <About />,
});
const blogsRoute = rootRoute.createRoute({
    path: "data",
    component: () => <Data />,
    errorComponent: () => "Oh crap",
   
});
const postHome = blogsRoute.createRoute({
    path: "/",
    component: () => <Data />,
});
const postRoute = blogsRoute.createRoute({
    path: "data/$id",
    component: () => <DataItem />,
});

export const routeConfig = rootRoute.addChildren([
    indexRoute,
    aboutRoute,
    blogsRoute.addChildren([postHome, postRoute]),
]);

export const router = createReactRouter({routeConfig});

// export const TanStackRouterDevtools =
//     process.env.NODE_ENV === "production"
//         ? () => null // Render nothing in production
//         : React.lazy(() =>
//               // Lazy load in development
//               import("@tanstack/react-router-devtools").then(
//                   (res) => res.ReactRouterDevtools
//               )
//           );
