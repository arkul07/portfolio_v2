import React from "react";
import Atropos from "atropos/react";

function Profile() {
  return (
    <div className="h-screen p-20" id="aryakulkarni">
    <Atropos
      className="my-atropos h-4/5"
      activeOffset={20}
      shadowScale={1.05}
      onEnter={() => console.log("Enter")}
      onLeave={() => console.log("Leave")}
      onRotate={(x, y) => console.log("Rotate", x, y)}
    >
      <div className="flex h-full justify-center items-center p-10 bg-dark-jungle-green text-center">
        <div>
          <div className="text-4xl">Hi, I'm Arya Kulkarni</div>
          <div className="text-xl">a Full Stack Developer</div>
          <div className="text-lg">B.E. Computer Science Engineering</div>
          <div className="text-sm">(Expected Graduation: May 2004)</div>
          <button className="border-2 border-neon-green rounded-xl p-2 mt-10 px-6 hover:bg-neon-green hover:text-dark-jungle-green">Resume</button>
        </div>
      </div>
      </Atropos>
    </div>
  );
}

export default Profile;
