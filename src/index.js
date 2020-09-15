import React from "react";
import ReactDOM from "react-dom";
var name="Senchi";
var city="Chennai";
var exp=2;
var age=24;
var isEven=new Date().toLocaleString();
var element=<h1>{isEven}<br></br>
Second is: {new Date().getSeconds()%2===0?"even" : "odd"}<br></br> 
</h1>
ReactDOM.render(element,document.getElementById("root"));

