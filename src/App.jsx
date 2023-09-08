import { useState } from 'react'
import styled from 'styled-components'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [inpS,setInpS]= useState("");
  const [editId,setEditId]=useState(0);

  function addData(){
    data.push(inpS);
    setInpS("");
  }
  function update(){
    let kk = [...data]
    kk.splice(editId,1,inpS)
    setData([...kk])
     setEditId(0)
     setInpS("")

  }

  return (
    <MainDiv className=''>
      <SecDiv>
        <h1>Todo List</h1>
        <Input 
        value={inpS} 
        onChange={(e)=>{
          setInpS(e.target.value)
          }} />
      <MostInner>
      <Btn onClick={addData}>Add Item</Btn>
      <Btn onClick={update}>Update</Btn>
      </MostInner>
      <br />
      <ul>
        {
          data.map((val,ind)=>{
            return(
              <MostInner key={val}>
                <li>{val}</li>
              <Btn onClick={()=>{
                let kk= [...data]
                kk.splice(ind,1)
                setData([...kk])
              }}>Delete</Btn>
              <Btn onClick={()=>{
                setEditId(ind)
                setInpS(data[ind])
              }}>Update</Btn>
              </MostInner>
            );
          })
        }
      </ul>
      <Btn onClick={()=>{
        setData([])
      }}>Delete All</Btn>
      </SecDiv>

    </MainDiv>
  )
}

export default App

const MainDiv = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const SecDiv= styled.div`
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    align-items: center;
    min-width: 60vw;
    background-color: lightblue;
`;

const MostInner=styled.div`
   display: flex;
   gap: 10px;
   justify-content: space-between;
   min-width: 27vw;
   align-items: center;

`;

const Input = styled.input`
   padding: 9px 15px;
   border: none;
   background-color: white;
   &:focus{
    border: none;
   }
`;
const Btn = styled.button`
  padding: 8px 15px;
  border: none;
  font-size: 18px;
  background-color: skyblue;
`;