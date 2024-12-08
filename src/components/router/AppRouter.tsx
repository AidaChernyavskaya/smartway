import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "../library/Layout";
import MainPage from "../../pages/MainPage";
import Favourites from "../../pages/Favourites";
import DetailedInfo from "../../pages/DetailedInfo";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path={""} element={<MainPage/>}/>
                <Route path={"favourites"} element={<Favourites/>}/>
                <Route path={"/repositories/:owner/:repoName"} element={<DetailedInfo/>}/>
                <Route path="*" element={<Navigate replace to="/"/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;