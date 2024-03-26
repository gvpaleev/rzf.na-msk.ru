'use client'

import { LoginParams } from '@/api/login'
import { $loginError, loginEvent } from '@/utils/store/tokenStore'
import { useUnit } from 'effector-react'
import { ChangeEvent, FormEvent, useState } from 'react'

export default function Login() {
  const [formData, setFormData] = useState<LoginParams>({
    username: '',
    password: '',
  })

  const [loginUser, error] = useUnit([loginEvent, $loginError])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((data) => ({
      ...data,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginUser(formData)
  }

  return (
    <div className='bg-white p-8 rounded-lg shadow-md w-80'>
      <h2 className='text-2xl font-semibold mb-4'>Войти</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='login' className='text-dark'>
            Имя пользователя
          </label>
          <input
            id='username'
            name='username'
            className='input mt-1 block w-full'
            value={formData.username}
            placeholder='Введите имя пользователя'
            onChange={handleChange}
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='password' className='text-dark'>
            Пароль
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='input mt-1 block w-full'
            placeholder='Введите пароль'
          />
        </div>
        {error && (
          <>
            <div className='text-error w-full'>{error}</div>
            <div className='divider'></div>
          </>
        )}
        <button type='submit' className='btn btn-primary w-full'>
          Войти
        </button>
      </form>
    </div>
  )
}
