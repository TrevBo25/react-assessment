import React, {Component} from 'react';
import '../../reset.css';
import './List.css';
import {connect} from 'react-redux';
import {getTasks} from '../../ducks/reducer'


class List extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            id: 3,
            term: '',
            todos : [{
                id: 1,
                title: "React",
                completed: false
            },
            {
                id: 2,
                title: "Other",
                completed: false
            }]
        }
    }

    // componentDidMount(){
    //     this.props.getTasks()
    // }

    handleTerm(str){
        this.setState({
            term: str
        })
    }

    deleteTask(i){
        let things = this.state.todos;
        things.splice(i,1)
        this.setState({
            todos: things
        })
    }

    addTask(){
        if(this.state.term){
        let things = this.state.todos;
        things.push({
            id: this.state.id,
            title: this.state.term,
            completed: false
        })
        this.setState({
            todos: things,
            id: this.state.id + 1,
            term: ''
        })}
    }

    completeTask(i){
        let things = this.state.todos;
        things[i].completed = true;
        this.setState({
            todos: things
        })
    }
        

    render(){
        
        const todocards = this.state.todos.map( (v, i, a) => {
            return (
                <div className={ v.completed ? "clistitem" : "listitem"}>
                    <h2 className="ltitle">{v.title}</h2>
                    <div className="lleft">
                        {v.completed ? null : <button className="lbutton" onClick={()=> this.completeTask(i)}>{v.completed ? "Completed" : "Complete?"}</button>}
                        <button className="lx" onClick={() => this.deleteTask(i)}>X</button>
                    </div>
                </div>
            )
        })

        return(
            <div className="papa">
                <div className="header">
                    <h1 className="htitle">TO-DO:</h1>
                    <input className="hinput" value={this.state.term} style={{marginLeft: '20px'}} defaltvalue="" onChange={e => {
                                    this.handleTerm(e.target.value);
                                    }} />
                    <button className="hbutton" onClick={()=> this.addTask()}>Add new task</button>
                </div>
                <div className="listholder">
                    {todocards}
                </div>
                
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {getTasks})(List)