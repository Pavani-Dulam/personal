import { BrowserRouter,Routes,Route } from "react-router-dom";
import RecipeForm from "./RecipeForm";
import View from "./View";
import Edit from "./Edit";


function Path(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<RecipeForm/>}/>
            <Route path="/view" element={<View/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Path;