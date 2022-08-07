import './App.css';
import React,{useState} from 'react';
import { getLinkPreview, getPreviewFromContent } from "link-preview-js";

function App() {

  const [data,setData] = useState();

  function fetchMetaData(){
    console.log("fetching...");
    let link = document.getElementById('link-input').value;

    getLinkPreview(link).then((data) =>
      console.log(data)
    );
  }

  return (
    <div className="App">
      <input type="text" id='link-input' placeholder='Enter Link'/>
      <button onClick={fetchMetaData}>Preview</button>
    </div>
  );
}

export default App;
