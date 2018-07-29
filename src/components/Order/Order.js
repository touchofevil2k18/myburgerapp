import React from 'react';
import Classes from './Order.css';

const order = (props) => {
    const ingredients = [];

    for(let ingr in props.ingredients) {
        ingredients.push({
            name: ingr,
            amount: props.ingredients[ingr]
        });
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span key={ig.name}
                    style={{
                        textTransform:'capitalize',
                        display:'inline-block',
                        margin:'0 8px',
                        border:'1px solid #ccc',
                        padding:'5px'
                        }}
                >{ig.name} ({ig.amount})</span>;
    })

    return (
        <div className={Classes.Order}>
            <p>Ingredients: {ingredientOutput} </p>
            <p>Price: <strong>{Number.parseFloat(props.totalPrice).toFixed(2)}</strong></p>
        </div>
    );
}

export default order;