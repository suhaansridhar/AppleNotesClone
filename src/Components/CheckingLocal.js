const CheckingLocal = () =>{
    const keysOfElements = [];
    for(let i=0; i<localStorage.length; i++){
        keysOfElements.push(localStorage.key(i));
    }

    let values = [];
    for(let i =0; i<keysOfElements.length; i++){
        values.push(localStorage.getItem(keysOfElements[i]));
    }   

    let answers = [];
    for(let i of keysOfElements){
        answers.push(
        <div key={keysOfElements[i]}>
        <div className="title">
            <h4>{keysOfElements[i]}</h4>
        </div>
        <div>
            <h4>{values[i]}</h4>
        </div>
        </div>)
    };

    console.log(answers);

    return(
        <div>
            {answers}
        </div>
    )
}

export default CheckingLocal;