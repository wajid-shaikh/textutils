import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('upper was clicked');
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleDownClick = ()=>{
        // console.log('upper was clicked');
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClearClick = ()=>{
        // console.log('upper was clicked');
        let newText = '';
        setText(newText);
        props.showAlert("Text is Cleared", "success")
    }
    // const longShortCount = ()=>{
        //     // console.log('upper was clicked');
        //     text.split(" ").forEach(element => {
            //         if (element<=3){
                //             console.log(element)
                //         }
                //     });
                
                // }
                const textCut = ()=>{
                    // console.log('upper was clicked');
                    let newText = text.split('').map(char => char + '\u0336').join('')
                    setText(newText); 
                    props.showAlert("Text is Cutted", "success")
                }
                const handleOnChange = (event)=>{
                    // console.log('clicked on handleOnChange');
                    setText(event.target.value);
                }
                
                const handleCopy = () => {
                    var text = document.getElementById("myBox");
                    text.select();
                    navigator.clipboard.writeText(text.value);
                    props.showAlert("Text Copied", "success")
                }
                
    const [text, setText] = useState('');
    // text = "new text"; // Wrong way the change the state
    // setText("new text"); // Right way the change the state

     return (
        <>
        <div className="container">
            <div className='conatiner' style={{color : props.mode==='dark'?'white':'#190654'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control border-success" style={{backgroundColor : props.mode==='dark'?'#7c6da1':'white', color : props.mode==='dark'?'white':'#190654'}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={textCut}>Text Cut</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                {/* <button className="btn btn-primary my-1 mx-1" onClick={longShortCount}>Long Short Count</button> */}
            </div>
            <div className="container my-3" style={{color : props.mode==='dark'?'white':'#190654'}}>
                <h2>Your Text Summmary is : </h2>
                {/* <p>word count is = {text.split(" ").length}</p> */}
                <p>word count is = {text.split(/\s+/).filter((element) => {return element.length !== 0}).length}</p>
                <p>character count = {text.length}</p>
                <p>Takes Time to read = {text.split(' ').filter((element) => {return element.length !== 0}).length * 0.008}</p>
                <h2>Preview : </h2>
                <p>{text.length>0 ? text : 'Enter your Text Here to Preview it'}</p>
            </div>
        </div>
        </>
    )
}
