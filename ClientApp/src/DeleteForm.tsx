import React, { useState } from "react";
import { PersonService } from "../src/Services/PersonSevice";
interface IState {
    person: {
        Id: string,
    };
}


const DeleteForm: React.FC = () => {

    const [state, setState] = useState<IState>({
        person: {
            Id: "",
        }
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
        PersonService.delete(state.person.Id);
    }
    return (
        <>
            {
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
export default DeleteForm