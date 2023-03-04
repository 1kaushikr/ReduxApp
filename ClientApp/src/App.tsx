import React, { useState } from 'react'
import './App.css'
import AddForm from './AddForm'
import DeleteForm from './DeleteForm'
import AllEntries from './AllEntries'
import FindForm from './FindForm'
import UpdateForm from './UpdateForm'
interface IState {
    is: boolean;
}
const App: React.FC = () => {
    const [add, setAdd] = useState<IState>({
        is: false,
    });
    const [find, setFind] = useState<IState>({
        is: false,
    });
    const [del, setDel] = useState<IState>({
        is: false,
    });
    const [update, setUpdate] = useState<IState>({
        is: false,
    });
    const [getAll, setGetAll] = useState<IState>({
        is: false,
    });
    const handleAdd = (): void => {
        setAdd({ is: true });
        setFind({ is: false });
        setDel({ is: false });
        setUpdate({ is: false });
        setGetAll({ is: false });
    }
    const handleFind = (): void => {
        setAdd({ is: false });
        setFind({ is: true });
        setDel({ is: false });
        setUpdate({ is: false });
        setGetAll({ is: false });
    }
    const handleDel = (): void => {
        setAdd({ is: false });
        setFind({ is: false });
        setDel({ is: true });
        setUpdate({ is: false });
        setGetAll({ is: false });
    }
    const handleUpdate = (): void => {
        setAdd({ is: false });
        setFind({ is: false });
        setDel({ is: false });
        setUpdate({ is: true });
        setGetAll({ is: false });
    }
    const handlegetAll = (): void => {
        setAdd({ is: false });
        setFind({ is: false });
        setDel({ is: false });
        setUpdate({ is: false });
        setGetAll({ is: true });
    }
    return (
        <>
            {
                add.is ? <AddForm /> :
                    find.is ? <FindForm /> :
                        del.is ? <DeleteForm /> :
                            update.is ? <UpdateForm /> :
                                getAll.is ? <AllEntries /> :
                                    <div>
                                        <button onClick={handleAdd}>Add Person</button>
                                        <button onClick={handleFind}>Find Person</button>
                                        <button onClick={handleDel}>Delete Person</button>
                                        <button onClick={handleUpdate}>Update Person</button>
                                        <button onClick={handlegetAll}>Get Persons</button>
                                    </div>
            }
        </>
    )
}

export default App