import { routes } from '@/shared/configs/routes'
import { SignUp } from '@/widgets/sign-up'
import { Link } from 'react-router-dom'
import styles from './RegisterPage.module.scss'

export const RegisterPage = () => {
  return (
    <>
      <nav className={styles.register__nav}>
        <Link to={routes.base}>На главную</Link>
        <Link to={routes.pages.auth}>Авторизация</Link>
      </nav>
      <SignUp />
    </>
  )
}
