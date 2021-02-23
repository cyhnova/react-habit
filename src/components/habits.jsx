import React, { Component } from 'react';
import Habit from './habit'
import HabitAddForm from './habitAddForm';

class Habits extends Component {


    handleIncreament = habit => {
       this.props.onIncrement(habit);
    }

    handleDecreament = habit => {
        this.props.onDecrement(habit);
    }

    handleDelete = habit => {
        this.props.onDelete(habit);
    }

    handleAdd = input_name => {
        this.props.onAdd(input_name);
    }

    render() {
        return (
        <> 
            <HabitAddForm onAdd={this.handleAdd}></HabitAddForm>
            <ul>
            {                
                this.props.habits.map(habit => (
                    <Habit 
                        key={habit.id}
                        habit={habit} 
                        onIncrement={this.handleIncreament}
                        onDecrement={this.handleDecreament}
                        onDelete={this.handleDelete}
                    />
                ))                  
            }
            </ul>
            <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
        </>
        )
    }
}
export default Habits;