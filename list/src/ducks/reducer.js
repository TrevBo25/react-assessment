import axios from 'axios'

const initialState = {
    todos: []
}

const GET_TASKS = "GET_TASKS";

export function getTasks(){
    const request = axios.get('https://practiceapi.devmountain.com/api/tasks');
    console.log(request)
    return {
        type: GET_TASKS,
        payload: request.data
    }
    
};

export default function reducer(state = initialState, action){
    switch (action.type) {
        case GET_TASKS:
            return Object.assign({}, state, {...state, todos: action.payload})
        default:
            return state;
    }
}



