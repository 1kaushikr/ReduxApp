import React, { useState } from "react";
import { PersonService } from "../src/Services/PersonSevice";
interface IState {
    person: {
        Id: string,
        Name: string,
        Country: string,
        AnnualIncome: number,
        EmailIdList: string
    };
}


const AddForm: React.FC = () => {

    const [state, setState] = useState<IState>({
        person: {
            Id: "",
            Name: "",
            Country: "",
            AnnualIncome: 0,
            EmailIdList: ""
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
        PersonService.post(state.person.Id, state.person.Name, state.person.Country, state.person.AnnualIncome, state.person.EmailIdList);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Id:
                <input value={state.person.Id} onChange={handleChange} type="text" name="Id" />
            </label>
            <br></br>
            <label>Name:
                <input value={state.person.Name} onChange={handleChange} type="text" name="Name" />
            </label>
            <br></br>
            <label>Country:
                <input value={state.person.Country} onChange={handleChange} type="text" name="Country" />
            </label>
            <br></br>
            <label>Annual Income:
                <input value={state.person.AnnualIncome} onChange={handleChange} type="number" name="AnnualIncome" />
            </label>
            <br></br>
            <label>Give Comma Separated List of Emails:
                <input value={state.person.EmailIdList} onChange={handleChange} type="text" name="EmailIdList" />
            </label>
            <br></br>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    );
}
export default AddForm