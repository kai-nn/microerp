import React from "react";
import image_1 from './images/IMG_2528_mini.PNG'
import image_2 from './images/IMG_2539_mini.PNG'
import image_3 from './images/IMG_2538_mini.PNG'


export const content = [
    {
        elementMenu: 'О сервисе',
        body:
            <div style={{textAlign: 'justify'}}>
                <h3>О сервисе</h3>

                <section>
                    <img src={image_1} width={'200px'} style={{float: 'left', margin: '0 20px 10px 0'}} alt="Картинка 1"/>
                    <p>
                    Для повышения продуктивности бизнеса многие производственные организации идут по пути автоматизации своих процессов.
                    Чаще всего начинают с бухгалтерии, складов, далее производство и т.д.
                    Как правило автоматизация инженерной деятельности долгое время замирает на внедрении CAD, CAM систем, и еще реже внедряют CAPP.
                    Безспорные лидеры всем известны и их решения в каждой нише способны удовлетворить любые потребности.
                    Но все ли так хороше, как представлено в красивых буклетах или на презентациях PR-специалистов?
                    </p>
                </section>


                <section>
                    <img src={image_2} height={'200px'} style={{float: 'right', margin: '0 0px 0px 20px'}} alt="Картинка 2"/>
                    Конечно, если
                    <ul>
                        <li>вы большая организация и единовременные вложение нескольких миллионов, а так же дороговизна сервисной поддержки не является проблеммой,</li>
                        <li>вас не пугают сроки развертывания корпоративных решений,</li>
                        <li>вы имеете достаточный штат высокооплачиваемых IT-специалистов или готовы время-от-времени их привлекать из вне</li>
                    </ul>
                </section>


                <section>
                    <img src={image_3} height={'200px'} style={{float: 'left', margin: '0 20px 0px 0'}} alt="Картинка 3"/>
                    Но если
                    <ul>
                        <li>вы умеете считать свои деньги, и готовы платить только за подписку своих пользователей,</li>
                        <li>вы рассматриваете возможность удаленного формата работы ваших сотрудников и желаете экономить на офисе,</li>
                        <li>вы не хотите тратить деньги на закупку дополнительной техники для доступа к инженерным данным в производстве -</li>
                    </ul>
                </section>

                <section style={{textAlign: 'center', fontWeight : 'bold'}}>Вам стоит попробовать <span style={{color: 'orange'}}>micro</span><span style={{color: 'midnightblue'}}><b>erp</b></span>&nbsp; ! </section>

            </div>
    },



    {
        elementMenu: 'Демонстрация',
        body:
            <div style={{textAlign: 'justify'}}>
                <h3>Демонстрация</h3>
                <section>В разработке...</section>
            </div>
    },



    {
        elementMenu: 'Отзывы пользователей',
        body:
            <div style={{textAlign: 'justify'}}>
                <h3>Отзывы пользователей</h3>
                <br/>
                <h4>Ворушева И.А.</h4>
                <p>Инженер-технолог 2 категории</p>
                <section>
                    <p>
                    Начала знакомиться с программой microerp в IV квартале 2021 г. для использования в
                    своей работе при написании технологических процессов на механическую обработку. Задумка
                    очень хорошая: единая система для руководителей, технологов, программистов, исполнителей,
                    контролеров. У каждого есть быстрый доступ с любого устройства и личные возможности
                    использования программы по назначению в соответствии со своими обязанностями. Интерфейс
                    программы принципиально отличается от привычного Office, но принцип работы понятен.
                    </p>
                </section>
                <section>
                    <p>
                    Выпустила 15 техпроцессов. Удобно то, что их можно копировать при разработке новых,
                    подобных. А также можно использовать техпроцессы других технологов. Это также является
                    плюсом, когда технологи замещают друг друга на время отпуска и по другим причинам. С
                    помощью программы фотоСКРИН можно легко и быстро добавить в технологию эскизы,
                    выполненные, например, в программе КОМПАС, а также отсканированные эскизы. Чертеж детали
                    добавляется автоматически при открытии  файла формата JPG.
                    </p>
                </section>
                <section>
                    <p>
                    Сама программа работает немного медленно вначале, но в общем это не критично.
                    </p>
                </section>
                <section>
                    <p>
                    Есть ряд моментов и нюансов, которые хотелось бы добавить для большего удобства
                    работы в программе:
                    <ul>
                    <li>
                    Возможность создавать, сохранять и расширять базу используемого режущего и
                    мерительного инструмента, ИОТ (своя база для каждого технолога).
                    </li>
                    <li>
                    Необходима кнопка отмены последнего действия.
                    </li>
                    <li>
                    При выходе из программы хотелось бы, чтобы она спрашивала о необходимости
                    сохранить изменения.
                    </li>
                    <li>
                    ГОСТы, ОСТы, ПИ не переносить на другую строку или переносить полностью.
                    </li>
                    <li>
                    На эскизе перечислять все номера операций, к которым относится данный эскиз.
                    </li>
                    <li>
                    В картах наладки также указывать номер операции и номер программы.
                    </li>
                    <li>
                    При промежуточном сохранении технологии в процессе ее написания не видно надпись:
                    «Технология сохранена успешно», если находишься в нижней части документа. Чтобы убедиться в
                    выполнении этой команды, нужно сначала подняться в верхнюю точку документа, а потом
                    сохранить.
                    </li>
                    <li>
                    В своем аккаунте я не могу в полной мере использовать все возможности программы с
                    телефона (что-либо менять и загружать). Это было бы удобно для удаленного решения
                    технологической проблемы.
                    </li>
                    <li>
                    Для разработки техпроцесса на деталь типа «Болт» (а также сборочных изделий другого
                    типа) необходимо иметь возможность добавлять в программе несколько чертежей деталей, их
                    идент. номеров и НИЧ-ей, а также другие нюансы, связанные с разработкой  данного вида
                    технологии изготовления.
                    </li>
                    </ul>
                    </p>
                </section>
                <section>
                    <p>
                    Считаю, что программа microerp может успешно применяться и на других предприятиях.
                    Научиться работать в программе не сложно, пользователь может справиться с этой задачей
                    самостоятельно.
                    </p>
                </section>
                <section>
                    <p style={{textAlign: 'right'}}>26.08.2022 г.</p>
                </section>


                <br/>
                <br/>

                <h4>Локтикова Н.В.</h4>
                <p>Ведущий инженер-технолог</p>
                <section>
                    <p>
                    Я начала использовать программу Мicroerp с марта 2022г. для написания техпроцессов
                    на детали типа «Труба», «Шток». Очень удобно использовать программу для набора
                    техпроцессов на детали с последовательным выполнением большинства технологических
                    операций. Эскизы можно использовать из других программ, например «Компас».
                    </p>
                </section>
                <section>
                    <p>
                    В условиях пандемии возможна работа «на удаленке», но для этого надо:
                    Расширить перечень обозначений применяемого оборудования и инструмента,
                    добавить операции и т.д
                    обеспечить возможность использования папки «Символ».
                    </p>
                </section>
                <section>
                    <p>
                    В целом программа перспективная и не сложная в использовании, может быть
                    использована других предприятиях в разных сферах деятельности.
                    </p>
                </section>
                <section>
                    <p>
                    При возникновении вопросов по программе можно в любое время обратиться к
                    разработчику для устранения проблем.
                    </p>
                </section>
                <section>
                    <p>
                    Недостатки: при добавлении строки в операциях, съезжает весь текст техпроцесса.
                    </p>
                </section>
                <section>
                    <p style={{textAlign: 'right'}}>29.08.2022 г.</p>
                </section>
            </div>
    },



    {
        elementMenu: 'Как подключиться',
        body:
            <div style={{textAlign: 'justify'}}>
                <h3>Как подключиться</h3>
                <br/>
                <section>
                    <p>По всем вопросам подключения необходимо обратиться к автору - Корпусову А.И.</p>
                    <br/>
                    <p>E-mail: kai.nn@mail.ru</p>
                    <p>
                        GitHub:
                        https://github.com/kai-nn
                    </p>
                </section>
            </div>
    },



    {
        elementMenu: 'Об авторе',
        body:
            <div style={{textAlign: 'justify'}}>
                <h3>Изменения</h3>
                <br/>
                <section>
                    <p>Дата изменения</p>
                    <br/>
                    <p>Содержание изменения...</p>
                </section>
            </div>
    },
]