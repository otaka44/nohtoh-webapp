import React, { useState } from "react";
// import reactLogo from "./assets/react.svg";
import brainLumpLogo from "./assets/brain-lump-logo.svg";
import "./App.css";
import DialogButton from "@/components/dialog-button";
import StepForm from "./components/step-form";
import { postRgbData, PostData } from "./lib/post-data";
import BrainFatigueLevel from "./lib/calc_fatigue_level";

function App() {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const createPostData = (val: number[]): PostData[] => {
    const tWake = 24 - val[0];
    const tWork = val[1];
    const tScreenTime = val[2];
    const tMusic = val[4];
    const tSoundLevel = val[5];
    const brainFl = new BrainFatigueLevel(
      tWake,
      tWork,
      tScreenTime,
      tMusic,
      tSoundLevel
    );

    return [
      { number: 0, ...brainFl.frontalAssociation },
      { number: 1, ...brainFl.visual },
      { number: 2, ...brainFl.auditory },
    ];
  };
  const handleSubmit = async (val: number[]) => {
    const data = createPostData(val);
    console.log("data", data);
    const response = await postRgbData(data);
    if (response.ok) {
      console.log(response.json());
    }
    setDialogOpen(false);
  };
  return (
    <>
      <div className="flex justify-center">
        {/* <a href=""> */}
        <img src={brainLumpLogo} className="logo brian" alt="Brain logo" />
        {/* </a> */}
      </div>
      <h1>脳灯様</h1>
      <div className="card">
        <DialogButton
          title="参拝する"
          open={dialogOpen}
          handleOpen={setDialogOpen}
        >
          <StepForm onSubmit={handleSubmit}></StepForm>
        </DialogButton>
      </div>
    </>
  );
}

export default App;
