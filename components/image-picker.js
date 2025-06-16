"use client";
import { useState, useRef } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const inputRef = useRef(null);

  const handlePickClick = () => inputRef.current.click();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    // That will trigger when the readAsDataURL done
    fileReader.onload = () => {
      // fileReader.result => The ready url
      setPickedImage(fileReader.result);
    };

    // Covert the uploaded file to DataURL to use as a src in the image
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet!</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The selected image by the user"
              fill
            />
          )}
        </div>
        <input
          type="file"
          name={name}
          id={name}
          ref={inputRef}
          required
          className={classes.input}
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
