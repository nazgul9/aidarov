import React from 'react';
import './xirurg.scss'
import Accordions from '../../components/accrdion/Accordions';

function Price(props) {
    const data = [
        {
            title: "СТАНДАРТНЫЕ КОНСУЛЬТАЦИИ",
            text: "Прием (осмотр, консультация) врача-хирурга первичный - 1 000 сом ",
            text1: " Прием (осмотр, консультация) врача-хирурга повторный - 800 сом",
        },
        {
            title: "КОНСУЛЬТАЦИИ ЭКСПЕРТОВ",
            text: "Прием (осмотр, консультация) врача-хирурга, д.м.н., ..... Айдарова  первичный - 1 000 сом",
            price: "Прием (осмотр, консультация) врача-хирурга, д.м.н., Гибадулина Н.В. повторный - 800 сом ",
            price1: "Прием (осмотр, консультация) врача-челюстно-лицевого-хирурга первичный - 1 300 сом",
            price2: "Прием (осмотр, консультация) врача-челюстно-лицевого-хирурга повторный - 900 сом",
        },
        // {
        //     title: "Общие услуги",
        //     ptitile: "Перевязка",
        //     price: "Пункция плевральной полости под контролем УЗИ — 1 000 сом",
        //     price1: "Пункция печени, поджелудочной железы под контролем УЗИ — 1 000 сом",
        //     price2: "Первичная хирургическая обработка раны — 500 сом",
        //     price3: "Первичная хирургическая обработка раны с наложением первичных швов — 1 000 сом.",
        //     price4: "Перевязка хирургическая малая— 1 000 сом.",
        //     price5: "Перевязка хирургическая большая - 1 000 сом",
        //     price6:"Перевязка, удаление послеоперационной жидкости - 1 000 сом",
        //     price7:"Снятие послеоперационных швов (лигатур) - 1 000 сом",
        //     price8:"Удаление инородного тела с рассечением мягких тканей - 1 000 сом"
        // },
        // {
        //     title: "ОПЕРАТИВНЫЕ ВМЕШАТЕЛЬСТВА",
        //     ptitile: "Исправить прикус",
        //     price: "элайнеров (1-я степень сложности) — 240 000 сом.",
        //     price1: " элайнеров (2-я степень сложности) — 360 000 сом.",
        //     price2: "элайнеров (3-я степень сложности) — 500 000 сом.",
        // },
     
       
    ]

    return (
        <div className='container mt-5'>
            <h1 className='pt-3 text-center'>
                <span>ЦЕНЫ НА УСЛУГИ ХИРУРГИИ</span>
                <br />
               
            </h1>
            <Accordions name={data} />
            <p className='text_nav'>Внимание! Цены на сайте могут отличаться.
Пожалуйста, уточняйте актуальную стоимость у администраторов по телефону.</p>
        </div>
    );
}

export default Price;