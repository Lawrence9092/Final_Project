export default class APIService {

    static async getExchange(from, to) {

        try{
            const response = await fetch(
                https://api.frankfurter.app/latest?from=${from}&to=${to}
            );

            const data = await response.json();
            return data.rates[to];
        } catch(error){
            console.error("API Error", error);
        }
    }
}