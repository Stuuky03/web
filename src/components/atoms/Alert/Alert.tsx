import './Alert.scss'

type AlertProps = {
  id: string,
  message: string
}

const Alert = ({ id, message }: AlertProps) => {
  return (
    <div className="alert-content" id={id}>
      <h1>{message}</h1>
    </div>
  )
}

export default Alert