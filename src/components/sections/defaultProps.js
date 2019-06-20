import { BoxUpright, Calendar, Pencil } from 'SRC'
const SubscriptionSectionProps = {
  children: {
    header: {
      title: 'Subscribe + Save',
      content: 'Want more Rockets of Awesome? Try a personalized box, magically delivered every season! It’s <b>the easiest</b> way to get more of the clothes you and your kids love. Bonus: <b>BIG savings</b> every time.'
    },
    details: [
      {
        icon: Pencil,
        header: 'FIRST, TAKE A FUN QUIZ',
        content: 'Tell us about your <b>child’s unique preferences</b> and we’ll pick out 8 styles that are totally them.'
      },
      {
        icon: Calendar,
        header: 'GET BOXES ON YOUR SCHEDULE',
        content: 'We make it <b>super convenient</b> to get more clothes exactly when you want. Pause or cancel your subscription anytime.'
      },
      {
        icon: BoxUpright,
        header: 'SAVE BIG (LIKE REALLY BIG)',
        content: 'Keep your entire box and <b>save up to 25%</b>—or only pay for the items you choose to keep.'
      }
    ],
    footer: {
      link: {
        text: 'LEARN MORE →',
        href: 'https://www.rocketsofawesome.com/?view=subscribe'
      }
    }
  }
}
export { SubscriptionSectionProps }
