import React, { useState, useEffect, useRef } from "react";

function ImageChanger() {
  const [imageUrl, setImageUrl] = useState(
    "https://media.istockphoto.com/id/637019122/photo/businesswoman-hands-using-laptop-while-examining-graph-chart.jpg?s=612x612&w=0&k=20&c=l2PPDFv65PMRaYXs81SHwWtggS40ihpzH0XDgUbwpNI="
  );
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  const changeImage = () => {
    setImageUrl(
      "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    );
  };

  return (
    <div>
      <img src={imageUrl} alt="Example image" width="250px" height="200px" />
      <br></br>
      <button ref={buttonRef} onClick={changeImage}>
        Change image
      </button>
    </div>
  );
}

export default ImageChanger;
