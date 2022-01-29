import { useState } from 'react';
import './InputForm.css';
import ToDoList from './ToDoList';

function InputForm() {
    const [data, setData] = useState([])
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const addTask = (event) => {
        event.preventDefault()
        const id = data.length === 0 ? 0 : data.length + 1
        setData(prevState => [...prevState, { id: id, Title: title, Description: description }])
        setTitle("")
        setDescription("")

    }
    const deleteData = (id) => {
        setData(data.filter(x => x.id !== id))
    }
    console.log(data)
    return (
        <div>
            <div className="input-form">
                <form>
                    <label>Title</label><br />
                    <input type="text"
                        name="title"
                        value={title}
                        onChange={x => setTitle(x.target.value)}
                        style={{ fontFamily: 'Montserrat' }} /><br />
                    <label>Description</label><br />
                    <textarea
                        style={{ fontFamily: 'Montserrat' }}
                        name='description'
                        value={description}
                        onChange={x => setDescription(x.target.value)} /><br />
                    <button onClick={addTask} style={{ fontWeight: "bold", fontFamily: 'Montserrat', color: 'white' }}>Add Task</button>
                </form>
            </div>
            <br />
            {data.length !== 0 ? <ToDoList task={data} delete={deleteData} /> : <h1 style={{ fontFamily: 'Montserrat', textAlign: 'center' }} >No Todo added</h1>}
        </div>
    )
}

export default InputForm;
