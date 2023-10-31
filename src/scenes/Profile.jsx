import React from "react";
import Atropos from "atropos/react";

function Profile() {
  return (
    <div className="h-screen p-20" id="aryakulkarni">
      <div className="flex h-4/5 justify-center items-center p-10 text-center">
        <div>
          <div className="text-4xl">Hi, I'm Arya Kulkarni</div>
          <div className="text-xl">a Full Stack Developer</div>
          <div className="text-lg">B.E. Computer Science Engineering</div>
          <div className="text-sm">(Expected Graduation: May 2024)</div>
          <a href="https://drive.google.com/file/d/1fQDV7oHVMLEjgn7pGe6yBEB_sO2maz-i/view?usp=drive_link"><button className="border-2 border-neon-green rounded-xl p-2 mt-10 px-6 hover:bg-neon-green hover:text-dark-jungle-green">Resume</button></a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
