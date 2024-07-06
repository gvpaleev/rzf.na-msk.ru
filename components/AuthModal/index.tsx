import { useUnit } from 'effector-react'
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { Modal } from '@components/Modal'
import { LoginParams } from '@/api/login'
import { $loginError, $token, loginEvent, resetErrorEvent } from '@/utils/store/tokenStore'
import { authModal } from './store/authModal'

export const AuthModal: FC = () => {
  const isOpen = useUnit(authModal.$isModalOpen)
  const closeModal = useUnit(authModal.closeModalEvent);

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      {isOpen ? <LoginForm modal /> : null}
    </Modal>
  )
}

interface LoginFormProps {
  modal?: boolean;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const resetError = useUnit(resetErrorEvent);
  const [formData, setFormData] = useState<LoginParams>({
    username: '',
    password: '',
  })

  useEffect(() => {
    resetError();
  }, [])

  const [loginUser, error, token] = useUnit([loginEvent, $loginError, $token])

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
    <div className={`${props.modal ? '' : 'shadow-md w-80'} bg-white p-8 rounded-lg`}>
      {token  ?
        <h2>Вы успешно авторизованы!</h2> : 
        <>
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
        </>
      }
    </div>
  )
}

export default LoginForm;