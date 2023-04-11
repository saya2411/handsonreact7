import React from 'react'
import { useSelector } from 'react-redux'
import TableRow from '../Component/TableRow'
import { useNavigate } from 'react-router-dom';
const Students = () => {
  const navigate=useNavigate();
 const data= useSelector((state)=>state.student);
//  console.log("here data",data)
const AddNewStudent=()=>{
  navigate('/AddnewStudent')

}


  return (
    <>
    <header className='header'>

      <button className='butn' onClick={AddNewStudent}>Add New Student</button>
    </header>
    <table style={{margin:'auto', backgroundColor:'white',width:'50%', fontSize:'23px',textAlign:'center'}}>
      <thead>
        <tr>
          <td>Name</td>
          <td className='algn'>Age</td>
          <td className='algn'>Course</td>
          <td className='algn'>Batch</td>
          <td className='algn'>Change</td>
        </tr>
      </thead>
      <tbody>
        {
          data.map((student)=>{
            return(
              <tr key={student.id}>
                <TableRow student={student}/>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </>
  )
}

export default Students
