import Image from "next/image"
import desktopMainBg from '@/public/assets/bg-intro-desktop.svg';
import mockUps from '@/public/assets/image-mockups.png';
import mobileBg from '@/public/assets/bg-intro-mobile.svg'
import Button from "./Button";

const Main = () => {
  const main = {
    header: "Next generation digital banking",
    body: "Take your financial life online. Your Easybank account will be a one-stop shop for spending, saving, budgeting, investing, and much more"
  }
  return (
    <div className="max-w-screen relative overflow-x-clip">
      <div className="flex max-md:flex-col-reverse max-sm:gap-y-5 sm:pl-10 md:pl-8 lg:pl-16 xl:pl-28 items-center sm:items-start md:items-center overflow-x-clip max-w-screen bg-light-gray">
        <main className="flex-col flex max-xs:*:text-center gap-3 md:gap-5 lg:gap-8 items-center sm:items-start max-sm:px-8 max-sm:pt-8 sm:w-1/3 md:w-35 max-lg:mt-24 max-sm:m-0 max-md:-mt-72 max-md:-translate-y-12">
          <header className="text-2xl lg:text-3xl xl:text-5xl lg:w-5/6 xl:w-full tracking-wide text-dark-blue font-light">{main.header}</header>

          <p className="text-gray-blue sm:text-md lg:text-lg">{main.body}</p>

          <Button />
        </main>
        <Image
          src={mockUps}
          alt="mock-up"
          className="w-5/6 xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-3/5 md:-mt-12 lg:-mt-32 xl:-mt-52 sm:translate-x-96 md:translate-x-40 lg:translate-x-28 xl:translate-x-36 sm:translate-y-12 md:translate-y-20 lg:translate-y-28 xl:translate-y-40 relative z-40" />
      </div>
      <Image
        src={desktopMainBg}
        alt="desktop bg"
        className="absolute hidden sm:block sm:w-full md:w-4/5 lg:w-full sm:-right-56 md:-right-44 lg:-right-96 xl:-right-96 sm:-top-12 md:-top-8 lg:-top-32 xl:-top-48 xl:-mr-32 z-20" />

      <Image
      src={mobileBg}
      alt="mobile bg"
      className="absolute top-0 right-0 w-full block sm:hidden"/>
    </div>
  )
}

export default Main
