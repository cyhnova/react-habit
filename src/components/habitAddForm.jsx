import React, { Component } from 'react';

class HabitAddForm extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        console.log(this.inputRef.current.value)
        const input_name = this.inputRef.current.value;
        input_name && this.props.onAdd(input_name);
        
        //this.inputRef.current.value = '';
        this.formRef.current.reset();
    }

    render() {
        return (
            <div>
                <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                    <input 
                        ref = {this.inputRef}
                        type="text" placeholder="Habit" className="add-input"/>
                    <button className="add-button">Add</button>
                </form>
            </div>
        );
    }
}

export default HabitAddForm;