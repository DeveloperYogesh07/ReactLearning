import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/Header";
import Body from "./src/Body";
import Footer from "./src/Footer"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import AboutClass from "./src/about";
import Contact from "./src/contact";
import Error from "./src/Error";
import RestMenu from "./src/RestaurantMenu";
import ProfileClass from "./src/Profile";


const AppLayout = () =>{
    return(
        <>
        <Header/>
        <Outlet />
        <Footer/>
        </>
    )
}

const appRouter1 = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />, 
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Body />,
              },
              {
                path: "/about",
                element: <AboutClass />,
                children:[
                  {
                     path:"profile",
                     element:<ProfileClass />
                  },
                ],
              },
              {
                path: "/contact",
                element: <Contact />,
              },
              {
                path:"/restaurant/:resId",
                element:<RestMenu />
              }
        ],
    },
   
]

)

// const appRouter = createBrowserRouter([
//     {
//       path: "/", // show path for routing
//       element: <AppLayout />, // show component for particular path
//       errorElement: <Error />, // show error component for path is different
//       children: [
//         // show children component for routing
//         {
//           path: "/",
//           element: <Body />,
//         },
//         {
//           path: "/about",
//           element: <About />,
//         },
//         {
//           path: "/contact",
//           element: <Contact />,
//         },
        
//       ],
//     },
    
//   ]);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<RouterProvider router={appRouter1} />);




