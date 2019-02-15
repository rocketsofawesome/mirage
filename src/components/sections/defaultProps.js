import { BoxIcon, Pencil, Phone } from 'SRC'
const SubscriptionSectionProps = {
  children: {
    header: {
      title: 'Subscribe + Save',
      content: 'Want more Rockets of Awesome? Try a personalized box, magically delivered every season! It’s the easiest way to get more of the clothes you and your kids love. Bonus: BIG savings every time.'
    },
    details: [
      {
        icon: Pencil,
        header: 'FIRST, TAKE A FUN TEST',
        content: 'Tell us about your child’s unique preferences and we’ll pick out 8 styles that are totally them.'
      },
      {
        icon: BoxIcon,
        header: 'GET BOXES ON YOUR SCHEDULE',
        content: 'We make it super convenient to get more clothes exactly when you want. Pause or cancel your subscription anytime. '
      },
      {
        icon: Phone,
        header: 'SAVE BIG (LIKE REALLY BIG)',
        content: 'Keep your entire box and save up to 25%—or only pay for the items you choose to keep.'
      }
    ],
    footer: {
      link: {
        text: 'LEARN MORE →',
        href: 'https://support.rocketsofawesome.com/hc/en-us'
      }
    }
  }
}
export { SubscriptionSectionProps }
