import React from 'react';

const FeatureItems = () => {
    const numbers = ['Первое', 'Второе', 'Третье', 'Четвертое'];

    const mapNumbers = new Map();
    numbers.forEach(item => {
    const img = `/images/${numbers.indexOf(item) + 1}.svg`;
    mapNumbers.set(item, img);
        });

    const arrFeatures = numbers.map(item => 
    <div className="features-slider_item">
        <div className="features-img" style={{backgroundImage: `url(${(mapNumbers.get(item))})`}}> </div>
        <div className="features-feature">{item + ' целевое преимущество'} </div>
    </div>
    );

    return <div className="features-slider_items">
                {arrFeatures}
            </div>
};


export default FeatureItems;