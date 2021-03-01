let Options = (props) => {
    if (props.complete === 'support') {
        return (
            <>
                <h2>Would you like support at home with any products?</h2>
                <div className="questions">
                    <ul>{props.nextLevel()}</ul>
                </div>
            </>
        )   
    } else {
        return (
            <>
                <h2>{props.title} in {props.location}</h2>
                <div className="questions">
                    <ul>{props.nextLevel()}</ul>
                </div>
            </>
        )
    }
}

export default Options;