import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import AlertMessage from "./components/AlertMessage";
import About from "./components/About";
import {Routes, Route} from "react-router-dom";

function App() {
  //hook for message alerts
  const [alert, setAlert] = useState(null);

  //hook for dark mode
  const [mode, setMode] = useState("light");

  //hook for button color
  const [colorMode, setColorMode] = useState("primary");

  //method for dark mode
  const toggleMode = () => {
    if (mode === "dark") {
      //text setting
      setMode("light");

      //theme setting
      const toggleTextCollection = document.getElementsByClassName(
        "textToggle"
      );
      for (let i = 0; i < toggleTextCollection.length; i++) {
        toggleTextCollection[i].style.color = "black";
      }
      let mainBody = document.getElementById("mainBody");
      mainBody.style.background = "white";
      let myBox = document.getElementById("myBox");
      myBox.style.background = "white";

      //alert setting
      handleAlert("Light Mode Activated", "success");
    } else if (mode === "light") {
      setMode("dark");
      const toggleTextCollection = document.getElementsByClassName(
        "textToggle"
      );
      for (let i = 0; i < toggleTextCollection.length; i++) {
        toggleTextCollection[i].style.color = "white";
      }
      let mainBody = document.getElementById("mainBody");
      mainBody.style.background = "#030DAC";
      let myBox = document.getElementById("myBox");
      myBox.style.background = "#212529";

      //alert setting
      handleAlert("Dark Mode Activated", "success");
    }
  };

  const colorHandle = (color) => {
    if (color === "red") {
      let mainBody = document.getElementById("mainBody");
      mainBody.style.backgroundColor = "#DC3545";
      setColorMode("warning");
      handleAlert("Red Theme Activated", "success");
    } else if (color === "green") {
      let mainBody = document.getElementById("mainBody");
      mainBody.style.backgroundColor = "#198754";
      setColorMode("primary");
      handleAlert("Green Theme Activated", "success");
    } else if (color === "yellow") {
      let mainBody = document.getElementById("mainBody");
      mainBody.style.backgroundColor = "#FFC107";
      setColorMode("danger");
      handleAlert("Yellow Theme Activated", "success");
    }
  };

  const handleAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      {/* Navigation Bar */}
      <Navbar
        siteTitle="TextUtility"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        colorMode={colorHandle}
      />

      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={
            <TextForm
            heading="Text Analyzer"
            TextColor={Navbar.NavText}
            showAlert={handleAlert}
            colorMode={colorMode}
            />
          }/>
            <Route path="/about" element={<About/>}/>

        </Routes>

      {/* </BrowserRouter> */}
      {/* Alert Message */}
      <AlertMessage alert={alert} />
    </>
  );
}

export default App;
