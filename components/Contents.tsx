import online from '@/public/assets/icon-online.svg'
import budgeting from '@/public/assets/icon-budgeting.svg'
import onboarding from '@/public/assets/icon-onboarding.svg'
import api from '@/public/assets/icon-api.svg'
import Detail from './Detail'

const Contents = () => {
  const content = {
    header: "Why choose EasyBank?",
    body: "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before"
  }

  interface myObjects{
    id: number,
    image: string,
    alt: string,
    header: String,
    detail: String,
  }

  const details: Array<myObjects> = [
    {
      id: 1,
      image: online,
      alt: "online icon",
      header: "Online Banking",
      detail: "Our modern web and mobile applications allow you to keep track of your finance wherever you are in the world."
    },
    {
      id: 2,
      image: budgeting,
      alt: "budgeting icon",
      header: "Simple Budgeting",
      detail: "See exactly where your money goes each month. Recieve notifications when you are close to hitting your limits."
    },
    {
      id: 3,
      image: onboarding,
      alt: "onboarding icon",
      header: "Fast Onboarding",
      detail: "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
      id: 4,
      image: api,
      alt: "api icon",
      header: "Open API",
      detail: "Manage your savings, investments, pension and much more from one accout. Tracking your money has never been easier."
    },
  ]

  return (
    <div className="bg-light-gray-blue px-4 xs:px-8 sm:px-10 md:px-8 lg:px-16 xl:px-28 py-8 sm:py-12 md:py-20 flex flex-col max-md:items-center gap-3 md:gap-8 relative z-30">
      <header className="text-dark-blue text-2xl lg:text-3xl">
        {content.header}
      </header>

      <p className="md:w-55 max-md:text-center text-gray-blue sm:text-md lg:text-lg">
        {content.body}
      </p>

      <div className='grid md:grid-cols-2 xl:grid-cols-4 md:gap-x-8 gap-y-12 lg:gap-16 xl:gap-x-2 mt-6'>
        {details.map(detail => (
          <Detail alt={detail.alt} detail={detail.detail} header={detail.header}
          image={detail.image} key={detail.id} />
        ))}
      </div>
    </div>
  )
}

export default Contents
