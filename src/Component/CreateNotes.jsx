import React, {useState} from 'react'

function CreateNotes() {
    const [input, setinput] = useState({
        title:"",
        content:""
    })
    function handleChange(event){
        const{name,value}= event.target;
        setinput(previnput=>{
            return{
                ...previnput,
                [name]:value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        console.log(input)
    }
  return (
    <div className="container">
      <h1>Create Note Page</h1>
      <form>
          <div className ="form-group">
          <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className="form-control" placeholder="note title"></input>
          </div>
          <div className ="form-group my-2">
          <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" className="form-control" placeholder="note content"></textarea>
          </div>
          <div>
          <button onClick={handleClick} className="btn btn-lg btn-info">Add Note</button>
          </div>
      </form>
    </div>
  )
}

export default CreateNotes
