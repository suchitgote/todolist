import React, {useState} from 'react'
// import Todotask from './components/todotask'

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        if(inputData){
            console.log(" inputData",inputData) ;
            setItems ([ ...items ,inputData]) ;
            setInputData('') ;
            console.log(" .................................")
        }else{
            alert("enter some value")
            console.log(" .............ples enter text....................")
        }
    }

    const deleteItem = (index) => {
        const updateditems = items.filter((elem,ind) => {
            return ind !== index;
        });

        setItems(updateditems);
    }

    return (
        <>
            <div className="inputdiv">
                <input type="text" className="input" placeholder="enter task" 
                    value={inputData}
                    onChange={(e) => {  setInputData(e.target.value)  }}
                ></input>
                <span  onClick={addItem} > Add </span>
            </div>
            <div className="tasklist">
                    {
                        items.map((element,index)=>{
                            return (
                                <>
                                <div className="task" key={index} >
                                    <h3>{element}</h3>
                                    <span 
                                    className="delete"
                                    onClick={ ()=> deleteItem(index) }  >  Delete   </span>
                                </div>
                                </>
                            )
                        })
                    }
            </div>
        </>
    )
}

export default Todo

