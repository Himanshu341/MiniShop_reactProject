import TodoActionTypes from "./todolist.types";

export const addListItem = (items) => ({
    type: TodoActionTypes.ADD_LIST_ITEM,
    payload:{
        id: new Date().getTime().toString(),
        items:items
    }
})

export const deleteListItem = (id) => ({
    type: TodoActionTypes.DELETE_LIST_ITEM,
    id:id
})

export const removeList = () => ({
    type: TodoActionTypes.REMOVE_LIST,
})

