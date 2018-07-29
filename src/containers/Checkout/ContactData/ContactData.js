import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state={
        name: '',
        email: '',
        address: {
            street: '',
            postcode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const data = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'TestUser',
                address: {
                    street: 'test Street',
                    country: 'United Kingdom'
                },
                email: 'testEmail@domain.com'
            },
            deliveryMethod: 'fastest'
        }
        
        axios.post('/orders.json', data)
            .then(response => {
                // console.log(response);
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                // console.log(error);
                this.setState({loading: false});
            });
    }

    render() {
        let form = (
            <form>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your Email" />
                <input type="text" name="street" placeholder="Your Street" />
                <input type="text" name="postcode" placeholder="Your Postcode" />
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        );
        
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={Classes.ContactData}>
                <h4>Enter your ContactData</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;