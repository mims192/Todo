import React ,{useRef} from 'react';
import "./style.css";

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>   //type of settodo,hoveer in app.tsx and copy from here ,, also settodo is a function
    handleAdd: (e:React.FormEvent) =>void;  //bcz this function returns nothing
}



const InputFeild =({todo,setTodo,handleAdd}:Props)=> {   //also can be written like this const InputFeild:React.FC<Props> =({todo,setTodo})=>{}
  const inputRef = useRef<HTMLInputElement>(null);   //initial value null

  return (
   <form className='input' onSubmit={(e)=>
    {handleAdd(e)
    inputRef.current?.blur();   //useref is same as get doucment by id  ..here used to get rid of dark bg

   }}>
    <input type='input'
     ref={inputRef}
     value={todo}
     onChange={(e)=>setTodo(e.target.value)}
    
    placeholder="enter task" className='input__box'/>
    <button className='input__submit' type='submit' >GO</button>
   </form>
  )
}

export default InputFeild
