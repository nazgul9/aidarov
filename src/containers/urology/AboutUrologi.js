import React from 'react';
import { Card, Col, Container, Nav, Navbar, NavDropdown, Row, Table } from 'react-bootstrap';
import _Navbar from "../../app/nav/_Navbar"
import Button1 from '../../Button1';
import RunText from '../../components/runText/RunText';
import './urolog.scss'
import Accordions from '../../components/accrdion/Accordions';


function AboutUrologi({ setShow }) {
    const data = [
        {
            title: "Как лечить простатит",
            text: "Коварство воспаления предстательной железы состоит в его бессимптомности. А к моменту появления неприятных ощущений (частых позывов к мочеиспусканию, оставляющих чувство неполного опорожнения мочевого пузыря; боли и жжения во время мочеиспускания, болезненности при семяизвержении и т.д.), речь идёт уже о запущенной стадии болезни."
        },
        {
            title: "Воспаление мочевого пузыря",
            text: "Мужчины страдают циститами нечасто, что связано с особым строением уретры. Тем не менее, патология встречается и беспокоит преимущественно представителей сильного пола в возрасте старше 40 лет. Воспаления в мочевом пузыре обычно возникают по причине попадания инфекции в простату, уретру, придатки яичек и семенники. Цистит редко становится у мужчин самостоятельной патологией. Обычно к воспалительному процессу в мочевом пузыре присоединяются другие заболевания мочеполовой системы. По этой причине лечение должно быть комплексным и профессиональным"
        },
        {
            title: "Мочекаменная болезнь.",
            text: "При такой патологии в мочевом пузыре, почках и мочеточнике появляются твердые образования различных размеров. Интересно, что у молодых пациентов мочекаменная болезнь зачастую поражает почки и мочеточники, а у детей и людей пожилого возраста – мочевой пузырь. Количество камней и их размеры могут быть самыми разными. Встречаются как очень небольшие отложения (крупинки, песок), так и очень крупные (до 12 сантиметров). Развивается патология по ряду причин. К основным относят нарушения обменных процессов. Провоцирующими факторами становятся неправильное питание, повышенная кислотность мочи, недостаток питательных веществ, хронические заболевания внутренних органов, обезвоживание организма"
        },
        {
            title: "Уретрит",
            text: "Воспалительные процессы в мочеиспускательном канале – достаточно часто встречающаяся патология. Она может быть первичной или вторичной. Каждая форма патологии появляется по ряду причин. Заражения возможны при половых контактах, оперативных вмешательствах и иными путями"
        },
        {
            title: "Нефрит",
            text: "Данная патология представляет собой воспаление почек. Регистрируют как первичный нефрит, который связан с возникновением воспалительного процесса непосредственно в почках, так и вторичный – он является результатом патологий других органов. Первичная форма заболевания обычно провоцируется кишечной палочкой, стрептококками и другими опасными микроорганизмами, а вторичное возникает при сахарном диабете, алкоголизме, аллергических реакциях и др."
        },
           ]
    const patients = [
        {
            img: `https://crb-vyksa.ru/netcat_files/11/1/deontlogiya.jpg`,
            title: "TITLE",
            known_for: "TEXT",
        },
        {
            img: `https://crb-vyksa.ru/netcat_files/11/1/deontlogiya.jpg`,
            title: "TITLE",
            known_for: "TEXT",
        },
        {

            img: `https://crb-vyksa.ru/netcat_files/11/1/deontlogiya.jpg`,
            title: "TITLE",
            known_for: "TEXT",
        }
    ]
    const as = [
        {
            id: 1,
            title: "Прием врача терапевта, гастроэнтеролога",
            price: "	700 сом",

        },
        {
            id: 2,
            title: "Прием врача невролога",
            price: "1000 сом",

        },
        {
            id: 3,
            title: "Прием врача эндокринолога",
            price: "	700 сом",

        },
        {
            id: 4,
            title: "Прием врача иммунолога первичный (прием только с анализами)",
            price: "	1000 сом",

        },
        {
            id: 5,
            title: "Прием врача уролог (с осмотром)",
            price: "	700 сом",

        },


    ]
    const text =[{
        texts:"Как лечить простатит",
        t:"/"
    },{
        texts:"Уретрит",
        t:"/"
    },{
        texts:"Нефрит",
        t:"/"
    },{
        texts:"Бактериальный вагиноз.",
        t:"/"
    },{
        texts:"Мочекаменная болезнь",
        t:"/"
    },{
        texts:"Пролапс гениталий",
        t:"/"
    },{
        texts:"Анализам",
        t:"/"
    },{
        texts:"Урология",
        t:"/"
    },
    {
        texts:"Как лечить простатит",
        t:"/"
    },{
        texts:"Уретрит",
        t:"/"
    },{
        texts:"Нефрит",
        t:"/"
    },{
        texts:"Бактериальный вагиноз.",
        t:"/"
    },{
        texts:"Мочекаменная болезнь",
        t:"/"
    },{
        texts:"Пролапс гениталий",
        t:"/"
    },{
        texts:"Анализам",
        t:"/"
    },{
        texts:"Урология",
        t:"/"
    },
]
    return (
        <>


            <div className='container AboutUrolog'>
            <Navbar bg="dark" expand="lg" variant='dark'>
          <Container>
            <Navbar.Brand href="/"><img width="50px" src={'https://st2.depositphotos.com/26044198/47235/v/600/depositphotos_472358090-stock-illustration-urology-and-organ-transplantation-concept.jpg'} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">О Клинике</Nav.Link>
                {/* <Nav.Link href="/ContactClinick">Контакты</Nav.Link> */}
                <NavDropdown title="Услуги" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/aboutDental">Стоматология</NavDropdown.Item>
                  <NavDropdown.Item href="/AboutGynecology">Гинекология</NavDropdown.Item>
                  <NavDropdown.Item href="/AboutUrologi">Урология
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/AboutXirurg">Хирургия
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/AboutTerapiya">Терапия</NavDropdown.Item>
                  <NavDropdown.Item href="/AboutLaboratory">Лаборатория</NavDropdown.Item>

                </NavDropdown>
              </Nav>
             <Nav>
             <NavDropdown title="Контакты" id="basic-nav-dropdown">
                <NavDropdown.Item href='tel:+996709545487' > +996709545487 </NavDropdown.Item>
                <NavDropdown.Item href='tel:+996779545487' >+996779545487 </NavDropdown.Item>
                <NavDropdown.Item href='tel:+996555545487' >+996555545487 </NavDropdown.Item>
                </NavDropdown>

             </Nav>
             
            
            </Navbar.Collapse>

          </Container>
        </Navbar>
                <Row>

                    <Col className="mt-5" md={6} >
                        <h1 className="mt-3 text">Кто такой уролог?</h1>
                        <p className="text2 mt-3">
                            Уролог является врачом, который осуществляет диагностику, профилактику и лечение заболеваний мочеполовой системы. Записаться на прием к нему могут как женщины, так и мужчины. Специалисты оказывают комплексную медицинскую помощь при нарушениях работы мочеточников, мочевого пузыря, почек и уретры. Также врачи занимаются расстройствами половой системы у мужчин.
                        </p>
                        <p className="text2 mt-3">Урология является не только терапевтической, но и хирургической специальностью. Поэтому врачи обеспечивают и проведение оперативных вмешательств, которые могут быть направлены как на устранение различных патологий, так и врожденных и приобретенных эстетических дефектов.</p>

                        <p className='mt-5'>
                            {/* <Button1 setShow={setShow} /> */}
                            <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                                    <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                                </div>
                        </p>
                    </Col>
                    <Col md={6} xs={8} sm={10}>
                        <Card.Img variant="top" src='https://pngimg.com/uploads/doctor/doctor_PNG16041.png' />
                    </Col>
                </Row>
                <h1 className='mt-3'>С какими симптомами следует<br /> обращаться к урологу?</h1>
                <Accordions name={data} />
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <div className='justify-content-evenly text-center  ' >
                            <img class=" t013__img t-img" src={'https://pngimg.com/uploads/doctor/doctor_PNG15980.png'} imgfield="img" data-tu-max-width="320" data-tu-max-height="320" data-tu-cover="c" alt="" role="presentation">
                            </img>
                            <Card.Title className='text_nav'>Доктор Айдаров Чынгыз</Card.Title>
                            <span className='text_nav' style={{ fontSize: '14px', lineHeight: '18px' }} data-customstyle="yes">Основатель и<br /> главный врач урологии </span>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <div className='justify-content-evenly text_nav mt-3'>
                            <div >
                            Я Айдаров Чынгыз родился в городе Ош. 06.05.1991 год.Окончил школу Карло-Маркса в 2008 году. Поступил в Медицинскую академию 2009 году. Окончил мед – академию 2014 году факультет лечебное дело. Поступил в ординатуру 2014 году по специальности врач уролог. С 2016 года работал в ОМОКБ до 2019года. С 2019 года работаю в частной клинике Айдарова Камалдина Абдурахмановича. Занимаемся хирургическим и терапевтическим лечением урологических заболевании. Особое направления в области мужского бесплодия.Спермограмма 
                            </div>

                            <div className='mt-3'>
                                {/* <Button1 setShow={setShow} /> */}
                                <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                                    <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <h1 className='text-center mb-3'>
                        Наши пациенты
                    </h1>
                    {patients.map(e => {
                        return (
                            <>
                                <Col md={4} sm={6} xs={12} >
                                    <div>
                                        <Card.Img className='W-100 h-100' src={e.img}></Card.Img>
                                        <Card.Text style={{ color: "white", textAlign: "center" }}>{e.title}</Card.Text>
                                        <Card.Text style={{ color: "white", textAlign: "center" }}>{e.known_for}</Card.Text>
                                    </div>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </div>
            <RunText name={text}/>
            <div className='container'>
                <h1 className='text-center'>Цены на услуги</h1>
                <Col>
                    <Table striped bordered hover variant='dark' >
                        <thead>
                            <tr>
                                <th >№</th>
                                <th>Общий мазок на флору </th>
                                <th>Стоимость услуг</th>
                            </tr>
                        </thead>
                        <tbody>
                            {as.map((a) => {
                                return (
                                    <tr>
                                        <td>{a.id}</td>
                                        <td>{a.title}</td>
                                        <td>{a.price}</td> </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </div>
        </>

    );
}

export default AboutUrologi;