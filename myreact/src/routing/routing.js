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
import VirtualDomComp from "../components/VirtualDomComp";
import FormValComp from "../components/FormValComp";
import ProductDashboardComp from "../crud/ProductDashboardComp";
import ProductAddComp from "../crud/ProductAddComp";
import ProductUpdateComp from "../crud/ProductUpdateComp";
import LoginComp from "../layout/LoginComp";

const router = createBrowserRouter([


    {path:"", element:<LoginComp/>},
    {path:"dashboard", element:<Dashboard/>},
    {path:"maindashboard", element:<MainDashboardComp/>, children:[
        // default routing
        {path:"", element:<MySliderComp/>},

        // naming routind
        {path:"myslider", element:<MySliderComp/>},
        {path:"myimages", element:<MyImagesComp/>},
        {path:"productdashboard", element:<ProductDashboardComp/>},
        {path:"productadd", element:<ProductAddComp/>},
        {path:"productupdate", element:<ProductUpdateComp/>},

        // parameterize routing
        {path:"parent/:id", element:<ParentComp/>},
        {path:"parent", element:<ParentComp/>},
        {path:"virtualdom", element:<VirtualDomComp/>},
        {path:"formval", element:<FormValComp/>},
        
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