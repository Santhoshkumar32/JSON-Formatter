import React from "react";

const App=()=>{
   const inputArea=document.querySelector(".workspace-input");
   const outputArea=document.querySelector(".workspace-output");
   const btnFormat=document.querySelector(".control-format");
   const btnClear=document.querySelector(".control-clear");
   
   btnFormat.addEventListener("click",(e)=>{
      e.preventDefault();
      try{
           const formatted=JSON.stringify(JSON.parse(inputArea.value),null,4);
            outputArea.value=formatted;
      }
      catch(err)
      {
        outputArea.value=err.message;
      }
    });
    btnClear.addEventListener("click",()=>{
      inputArea.value="";
      outputArea.value="";
    })
    return (
      <div className="container">
         <div className="buttonControls">
         <button className="controls control-format">Format </button>
         <button className="controls control-clear" >Clear</button>
        </div>
        <div className="screenArea">
          <textarea className="workspace workspace-input" spellCheck={false} placeholder="Enter Your Json here">
        </textarea>
        <textarea  readOnly={true} className="workspace workspace-output"  id="outputArea" placeholder="Formated json will appear here">
        </textarea>
        </div>
      </div>
    );
}

export default App;