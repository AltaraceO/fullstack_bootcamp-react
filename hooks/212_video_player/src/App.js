import React, { useRef } from "react";

function App() {
  const vidRef = useRef("null");

  const playVideo = () => {
    vidRef.current.play();
  };

  const pauseVideo = () => {
    vidRef.current.pause();
  };

  return (
    <div>
      <video
        ref={vidRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video.mp4"
        width={400}
        height={400}
      ></video>

      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>
    </div>
  );
}
export default App;
