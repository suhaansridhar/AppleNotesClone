import React, {useEffect, useState} from 'react';
import '../index.css';

const PreviousNotes = () => {
    const [oldNotes, setOldNotes] = useState([]);
    let arrayOldNotes = [];
    let count = 0;

    useEffect(() => {
        let size = Object.keys(localStorage);
        for(let i=0; i<size.length; i++){
            arrayOldNotes.push(localStorage.getItem(JSON.parse(i)));
        }
        setOldNotes(arrayOldNotes.map(item => {
            return <div key={count += 1} className='previousNotes'>
                <h3>{item}</h3>
            </div>
        }))
    }, [])


  return (
    <div className='previous--notes--container'>
        <h3 className='saved--notes--title'>Saved Notes</h3>
        <hr />
        {oldNotes}
    </div>
  )
}

export default PreviousNotes