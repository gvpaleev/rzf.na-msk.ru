import { Divider } from '@/components/ui/Divider'

export default async function Questions() {
  return (
    <div>
      <div>
        <div>
          <h1>Вопросы и ответы</h1>
        </div>
      </div>

      <div>
        <h2>Как работает ваша программа?</h2>
        <p>
          Программа АН - это группы самопомощи, где мужчины и женщины, у которых
          были проблемы с наркотиками, регулярно собираются вместе и делятся
          опытом как им удалось прекратить употреблять наркотики и начать новую
          жизнь.
        </p>
      </div>
      <Divider />
      <div>
        <h2>Точно бесплатно?</h2>
        <p>
          Членство в сообществе Анонимные наркоманы не предусматривает
          обязательных вступительных или регулярных взносов.
        </p>
      </div>
      <Divider />
      <div>
        <h2>
          Почему у вас группы проходят в храме и наркодиспансерах хотя написано
          что вы не имеете отношения к религии и не относитесь к государственным
          структурам?
        </h2>
        <p>
          Собрания АН проходят в различных арендованных помещениях, в том числе
          собрания могут проходит на территориях религиозных, социальных и
          медицинских учреждений. Это не предполагает сотрудничества с какой
          либо из вышеперечисленных типов структур.
        </p>
      </div>
      <Divider />
      <div>
        <h2>Можете меня проводить, я боюсь потеряться?</h2>
        <p>
          Да, мы можем сопроводить вас на ваше первое собрание, оставьте ваш
          номер телефона, в ближайшее время с вами свяжется участник сообщества
          и вы сможете договориться о встрече.
        </p>
      </div>
      <br />
    </div>
  )
}