import React from "react";
import { useState } from 'react';
import ProgressBar from "./progressBar";


const UploadForm = () => {

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null)
  const types= ['image/png', 'image/jpeg', 'imgae/heic'];


  const changeHandler = (e) => {

    //console.log('changed'); //each time file is uploaded will log changed
    let selected = e.target.files[0]; //grabs first file selected
    
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(''); //resets so error message goes away
    } else {
      setFile(null);
      setError('Please select an image file that is the following types: jpeg, png, or heic');

    }
  };

  return (
    <form>
      <input type = "file" onChange = {changeHandler}></input>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  )
};

export default UploadForm;