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
                <h2>What area would you like support with?</h2>
                <div className="questions">
                    <ul>{props.nextLevel()}</ul>
                </div>
            </>
        )
    }
}

export default Options;