import { useState } from 'react'
import Button from './Button';

function Todos() {

    const [newTask, setNewTask] = useState('');
    const [searchPhraze, setSearchPhraze] = useState('');
    const [taskList, setTaskList] = useState(['jeździć rowerem 1h', 'iść na spacer', 'posprzątać', 'poćwiczyć Vojtę 2 razy dziennie']);
    const [filteredTaskList, setFilteredTaskList] = useState(taskList);
    
    function addNewTask() {
        setTaskList([newTask, ...taskList]);
        setNewTask('');
    }

    function searchTask(newSearchPhraze){
        setSearchPhraze(newSearchPhraze);
        let filteredListNew = taskList.filter(task => task.toLocaleLowerCase().includes(newSearchPhraze.toLocaleLowerCase()));
        setFilteredTaskList(filteredListNew);
    }

    return (
        <section>
            <h2>To do: {taskList.length}</h2>
            <input value={newTask} onChange={e => setNewTask(e.target.value)} />
            <Button text="+" onClick={addNewTask}></Button>
            <ul>
                {taskList.map((task) => <li key={task}>{task}</li>)}
            </ul>
            <hr/>
            <input value={searchPhraze} onChange={e => searchTask(e.target.value)}/>
            <label>{searchPhraze}</label>

            <ul>
                {filteredTaskList.map((task) => <li key={task}>{task}</li>)}
            </ul>
        </section>
    )
}

export default Todos