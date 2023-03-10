import React, { useEffect, useState } from "react";
import { IPersons } from "../src/Models/IPersons";
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
interface IState2 {
    persons: IPersons
}

interface IPROPS {
    id: string,
}

const Update: React.FC<IPROPS> = ({ id }) => {
    const [state2, setState2] = useState<IState2>({
        persons: {} as IPersons,
    })
    useEffect(() => {
        if (id) {
            setState2({ ...state2 })
            PersonService.get(id)
                .then(res => setState2({
                    ...state2, persons: res.data
                }))
        }
        console.log(state2);
    }, [])

    const [state, setState] = useState<IState>({
        person: {
            Id: state2.persons.id,
            Name: state2.persons.name,
            Country: state2.persons.country,
            AnnualIncome: state2.persons.annualIncome,
            EmailIdList: PersonService.convert(state2.persons.emailList)
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
        PersonService.put(id, state.person.Name, state.person.Country, state.person.AnnualIncome, state.person.EmailIdList);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
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
        </>
    );
}
export default Update