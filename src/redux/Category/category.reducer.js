import CategoryActionTypes from "./category.types";

const INITIAL_STATE = {
    hidden:true,
    categoryMenu:[
        {
            id:1,
            name:'Men',
            image:'./Images/Men1.png'
        },
        {
            id:2,
            name:'Women',
            image:'./Images/women.png'

        },
        {
            id:3,
            name:'Kids',
            image:'./Images/kids.png'

        },
        {
            id:4,
            name:'Electronics',
            image:'./Images/kids.png'

        },
        {
            id:5,
            name:'Furniture',
            image:'./Images/kids.png'

        }
    ]
};

const CategoryReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case CategoryActionTypes.TOGGLE_CATEGORY_MENU_HIDDEN: 
            return  {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
};

export default CategoryReducer;