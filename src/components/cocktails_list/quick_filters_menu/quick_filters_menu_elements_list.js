const filter_elements_list = [];
const temp_list = [
    {
        name: "Новинки"
    },
    {
        name: "Сладкие"
    },
    {
        name: "Хит"
    },
    {
        name: "Крепкие"
    },
    {
        name: "Лонг"
    },
    {
        name: "Шот"
    }
]

for (let value in temp_list) {
    filter_elements_list.push(temp_list[value]);
}

export default filter_elements_list;

