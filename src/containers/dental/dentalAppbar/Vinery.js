import React, { useEffect } from 'react';
import { Card, Col, Row, Carousel } from 'react-bootstrap';
import RunText from '../../../components/runText/RunText';
import AOS from 'aos'
import AutoVideo from '../../../components/Vidoe/AutoVideo';
import StuffContainer from './StuffContainer';
import imgg from '../../../img.aidarov/imgg.jpeg'
import './Appbar.scss'
import Button1 from '../../../Button1';
import fonviner from '../dental.img/fonviner.png'
import DentalNavbar from '../dentalAppbar/DentalNavbar'
import vinery1 from '../dental.img/vinery1.jpg'




function Vinery({ setShow }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
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
            texts: ' АВТОРСКИЕ ВИНИРЫ',
            t: '/'
        }, {
            texts: 'ЛЕЧЕНИЕ ВО СНЕ',
            t: '/'
        }, {
            texts: ' БЕЗ БОЛИ',
            t: '/'
        },
    ]
    const feedback = [
        {
            img: `${vinery1}`,
            name: "Пациенту установлено 10 единиц керамических виниров цвета BL3! Этот оттенок самый приближённый к натуральному белому цвету! Без резких переходов, с плавной прозрачностью режущего края!",
            text: "",

        },
        {
            img: `https://elix-clinic.ru/uploads/images/lumineers/thumbnail/lumineers_01-t848x485.jpg`,
            name: "Улыбка выполнена с помощью 24 керамических виниров, цвет BL2, защита зубов от дальнейшего разрушения",
            text: "",

        },
    ]
    return (
        <div className="container">
            <DentalNavbar />
            <Row className='mt-3'>


                <Col xs={12} md={6} lg={6} >
                    <h1 >
                        Получите улыбку как у звёзд благодаря<br /> сверхтонким винирам от доктора<br /> Айдарова
                    </h1>
                    <h2 style={{ color: "white", marginTop: "30px" }} >
                        С помощью передовых методик создаём белоснежную улыбку, которой хочется делиться с окружающими
                    </h2>
                    <Col xs={12} md={6} lg={6}>
                        <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                            <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                        </div>
                    </Col>
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <img src={fonviner} />
                </Col>

            </Row>
            <RunText name={text} />

            <Row>
                <Col xs={12} md={6} lg={6} className='mt-3'>
                    <Card.Img className="h-100 w-100" src='https://thumb.tildacdn.com/tild6663-6334-4062-b764-356234363039/-/format/webp/diagnostika-min.jpg'>
                    </Card.Img>
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <h2 style={{ color: "#d3bb7e", marginTop: "50px", fontFamily: 'GraphikTT Arial sans-serif', }}>
                        Любое правильное ортодонтическое лечение (исправление прикуса, имплантация зубов или виниры) начинается с полной диагностики текущего состояния пациента, — чекапа.
                    </h2>
                    <Card.Text style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "5px" }}>
                        В нашей клинике чекап не растягивается на несколько приемов, его можно пройти всего за 40-60 минут
                    </Card.Text>
                </Col>
            </Row>



            <div className="container">
                <h1 style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "30px" }}>
                    Получите пошаговый план к здоровой и красивой улыбке на консультации
                </h1>
                <Row>

                    <Col md={6} >
                        <Card.Title style={{ color: "#d3bb7e", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "30px" }}>
                            В стоматологической клинике «Клиника Айдарова» проводится первичная консультация для оценки состояния зубов и дёсен с помощью сверхточного рентгеновского аппарата Sirona ORTHOPHOS XG, который обеспечивает высокое качество снимков при минимальной дозе облучения.
                        </Card.Title>
                        <Card.Title style={{ color: "white", fontFamily: 'GraphikTT Arial sans-serif', marginTop: "50px" }}>
                            С его помощью изготавливаются 2D-, 3D- и ОПТГ- (панорамные) снимки, наличие которых обязательно для постановки правильного диагноза и выбора метода лечения.
                        </Card.Title>
                        <Col sm={6} className="mt-4">
                            {/* <Button1 setShow={setShow}/>   */}
                            <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                                <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </div>

            <Row>
                <h1 className='text-center m-3'>Какие проблемы решают виниры?</h1>
                <Col xs={12} md={4} >
                    <h3 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">01</h3>
                    <p style={{ color: "white" }} className="text-center p-2 m-2">Стираемость зубов и повышенную чувствительность эмали</p>

                </Col>
                <Col xs={12} md={4} >
                    <h3 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">02</h3>
                    <p style={{ color: "white" }} className="text-center p-2 m-2">Неровный зубной ряд</p>
                </Col>
                <Col xs={12} md={4} >
                    <h3 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">03</h3>
                    <p style={{ color: "white" }} className="text-center p-2 m-2">Потемнение эмали или наличие пломб, отличающихся по цвету</p>
                </Col>
                <Col xs={12} md={4} >
                    <h3 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">04</h3>
                    <p style={{ color: "white" }} className="text-center p-2 m-2">Неправильную форму, сколы и трещины на зубах</p>

                </Col>
                <Col xs={12} md={4} >
                    <h3 data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" class="tn-atom text-center  p-2 m-2">05</h3>
                    <p style={{ color: "white" }} className="text-center p-2 m-2">Исправление прикуса сразу на винирах</p>
                </Col>
            </Row>
            <div>
                <Row className="justify-content-center mt-5">
                    <Col xs={12} md={4} lg={6}>
                        <h1 className='text-center pt-3 pb-3'>Результаты нашей работы (Отзывы)</h1>
                        <Carousel >
                            {
                                feedback.map(e => {
                                    return (
                                        <Carousel.Item >
                                            <div className='feedback_div'>
                                                
                                                    <img style={{width:"100%"}}src={e.img} />
                                               
                                                
                                                    <h4>{e.name}</h4>
                                                    <p>
                                                        {e.text}
                                                    </p>
                                                
                                            </div>


                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Vinery;