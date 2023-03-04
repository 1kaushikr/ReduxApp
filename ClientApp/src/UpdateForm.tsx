import React, { useState } from "react";
import Update from "./Update";
interface IState {
    person: {
        Id: string,
    };
}
interface clicked {
    click: boolean,
}


const UpdateForm: React.FC = () => {

    const [state, setState] = useState<IState>({
        person: {
            Id: "",
        }
    })
    const [click, setClick] = useState<clicked>({
        click: false
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setState({
            person:
            {
                ...state.person,
                [event.target.name]: event.target.value
            }
        })
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setClick({ click: true });
    }
    return (
        <>
            {
                click.click ? <Update {...{ id: state.person.Id }} /> :
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label>Id:
                                <input value={state.person.Id} onChange={handleChange} type="text" name="Id" />
                            </label>
                            <button type="submit" className="btn btn-primary">Click It!</button>
                        </form>
                    </div>
            }
        </>
    )
}
export default UpdateForm