import react, {useState} from 'react'

function Todo(){
  const [itemToBeAdded, setItemToBeAdded] = useState('')
  const [todoItemsList, setTodoItemsList] = useState([])
  function addNewTodo(){
    setTodoItemsList([...todoItemsList, itemToBeAdded])
    setItemToBeAdded('')
  }
  function deleteTodo(todoIndex){
    console.log("clicked", todoIndex)
    var filteredTodo = todoItemsList.filter(function(value, index, arr){ 
      return index !== todoIndex;
  });
  setTodoItemsList(filteredTodo)
  }
  return(
    <>
    <h1 className='App-header'>Todo</h1>
    <div className='container'>
    <input className='todo-input' placeholder='add your todos' type="text" value={itemToBeAdded} onChange={(e)=> setItemToBeAdded(e.target.value)} />
    <button className='todo-btn' onClick={()=> addNewTodo()}>Add Todo</button>
    {todoItemsList.map((todo,index)=><div className='todo-items'><p key={index}>{todo}</p> <button className='delete-button' onClick={()=>deleteTodo(index)}>X</button></div>)}
    </div>
    </>
  )
}

export default Todo