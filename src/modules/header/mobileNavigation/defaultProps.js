import React from 'react'

export const girlsLinks = [
  {target: '#', text: 'Shop New', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_G_NewArrivals.jpg'},
  {target: '#', text: 'Best Sellers', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_G_BestSellers.jpg'},
  {target: '#', text: 'Graphics Shop', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_G_GraphicTees.jpg'},
  {target: '#', text: 'Tees & Tops', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_G_Tops.jpg'},
  {target: '#', text: 'Sweatshirts', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_G_Sweats.jpg'},
  {target: '#', text: 'Dresses & Skirts', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_G_Dresses.jpg'},
  {target: '#', text: 'Leggings & Sweatpants', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_G_Pants.jpg'},
  {target: '#', text: 'Active', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_G_Active.jpg'},
  {target: '#', text: 'Outerwear', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_G_Outerwear.jpg'},
  {target: '#', text: 'Swim', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_G_Swim.jpg'},
  {target: '#', text: 'Accessories', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_G_Accessories.jpg'},
  {target: '#', text: 'Shop All', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_G_All.jpg'},
  {target: '#', text: 'Next-Level Neon', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_E_Neon.jpg'},
  {target: '#', text: 'Not Your Average Rainbow', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_E_Rainbow.jpg'},
  {target: '#', text: 'Awesome Graffiti', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_E_Graffiti.jpg'},
  {target: '#', text: 'Vacation-Ready Styles', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_E_Vacation.jpg'}
]

export const boysLinks = [
  {target: '#', text: 'Shop New', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_B_NewArrivals.jpg'},
  {target: '#', text: 'Best Sellers', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_B_BestSellers.jpg'},
  {target: '#', text: 'Graphics Shop', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_B_GraphicTees.jpg'},
  {target: '#', text: 'Tees & Tops', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_B_Tops.jpg'},
  {target: '#', text: 'Sweatshirts', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_B_Sweats.jpg'},
  {target: '#', text: 'Pants & Shorts', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_B_Pants.jpg'},
  {target: '#', text: 'Active', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_B_Active.jpg'},
  {target: '#', text: 'Outerwear', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_B_Outerwear.jpg'},
  {target: '#', text: 'Swim', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_B_Swim.jpg'},
  {target: '#', text: 'Accessories', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_B_Accessories.jpg'},
  {target: '#', text: 'Shop All', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_B_All.jpg'},
  {target: '#', text: 'Next-Level Neon', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_E_Neon.jpg'},
  {target: '#', text: 'Awesome Graffiti', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_E_Graffiti.jpg'},
  {target: '#', text: 'Vacation-Ready Styles', src: 'https://res.cloudinary.com/roa-canon/web/megamenu/NAV_E_Vacation.jpg'}
]

export const renderLink = (inProps) => {
  const {target, children, ...props } = inProps
  return (<a href={target} {...props}>{children}</a>)
}
