import React, { useState } from "react";

// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import Axios from "axios";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


function ImageUploader(props) {
  const [files, setFiles] = useState([]);
  const handleUpdate = async (fileItems) => {
    try {
      setFiles(fileItems);

      // appending 'file' with image info to pass can retieve in params
      let data = new FormData();
      data.append("file", fileItems[0].file);
      const res = await Axios.put(`/api/users/${props.userID}`, data);
      window.location.reload(false);//forces page to render again after new image upload
      console.log(res.data);
    } catch (err) {
      console.log(err.response); //err.response from axios
      alert("error in upload");
    }
  };

  return (
    <div>


      <FilePond
        files={files}
        onupdatefiles={handleUpdate}
        // onupdatefiles={setFiles}
        allowMultiple={false}
        // maxFiles={3}
        // server={`/api/users/${props.userID}`}
        name="files"
        // {/* sets the file input name, it's filepond by default */}
        labelIdle='Drag  Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
};

export default ImageUploader;