import {BiTask} from 'react-icons/bi';

const style={
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "nowrap",
    width:"100%",
    listStyle:"none",
    fontSize: "3rem",
    color: "lightgray"
}

const Li = (props)=>{
    return <li style={{cursor:"pointer"}}>{props.children}</li>
}
export default (props)=>{
    return (
        <nav style={style}>
        <ul style={{...style,listStyle:"none",justifyContent:"space-around",borderTop: "1px solid darkgray",padding: "20px 0 10px"}}>
          <Li>
            <BiTask/>
          </Li>
          <Li>
            <BiTask/>
          </Li>
          <Li>
            <BiTask/>
          </Li>
          <Li>
            <BiTask/>
          </Li>
        </ul>
      </nav>
    )
};