import TodoActionTypes from "./todolist.types"

const INITIAL_STATE = {
    listItems : []
}

const TodolistReducer = (state=INITIAL_STATE , action) => {
    switch(action.type){
        case TodoActionTypes.ADD_LIST_ITEM:

            const{ id , items} = action.payload;
            return{
                ...state,
                listItems:[
                    ...state.listItems,
                    {
                        id:id,
                        items:items
                    }
                ]
            }

        case TodoActionTypes.DELETE_LIST_ITEM:

        const newlist = state.listItems.filter((elem) => elem.id !== action.id)
            return{
                ...state,
                listItems: newlist
            }

        case TodoActionTypes.REMOVE_LIST:
            return{
                ...state,
                listItems: []
            }
            
        default:
            return{
                ...state
            }
    }
}

export default TodolistReducer;