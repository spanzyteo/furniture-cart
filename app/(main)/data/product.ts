import img1 from '../../../public/img1.jpg'
import img2 from '../../../public/img2.jpg'
import img3 from '../../../public/img3.jpg'
import img4 from '../../../public/img4.jpg'
import img5 from '../../../public/img5.jpg'
import img6 from '../../../public/img6.jpg'
import img7 from '../../../public/img7.jpg'
import img8 from '../../../public/img8.jpg'
import img9 from '../../../public/img9.jpg'
import img10 from '../../../public/img10.jpg'
import img11 from '../../../public/img11.jpg'
import img12 from '../../../public/img12.jpg'
import { StaticImageData } from 'next/image'

export interface ProductData {
  id: number
  name: string
  price: number
  image: StaticImageData
}

export const Product: ProductData[] = [
  {
    id: 0,
    name: 'Triple Seat Sofa',
    price: 420,
    image: img1,
  },
  {
    id: 1,
    name: 'Single Seat Sofa',
    price: 210,
    image: img2,
  },
  {
    id: 2,
    name: 'Triple Seat Sofa',
    price: 180,
    image: img3,
  },
  {
    id: 3,
    name: 'Multifunction Bed Red',
    price: 850,
    image: img4,
  },
  {
    id: 4,
    name: 'Minimalist Corner Desk',
    price: 240,
    image: img5,
  },
  {
    id: 5,
    name: 'Decorative Fabric Sofa',
    price: 550,
    image: img6,
  },
  {
    id: 6,
    name: 'Artistic Wood Hanger',
    price: 120,
    image: img7,
  },
  {
    id: 7,
    name: 'Classic Wood Chair',
    price: 170,
    image: img8,
  },
  {
    id: 8,
    name: 'White Blue Bed',
    price: 650,
    image: img9,
  },
  {
    id: 9,
    name: 'Woven Dinning Chair',
    price: 180,
    image: img10,
  },
  {
    id: 10,
    name: 'Classic Colorful Chair',
    price: 200,
    image: img11,
  },
  {
    id: 11,
    name: 'Rattan Triple Seat Sofa',
    price: 380,
    image: img12,
  },
]
