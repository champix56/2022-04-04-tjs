import {createStore} from 'redux'
import { REST_SRV_BASE_URL } from '../config/config';
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
        case 'ADD_INIT_ALL':return {...state,memes:action.memes,images:action.images}
        case 'INIT_LOADING':
            const prm = fetch(`${REST_SRV_BASE_URL}/memes`).then((f) => f.json());
            const pri = fetch(`${REST_SRV_BASE_URL}/images`).then((f) => f.json());
            Promise.all([prm, pri]).then((aResp) => {
              store.dispatch({type:'ADD_INIT_ALL',memes:aResp[0],images:aResp[1]});
            });
            return state;
        default: return state;
    }
}
export const store=createStore(ressourcesReducer);
store.subscribe(()=>{
    console.log(store.getState())
});
store.dispatch({type:'INIT_LOADING'});
// store.dispatch({type:RessourcesActions.ADD_INIT_IMAGES,values:[{id:0},{id:1}]})
// store.dispatch({type:RessourcesActions.ADD_INIT_MEMES,values:[{id:10},{id:21}]})
// store.dispatch({type:RessourcesActions.ADD_MEME,value:{id:123}});
