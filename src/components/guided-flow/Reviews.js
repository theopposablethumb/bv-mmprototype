let Reviews = (props) => {
    let reviews = props.reviews;

    let reviewRatings = (rating) => {
        return rating.map(score => <li><span>{score}</span></li>);
    }

    if (props.isFull) {
        return (
            <>
                <h3>What our customers think of {props.title}</h3>
                <ul className="reviews">{reviews.map(review => <li key={review.town}><div><p>{review.review}<span> - {review.author}, {review.town}</span></p></div><ul className="rating">{reviewRatings(review.rating)}</ul></li>)}</ul>
            </>
            );
    } else {
        return <ul className="reviews"><li>{props.reviews[0].review} <span>{props.reviews[0].author}, {props.reviews[0].town}</span></li></ul>;
    }
}

export default Reviews;