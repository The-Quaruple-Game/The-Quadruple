import { AnimatedTestimonialsDemo } from '@/components/animatedtestimonialsdemo/AnimatedTestimonialsDemo'
import Card from '@/components/card/Card'
import { Separator } from "@/components/ui/separator"
import { HeroScrollDemo } from '@/components/heroscrolldemo/HeroScrollDemo'
import { HeroSectionOne } from '@/components/herosection/HeroSectionOne'
// import ThreeDCardDemo from '@/components/threedcarddemo/ThreeDCardDemo'
import image1 from "@/assets/filip.jpg"
import image2 from "@/assets/pascal.jpg"
import image3 from "@/assets/peter.jpg"

type Props = {}

const Home = (props: Props) => {
  const cardData = [
    {
      title: "Level Up Your Skills",
      description: "Gamify your learning and master new skills faster.",
      image: image1,
    },
    {
      title: "Complete Quests",
      description: "Turn everyday tasks into epic missions.",
      image: image2,
    },
    {
      title: "Earn XP & Rewards",
      description: "Collect points, badges, and achievements as you learn.",
      image: image3,
    },
  ];
  return (
    <>
    <HeroSectionOne/>
    <HeroScrollDemo/>
    <Separator />
    <div className="sm:container mx-auto">

    <div className="flex flex-wrap gap-6 justify-center">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>

    </div>
    <AnimatedTestimonialsDemo/>
    </>
  )
}

export default Home
