import React from 'react';
import {carers} from '../../data'; 


let CareTeam = (props) => {
    let team = carers.filter(carer => carer.team === props.location);

    if (props.day) {
        let day = props.day.toLowerCase();
        let available = team.filter(carer => carer.days.includes(day));
        return (
            <>
                <h3>The following members of our team are available on {props.day}</h3>
                <ul className="flex carers">
                    {available.map(carer => {return (
                        <li key={carer.name}>
                            <figure>
                                <img src={carer.img} alt={carer.name} title={carer.name} />
                                <figcaption>{carer.name}</figcaption>
                            </figure>
                        </li>
                    )})}
                </ul>
            </>
        )
    } else {
        return <></>;
    }

}

export default CareTeam;