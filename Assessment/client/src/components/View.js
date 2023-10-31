import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import './view.css'
import { Link } from "react-router-dom"

const View = () => {
    const [data, setdata] = useState([])
    const [selectedRange, setSelectedRange] = useState('');
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/recipes/res/").then(res => {
            setdata(res.data)
        }).catch(err => console.log(err))
    }, [])
    useEffect(() => {
        if (selectedRange) {
            axios.post(`http://127.0.0.1:8000/recipes/week/${selectedRange.week}/`).then(res => {
                setdata(res.data)
            }).catch(err => console.log(err))

        }
    }, [selectedRange]);

    const weekrange = [
        { label: 'this week', week: 'this_week' },
        { label: 'lastweek', week: 'last_week' },
        { label: 'All', week: 'all' },
    ];
    const Deletedata = (id) => {
        axios.delete("http://127.0.0.1:8000/recipes/res/" + id + "/").then(
            alert("Field deleted successfully"),
            axios.get("http://127.0.0.1:8000/recipes/res/").then(res => {
            setdata(res.data)
        }).catch(err => console.log(err))

        ).catch(error => console.error(error))
    }


    return (
        <>
            <div>

                <h1 className="head">View Recipes <span className="im"><img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/eat-circle-orange-512.png" style={{ width: 45 }} /></span></h1>
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <div>
            <select onChange={(e) => setSelectedRange(JSON.parse(e.target.value))} style={{width:110,height:30,backgroundColor:"green"}}>
                <option value="">select week</option>

                {weekrange.map((range, index) => (
                    <option key={index} value={JSON.stringify(range)}>
                        {range.label}
                    </option>
                ))}
            </select>
            </div>
            <div>
            <Link to="/" className="btn btn-light" style={{display:"flex",justifyContent:"right"}}>ADD Recipe</Link>
            </div>
            </div>
            <div className="flex">
                {data.map((item, k) => {
                    return (
                        <div>
                            <div className="fl">
                                <div className="card" key={k}>

                                    <div className="menu" style={{ display: "flex" }}>
                                        <div className="dots"><span class="material-symbols-outlined">more_vert</span></div>
                                        <ul className="dropdown">

                                            <li><Link to={`/edit/${item.id}`}>edit</Link></li>
                                            <li><Link onClick={() => {
                                                Deletedata(item.id)
                                            }}>delete</Link></li>
                                            
                                        </ul>
                                    </div>

                                    <img src={item.recipe_image} style={{ maxWidth: 300, maxHeight: 190 }} />
                                    <div class="card-body">
                                        <h4><div class="card-title">{item.recipe_name}</div></h4>
                                        <div class="card-text">
                                            <b><span style={{ color: "green", fontSize: "larger" }}>{item.recipe_type}</span></b>
                                        </div>
                                        <div class="card-text">{item.recipe_created}</div><br></br>
                                        <div class="card-text">{item.recipe_description}</div>
                                    </div>

                                </div>


                            </div>

                        </div>


                    )
                })}

                {/* value={JSON.stringify(selectedRange)} */}
            </div>
        </>
    )
}
export default View;
