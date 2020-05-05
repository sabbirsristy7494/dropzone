import React from "react";
import { useDropzone } from "react-dropzone";
import "./App.css";
import axios from "axios";

const style = {
  dropzone: {
    display: "flex",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "30px",
    width: "80%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 30px 25px 30px",
    borderWidth: "2px",
    borderRadius: "5px",
    borderColor: "#2196f3",
    borderStyle: "solid",
    backgroundColor: "#2196f3",
    outline: "none",
  },
};

function DropzoneWithoutDrag(props) {
  const dropFiles = (files) => {
    axios
      .post("https://localhost:44367/api/Documents", files)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop: dropFiles,
  });
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));

  return (
    <React.Fragment>
      <section className={style} style={style.dropzone}>
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Dropzone with no drag events</p>
          <em>(Drag 'n' drop is disabled)</em>
        </div>
      </section>
      <aside
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "10px",
          paddingLeft: "10px",
          border: "2px solid black",
          borderRadius: "5px",
        }}
      >
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </React.Fragment>
  );
}

export default DropzoneWithoutDrag;
