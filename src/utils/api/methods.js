class API {
    static async getListFromServer(url) {
        const LIST = [];
        try {
            const RESPONSE = await fetch(url);
            const DATA = await RESPONSE.json();
            const COPY = await JSON.parse(JSON.stringify(DATA));
            LIST.push(...COPY);
        } catch (error) {
            const MESSAGE = error.message;
            console.error("Error: Can`t get cocktails list from server: ",MESSAGE);
        }
        return LIST;
    }
    static async getCocktail(url, id) {
        const COCKTAIL = {};
        try {
            const RESPONSE = await fetch(`${url}/${id}`);
            const DATA = await RESPONSE.json();
            const COPY = await JSON.parse(JSON.stringify(DATA));
            Object.assign(COCKTAIL, COPY);
        } catch (error) {
            const MESSAGE = error.message;
            console.error("Error: Can`t get cocktail from server: ",MESSAGE);
        }
        return COCKTAIL;
    }
}

export default API;