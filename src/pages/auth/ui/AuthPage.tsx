import { Link } from 'react-router-dom'

import { routes } from '@/shared/configs/routes'
import { SignIn } from '@/widgets/sign-in'
import styles from './AuthPage.module.scss'

export const AuthPage = () => {
  return (
    <>
      <nav className={styles.auth__nav}>
        <Link to={routes.base}>На главную</Link>
        <Link to={routes.pages.register}>Регистрация</Link>
      </nav>
      <SignIn />
    </>
  )
}
