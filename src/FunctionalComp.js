function FunctionalComp(props){
    return (
        <>
        <h2>Hello World using Functional Component</h2>
        <h3>It is {props.date.toLocaleTimeString()}.</h3>
        <h4>Full name is: {props.name}</h4>
        </>
    )
}

export default FunctionalComp;