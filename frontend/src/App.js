
import React, { useState } from "react";
import Form from "./container/login/index";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./container/dashboard";

function App() {
    return (
        <Router>
            <Route exact path="/"  component={Form}/>
            <Route path="/dashboard" component={Dashboard}/>
        </Router>

    );
}

export default App;