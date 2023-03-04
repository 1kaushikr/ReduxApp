import React, { useEffect, useState } from "react";
import { IPersons } from "../src/Models/IPersons";
import { PersonService } from "../src/Services/PersonSevice";
interface IState {
    persons: IPersons,
    error: string
}

interface IPROPS {
    id: string,
}

const Find: React.FC<IPROPS> = ({ id }) => {
    const [state, setState] = useState<IState>({
        persons: {} as IPersons,
        error: ""
    })
    useEffect(() => {
        if (id) {
            setState({ ...state })
            PersonService.get(id)
                .then(res => setState({
                    ...state, persons: res.data
                }))
                .catch(err => ({
                    ...state, error: err.message
                }))
        }
        console.log(state);
    }, [])
    return (
        <>
            <h1>Name: {state.persons.name}</h1>
            <br></br>
            <h1>Country: {state.persons.country}</h1>
            <br></br>
            <h1>Income: {state.persons.annualIncome}</h1>
            <br></br>
            <h1>EmailList: {PersonService.convert(state.persons.emailList)}</h1>
        </>
    );
}
export default Find