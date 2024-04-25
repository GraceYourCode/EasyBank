interface btnProps {
  navBar?: boolean
}

const Button: React.FC<btnProps> = ({navBar}) => {
  return (
    <button className={`${navBar && "max-lg:hidden"} btn`}>
      Request Invite
    </button>
  )
}

export default Button
