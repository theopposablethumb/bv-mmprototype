import {packageOptions} from '../../data';

let ServicesOffered = () => {
    console.log(packageOptions);
    return (
        <div className="flex services">
            {packageOptions.map(option => {return (
                <div className="service">
                    <div className="image"><img src={option.img} alt={option.title} /></div>
                    <div>
                        <h4>{option.title}</h4>
                        <p>{option.description}</p>
                        <ul>
                            {option.features.map(feature => {return <li>{feature}</li>})}
                        </ul>
                    </div>
                </div>
            )})}
        </div>
    )
}

export default ServicesOffered;