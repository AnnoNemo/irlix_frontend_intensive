import React from "react";

const cocktails_list = [];
const temp_list = [
    {
        id: 0,
        name: "BlacKBerrY",
        alcohol: 30,
        type: "алкоГОль",
        short_description: "ФруКТОВый напиток",
        photo: require('@images/cocktail_1_card.png')
    },{
        id: 1,
        name: "Мохито",
        alcohol: 40,
        type: "алкоГОль",
        short_description: "Освежающий напиток",
        photo: require('@images/cocktail_2_card.png')
    }
]

for (let repeats = 0; repeats < 7; repeats++) {
    for (let value in temp_list) {
        cocktails_list.push(temp_list[value]);
    }
}
cocktails_list.push(temp_list[0]);

export default cocktails_list;