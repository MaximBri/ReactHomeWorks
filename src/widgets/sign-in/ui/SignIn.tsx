import { signInModel } from '../model/signInModel'
import { Input } from '@/features/input'
import styles from './SignIn.module.scss'

export const SignIn = () => {
  const {
    formRef,
    getError,
    handleChange,
    handleReset,
    handleSubmit,
    inputsData,
  } = signInModel()
  
  return (
    <form
      className={styles.signin__form}
      ref={formRef}
      onSubmit={(e) => handleSubmit(e)}
      onChange={(e) => handleChange(e)}
      onReset={handleReset}
    >
      <Input
        name='login'
        label='Login'
        // radius='xs'
        // description='Enter your login'
        // size='sm'
        // variant='filled'
        asterisk={true}
        placeholder='Login'
        error={getError('login')}
        value={inputsData.login}
      />
      <Input
        name='password'
        label='Password'
        // radius='xs'
        // description='Enter your password'
        // size='xl'
        // variant='default'
        error={getError('password')}
        asterisk={true}
        placeholder='Password'
        value={inputsData.password}
        type='password'
      />
      <button type='submit'>Войти</button>
    </form>
  )
}
