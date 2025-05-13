import { routes } from '@/shared/configs/routes'
import { Link } from 'react-router-dom'
import styles from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <nav className={styles.home__nav}>
      <Link to={routes.pages.auth}>Авторизация</Link>
      <Link to={routes.pages.register}>Регистрация</Link>
    </nav>
  )
}
