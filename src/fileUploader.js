import { useRef } from "react";

function File() {
  const fileRef = useRef(null);

  function FileUploader() {
    fileRef.current.click();
  }

  return (
    <div>
      <h1 style={{ color: "blue" }}>Upload Your File </h1>
      <input type="file" ref={fileRef} />
      <button  onClick={FileUploader}>
        picke the file
      </button>
    </div>
  );
}

export default File;
