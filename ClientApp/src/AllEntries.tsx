import React, { useEffect, useState } from "react";
import { IPersons } from "../src/Models/IPersons";
import { PersonService } from "../src/Services/PersonSevice";
interface IState
{
    persons:IPersons[],
    error:string
}
const AllEntries:React.FC = () =>
{
    const [state, setState] = useState<IState>({
    persons: [] as IPersons[],
        error: ""
    })
    useEffect(() => {
    setState({ ...state})
        PersonService.getAllPersons()
        .then(res => setState({
        ...state, persons: res.data
        }))
        .catch (err=>({
        ...state,error: err.message
        }))
    },[])
    const { persons,error}= state
    return (
        <>
        < h1 > List </ h1 >
        { error && (< p >{ error}</ p >)}
        < table className = "table table-striped" >
            < thead >
                < tr >
                    < td > Name </ td >
                    < td > Country </ td >
                    < td > Annual Income </ td >
                    < td > EmailId List </ td >
                </ tr >
            </ thead >
            < tbody >
                {
        persons.length > 0 &&
        persons.map(person => (

        < tr key = { person.id}>

            < td >{ person.name}</ td >

            < td >{ person.country}</ td >

            < td >{ person.annualIncome}</ td >

            < td >{ PersonService.convert(person.emailList)}</ td >

        </ tr >
                ))
                }
            </ tbody >
        </ table >
        </>
    );
}
export default AllEntries