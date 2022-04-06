import React from 'react'
import { connect } from 'react-redux'
import style from './Listpdf.module.css'
interface I_ListpdfProps{
    func:Function;
}
const Listpdf: React.FC<I_ListpdfProps> = (props) => {
  return (
    <div className={style.Listpdf}>Listpdf</div>
  )
}

const mapStateToProps = (state:any,own:any) => {
    return {
        ...own,
        ...state
    }
}

const mapDispatchToProps =(dispatch)=> {
    return{
        func:()=>{dispatch({})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listpdf)