let Listings = (props) => {
    return (
        <>
            <h2>Available services in {props.location}</h2>
            <p className="centered">I would like help with {props.answers[0]} and {props.answers[1]}</p>
        </>
    );
}

export default Listings;