import Image from "next/image"

interface articleProps {
  image: string,
  alt: string,
  by: string,
  header: string,
  content: string,
}

const Article: React.FC<articleProps> = ({ alt, by, content, header, image }) => {
  return (
    <div className="rounded-md">
      <Image
      src={image}
      alt={alt}
      className="rounded-t-md w-full"/>

      <div className="flex flex-col gap-y-3 sm:gap-y-5 xl:gap-y-3 p-10 md:p-7 xl:p-4 bg-white rounded-b-md">
        <p className="text-xs text-gray-blue">{`By ${by}`}</p>
        <header className="text-xl text-dark-blue leading-5 font-medium hover:text-cyan cursor-pointer">{header}</header>
        <p className="text-sm text-gray-blue">{content}</p>
      </div>
    </div>
  )
}

export default Article
