import React from 'react'
import Head from 'next/head';
import MainLayout from '../components/MainLayout/MainLayout';

import s from '../components/MainLayout/MainLayout.module.css';

import Image from 'next/image';
import img1 from '../public/flav/1.png'
import img2 from '../public/flav/2.png'
import img3 from '../public/flav/3.png'
import img4 from '../public/flav/4.png'
import img5 from '../public/flav/5.png'
import img6 from '../public/flav/6.png'

export default function Sales() {

    return <MainLayout>
        <Head>
            <title>
                Знижки
            </title>
        </Head>

        <div className={s.aboutPageWrap}>
            <h1 className={s.salesH}>
                Знижки у кінотеатрі MeridianCinema
            </h1>

            <p className={s.authorText}>
                У MeridianCinema постійно діють знижки для школярів, студентів, пенсіонерів, людей з iнвалiднiстью, ветеранів, учасників АТО, багатодітних сімей та дітей-сиріт лише у будні дні на стандартні місця у технології CINETECH+. Зверни увагу, що знижка для школярів діє лише у будні дні після 14:00 за виключенням періоду канікул (у період канікул знижка діє протягом усього робочого дня).
                <br />
                <br />
                Знижки надаються студентам стаціонару будь-яких вищих навчальних закладів України та студентам іноземних навчальних закладів (академія, університет, інститут, консерваторія, коледж, технікум, училище).
                <br />
                <br />
                Щоб отримати знижку для організованої групи людей, необхідно обговорити це з адміністрацією у самому кінотеатрі або звернутися в онлайн-чат на сайті чи зателефонувати за номером 0 800 300 600 (щодня з 9:00 до 22:00; безкоштовно по Україні з будь-якого номеру).
                <br />
                <br />
                Якщо людина з iнвалiднiстью хоче прийти до нас, будь ласка, повідом нас про це заздалегідь, щоб ми змогли підготуватися. Якщо тобі необхідна допомога, ми зробимо все можливе, аби забезпечити максимальний комфорт. Для цього необхідно звернутися до адміністрації кінотеатру за номером: 0 800 300 600 (щодня з 9:00 до 22:00; безкоштовно по Україні з будь-якого номеру).
                <br />
                <br />
                Купувати квитки зі знижкою можна на сайті, у додатку та у касі кінотеатру.
                <br />
                <br />
                Щоб купити квиток зі знижкою у касі, тобі необхідно звернутися до каси кінотеатру та предявити учнівський, студентський квиток або інше посвідчення, яке підтверджує твоє право на пільги. При цьому на 1 документ можна придбати тільки 1 квиток у кіно зі знижкою.
            </p>

            <div className={s.blockImages}>
                <div className={s.salesBlock}>

                    <div className={s.wrapperSales}>
                        <Image
                            src={img1}
                            width={300}
                            height={300}
                        />
                    </div>

                    <p className={s.emailSpan}>Знижки онлайн </p>

                </div>

                <div className={s.salesBlock}>

                    <div className={s.wrapperSales}>
                        <Image
                            src={img2}
                            width={200}
                            height={200}
                        />
                    </div>

                    <p className={s.emailSpan}>Знижки НЕ надаються </p>

                </div>

                <div className={s.salesBlock}>

                    <div className={s.wrapperSales}>
                        <Image
                            src={img3}
                            width={200}
                            height={200}
                        />
                    </div>

                    <p className={s.emailSpan}>Дітям до 6 років кіно безкоштовно! </p>

                </div>

                <div className={s.salesBlock}>

                    <div className={s.wrapperSales}>
                        <Image
                            src={img4}
                            width={200}
                            height={200}
                        />
                    </div>

                    <p className={s.emailSpan}>День глядача </p>

                </div>
            </div>



            <p className={s.authorText}>
                Кожного вівторка в усіх кінотеатрах Планети Кіно день глядача.
                <br />
                <br />
                Квитки на непремєрні фільми протягом усього дня за максимально зниженими цінами, а у попкорн-барі і кіномаркеті спеціальна пропозиція на Комбо: попкорн 2,5 л + Pepsi 0,8 л.
                <br />
                <br />
                Зауваж, день глядача не діє у кіноресторані RELUX або якщо на вівторок припадає свято або вихідний.
                <br />
                <br />
                Переглянути вартість квитків у гривнях та бонусах ти можеш, перейшовши на розклад конкретного сеансу та обравши потрібні місця.
                <br />
                <br />
                Керівництво кінотеатру залишає за собою право змінювати ціни на квитки та розмір знижок.
                <br />
                <br />
                У день глядача діють знижки для школярів, студентів, пенсіонерів, інвалідів, ветеранів, учасників АТО, багатодітних сімей, дітей-сиріт та організованих груп відвідувачів. Звертаємо увагу, що вони не сумуються.
            </p>

            <div className={s.blockImages}>
                <div className={s.salesBlock}>

                    <div className={s.wrapperSales}>
                        <Image
                            src={img5}
                            width={200}
                            height={200}
                        />
                    </div>

                    <p className={s.emailSpan}>Клуб MeridianCinema </p>

                </div>

                <div className={s.salesBlock}>

                    <div className={s.wrapperSales}>
                        <Image
                            src={img6}
                            width={200}
                            height={200}
                        />
                    </div>

                    <p className={s.emailSpan}>Розіграші квитків в Facebook та Instagram </p>

                </div>
            </div>

            <p className={s.authorText}>
                У наших кінотеатрах діє програма лояльності Клуб MeridianCinema – роби покупки, отримуй за них бонуси та обмінюй їх на безкоштовні квитки, попкорн та Pepsi. Учасникам Клубу ми даруємо безкоштовний квиток до Дня народження.
            </p>

        </div>


    </MainLayout >
}
