import React from "react";
import { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './res.css';

const RecipeForm = () => {
    const [data, addData] = useState({ recipe_name: '', recipe_description: '', recipe_type: '', recipe_created: '', recipe_image: '' })

    function formHandler(e) {
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/recipes/res/", data).then(
            alert("Data added successfully"),
            addData({ recipe_name: '', recipe_description: '', recipe_type: '', recipe_created: '', recipe_image: '' })
        ).catch(err => console.log(err))

    }

    return (
        <div>
            <div className="view">
                <Link to="/view"><button className="btn btn-light">View Recipes</button></Link>
            </div>
            <div className="two">
                <div className="img">
                    <img src="https://marketplace.canva.com/EAFI_i7T__g/1/0/1131w/canva-brown-black-modern-restaurant-food-menu-portrait-MqWj4UijfwU.jpg" className="hello" style={{ width: 400, height: 400, borderRadius: 500 }} />
                </div>
                <div className="container">
                    <form onSubmit={formHandler}>

                        <div class="mb-3">
                            <label for="name" className="form-label">Recipe Name:</label>
                            <input type="text" className="form-control w-50" placeholder="Enter Item Nmae" required onChange={(e) => {
                                addData({ ...data, recipe_name: e.target.value })
                            }} value={data.recipe_name}/>
                        </div>

                        <div class="mb-3">
                            <label for="description" className="form-label">Recipe Description:</label>
                            <textarea className="form-control w-50 hi" rows="3" placeholder="Enter Description" required onChange={(e) => {
                                addData({ ...data, recipe_description: e.target.value })
                            }} value={data.recipe_description} />
                        </div>

                        <div class="mb-3">
                            <label for="name" className="form-label">Recipe Created At:</label>
                            <input type="date" className="form-control w-50 hi" required onChange={(e) => {
                                addData({ ...data, recipe_created: e.target.value })
                            }} value={data.recipe_created} />
                        </div>

                        <div class="mb-3">
                            <label for="name" className="form-label">Image URL:</label>
                            <input type="text" className="form-control w-50" placeholder="Enter Image URL" required onChange={(e) => {
                                addData({ ...data, recipe_image: e.target.value })
                            }} value={data.recipe_image} />
                        </div>

                        <div>
                            <select class="form-select w-50 hi" required onChange={(e) => {
                                addData({ ...data, recipe_type: e.target.value })
                            }} value={data.recipe_type}>
                                <option selected>Select Recipe Type</option>
                                <option value="veg">veg</option>
                                <option value="nonveg">non-veg</option>
                            </select>
                        </div><br></br>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 150 }}>
                            <div><input type="submit" value="Add Recipe" className="btn btn-success" /></div>
                        
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}
export default RecipeForm;