import { FC } from 'react'
import Image from 'next/image'

import { Colors } from '../types'
import { MainBlock } from './MainBlock'
import { OrganizationCard } from './OrganizationCard'

export const ANInComunity: FC = () => (
  <MainBlock title='АН в обществе' color={Colors.RED}>
    <div className='flex flex-col gap-5'>
      <div className='flex gap-5 itemc-center'>
        <p className='text-6xl font-bold text-red-600'>503</p>
        <p className='text-xl font-bold'>Собрания<br /> проводится ежедневно</p>
      </div>
      <div className='flex gap-5 itemc-center'>
        <p className='text-6xl font-bold text-red-600'>185</p>
        <p className='text-xl font-bold'>Групп АН в регионе<br /> Большая Москва</p>
      </div>
    </div>
    <div className='my-10'>
      <p className='text-xl font-black py-2.5'>Взаимодействие:</p>
      <p className='text-base'>У нас есть принцип сотрудничество, но не присоединение, это означает, что мы взаимодействуем с различными государственными структурами и учреждениями или другими организациями, только с целью донести информацию о сообществе до зависимого или его ближайшего окружения.</p>
    </div>
    <div className='flex flex-col gap-5'>
    <OrganizationCard link='#' header='Медецинские учереждения' alt='medical organization' text='Размещаем информационные стенды, проводим презентации врачам в наркологических клиниках. Еще какой-то текст о взаимодействии.Еще какой-то текст о взаимодействии.' imgSrc='/med.svg' />
    <OrganizationCard link='#' header='Аптеки' alt='medical organization' text='Размещаем визитные карточки в прикассовых зонах. Еще какой-то текст о взаимодействии. Еще какой-то текст о взаимодействии.' imgSrc='/pharmacy.svg' />
    <OrganizationCard link='#' header='Общественные организации' alt='public organizations' text='Короткий текст о сотрудничестве с общественными организациями. Еще какой-то текст о взаимодействии.' imgSrc='/OOO.svg' />
    <OrganizationCard link='#' header='СМИ' alt='SMM organization' text='Короткий текст о сотрудничестве со средствами массовой информации. Короткий текст о сотрудничестве со средствами массовой информации.' imgSrc='/smm.svg' />
    </div>
  </MainBlock>
)
