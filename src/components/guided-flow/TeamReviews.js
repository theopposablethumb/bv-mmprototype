import {carers} from '../../data';

let TeamReviews = (props) => {
    let team = carers.filter(carer => carer.team === props.location);

    let reviewRatings = (rating) => {
        return rating.map(score => <li><span>{score}</span></li>);
    }
    
    return (
        <>
            <h3>Recommended by our WellBeing Support Workers</h3>
            <ul className="reviews">{team.map(carer => <li key={carer.name}><div><figure><img src={carer.img} alt={carer.name} /></figure><div><p>"{carer.review.review}" - <em>{carer.name} - {carer.team}</em></p><ul className="rating">{reviewRatings(carer.review.rating)}</ul></div></div></li>)}</ul>
        </>
    );
}

export default TeamReviews;