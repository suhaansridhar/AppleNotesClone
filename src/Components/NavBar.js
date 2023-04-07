import React from 'react';
import {FaBold, FaUnderline} from 'react-icons/fa';
import {AiOutlineItalic, AiOutlineLink, AiOutlineOrderedList, AiOutlineUnorderedList} from 'react-icons/ai';
import {BsListCheck} from 'react-icons/bs';
import '../index.css';

const NavBar = () => {

    function bold(){
        //Gets the value for bold formatting of selected text.
        // let bold : boolean = documenteditor.selection.characterFormat.bold;
        //Sets bold formatting for selected text.
        // documenteditor.selection.characterFormat.bold = true;
        console.log('first')
    }

  return (
    <div className='navbar--container'>
        <div className='navbar--container--1'>
            <button onClick={bold}><FaBold /></button>
            <button onClick={() => alert('button clicked!')}><FaUnderline /></button>
            <button onClick={() => alert('button clicked!')}><AiOutlineItalic /></button>
            <button onClick={() => alert('button clicked!')}><AiOutlineLink /></button>
            <button onClick={() => alert('button clicked!')}><AiOutlineOrderedList /></button>
            <button onClick={() => alert('button clicked!')}><AiOutlineUnorderedList /></button>
            <button onClick={() => alert('button clicked!')}><BsListCheck /></button>
        </div>

        <div className="navbar--container--2">
            <button onClick={() => alert('button clicked!')}>Preview</button>
            <button onClick={() => alert('button clicked!')}>Write</button>
        </div>
    </div>
  )
}

export default NavBar