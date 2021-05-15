import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function SearchForm(props) {
    const search = useSelector(state => state.search)
    const dispatch = useDispatch()

    return (
        <>
        <div className='searchComponent'>
          <h3>Поиск студента</h3>
            <div className='searchForm'>
                <input type="text"/>
                <input type="text"/>
                <select name="group" id="">
                    <option value=""></option>
                    <option value="Ежи">Ежи</option>
                    <option value="Пчелы">Пчелы</option>
                    <option value="Бобры">Бобры</option>
                    <option value="Медведи">Медведи</option>
                    <option value="Барсы">Барсы</option>
                    <option value="Песцы">Песцы</option>
                    <option value="Тигры">Тигры</option>
                    <option value="Киты">Киты</option>
                    <option value="Сойки">Сойки</option>
                    <option value="Рыси">Рыси</option>
                    <option value="Еноты">Еноты</option>
                    <option value="Волки">Волки</option>
                    <option value="Лисы">Лисы</option>
                    <option value="Орлы">Орлы</option>
                    <option value="Совы">Совы</option>
                </select>
                <select name="year" id="">
                    <option value=""></option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
                <select name="city" id="">
                    <option value=""></option>
                    <option value="Москва">Москва</option>
                    <option value="Санкт-Петербург">Санкт-Петербург</option>
                </select>
            </div>
        </div>
        </>
    );
}

export default SearchForm;
