import { HashRouter, Route, Routes } from 'react-router-dom'

import { routes } from '@/shared/configs/routes'
import { HomePage } from '@/pages/home'
import { AuthPage } from '@/pages/auth'
import { RegisterPage } from '@/pages/register'
import './styles/reset.scss'
import './styles/App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index path={routes.base} element={<HomePage />} />
        <Route path={routes.pages.auth} element={<AuthPage />} />
        <Route path={routes.pages.register} element={<RegisterPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
