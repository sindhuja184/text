import React, {useState} from 'react'

export default function TextForm(props) {
  const showAlert = props.showAlert;
  //function for converting into upper case

  const handleUpClick = () => {
    console.log("Handle up click");
    let newText = text.toUpperCase();
    setText(newText);   
    showAlert("Coverted to upper case", "success");
  }

  //function for change in the first text box

  const handleOnChange = (event) => {
    console.log("Handle on change");
    setText(event.target.value);
    showAlert("TextBox Changed", "success");
  }

  //function for changing in the second text box

  const handleOnChangeSearch = (event) => {
    setText1(event.target.value);
    showAlert("TextBox Changed", "success");
  }
  //function for converting into lower case

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Coverted to lower case", "success");
  }

  //function to clear text
  const handleClear = () =>{
    setText('');
    showAlert("Text Cleared", "success");
  }
  //function for searching whether a text is found in the larger text

  const searchFor = () => {
    let search = text1.toLowerCase();
    let large = text.toLowerCase();
    if(large.includes(search)){
        setSearchText(`"${text1}" is found in text`);
    }
    else{
        setSearchText(`"${text1}" is not found in text`);
    }
    showAlert("Operation done", "success");
  }

  const numberOfWords = (text) => {
    if (text.trim() === "") {
      return 0;
    }
    return text.trim().split(/\s+/).length;
  };

  //use state
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  const [searchText, setSearchText] = useState('');

  return (
    <>
        <div className = "container"  style = {{color : props.mode === 'light' ? 'black' : 'white'}}>
            <div >
                <h3 className="mb-3" style={{ marginTop: '40px', padding: '10px', textAlign: 'center' }}>
                  {props.heading}
                </h3>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                </label>
                <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={10}
                value = {text}
                style={{backgroundColor : props.mode === 'light' ? 'white' : '#042743', color : props.mode === 'light' ? 'black' : 'white'}}  
                onChange = {handleOnChange}
                defaultValue={""}
                />
                <button className='btn btn-primary my-3 mx-2' disabled = {text.length === 0} onClick={handleUpClick}>
                    Convert To UpperCase
                </button>
                <button className='btn btn-primary my-3 mx-2'  disabled = {text.length === 0}onClick={ handleLowClick }>
                    Convert To LowerCase
                </button>
                <button className='btn btn-primary my-3 mx-2'  disabled = {text.length === 0}onClick={ handleClear}>
                    Clear Text
                </button>
            </div>
        </div>
        <div className = "container" style = {{color : props.mode === 'light' ? 'black' : 'white'}}>
            <label htmlFor='search' style={{ fontSize: 'large' }}>Search:</label>
            <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                style={{ height: '50px', width: '200px', backgroundColor : props.mode === 'light' ? 'white' : '#042743', color : props.mode === 'light' ? 'black' : 'white'}}  
                value = {text1}
                onChange = {handleOnChangeSearch}
                defaultValue={""}
            />
            <button className='btn btn-primary my-3 '  disabled = {text.length === 0 || text1.length === 0}onClick={ searchFor }>
                    Search
             </button>
             <div>
             </div>
             <label style = {{color : props.mode === 'light' ? 'black' : 'white'}}>{searchText}</label>
        </div>
        <div className = "container" style = {{color : props.mode === 'light' ? 'black' : 'white'}}>
            <h3>Text Summary</h3>
            <p>{numberOfWords(text)} words and {text.length} characters</p>
            <p>{0.008 * numberOfWords(text)} minutes to read</p>
        </div>
        <div className = "container" style = {{color : props.mode === 'light' ? 'black' : 'white'}}>
          <h4>Preview</h4>
          <p>{text.length > 0 ? text :"Enter text to preview"}</p>
        </div>
    </>

  )
}
