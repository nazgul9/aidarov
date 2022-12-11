import React, { useEffect } from 'react';
import { Card, Carousel, Col, Row, Table } from 'react-bootstrap';
import RunText from '../../../components/runText/RunText';
import AOS from 'aos'
import AutoVideo from '../../../components/Vidoe/AutoVideo';
import Accordions from '../../../components/accrdion/Accordions';
import imgg from '../../../img.aidarov/imgg.jpeg'
import './Appbar.scss'
import Button1 from '../../../Button1';
import DentalNavbar from '../dentalAppbar/DentalNavbar'


function Otbali({ setShow }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const patients = [
        {
            img: "https://thumb.tildacdn.com/tild3534-3033-4632-b064-356232633331/-/cover/720x1100/center/center/-/format/webp/G_98zN2SdVE.jpg",
            title: "Гусейн Гасанов",
            known_for: "Популярный блогер",
        },
        {
            img: "https://thumb.tildacdn.com/tild3732-3830-4331-a262-666239323531/-/cover/720x1100/center/center/-/format/webp/sQWk_o_d9Lg.jpg",
            title: "Walter",
            known_for: "Совладелец Black Star ",
        },
        {
            img: "https://thumb.tildacdn.com/tild3761-3534-4239-b039-323636666563/-/cover/720x1100/center/center/-/format/webp/nhlrP-q6gb4.jpg",
            title: "Клаво Кока",
            known_for: "Black Star",
        }
    ]
    const datas = [
        {
            title: "Кабинетное отбеливание",
            text: `            Самая современная и популярная система отбеливания от Philips.
            Amazing White
            Безопасное отбеливание зубов до 7−9 тонов за одно посещение.
            Внутрикоронковое отбеливание
            Быстро и просто восстанавливает эстетику изменивших цвет зубов, из которых ранее удалили нерв.`
        },
        {
            title: "Домашнее отбеливание",
            text: `Opalescence
            Система отбеливания на основе перекиси карбамида. Состав щадяще воздействует на эмаль зубов, питая и отбеливая их.`
        },
    ]
    const text = [
        {
            texts: 'ТЕСТ ДРАЙВ УЛЫБКИ',
            t: '/'
        }, {
            texts: 'ИСПРАВЛЕНИЕ ПРИКУСА',
            t: '/'
        }, {
            texts: 'ЛЕЧЕНИЕ ВО СНЕ',
            t: '/'
        }, {
            texts: ' БЕЗ БОЛИ',
            t: '/'
        }, {
            texts: 'ТЕСТ ДРАЙВ УЛЫБКИ',
            t: '/'
        }, {
            texts: 'ИСПРАВЛЕНИЕ ПРИКУСА',
            t: '/'
        }, {
            texts: 'ЛЕЧЕНИЕ ВО СНЕ',
            t: '/'
        }, {
            texts: ' БЕЗ БОЛИ',
            t: '/'
        },
    ]
    return (
        <>
            <div className="container">
                <DentalNavbar />
                <Row>
                    <Col xs={12} md={6}>
                        <h1 className='' >Отбеливания</h1>
                        <h4 className='' style={{ color: "#d3bb7e", }}>Белоснежная улыбка без вреда для зубов!
                        </h4>
                        <h3 className='mt-3' style={{ color: "white" }}>Метод 3-х этапного отбаливание:</h3>
                        <h4 className=' mt-3' style={{ color: "white" }}>1.Ультра звуковая 500с</h4>
                        <h4 className=' mt-3' style={{ color: "white" }}>2.Полировка с пастой 500с</h4>
                        <h4 className=' mt-3' style={{ color: "white" }}>3.Air Flow   500с</h4>

                        <div className="text-center"><div className="pb-3 pt-3 mt-3 div__a">
                            <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                        </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} >
                        <img style={{ borderRadius: "50%", marginTop: "20px", width: "330px", height: "330px" }} src='https://gornovosti.ru/media/cache/85/ed/85edcea6953e19adad25464a429cb9e4.jpg' />
                    </Col>
                </Row>
            </div>
            <div className="mt-5">
                <RunText name={text} />
            </div>
            <div className="container">
                <h3 style={{ color: "white", marginTop: "20px" }}>
                    Какую систему отбеливания выбрать?
                </h3>
                <Accordions name={datas} />
                <h3 style={{ color: "#d3bb7e", marginBottom: "20px" }}>
                    5 шагов до улыбки мечты
                </h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ color: 'white', textAlign: "center" }}>01</th>
                            <th style={{ color: 'white', textAlign: "center" }}>В запись на консультацию.</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th style={{ color: 'white', textAlign: "center" }}>02</th>
                            <th style={{ color: 'white', textAlign: "center" }}>Первичная консультация у врача-специалиста для оценки состояния зубов и дёсен.</th>
                        </tr>
                        <tr>
                            <th style={{ color: 'white', textAlign: "center" }}>03</th>
                            <th style={{ color: 'white', textAlign: "center" }}>Проведение профессиональной гигиены полости рта для устранения налёта, чтобы ничего не помешало качественному отбеливанию.</th>
                        </tr>
                        <tr>
                            <th style={{ color: 'white', textAlign: "center" }}>04</th>
                            <th style={{ color: 'white', textAlign: "center" }}>Отбеливание.</th>
                        </tr>
                        <tr>
                            <th style={{ color: 'white', textAlign: "center" }}>05</th>
                            <th style={{ color: 'white', textAlign: "center" }}>Белоснежная улыбка.</th>
                        </tr>
                    </tbody>
                </Table>
                {/* <Row className="mt-5">
                    <Col xs={12} md={6} lg={6}>
                        <div data-aos="zoom-in" className='justify-content-evenly text-center' >
                            <img class=" t013__img t-img" src={imgg} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                            </img>
                            <Card.Title className='text_nav'>Доктор Айдаров</Card.Title>
                            <span className='text_nav' style={{ fontSize: '14px', lineHeight: '18px' }} data-customstyle="yes">Основатель и<br /> главный врач клиники, <br />стоматолог-ортопед</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <div data-aos="zoom-in-up" className='justify-content-evenly text_nav m-3'>
                            <div >
                            Я хотел, чтобы клиника не напоминала больницу. Поэтому мы создали пространство, которое настраивает<br />
                                на правильную волну совместного творчества. Если люди приходят лечить зубы как на каторгу, то сложно <br />
                                ожидать от них высокогоуровня мотивации. Все мы немного нервничаем, если вокруг больничные<br /> белые стены.  где во время ожидания можно <br />послушать музыку, почитать
                                что-нибудь интересное или выпить чашечку кофе.
                            </div>
                            <div className='mt-5'>
                                Все пациенты — наши друзья! Те, кто приходит сюда впервые, знакомятся с нами и, пройдя вместе путь <br />от стоматологического кресла до красивой улыбки и здоровых зубов, остаются с нашей командой в прекрасных отношениях.
                            </div>
                        </div>
                    </Col>
                </Row> */}

            </div>


            <div className="container text-center">
                <Row> <h1 style={{ color: "#d3bb7e", }}>
                    Виды <br />отбеливания
                </h1>
                    <h3 style={{ color: "white", marginTop: "20px" }}>Отбеливание с пастой имеются 5 тонов 150$ ( 12150 сом)</h3>
                  <div className='text-center'>
                  <Row className='text-center '>
                        <Col xs={12} md={6} lg={6}  className="mt-3 text-center">
                            <Carousel className='text-center '>
                                <Carousel.Item >
                                    <div className='feedback_div'>
                                        <img src={'https://static.stomatologclub.ru/uploads/f0/a3/6e3ed0565fccd17dcca68b3bd824.jpg'} >
                                        </img>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item >
                                    <div className='feedback_div'>
                                        <img src={'https://zub.ru/upload/iblock/4ea/6416r1wm7xd1knx603uvxztr70w18y43.jpg'} >
                                        </img>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <div className='feedback_div'>
                                        <img src={'https://www.dentoprofile.ru/sites/default/files/amazing-white.jpg'} >
                                        </img>
                                    </div>
                                </Carousel.Item>

                            </Carousel>
                        </Col>

                    </Row>
                  </div>

                    {/* <Col xs={12} md={4} className="mt-3">

                       

                    </Col>
                    <Col xs={12} md={4} className="mt-3">
                       

                    </Col>
                    <Col xs={12} md={4} className="mt-3">
                        
                    </Col> */}
                </Row>


            </div>
            <RunText name={text} />
        </>

    );
}

export default Otbali;