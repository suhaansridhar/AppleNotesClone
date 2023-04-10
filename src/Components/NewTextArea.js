import React, {useEffect, useState} from 'react';
import '../index.css';
import PreviousNotes from './PreviousNotes';

const NewTextArea = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [counter, setCounter] = useState('');

    function titleChange(event){
        setTitle(event.target.value);
    }

    function textChange(event){
        setText(event.target.value);
    }

    useEffect(() => {
        setCounter(text.split(' ').length - 1);
    }, [text])
    

    function saveNote(){
        <PreviousNotes title = {title} text = {text} />

        if(title.length === 0){
            alert('Enter the Title Name');
        }else{
            localStorage.setItem(JSON.stringify(title), JSON.stringify(text));
            setText(''); 
            setTitle('');
        }      
    }
    
  return (
    <div className='text--area--container'> 
        <div>
            <input type="text"
                className="text--area--container--input" 
                placeholder='Enter the Title: ' 
                value={title} 
                name="title" 
            onChange={titleChange}/>

            <textarea 
                name="text"
                value={text} 
                placeholder = "New Note"
            onChange={textChange} />
        </div>

        <div className='text--area--container--footer'>
            <h5>Word Count: {counter}</h5>
            <button onClick={saveNote}>Save</button>
        </div>
    </div>
  )
}

export default NewTextArea