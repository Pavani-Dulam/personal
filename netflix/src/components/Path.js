import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Page from "./Page";
import Menu from "./Menu";

const Path = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/page" element={<Page />} />

            </Routes>

        </>


    )

}
export default Path;