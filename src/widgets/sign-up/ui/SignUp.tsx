import { Input } from '@/features/input'
import { signUpModel } from '../model/signUpModel'
import { inputsList } from '../model/inputList'
import styles from './SignUp.module.scss'

export const SignUp = () => {
  const {
    formRef,
    handleChange,
    handleReset,
    handleSubmit,
    inputsData,
    getError,
  } = signUpModel()

  return (
    <form
      className={styles.signup__form}
      ref={formRef}
      onSubmit={(e) => handleSubmit(e)}
      onChange={(e) => handleChange(e)}
      onReset={handleReset}
    >
      {inputsList.map((item) => {
        return (
          <Input
            name={item.key}
            value={inputsData[item.key]}
            label={item.name}
            type={item.type}
            key={item.key}
            asterisk={true}
            error={getError(item.key)}
            valueList={item.valueList}
            decorImagePath={item.decorImagePath}
          />
        )
      })}
      <button type='submit'>Отправить</button>
    </form>
  )
}
