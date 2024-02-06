function Message(props) {
    console.log(props)
    return (
        <div style={{ backgroundColor:"skyblue", margin:20 }}>
            {/* <h2>Message Component</h2> */}
            <h3>Hello {props.name}</h3>
            <h4>Message: {props.message}</h4>
        </div>
    )
}

export default Message;