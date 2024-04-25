import Link from "next/link"

interface navProps {
  text: string,
  footer?: Boolean,
}

const Links: React.FC<navProps> = ({ text, footer }) => {
  return (
    <Link href="/" className={`${footer ? "text-md text-white hover:text-green" : "text-sm text-gray-blue hover:text-dark-blue"}`}>
      {text}
    </Link>
  )
}

export default Links
