import { createBrowserRouter } from "react-router-dom";
import MySliderComp from "../components/MySliderComp";
import MyImagesComp from "../components/MyImagesComp"
import ParentComp from "../components/ParentComp"
import PageNotFound from "../components/PageNotFound";
import ReactHooksComp from "../hooks/ReactHooksComp";
import UseStateHookComp from "../hooks/UseStateHookComp";
import UseEffectHookComp from "../hooks/UseEffectHookComp";
import MainDashboardComp from "../layout/MainDashboardComp";
import Dashboard from "../layout/Dashboard";

const router = createBrowserRouter([


    {path:"", element:<Dashboard/>},
    {path:"maindashboard", element:<MainDashboardComp/>, children:[
        // default routing
        {path:"", element:<MySliderComp/>},

        // naming routind
        {path:"myslider", element:<MySliderComp/>},
        {path:"myimages", element:<MyImagesComp/>},

        // parameterize routing
        {path:"parent/:id", element:<ParentComp/>},
        
        // child routing
        {path:"reacthook", element:<ReactHooksComp/>, children:[
            {path:"usestate", element:<UseStateHookComp/>},
            {path:"useeffect", element:<UseEffectHookComp/>},

        ]}
    ]},
    

    // wildcard routing
    {path:"*", element:<PageNotFound/>}


])

export default router;