import { Divider } from '@/components/ui/Divider'
import classNames from 'classnames'
import style from './page.module.css'
import Image from 'next/image'

export default async function Page() {
  return (
    <div className={classNames(style['item'])}>
      <div className={style['header']}>

        <h4 className={style['h4']}>АН в обществе</h4>


        <h1 className={style['h1']}>Социальная значимость</h1>
      </div>

      <div className={style['info']}>
        <div>

          “По опыту ГБУЗ МНПЦ Наркологии ДЗМ” и других учреждений в разных регионах России имеются положительные результаты сотрудничества с сообществом “Анонимные наркоманы” и Фондом содействия сообществу “Анонимные наркоманы”
        </div>
        <div>
          Целями сообщества “Анонимные наркоманы” являются: содействие больным наркоманией в долгосрочном преодолении зависимости и оказание поддержки на этапе интеграции в общество.
        </div>
        <div className={style['signature']}>
          <div>Главный внештатный специалист</div>
          <div>психиатр - нарколог Минздрава РФ</div>
          <div>доктор медицинских наук профессор Е. А. Брюн</div>

        </div>
      </div>
      <Image src='/brun.jpg'
        width={500}
        height={500}
        alt="Picture of the author" />

    </div >
  )
}
