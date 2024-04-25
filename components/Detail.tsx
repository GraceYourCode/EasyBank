import Image from 'next/image';

interface detailProps {
  image: string,
  header: String,
  detail: String,
  alt: string,
}

const Detail: React.FC<detailProps> = ({ image, header, detail, alt }) => {
  return (
    <div className='flex flex-col max-md:items-center max-md:text-center gap-y-3 md:gap-y-5 lg:gap-y-8'>
      <Image
        src={image}
        alt={alt} />

      <header className='text-dark-blue sm:text-xl lg:text-2xl'>
        {header}
      </header>

      <p className='text-md text-gray-blue lg:w-3/4 xl:w-full'>
        {detail}
      </p>
    </div>
  )
}

export default Detail
