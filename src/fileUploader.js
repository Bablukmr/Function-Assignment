import { useRef } from "react";

function File() {
  const fileRef = useRef(null);

  function fileUploader() {
    fileRef.current.click();
  }

  
  return (
    <div>
      <h1 style={{ color: "blue" }}>Upload Your File </h1>
      <input type="file" ref={fileRef} />
      <button  onClick={fileUploader}>
        picke the file
      </button>
    </div>
  );
}

export default File;
