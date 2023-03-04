import axios from "axios"

export class PersonService {
    private static URL: string = '/api'
    public static getAllPersons() {
        let PersonURL: string = this.URL + '/person'
        return axios.get(PersonURL);
    }
    public static get(id: string) {
        let PersonURL: string = this.URL + '/person/' + id;
        return axios.get(PersonURL);
    }
    public static post(id: string, name: string, country: string, annualIncome: number, emailList: string) {
        var payload = {
            Id: id,
            name: name,
            country: country,
            annualIncome: annualIncome,
            emailList: emailList.split(",")
        };
        let PersonURL: string = this.URL + '/person';
        console.log(annualIncome);
        axios.post(PersonURL, payload
        )
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    public static delete(id: string) {
        let PersonURL: string = this.URL + '/person/' + id;
        console.log(id);
        axios.delete(PersonURL).then().catch(error => {
            console.error(error);
        });
    }
    public static put(id: string, name: string, country: string, annualIncome: number, emailList: string) {
        let PersonURL: string = this.URL + '/person/' + id;
        var payload = {
            Id: id,
            name: name,
            country: country,
            annualIncome: annualIncome,
            emailList: emailList.split(",")
        };
        axios.put(PersonURL, payload
        )
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    public static convert(list: string[]) {
        if (list == null) {
            return "";
        }
        var temp: string = "";
        for (var i = 0; i < list.length; i++) {
            temp = temp + "," + list[i];
        }
        return temp;
    }
}