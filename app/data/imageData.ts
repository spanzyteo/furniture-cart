import commPic from '../../public/comm-pic.jpg'
import hosPic from '../../public/hos-pic.jpg'
import hosPic1 from '../../public/hos-pic1.jpg'
import officePic from '../../public/office-pic.jpg'
import officePic1 from '../../public/office-pic1.jpg'
import resPic from '../../public/res-pic.jpg'
import resPic1 from '../../public/res-pic2.jpg'
import resPic2 from '../../public/res-pic3.jpg'
import { StaticImageData } from 'next/image'

export interface ImageDataStructure {
  id: number;
  section: string;
  image: StaticImageData;
  title: string;
}

export const imageData: ImageDataStructure[] = [
    {
        id: 0,
        section: "commercial",
        image: commPic,
        title: "Restaurant In Texas"
    },
    {
        id: 1,
        section: "hospitality",
        image: hosPic,
        title: "Modern Elegance Suite"
    },
    {
        id: 2,
        section: "hospitality",
        image: hosPic1,
        title: "Apartment Renovation"
    }, 
    {
        id: 3,
        section: "residential",
        image: resPic,
        title: "Eco Green Interior"
    },
    {
        id: 4,
        section: "residential",
        image: resPic1,
        title: "Youtube video"
    }, 
    {
        id: 5,
        section: "residential",
        image: resPic2,
        title: "Summer house"
    },
    {
        id: 6,
        section: "office",
        image: officePic,
        title: "Vimeo Video"
    },
    {
        id: 7,
        section: "office",
        image: officePic1,
        title: "Office On Space"
    }
]