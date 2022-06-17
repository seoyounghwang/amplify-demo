import './App.css';
import {API, graphqlOperation } from "aws-amplify";
import {listDemos} from "./graphql/queries";
import { useEffect, useState } from 'react';
import {createDemo} from './graphql/mutations';
import {onCreateDemo} from './graphql/subscriptions';

function App() {
  const [formData, setFormData] = useState({
    author:"",
    text:"",
  });

  const onChange = (event) => {
    const {
      target: {name, value},
    } = event;
    setFormData((prev)=>({...prev, [name]: value}));
  };

  const [demos, setDemos] = useState([]);
  const fetchDemos = async ()=> {
    const request = await API.graphql(graphqlOperation(listDemos));
    setDemos(request.data.listDemos.items);
  }


  useEffect(()=>{
    fetchDemos();
  },[]);

  const onSubmit = async (event) => {
    event.preventDefault();
    await API.graphql(graphqlOperation(createDemo, {input:formData}));
    setFormData((prev)=>({...prev, text:""}));
  };

  const realtimeDemos = () => {
    API.graphql(graphqlOperation(onCreateDemo)).subscribe({
      next: ({value: { data }}) =>
      setDemos((prev)=>[{...data.onCreateDemo}, ...prev]),
    });
  };

  return (
    <main className='container'>
      <h1>Amplify Demo</h1>
      <section>
        <p>Example 1</p>
        <form onSubmit={onSubmit}>
          <input type='text' name='author'
          placeholder='input your name' required 
          onChange={onChange} value={formData.author}/>
          <textarea name='text' placeholder='post anything' required
          onChange={onChange} value={formData.value}>
          </textarea>
          <button>POST</button>
        </form>
      </section>
      <hr/>
      <section>
        <h1>Dashboard</h1>
        <div>
          {demos.map((demo)=>(
            <article key={demo.id}>
              <hgroup>
                <h4>{demo.text}</h4>
                <h5>{demo.author}</h5>
              </hgroup>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
