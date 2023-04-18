import React, { useState } from "react";

const CameraButton = () => {
  const [stream, setStream] = useState(null);

  const handleButtonClick = async () => {
    try {
      const userMedia = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(userMedia);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const handleCloseStream = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  return (
    <div className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900">
      {!stream && <button onClick={handleButtonClick}>Open Camera</button>}
      {stream && (
        <video
          autoPlay
          ref={(video) => {
            if (video) video.srcObject = stream;
          }}
          onClose={handleCloseStream}
        />
      )}
    </div>
  );
};

export default CameraButton;
