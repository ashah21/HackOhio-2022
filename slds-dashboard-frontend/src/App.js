import logo from './logo.svg';
import './App.css';
import React, {Component, useState} from "react";
import Class from "./components/Class";

class App extends Component {
    render() {
        var students = {
            data: [
                {
                    name: "Evan Cowin",
                    disability: "ADHD",
                    accommodations: "Adderallfewfwefwef"
                },
                {
                    name: "Annie Hu",
                    disability: "Tall",
                    accommodations: "Milk"
                }
            ]
        }

        var cls = "CSE 2421"
        var section = "3412"
        var time = "12:40PM"

        return (
            <div>
                <div className="center">
                    <h1>Hello Professor Robert LaTour</h1>
                </div>
                <div className="center">
                    <h3>Welcome to your Student Accommodations Dashboard</h3>
                </div>
                <Class students={students} cls={cls} section={section} time={time}/>
            </div>
        )
    }
}

export default App;