import React from 'react';
import './xirurg.scss'
import { Col, Container, Row, Card, } from 'react-bootstrap';
import Button1 from '../../Button1'


function Adoctors({ setShow }) {
    const doctors = [
        {
            id: 1,
            img: "https://thumb.tildacdn.com/tild6632-3766-4534-a530-643333336637/-/cover/520x800/center/center/-/format/webp/IMG_9457_1.JPG",
            title: "Гасанова Шахризат Магомедовна",
            position: "Стамотолог-ортодонт",
            experience: "4",
        },
        {
            id: 12,
            img: "https://thumb.tildacdn.com/tild6632-3766-4534-a530-643333336637/-/cover/520x800/center/center/-/format/webp/IMG_9457_1.JPG",
            title: "Гасанова Шахризат Магомедовна",
            position: "Стамотолог-ортодонт",
            experience: "4",
        },
        {
            id: 2,
            img: "https://thumb.tildacdn.com/tild3736-3436-4734-b538-616235646636/-/cover/520x800/center/center/-/format/webp/IMG_9509_1.JPG",
            title: "Базарбаев Фарух Фархадович",
            position: "Стамотолог-ортодонт",
            experience: "5",
        },
        {
            id: 3,
            img: "https://thumb.tildacdn.com/tild3331-3539-4934-b536-666565376664/-/cover/520x800/center/center/-/format/webp/IMG_9425_1.JPG",
            title: "Матняк Дмитрий Николаевич",
            position: "Стамотолог-ортодонт",
            experience: "7",
        },
        
    ]
    return (
        <div className='container mt-5 p-3'>
            <h1 className="text-center pt-3">Наши специалисты</h1>
            <Row>
                <Col className='mt-5'>
                    <Card.Img width={'200px'} src='https://img.freepik.com/free-photo/happy-team-of-doctors_256588-1418.jpg'>

                    </Card.Img>
                </Col>
                <Col md={6} >
                    <p  className='text_nav' style={{ color: "white", marginTop: "50px" }}>
                    Успех хирургического лечения в первую очередь зависит от профессионализма оперирующих хирургов и современного оборудования и материалов. В Клиническом госпитале  оперируют лучшие в своих направлениях хирурги в городе Ош.
                   </p>
                   <p className='text_nav'> 
                   Высококвалифицированные специалисты отделения анестезиологии и реанимации обеспечивают комфортное проведение операции, благодаря современным методам общего и регионарного обезболивания. Для ускорения послеоперационной реабилитации пациентов хирургам оказывают содействие специалисты современного физиотерапевтического отделения нашей клиники .</p>
                    <Col sm={6} className="mt-3">
                        {/* <Button1 setShow={setShow} /> */}
                        <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                                    <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                                </div>
                    </Col>
                </Col>
            </Row>
            <div className='mt-5'>
            <Row className='mt-5'>
                    {doctors.map(e => {
                        return (
                            <>
                                <Col md={3} sm={6} xs={12} className="mt-5">
                                    <Card.Img src={e.img}></Card.Img>
                                    <Card.Text style={{ color: "white", textAlign: "center" }}> {e.title}</Card.Text>
                                    <Card.Text style={{ color: "white", textAlign: "center" }}>{e.position}</Card.Text>
                                    <Card.Text style={{ color: "white", textAlign: "center" }}>{e.experience}</Card.Text>
                                </Col>
                            </>
                        )
                    })}
                   
                </Row>
            </div>

        </div>
    );
}

export default Adoctors;