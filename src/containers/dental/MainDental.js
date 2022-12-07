import React, { useState } from 'react'
import { Col, Accordion, Container, Row, Card, Carousel, Table } from 'react-bootstrap'
import RunText from '../../components/runText/RunText'
import aidarov from '../dental/Image/Aidarov.png'
import patient1 from '../dental/Image/patient1.jpg'
import patient2 from '../dental/Image/patient2.jpg'
import patient5 from '../dental/Image/patient5.jpg'
import komanda from '../dental/Image/komanda.jpg'
import lechenie from '../dental/Image/lechenie.png'
import viniry from '../dental/Image/viniry.jpg'
import plomba from '../dental/Image/plomba.jpg'
import elainery from '../dental/Image/elainery.jpg'
import result11 from '../dental/Image/result11.jpg'
import result12 from '../dental/Image/result12.jpg'
import result221 from '../dental/Image/result221.jpg'
import result22 from '../dental/Image/result22.jpg'
import result33 from '../dental/Image/result33.jpg'
import result31 from '../dental/Image/result31.jpg'
import konsultasya from '../dental/Image/konsultasya.png'

import Button1 from '../../Button1'
import './MainDental.scss'
import '../../app/App.scss'
import DentalNavbar from '../dental/dentalAppbar/DentalNavbar'
import aidarovs from '../../img.aidarov/aidarovs.jpg'

function MainContainers({ setShow }) {



  const accordion = [

    {
      key: 1,
      title: 'Высокое качество услуг и сервиса',
      img: `${lechenie}`,
      text: 'Немецкие технологии и передовые зарубежные методики, привезённые в Кыргызстан.',
    },
    {
      key: 3,
      title: 'Что такое виниры и когда нужно их ставить?',
      img: `${viniry}`,
      text: '  Это эффективный, а главное — безопасный и быстрый способ стать обладателем восхитительной улыбки. Виниры целесообразно ставить при наличии дефектов зубов: сколов, трещин, кривизны, наличия промежутков между зубами и видимых пломб. А также если есть желание иметь улыбку мечту идеальной формы и белизны.',
    },
    {
      key: 4,
      title: 'Чем отличается керамическая вкладка от пломбы?',
      img: `${plomba}`,
      text: 'Фактически керамическая вкладка — это пломба из керамики, но у неё есть ряд существенных достоинств.Прочность, высокая износостойкость, отсутствие усадки с течением времени. И это по сравнению с самым «продвинутым» пломбировочным материалом.Эстетическая часть тоже очень важна, ведь пломбы всегда заметны. А в случае керамической вкладки сами стоматологи порой с трудом находят собственно зафиксированные вкладки. Это полноценное восстановление анатомической формы зуба.',
    },
    {
      key: 5,
      title: 'Элайнеры выравнивания зубов, что это такое?',
      img: `${elainery}`,
      text: 'Элайнеры – это эластичные прозрачные капы, накладываемые на весь зубной ряд. Они напоминают капы, используемые для осветления эмали. Элайнеры пациент может надеть и снять самостоятельно, это совершенно не больно. В отличие от брекетов их не нужно носить постоянно. Элайнеры можно убирать перед приемом пищи, чисткой зубов.',
    },
    {
      key: 6,
      title: 'Консилиум врачей по всем возможным вариантам преображения каждой улыбки',
      img: `${konsultasya}`,
      text: 'За эстетику и функциональность зубов лично отвечают все специалисты клиники, которые участвуют в создании вашей улыбки.',
    },
    {
      key: 7,
      title: 'Консилиум врачей по всем возможным вариантам преображения каждой улыбки',
      img: `${konsultasya}`,
      text: 'За эстетику и функциональность зубов лично отвечают все специалисты клиники, которые участвуют в создании вашей улыбки.',
    },
  ]

  const accordion2 = [
    {
      key: 0,
      title: 'Можно ли выровнять зубы без брекетов?',
      text: 'Да. Самый удобный метод исправления прикуса и искривлённых зубов — это капы-элайнеры. Он подходит и подросткам, и взрослым. Не вызывает сложностей по уходу за зубами.',
    },
    {
      key: 1,
      title: 'Почему вы советуете капы-элайнеры? В чём их преимущество?',
      text: 'Они невредны для здоровья. Их легко можно снять, когда нужно поесть или почистить зубы. Не вызывают аллергии. Воздействуют постепенно и мягко. Они лёгкие, практически не ощущаются и, в отличие от брекетов, не травмируют полость рта металлическими частями. Незаметны во время общения, не привлекают внимания к себе.',
    },
    {
      key: 2,
      title: 'Я могу увидеть, как будут выглядеть мои зубы после лечения?',
      text: 'Мы создаем виртуальную 3D-модель зубочелюстной системы, где вы сможете увидеть конечный результат своих идеально ровных зубов и узнать точные сроки конца лечения.',
    },
    {
      key: 3,
      title: 'Если у меня нижние зубы ровные, то нужно только верхние выровнять? Или ставить всё равно на обе челюсти?',
      text: 'Необязательно. Можно поставить элайнеры как на обе челюсти, так и на одну. Технология это позволяет.',
    },
    {
      key: 4,
      title: 'Будут ли мне мешать капы-элайнеры? Смогу ли я к ним адаптироваться?',
      text: 'Нашему организму требуется время для привыкания к любому инородному телу. И элайнеры не исключение. Адаптацию можно разделить на два периода. Первичная (2−3 дня) В первую неделю щёки, язык и десна привыкают к новому рельефу. Элайнеры чувствуются во рту, и это может быть непривычно. Вторичная (1−2 месяца) Спустя месяц вы уже не замечаете их во рту. А многие наши пациенты говорят, что им в капах-элайнерах удобнее, чем без них.',
    },
    {
      key: 5,
      title: 'Расскажите о домашнем методе отбеливания зубов?',
      text: 'В домашних условиях вы будете носить две недели индивидуальные капы.Но мы рекомендуем комбинированный метод. Сначала кабинетное, а после — домашнее отбеливание. Для ослепительного, стойкого и долгосрочного эффекта. Именно комбинация методов позволяет сохранить эффект процедуры до 3 лет!',
    },
    {
      key: 6,
      title: 'Что такое виниры и когда нужно их ставить?',
      text: 'Виниры — это сверхтонкие накладки на зубы, изготовленные из высококачественной керамики. В отличие от коронки, они закрывают только переднюю и режущую часть зуба. Чаще всего ставятся на зону улыбки (8 нижних и 10 верхних). Это эффективный, а главное — безопасный и быстрый способ стать обладателем восхитительной улыбки. Виниры целесообразно ставить при наличии дефектов зубов: сколов, трещин, кривизны, наличия промежутков между зубами и видимых пломб. А также если есть желание иметь улыбку мечту идеальной формы и белизны.',
    },
    {
      key: 7,
      title: 'Чем отличается керамическая вкладка от пломбы?',
      text: 'Фактически керамическая вкладка — это пломба из керамики, но у неё есть ряд существенных достоинств.Прочность, высокая износостойкость, отсутствие усадки с течением времени. И это по сравнению с самым «продвинутым» пломбировочным материалом.Эстетическая часть тоже очень важна, ведь пломбы всегда заметны. А в случае керамической вкладки сами стоматологи порой с трудом находят собственно зафиксированные вкладки. Это полноценное восстановление анатомической формы зуба.',
    },
  ]

  const result = [
    {

      img: `${result11}`,
      text: 'Спасибо огромное доктору Айдарову!',
    },
    {

      img: `${result12}`,
      text: 'Спасибо огромное доктору Айдарову!',
    },
    {

      img: `${result22}`,
      text: 'Спасибо огромное доктору Айдарову!',
    },
    {

      img: `${result221}`,
      text: ' Спасибо огромное доктору Айдарову!',
    },
    {

      img: `${result33}`,
      text: 'Спасибо огромное доктору Айдарову!',
    },
    {

      img: `${result31}`,
      text: 'Спасибо огромное доктору Айдарову!',
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
  const p = [
    {
      id: 1,
      title: "Консультация",
      price: "150 "
    },
    {
      id: 2,
      title: "Консультация главного врача",
      price: "300"
    }, {
      id: 3,
      title: "Консультация главного врача с составлением плана лечения (слепки, модели, фото)",
      price: "1000"

    }, {
      id: 4,
      title: "Вторичный приём (за каждый визит)",
      price: "50"

    }, {
      id: 5,
      title: "Отбеливание после эндолечения (1 посещ)",
      price: "500"
    }, {
      id: 6,
      title: "Установка украшений на зубы (скайсы)",
      price: "500"
    }, {
      id: 7,
      title: "Домашнее отбеливание Opalescencе",
      price: "4000"
    },
    {
      id: 8,
      title: "Анестезия",
      price: "150"
    }, {
      id: 9,
      title: "Периапикальный рентген снимок",
      price: "100"


    },
    {
      id: 10,
      title: "Наложение раббердама, одноразового ретрактора",
      price: "200"
    },

  ]

  return (
    <>
      <DentalNavbar />
      <div className='maindental ' style={{ marginTop: "20px" }}>
        <Container>
          <Row >
            <Col sm={6} xs={12} md={4}>
              <h1 className='text-center'>
                Ваша улыбка - наша забота!
              </h1>

              <p style={{ color: "white" }}>
                Всем Ассолому алейкум!
                Дорогой мой читатель, добро пожаловать в нашу клинику.
                Клиника Айдарова всегда будет стремиться, только к качестве и красоте с инновационными технологиями.

              </p>
              <div className="text-center pb-2">
                {/* <Button1 setShow={setShow} /> */}
                <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                  <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}> Записаться на прием</a>
                </div>
              </div>
            </Col>
            <Col sm={6} xs={12} md={6}>
              <Card sm={6} xs={12} md={6} style={{ backgroundColor: 'black', }} className="mt-2"   >
                <img  src={aidarovs} />

              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <RunText name={text} />
      <Container>
        <>
          <Row className="mt-3">
            <Col md={6} xs={12} sm={12}>
              <Card md={6} xs={12} sm={12} style={{ backgroundColor: 'black', }}>
                <img src={aidarov} />

              </Card>
            </Col>
            <Col sm={6} xs={12} md={6} style={{ color: 'white', }}>
              <Card.Text>
                <b> Здравствуйте!
                  Меня зовут Бекмамат Айдаров.
                </b>
              </Card.Text>
              <p className="textdoctor">
                Я врач стоматолог общей практики и имплантолог, основатель и главный врач клиники «Dr. Aidarov». Каждый пациент является для нас
                VIP-персоной, поэтому мы предоставляем только лучшее из мира стоматологии
              </p>
              <p className="textdoctor">
                Всегда стремлюсь быть в авангарде современной стоматологии.
                Стоматология - сфера чрезвычайно высокотехнологичная, поэтому динамика ее развитие превышает динамику
                большинства остальных сфер деятельности.
                И большую часть моей жизни занимает обучение, прохождение курсов и посещение конференций.
              </p>
              <p className="textdoctor">
                Мы работаем с современными технологиями, которые позволяют не только быстро и качественно создать и
                оценить результат, но и визуализировать процесс для пациента без боли и мучительных процедур.
                Стоматология в настоящее время — это однозначно комфорт и приятное времяпрепровождение!
              </p>
              <h5 style={{ color: 'white' }}>
                Добро пожаловать в клинику «Dr. Aidarov»!
              </h5>
              <div style={{ display: 'flex', justifyContent: 'between', color: 'black', marginTop: '50px' }}>
                {/* <Button1 setShow={setShow} /> */}
                <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                  <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                </div>

              </div>
            </Col>
          </Row>
          <Col sm={6} xs={12} md={4}>
            <h1 className='mt-5'>
              Наши довольные пациенты
            </h1>
          </Col>
          <Row className="mt-5 ">
            <Col sm={6} xs={12} md={4}>
              <Card sm={6} xs={12} md={4} className="mt-2"   >
                <img src={patient1} />
              </Card>

            </Col>
            <Col sm={6} xs={12} md={4}>
              <Card sm={6} xs={12} md={4} className="mt-2">
                <img src={patient5} />
              </Card>

            </Col>
            <Col sm={6} xs={12} md={4}>
              <Card sm={6} xs={12} md={4} className="mt-2">
                <img src={patient2} />
              </Card>

            </Col>
          </Row>
          <Row>
            <h1 className='mt-5 mb-3 text-center'>
              Почему клиника Айдарова?
            </h1>
            <Col sm={6} xs={12} md={6}>
              <Card >
                <img src={komanda} />
              </Card>
            </Col>
            <Col sm={6} xs={12} md={6}>
              <Accordion defaultActiveKey={['0']} alwaysClose style={{ backgroundColor: 'black', color: '#d3bb7e', }}>
                {
                  accordion.map(e => {
                    return (
                      <>
                        <Accordion.Item eventKey={e.key} style={{ backgroundColor: 'black', color: '#d3bb7e' }}>
                          <Accordion.Header
                            style={{ backgroundColor: 'black', color: '#d3bb7e' }}>{e.title}</Accordion.Header>
                          <Accordion.Body style={{ backgroundColor: 'black', color: '#d3bb7e' }}>
                            <p>
                              {e.text}
                            </p>
                            <Card>
                              <img src={e.img} />
                            </Card>
                          </Accordion.Body>
                        </Accordion.Item>
                      </>

                    )
                  })
                }
              </Accordion>
            </Col>
          </Row>
          <div>
            <h1 className='mt-5 text-center'>Цены</h1>
            <Table striped bordered hover variant='dark' >
              <thead>
                <tr>
                  <th >№</th>
                  <th>Прейскурант </th>
                  <th>Стоимость услуг</th>
                </tr>
              </thead>
              <tbody>
                {p.map((b) => {
                  return (
                    <tr>
                      <td>{b.id}</td>
                      <td>{b.title}</td>
                      <td>{b.price}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </div>

          <h1 className='mt-5 text-center'>
            Наша команда
          </h1>

          <Row>
            <Col sm={6} xs={12} md={6}>

              <h5 style={{ color: 'white', fontFamily: 'GraphikTT Arial sans-serif' }}>
                Наши пациенты как будто попадают в будущее. Мы можем полностью визуализировать всё для пациентов: на
                специальных мониторах показать зубы в разных проекциях, в разрезе, можем сделать подробный полный чекап
                всей зубочелюстной системы. И всё это без временных затрат и с максимальным комфортом.

              </h5>
            </Col>
            <Col sm={6} xs={12} md={4}>
              <Card sm={6} xs={12} md={4}>
                <img src={komanda} />
              </Card>
            </Col>
          </Row>
          <h1 className='mt-3 text-center'>
            Часто задаваемые вопросы
          </h1>
          <Col >
            <Accordion defaultActiveKey={['0']} alwaysClose style={{ backgroundColor: 'black', color: '#d3bb7e' }}>
              {
                accordion2.map(e => {
                  return (
                    <>
                      <Accordion.Item eventKey={e.key} style={{ backgroundColor: 'black', color: '#d3bb7e' }}>
                        <Accordion.Header
                          style={{ backgroundColor: 'black', color: '#d3bb7e' }}>{e.title}</Accordion.Header>
                        <Accordion.Body style={{ backgroundColor: 'black', color: '#d3bb7e' }}>
                          <p>
                            {e.text}
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </>
                  )
                })
              }
            </Accordion>
          </Col>
        </>
      </Container>


    </>
  )
}

export default MainContainers
