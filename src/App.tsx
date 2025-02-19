import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import brainLumpLogo from "./assets/brain-lump-logo.svg";
import "./App.css";
import DialogButton from "@/components/dialog-button";
import StepForm from "./components/step-form";

function App() {
  return (
    <>
      <div className="flex justify-center">
        {/* <a href=""> */}
        <img src={brainLumpLogo} className="logo brian" alt="Brain logo" />
        {/* </a> */}
      </div>
      <h1>脳灯様</h1>
      <div className="card">
        <DialogButton title="参拝する">
          <StepForm></StepForm>
        </DialogButton>
      </div>
    </>
  );
}

export default App;
