import InputBtn from "../../components/inputBtn/InputBtn"

const LoginView = () => {
  return (
    <div>
      <InputBtn placeholder='Enter email here' onClickHandle={() => {
        console.log('clicked')
      }} />
    </div>
  )
}

export default LoginView