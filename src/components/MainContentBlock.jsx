import React, {useCallback, useEffect, useRef, useState, useMemo} from 'react';
import {hashTool, generatorDefaultList, listTools} from '../main_app_module';
import styles from '../styles/modules/Main.module.scss';

let styleName = (name) => styles[String(name)];
const DefaultList = new generatorDefaultList();
const hash_value = new hashTool();
const workWithList = new listTools();

function listToBlockHTML(list){
    return list.map(
                        (element) => {
                            return (
                                <div className={styleName('row-list-table__item')} key={element.number}>
                                    <span className={styleName('row-list-table__number-item')}>{element.number}</span>
                                    <span className={styleName('row-list-table__text-item')}>{element.text}</span>
                                </div>
                            );
                        }
                    )
}

function checkUsedNumberInLS(number){
    let result = workWithList.getAllListNumbers().indexOf(number);
    result = result === -1 ? true : false;
    return result;
}
function trimCharacters(input_value){
    return input_value.replace(/\D/g,'');
}
function changeBoolStatus(element_status, target) {
    element_status = target;
    return element_status;
}

const MainContentBlock = () => {

    const [elements_list, setListInLS] = useState(() => workWithList.getListElements(hash_value.takeHash));
    const [html_elements_list, setBlockListHTML] = useState(() => listToBlockHTML(elements_list));
    const [validate_status, changeValidateStatus] = useState(true);
    const [validate_number_status, changeNumberStatus] = useState(false);
    const [validate_text_status, changeTextStatus] = useState(false);

    useEffect(() => {
            setBlockListHTML(
            listToBlockHTML(elements_list))
        }, [elements_list]
    );

    useEffect(() => {
         if(validate_number_status === true && validate_text_status === true) {
            changeValidateStatus(
                    changeBoolStatus(validate_status, false)
                )
            } else {
             changeValidateStatus(
                 changeBoolStatus(validate_status, true)
             )
         }
        }, [validate_number_status,validate_text_status]
    );
    const nameForm = useRef(null)
    const form = nameForm.current;

    function checkCharInNumberInput() {
        form['number'].value =  trimCharacters(form['number'].value);
    }

    function validateInputNumber(){
        const name_i = Number(form['number'].value);
        if (
            typeof(name_i) === 'number'
            && name_i > 0
            && checkUsedNumberInLS(name_i)
        ) {
            changeNumberStatus(changeBoolStatus(validate_number_status, true));
        } else {
            changeNumberStatus(changeBoolStatus(validate_number_status, false));
        }
    }

    function validateInputText(){
        const text_i = form['text'].value;
        if (
            text_i.length > 0
        ) {
            changeTextStatus(changeBoolStatus(validate_text_status, true))
        } else {
            changeTextStatus(changeBoolStatus(validate_text_status, false));
        }
    }

    const mouseButtonDownHandler = (event) => {
        const new_item = {number: form['number'].value, text: form['text'].value};
        workWithList.addItem(new_item);
        setListInLS(workWithList.getListElements(hash_value.takeHash));
        form['number'].value = null;
        form['text'].value = null;
        changeNumberStatus(changeBoolStatus(validate_number_status, false));
        changeTextStatus(changeBoolStatus(validate_text_status, false));
        changeValidateStatus(changeBoolStatus(validate_status));
    }

    const mouseButtonListHeaderHandler = (event) => {
        if (event.button === 1) { // MMB
            alert('Список был возвращён к изначальному состоянию');
            DefaultList.start(true);
            setListInLS(workWithList.getListElements(hash_value.takeHash));
            if (form['number'].value.length > 0 || form['text'].value.length > 0) {
                form['number'].value = null;
                form['text'].value = null;
            }
            if (validate_number_status === true)  {changeNumberStatus(changeBoolStatus(validate_number_status, false));}
            if (validate_text_status === true) {changeTextStatus(changeBoolStatus(validate_text_status, false));}
            if (validate_status === true) {changeValidateStatus(changeBoolStatus(validate_status));}
        }
    }

    // const defaultList = [ {}
    //     number: 1
    // ]
    //
    // const [list, setList] = useState(default);
    //
    // const [number, setNumber] = React.useState('');
    // const onChange = (e) => setNumber(e.target.value);
    //
    //
    // const onSubmit = () => {
    //     setList(prevList => [...prevList, { number, name }])
    //     setNumber()
    //
    // }
    //
    // const onClear = () => {
    //     setList(dafaultList)
    // }
    //
    // useEffect(() => {
    //     localStorage.setItem('list', list);
    // }, [list])
    //
    // useEffect(() => {
    //     const stotagedLsit = localStorage.getItem('list');
    //
    //     if (stotagedLsit) {
    //         setList(stotagedLsit)
    //     }
    //
    // }, []);

    return (
        <main>
            <section className={styleName('left-content')}>
                <article className={styleName('left-content-container')}>
                    <hgroup>
                        <h1 className={styleName('main-header')}>Приветствую!</h1>
                        <p className={styleName('main-text')}>Давай обновим список и начнём обучение</p>
                    </hgroup>
                    <section className={styleName('row-list-table')}>
                        <div onMouseDown={mouseButtonListHeaderHandler} className={styleName('row-list-table__name-header')}>
                            <span>Список:</span>
                        </div>
                        <div className={styleName('row-list-table__list-container')}>
                            {html_elements_list}
                        </div>
                    </section>
                </article>
            </section>
            <section className={styleName('right-content')}>
                <form action="" ref={nameForm} className={styleName('row-adding-form')}>
                    <div>
                        <label>Номер записи
                            <input
                                id={'row-adding-form__number-input'}
                                className={styleName('row-adding-form__input')}
                                onChange={validateInputNumber}
                                onKeyUp={checkCharInNumberInput}
                                type="number"
                                name={'number'}
                                value={}
                                onChange={)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Название записи
                            <input id={'row-adding-form__text-input'} className={styleName('row-adding-form__input')} onChange={validateInputText} name={'text'} required={true} type="text"/>
                        </label>
                    </div>
                    <button type={"button"} onMouseDown={mouseButtonDownHandler} disabled={validate_status} className={styleName('row-adding-form__add-button')}>Добавить в список</button>
                </form>
            </section>
        </main>
    );
};

export default MainContentBlock;