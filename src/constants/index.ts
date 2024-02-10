import {
    facebook,
    instagram,
    shieldTick,
    support,
    truckFast,
    twitter,
  } from '../assets/icons'
  import {
    BigShoe1,
    BigShoe2,
    BigShoe3,
    customer1,
    customer2,
    thumbnailShoe1,
    thumbnailShoe2,
    thumbnailShoe3,
  } from '../assets/images'
  
  const menu_list = [
    { label: 'Home', href: '/home' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Contact Us', href: '/contact' },
    // { label: "Sign in / Explore now", href: "/signIn" },
  ]
  
  const statistics = [
    { value: '1k+', label: 'Marcas' },
    { value: '500+', label: 'Tiendas' },
    { value: '250k+', label: 'Clientes' },
  ]
  
  const shoes = [
    {
      thumbnail: thumbnailShoe1,
      bigShoe: BigShoe1,
    },
    {
      thumbnail: thumbnailShoe2,
      bigShoe: BigShoe2,
    },
    {
      thumbnail: thumbnailShoe3,
      bigShoe: BigShoe3,
    },
  ]
  
  const products = [
    {
      imgUrl: BigShoe1,
      name: 'Nike Air Jordan-01',
      price: '$200.20',
      description: 'Coleccion de Invierno',
    },
    {
      imgUrl: BigShoe2,
      name: 'Nike Air Jordan-10',
      price: '$210.20',
      description: 'Coleccion de Invierno',
    },
    {
      imgUrl: BigShoe3,
      name: 'Nike Air Jordan-100',
      price: '$220.20',
      description: 'Coleccion de Invierno',
    },
    {
      imgUrl:BigShoe3,
      name: 'Nike Air Jordan-001',
      price: '$230.20',
      description: 'Coleccion de Invierno',
    },
  ]
  
  export const services = [
    {
      imgUrl: truckFast,
      label: 'Envío gratuito',
      subtext:
        'Disfrute de una compra sin problemas con nuestro servicio de envío gratuito.',
    },
    {
      imgUrl: shieldTick,
      label: 'Pago seguro',
      subtext:
        'Realice transacciones sin preocupaciones con nuestras opciones de pago seguro.',
    },
    {
      imgUrl: support,
      label: 'Me encantaría ayudarte',
      subtext:
        'Nuestro equipo está a su disposición para ayudarle en todo momento.',
    },
  ]
  
  const reviews = [
    {
      imgURL: customer1,
      customerName: 'Morich Brown',
      rating: '4.5',
      feedback:
        'La atención al detalle y la calidad del producto superaron mis expectativas. Muy recomendable.',
    },
    {
      imgURL: customer2,
      customerName: 'Lota Mongeskar',
      rating: '4.5',
      feedback:
        'El producto no sólo cumplió mis expectativas, sino que las superó. Sin duda, volveré a ser cliente.',
    },
  ]
  
  const footerLinks = [
    {
      title: 'Productos',
      links: [
        { name: 'Air Force 1', link: '/' },
        { name: 'Air Max 1', link: '/' },
        { name: 'Air Jordan 1', link: '/' },
        { name: 'Air Force 2', link: '/' },
        { name: 'Nike Waffle Racer', link: '/' },
        { name: 'Nike Cortez', link: '/' },
      ],
    },
    {
      title: 'Ayuda',
      links: [
        { name: 'Nosotros', link: '/' },
        { name: 'FAQs', link: '/' },
        { name: 'Como funciona', link: '/' },
        { name: 'Politicas de privacidad', link: '/' },
        { name: 'Política de pagos', link: '/' },
      ],
    },
    {
      title: 'Póngase en contacto',
      links: [
        { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
        { name: '+92554862354', link: 'tel:+92554862354' },
      ],
    },
  ]
  
  const socialMedia = [
    { src: facebook, alt: 'facebook logo' },
    { src: twitter, alt: 'twitter logo' },
    { src: instagram, alt: 'instagram logo' },
  ]
  
  export { menu_list, statistics, shoes, products, reviews, footerLinks, socialMedia }
  