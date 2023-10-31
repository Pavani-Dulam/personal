import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./edit.css";
const Edit = () => {
    const { id } = useParams();
    const [data, setdata] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/recipes/edit/" + id + "/").then(res => setdata(res.data)).catch(err => console.log(err))

    }, [])
    function handleSubmit(e) {
        e.preventDefault()
        axios.put("http://127.0.0.1:8000/recipes/res/" + id + "/", data).then(res => {
            alert("data edited successfully")
            navigate("/view")
        })

    }
    return (
        <>  
            <div className="m">
             <div>
                <img className="imgs" src={data.recipe_image} style={{width:400,height:400,borderRadius:500,marginTop:70,marginLeft:30}}></img>
             </div>
            <div className="container" style={{ color: "white" }}>
                <form onSubmit={handleSubmit}>

                    <div class="mb-3">
                        <label for="name" className="form-label">Recipe Name:</label>
                        <input type="text" className="form-control w-50 hi" value={data.recipe_name} onChange={(e) => {
                            setdata({ ...data, recipe_name: e.target.value })
                        }} />
                    </div>

                    <div class="mb-3">
                        <label for="description" className="form-label">Recipe Description:</label>
                        <textarea className="form-control w-50 hi" rows="3" value={data.recipe_description} onChange={(e) => {
                            setdata({ ...data, recipe_description: e.target.value })
                        }} />
                    </div>

                    <div class="mb-3">
                        <label for="name" className="form-label">Recipe Created At:</label>
                        <input type="date" className="form-control w-50 hi" value={data.recipe_created} onChange={(e) => {
                            setdata({ ...data, recipe_created: e.target.value })
                        }} />
                    </div>

                    <div class="mb-3">
                        <label for="name" className="form-label">Image URL:</label>
                        <input type="text" className="form-control w-50 hi" value={data.recipe_image} onChange={(e) => {
                            setdata({ ...data, recipe_image: e.target.value })
                        }} />
                    </div>

                    <div>
                        <select class="form-select w-50 hi" value={data.recipe_type} onChange={(e) => {
                            setdata({ ...data, recipe_type: e.target.value })
                        }} >
                            <option selected>Select Recipe Type</option>
                            <option value="veg">veg</option>
                            <option value="nonveg">non-veg</option>
                        </select>
                    </div><br></br>

                    <div><input type="submit" value="Edit Recipe" className="btn btn-success" /></div>


                </form>
            </div>
            </div>

        </>

    )
}
export default Edit;