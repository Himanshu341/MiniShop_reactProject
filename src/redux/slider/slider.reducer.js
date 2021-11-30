


const INITIAL_STATE = {
    slider_Collection:[
        {
            id:1,
            imagUrl:'https://source.unsplash.com/random'
        },
        {
            id:2,
            imagUrl:'https://source.unsplash.com/random'
        },
        {
            id:3,
            imagUrl:'https://source.unsplash.com/random'
        }
    ]
};

const SliderReducer = (state = INITIAL_STATE ,action) =>{
    switch(action.type){
        default:
            return state;
    }
};

export default SliderReducer;