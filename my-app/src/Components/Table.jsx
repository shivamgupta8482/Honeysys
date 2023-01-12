import React from 'react'

const Table = ({data}) => {

let color;
  return (
   <table style={{width:"100%"}}>
    {
data.map(elem=>{
  if(elem.brand=="nike") color="red";
  else if(elem.brand=="ucb") color="blue";
  else color="teal";

    return <tr style={{backgroundColor:color}}>
    <th>{elem.title}</th>
    <th>{elem.brand}</th>
    <th>{elem.price}</th>
  </tr>
})
    }

   </table>
  )
}

export default Table