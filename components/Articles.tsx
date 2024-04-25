import currency from '@/public/assets/image-currency.jpg';
import restaurant from '@/public/assets/image-restaurant.jpg';
import plane from '@/public/assets/image-plane.jpg';
import confetti from '@/public/assets/image-confetti.jpg';
import Article from './Article';

const Articles = () => {

  interface myObjects {
    by: string,
    image: any,
    header: string,
    content: string,
    alt: string
    id: number,
  }

  const articles: Array<myObjects> = [
    {
      id: 1,
      by: "Enoch Balogun",
      content: 'The world is getting smaller and we are becoming more mobile. So why should you be forced to recieve money in a single...',
      header: "Recieve money in any currency wiith no fees",
      image: currency,
      alt: "currency image"
    },
    {
      id: 2,
      by: "John Doe",
      content: 'Ou4r simple budgeting feature allows you to separate out your spendings and set realistic limits each month. That means you...',
      header: "Treat yourself without worrying about money",
      image: restaurant,
      alt:  "restaurant image",
    },
    {
      id: 3,
      by: "Grace YOur Code",
      content: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you are abroad. We'll even show you...",
      header: "Take your Easybank card wherever you go",
      image: plane,
      alt: "plane image",
    },
    {
      id: 4,
      by: "Enoch Balogun",
      content: "After a lot of hard work by the whole team, we're exited to launch our closed beta. It's easy to request an invite through the site...",
      header: "Our invite-only Beta accounts are now live!",
      image: confetti,
      alt: "confetti image"
    },
  ]
  return (
    <div className="flex flex-col py-8 sm:py-12 md:py-20 px-4 xs:px-8 sm:px-10 md:px-8 lg:px-16 xl:px-28 gap-y-10 bg-light-gray">
      <header className="text-2xl lg:text-3xl text-dark-blue">Latest Articles</header>

      <div className='grid md:grid-cols-2 xl:grid-cols-4 md:gap-x-8 gap-y-12 lg:gap-16 xl:gap-x-7'>
        {
          articles.map(article => (
            <Article alt={article.alt} by={article.by} content={article.content}
            header={article.header} image={article.image} key={article.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Articles
