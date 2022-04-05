import {createStore} from 'redux'
const initialRessourcesState={
    images:[],
    memes:[],
}
export const RessourcesActions=Object.freeze({
    ADD_INIT_IMAGES:'ADD_INIT_IMAGES',
    ADD_INIT_MEMES:'ADD_INIT_MEMES',
    ADD_MEME:'ADD_MEME'
});
function ressourcesReducer(state=initialRessourcesState,action){
    console.log(action)
    switch(action.type){
        case RessourcesActions.ADD_INIT_IMAGES:return {...state,images:action.values}
        case RessourcesActions.ADD_INIT_MEMES:return {...state,memes:action.values}
        case RessourcesActions.ADD_MEME:return {...state,memes:[...state.memes,action.value]}
        default: return state;
    }
}
export const store=createStore(ressourcesReducer);
store.subscribe(()=>{
    console.log(store.getState())
});
// store.dispatch({type:RessourcesActions.ADD_INIT_IMAGES,values:[{id:0},{id:1}]})
// store.dispatch({type:RessourcesActions.ADD_INIT_MEMES,values:[{id:10},{id:21}]})
// store.dispatch({type:RessourcesActions.ADD_MEME,value:{id:123}});
