import { FC } from 'react'

import './styles.css'

export const MainLayout: FC = ({ children }) => {
  return (
    <div className='wrapper flex flex-col min-h-screen'>
      <header className='page-header'>Header</header>
      <main className='page-main flex-grow'>{children}</main>
      <footer className='page-footer'>Footer</footer>
    </div>
  )
}
