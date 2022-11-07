import React from 'react';
import { Card, Container, Row, Col, Carousel, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import './terapiay.scss'
import '../../app/App.scss'
import _Navbar from './../../app/nav/_Navbar';
import terapiia from './../../img.aidarov/terapiia.png';
import Button1 from '../../Button1';
import Accordions from '../../components/accrdion/Accordions';
import doctor from '../../img.aidarov/doctor.png'
import Accordion from 'react-bootstrap/Accordion'
import patient1 from '../dental/Image/patient1.jpg'
import patient2 from '../dental/Image/patient2.jpg'
import patient5 from '../dental/Image/patient5.jpg'
function AboutTerapiya({ setShow }) {
  const feedback = [
    {
      img: `${patient1}`,
      text: ' «Я ходил в разные клиники, и мне всё время всё не нравилось. Всегда вырывали зубы, было больно, я потом ходил мучился.  И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.  Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу):  „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я.  Приходите лечиться к доктору Эльмару!» «Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»',
    },
    {
      img: `${patient2}`,
      text: '«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился.  И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу):  „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я.  Приходите лечиться к доктору Эльмару!» «Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»',
    },
    {
      img: `${patient5}`,
      text: '«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился.  И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу):  „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я.  Приходите лечиться к доктору Эльмару!» «Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»',
    },
    {
      img: `${patient1}`,
      text: '«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился.  И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу):  „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я.  Приходите лечиться к доктору Эльмару!» «Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»',
    },
    {
      img: `${patient2}`,
      text: '«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился.  И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу):  „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я.  Приходите лечиться к доктору Эльмару!» «Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»«Я ходил в разные клиники, и мне всё время всё не нравилось.Всегда вырывали зубы, было больно, я потом ходил мучился. И я как-то попал в клинику доктора Эльмара, и тут всё было как по волшебству.Пришёл, у меня была дикая зубная боль, сажусь к доктору на кресло, проходит 5 минут, и я пишу доктору (говорить-то я не могу): „Можно уже говорить?“. А он такой: „А я уже всё тебе сделал“. Невероятно просто! Здесь происходит реальная магия, прямо так, как делаю я. Приходите лечиться к доктору Эльмару!»',
    },
  ]
  const data = [
    {
      title: "Прием (осмотр) врача-терапевта первичный",
      text: " Первичный осмотр 500 сом.",
    },
    {
      title: "Прием (осмотр) врача-терапевта повторный",
      text: "Повторный прием 100 сом",
    },
    {
      title: "Короткая консультация врача-терапевта",
      text: "Короткая консультация 1000 сом",
    },
    {
      title: "Расширенная консультация врача-терапевта",
      text: "Полный осмотр 15000 сом",
    },
    {
      title: "Проведение вакцинации во время приёма",
      text: "Проведение вакцинации 1000 сом ",
    }
  ]

  const doctors = [
    {
      id: 1,
      img: "https://thumb.tildacdn.com/tild6632-3766-4534-a530-643333336637/-/cover/520x800/center/center/-/format/webp/IMG_9457_1.JPG",
      title: "Гасанова Шахризат Магомедовна",
      position: "Стамотолог-ортодонт",
      experience: "4",
      detail: "Гасанова Шахризат Магомедовна Врач стоматолог-ортодонт, стаж — 4 года «В своей работе важным считаю не только лечение зубов, прикуса и ВНЧС, но и влияние на психосоматический фон пациента, так как в длительные сроки лечения важно иметь доверительные отношения» Специализация Лечение сложных зубочелюстных аномалий различной этиологии, лечение дистального, мезиального и перекрёстного прикуса Преображение улыбки с помощью современных усовершенствованных технологий и методов диагностики, использование 3D-сканирования. Комплексное лечение пациентов с дисфункцией ВНЧС, устранение спазма мышечной системы челюстно-лицевой области (миогимнастика).Образование 2017 г. — Дагестанский государственный медицинский университет. 2020 г. — ординатура в Центральном научно-исследовательском институте стоматологии и челюстно-лицевой хирургии. Карьера 2018–2020 гг. — ординатура в ЦНИИС и ЧЛХ. 2020–2021 гг. — стоматология «Юнидент». С 2020 г. по настоящее время — стоматология «Для своих» С 2020 г. по настоящее время — «Лаборатория улыбок Dr. Elmar». Ассоциации Dental Society Цифровая стоматология Ortodontic Professional Стоматологическая ассоциация России Ассоциация стоматологов и челюстно-лицевых хирургов Независимая ассоциация пародонтологов Регулярное повышение квалификации у специалистов мирового уровня и спикеров России.Сертификаты и повышение квалификации Chris Chang, «Лечение сложных случаев с применением современных технологий», 2020 г.Giorgio Fiorelli, «Возможности биомеханики в лечении на элайнерах», 2021 г. Сертифицированный специалист академии Eurokappa «Секреты успеха при работе на элайнерах», «Разрушая мифы об элайнерах», 2019 г. Нуртдинов И. Р., «Ортодонтическая резидентура. Современные принципы ортодонтического лечения, основы диагностики», 2019 г.Кочкаров Пулат Г., Сплинт-терапия. «Работа с ВНЧС», 2020 г.Насиб Балют, «Выбор правильного торка при лечении на брекет-системе системе Damon», 2020 г. Юрий Милутка, «Мануальная работа с мышцами, остеопатия для ортодонтов», 2021 г. Участник междисциплинарного дискуссионного клуба Dental Practice Talk, 2020.Участник конференции с междисциплинарным подходом Пародонтология объединит всех, 2019 г.Участник ежегодных научно-практических конференций «Современные аспекты клиники, диагностики и лечения заболеваний пульпы и периодонта», «Современные достижения в детской челюстно-лицевой хирургии и стоматологии»Участник съезда ортодонтов Московской области «Дисфункция ВНЧС — синтез науки и практики», 2019 г.",
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
    {
      id: 4,
      img: "https://thumb.tildacdn.com/tild6661-6531-4662-b632-386161616536/-/cover/520x800/center/center/-/format/webp/IMG_9426_1.JPG",
      title: "Тедеева Мария Маратовна",
      position: "Стамотолог-ортодонт",
      experience: "8",
    },

  ]
  const accordion2 = [
    {
      key: 0,
      title: 'Как вы относитесь к остеопатам?',
      text: 'Да. Самый Все, что делается руками, должно быть красиво и осмысленно. Или хотя бы приносить удовольствие. С последним условием остеопаты, похоже, справляются. В Кыргызстане остеопатия получила статус вида медицинской деятельности, в то время как в США и многих других странах — это парамедицинские оздоровительные услуги. Остеопатия как направление весьма неоднородна. Она может включать в себя и вполне действенные методы, такие как массаж триггерных точек при болевых синдромах, но по большей части содержит полумистические ненаучные представления о неправильном положении костей черепа и т. д. В целом остеопатия — ненаучное направление, включающее крупинки полезных рукодельных методов. В научной медицине ее функцию выполняет физическая терапия (не путать с постсоветской физиотерапией!).',
    },
    {
      key: 1,
      title: 'Хотелось бы больше узнать про статины. Клеточный ли это яд?',
      text: 'Возможно, они клеточный яд. Вот варфарин абсолютно точно — крысиный яд. Им много лет травили крыс, прежде чем оказалось, что он спасает от тромбозов. Статины можно как угодно называть, но эти препараты многим людям позволяют жить дольше и жить не инвалидами.',
    },
    {
      key: 2,
      title: 'Санаторное лечение - плацебо?',
      text: 'Да, конечно. Но, к сожалению иногда и во вред. Поскольку в санаториях любят активно полечить с помощью разнообразных методов.',
    },
    {
      key: 3,
      title: 'Всегда ли нужно лечить хеликобактер?',
      text: 'Консенсус Маастрихт V говорит, когда точно нужно: при атрофическом гастрите, тотальном активном гастрите, при метаплазии и дисплазии, при полипозе, при язве, при регулярном употреблении обезболивающих, при железодефиците, при отягощенной наследственности по раку желудка. Этот список не исчерпывающий и постоянно пополняется.',
    },
    {
      key: 4,
      title: 'Если при гастроскопии взяли анализ и нашли хеликобактер - это достоверно? Надо ли его лечить/избавляться?',
      text: 'Если тест быстрый, готов сразу после гастроскопии — в России он почти всегда недостоверен. Цитологический тест, который готов через несколько дней — достоверно выявляет хеликобактер, положительному тесту можно верить, но тест часто бывает ложноотрицательным.',
    },

  ]

  return (
    <div className='terapiya' style={{ width: "100%" }}>
       <Navbar bg="dark" expand="lg" variant='dark'>
          <Container>
            <Navbar.Brand href="/"><img width="50px" src={'http://linoko.by/wp-content/uploads/2019/01/logo-1024x576.png'} /></Navbar.Brand>
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
      <div className='terapiya1'>
        <Container>
          <Row>
            <Col md={6} xs={8} sm={10}>
              <Card.Img variant="top" src={terapiia} />
            </Col>
            <Col className="mt-3" md={6}>
              <h1 className="mt-3 text">Терапевт</h1>
              <p className="text2 mt-2">
                Терапевт (интернист) — специалист по внутренним болезням: сердца и сосудов, легких, пищеварительного тракта, почек.
                Он лечит аллергические реакции и респираторные вирусные инфекции (ОРВИ).
              </p>
              <p className="text2">
                Терапевт — врач первого контакта с пациентом, его задача поставить диагноз и определить, будет ли он лечить пациента сам или направит к узкому специалисту.
                Терапевт в клинике Рассвет — это не диспетчер между узкими специалистами, это врач-интеллектуал с широкой эрудицией, который способен установить самый сложный диагноз и потом передать пациента узкому специалисту, если в этом есть нужда.
              </p>
              <hr className='mb-5 mt-5' />

              <p className='mt-5'>
                {/* <Button1 setShow={setShow} /> */}
                <div className="pb-3 pt-3 mt-2 mb-3 div__a">
                                    <a href={'tel:+996776000000'} style={{ textDecoration: "none" }} className={'p-2 textinfooter2 rounded'}   > Записаться на прием</a>
                                </div>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className=' terapiya5'>
        <h1 className="text3 mt-5">
          Прием терапевта
        </h1>
        <Container>
          <Row>
            <Col sm={6} xs={12} md={6}>
              <h2 className='text'>Заболевания</h2>
              <ul className='text2'>
                <li> ОРВИ</li>
                <li>грипп</li>
                <li>пневмония</li>
                <li>бронхит</li>
                <li>ХОБЛ, бронхиальная астма</li>
                <li>ревматоидный артрит</li>
                <li>подагра</li>
                <li>остеоартроз</li>
                <li>ишемическая болезнь сердца, стенокардия</li>
                <li>сердечная недостаточность</li>
                <li>артериальная гипертензия (гипертоническая болезнь)</li>
                <li>дислипидемия и атеросклероз</li>
                <li>гастро-эзофагеальная рефлюксная болезнь (ГЭРБ)</li>
                <li>хронический гастрит, функциональная диспепсия</li>

              </ul>
            </Col>
            <Col sm={6} xs={12} md={6}  >
              <p>
                <h2 className='text'>Симптомы</h2>
                <ul className='text2'>
                  <li> кашель, насморк, боль в горле, осиплость голоса</li>
                  <li>одышка, удушье</li>
                  <li>боль в грудной клетке, боль в груди при физической нагрузке</li>
                  <li>боль в суставах, отек и покраснение суставов</li>
                  <li>повышение температуры (лихорадка)</li>
                  <li>головная боль, слабость, потемнение в глазах</li>
                  <li>внезапная потеря сознания</li>
                  <li>отеки на ногах, асцит (жидкость в животе)</li>
                  <li>изжога, отрыжка, горечь во рту</li>
                  <li>боль в животе, боль в области желудка, голодная боль</li>
                  <li>боль в подреберьях, особенно после еды</li>
                  <li>вздутие живота, боль по всему животу запор или понос</li>
                  <li>примесь крови или гноя, слизи в кале</li>
                  <li>боль в пояснице, повышение температуры, болезненное мочеиспускание</li>
                </ul>
              </p>

            </Col>
          </Row>
          <div className='poslezaboltvanie mt-5'>
            <h1 className='text6'>Консультация терапевта</h1>
            <p className='text2'>
              Терапевт обычно первым из врачей встречает пациента, поэтому он вносит в историю болезни информацию об аллергии,
              наследственной отягощенности, вредных привычках — эти сведения позволят избежать ошибочных назначений в будущем.
            </p>
            <p className='text2' >
              Далее врач узнает, что вас беспокоит, собирает анамнез (историю) болезни. Тщательно собранная информация о длительности,
              периодах, характере болезни — ключ к диагнозу. Если были проведены обследования — терапевт непременно изучит их результаты.
            </p>
          </div>
          <div className='poslezaboltvanie mt-5'>
            <h1 className='text6'>Диагностика внутренних заболеваний</h1>
            <p className='text2'>
              Классический физикальный осмотр мало изменился за 200 лет и не утратил актуальности в наши дни.
              Мы на Рассвете считаем, что старинные методы — пальпация, перкуссия, аускультация, исследование голосового дрожания,
              рефлексов и симптомов — несут неоценимую информацию о состоянии пациента здесь и сейчас.
              Например, диагностика пневмонии производится с высокой точностью этими методами и инструментально только подтверждается.
            </p>
            <p className='text2' >
              Возможности для инструментального обследования у наших врачей также достаточны.
              Семь дней в неделю доступна цифровая рентгенография с редкой в наши дни функцией рентгеноскопии.
              Внутренние органы, сосуды и суставы могут быть визуализированы при помощи ультразвуковых аппаратов Esaote (Италия) и GE (США).
              Эндоскопическая служба оснащена японской видеосистемой высокой четкости с функцией виртуальной хромоскопии производства Pentax (Япония).
            </p>
            <p className='text2' >
              Естественно, терапевт использует ЭКГ, суточное и многосуточное мониторирование ЭКГ по Холтеру,
              суточное мониторирование артериального давления (СМАД), спирометрию (исследование функции внешнего дыхания).
              При необходимости проведет под контролем УЗИ пункцию перикарда или плевральной полости и заберёт жидкость на лабораторное исследование.
            </p>
            <p className='text2'>
              В любой момент нашему терапевту готовы прийти на помощь для проведения консилиума,
              составления второго мнения и консультаций десятки «узких» специалистов экстра-класса.
            </p>

          </div>
          <div className='poslezaboltvanie mt-5'>
            <h1 className='text6'>Лечение у терапевта</h1>
            <h2 className='text2'>Лечение у терапевта клиники Рассвет в Москве протекает по нескольким сценариям:</h2>
            <p className='text2'>
              - Острое заболевание, протекающее стандартно, такое как ОРВИ, редко требует более одного визита.
              Но если вам это требуется, может быть выдан листок нетрудоспособности (больничный лист) и назначен повторный прием.
            </p>
            <p className='text2' >
              - Хроническое заболевание, протекающее стандартно, терапевт ведет сам, привлекая «узкого» специалиста для консультаций в необычных случаях.
            </p>
            <p className='text2'>
              - При декомпенсации тяжелого хронического заболевания терапевт передает пациента профильному врачу — кардиологу, гастроэнтерологу, ревматологу,
              нефрологу и т.д. После стабилизации состояния пациент обычно для стандартной поддерживающей терапии возвращается к терапевту.
            </p>
          </div>

          <div className='text-center text mt-5'>
            <h2>Цены</h2>
          </div>
          <Row>
            <Col>
              <div >
                <Accordions name={data} />
              </div>
            </Col>
            <Col md={4}>
              <Card.Img variant="top" src={doctor} />
            </Col>
          </Row>

          <Row className='mt-5'>
            <h1 className='text6'>Наша команда</h1>
            {doctors.map(e => {
              return (
                <>
                  <Col md={3} sm={6} xs={12} className="mt-5">
                    <Card.Img src={e.img}></Card.Img>
                    <Card.Text style={{ color: "white", textAlign: "center" }}> {e.title}</Card.Text>
                    <Card.Text style={{ color: "white", textAlign: "center" }}>{e.position}</Card.Text>
                    <Card.Text style={{ color: "white", textAlign: "center" }}>{e.experience}</Card.Text>
                    <Button1 setShow={setShow} />
                  </Col>
                </>
              )
            })}

          </Row>
          <>
            <Col md={8} xs={10}>
              <h1 className='pt-5 text-center pb-3'>
                Часто задаваемые вопросы
              </h1>
            </Col>
            <Col  >
              <Accordion defaultActiveKey={['0']} style={{ backgroundColor: 'black', color: '#d3bb7e' }}>
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
          <Row>
            <h1 className='mt-3 pb-3 text-center'>
              Наши отзывы
            </h1>
            <Carousel fade>
              {
                feedback.map(e => {
                  return (
                    <Carousel.Item style={{ color: 'white' }}>
                      <Row>
                        <Col sm={6} xs={12} md={6}>
                          <img

                            className="d-block w-100"
                            src={e.img}
                            alt="First slide"
                          />
                        </Col>
                        <Col sm={6} xs={12} md={6}>
                          <p>
                            {e.text}
                          </p>
                        </Col>
                      </Row>
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>

          </Row>
        </Container>
      </div>


    </div>

  );
}

export default AboutTerapiya;