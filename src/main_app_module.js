class hashTool {
    constructor(hash_length = 8){
        this.hash_length = hash_length;
        this.local_storage_hash_key_name = 'irlix_superpuper_hash_id';
        this.hash_value = '';
    }

    get takeHash(){
        let local_stored_hash = this.checkSetHash;
        if (local_stored_hash){
            return local_stored_hash;
        } else {
            return this.#makeNewHash(this.hash_length);
        }
    }

    get checkSetHash(){
        return window.localStorage.getItem(this.local_storage_hash_key_name);
    }

    set newHash(hash_length){
        this.#makeNewHash(hash_length);
    }

    #makeNewHash(hash_length = this.hash_length){
        window.localStorage.clear();
        this.hash_value = this.#hashGenerator(hash_length);
        window.localStorage.setItem(this.local_storage_hash_key_name, this.hash_value);
        return this.hash_value;
    }

    #hashGenerator(hash_length){
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( var i = 0; i < hash_length; i++ ){
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}

class generatorDefaultList{
    constructor(hash_obj= null){
        this.default_elements_list =  [
            ['1', 'Тестовая запись 1'],
            ['9','Тестовая запись 5'],
            ['11','Тестовая запись 6']
        ];
        this.hash = new hashTool();
        this.hash_value = this.hash.takeHash;
        this.listTools = new listTools;
        this.start();
    }

    set setCustomDefaultArray(new_array){
        this.default_elements_list = new_array;
        this.start();
    }

    start(force = false){
        let statusSetHash = this.hash_value;
        let checkStorage = window.localStorage.getItem(this.hash_value)
        if (!statusSetHash || !checkStorage) {
            this.#createDefaultList(this.hash_value, this.default_elements_list);
        } else if (force === true) {
            this.#createDefaultList(this.hash_value, this.default_elements_list);
        }
    }

    #createDefaultList(hash_value, elements_array){
        let new_object = {};

        new_object['hash'] = hash_value;
        new_object['elements_list'] = this.listTools.generate(elements_array);
        this.listTools.sort(new_object.elements_list);
        window.localStorage.setItem(new_object.hash, JSON.stringify(new_object.elements_list));
        return new_object;
    }
}

class listTools{
    generate(list){
        let result_list = [];
        list.forEach(
            list_item =>
                result_list.push(
                    {
                        number: list_item[0],
                        text: list_item[1]
                    }
                )
        );
        return result_list;
    }

    sort(objects_array){
        objects_array.sort((x,y) => {
            return Number(x.number) - Number(y.number);
        });
    }

    getListElements(hash_value){
        return JSON.parse(window.localStorage.getItem(hash_value));
    }

    addItem(new_row){
        let hash_value = window.localStorage.getItem('irlix_superpuper_hash_id');
        let new_array = this.getListElements(hash_value);
        new_array.push(new_row);
        this.sort(new_array);
        window.localStorage.setItem(hash_value, JSON.stringify(new_array));
        return new_array;
    }

    getAllListNumbers(){
        let hash_value = window.localStorage.getItem('irlix_superpuper_hash_id');
        return this.getListElements(hash_value).map(
            (item) =>
                Number(item.number)
        );
    }
}

export {hashTool, generatorDefaultList, listTools}