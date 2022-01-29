import './ToDoList.css';
function ToDoList(props) {
    return (
        <div className="to-do-list">
            <h2 style={{ textAlign: "center", color: "white", fontFamily: 'Montserrat' }}>To Do List</h2>
            {/* USING NORMAL CSS */}
            
            {/* <ul className="list-items">
                {props.task.map((x) => {
                    return (
                        <li className="list-item" key={x.id}>
                            <h3>{x.Title}</h3>
                            <p>{x.Description}</p>
                            <button onClick={() => props.delete(x.id)} className='delete'>Delete</button>
                        </li>
                    )
                })}
            </ul> */}

            {/* USING BOOTSTRAP */}

            <div className="d-flex align-items-center justify-content-center">
                <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 w-75'>
                    {props.task.map((x) => {
                        return(
                            <div className='col d-flex align-items-center justify-content-center'>
                                <div className="card w-75">
                                    <div className="card-body">
                                        <h5 className="card-title">{x.Title}</h5>
                                        <p className="card-text">{x.Description}</p>
                                        <button onClick={() => props.delete(x.id)} className="delete btn btn-danger">Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
export default ToDoList;