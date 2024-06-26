import React,{useState} from 'react'


export default function TextForm(props) {

  const [text, setText] = useState('');

  const handleUpClick = ()=> {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)

  }
    
  const handleLoClick = ()=> {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)

  }

  const handleClearClick = ()=> {

    let newText = '';
    setText(newText)
  }


  const handleCopy = ()=> {
    console.log("I am Copy");
    var  text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = ()=> {
    let newText =text.split(/[ ]+/);        // using ReatJS
    setText (newText.join(" "))   
  }



  const handleOnchange =(event)=>{
   // console.log(event.target.value);
   setText(event.target.value)

  }

  // const [text, setText] = useState('');
    return(
      <>
        <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
             <h1>{props.heading}</h1>
             <div  className="mb-3">

             <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'grey': 'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10"> </textarea>
             </div>
             <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>

             <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>

             <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

             <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

             <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


            </div>
         <div className="container my-2"style={{color: props.mode==='dark'?'white':'black'}}>
         <h1>Your text summary</h1>
         {/*<a href='https://www.google.com' className="btn btn-primary mx-2 ">go to google</a>*/}
         <p>{text.split(" ").length} words and {text.length} characters</p>
         <p>{ 0.008 * text.split(" ").length} Minutes read</p>
         <h1>Preview</h1>
         <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
         </div>    
         </>

  )
}
