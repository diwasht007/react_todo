import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import { tabs } from './Data/tabs';

function App() {
  let [todoList,setTodoList] = useState([])
  let saveToDOList = (event)=>{
    let todoName = event.target.todoName.value;
    if(!todoList.includes(todoName)){
      let finalTodoList = [...todoList,todoName]
      setTodoList(finalTodoList)
    }
    else{
      alert("ToDo Name Already Exist")
    }
    event.preventDefault();

  }

  let list = todoList.map((value,index)=>{
    return(
      <ToDOListItems value={value} key={index} indexNum={index} 
      todoList={todoList}
      setTodoList={setTodoList}
      
      
      />
    )
  })
  let [activeTab, setActiveTab] = useState(0)
  let [activeContent, SetActiveContent] = useState(tabs[0])

  let changeData = (index)=>{
    setActiveTab(index)
    SetActiveContent(tabs[index])
  }
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDOList}>
        <input type='text' name="todoName"/><button type='submit'>Save</button>
      </form>
      <div className='outerDiv'>
        <ul>
         {list}
        </ul>
      </div>

      <div className='tabDiv'>
        <h1>
          Our Vission Mission and Values
        </h1>
        <ul>
          {tabs.map((value,index)=>{

            return(
              <li>
                <button onClick={()=>{changeData(index)}} className={activeTab == index ? 'activeButton' : ''}>{value.title}</button>
              </li>

            )
          })}
        </ul>
        {activeContent!=undefined ? <p>{activeContent.description}</p> :''}
      </div>
      

    </div>
  );
}

export default App;

function ToDOListItems({value,indexNum,todoList,setTodoList}){
  let [status, setStatus] = useState(false)
  let deleteRow = ()=>{
    let finalData = todoList.filter((v,i)=>i!=indexNum)
    setTodoList(finalData)
  }
  let checkStatus = ()=>{
    setStatus(!status)

  }
  return(
    <div>
      <div>
        <li className={(status)? 'completeTodo':''} onClick={checkStatus}>{indexNum+1} {value}<span onClick={deleteRow}>&times;</span></li>
      </div>
    </div>
    
  )
}