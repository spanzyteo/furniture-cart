import { GetStaticProps } from 'next'
import { data, DataItem } from '../data/data'
import Image from 'next/image'

const FirstBody: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-24 flex">
        <h1 className="text-white mx-auto text4">What We Do</h1>
      </div>
      <div className="flex mt-10 mx-auto gap-5 items-center">
        <div className="w-[150px] sm:w-[200px] md:w-[300px] border-b-[#fab702] border-b"></div>
        <div className="h-[8px] w-[8px] rounded-full bg-[#fab702]"></div>
        <div className="w-[150px] sm:w-[200px] md:w-[300px] border-b-[#fab702] border-b"></div>
      </div>
      <div className="flex flex-col md:flex-row mx-auto gap-8">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col gap-5 justify-around">
            <div className="flex items-center text-white gap-2 uppercase font-thin text-sm mt-10">
              <h1 className="text-[#fab702]">{item.title1}</h1>
              <h1>{item.title2}</h1>
            </div>
            <div className="text-sm font-thin lg:w-[380px] md:w-[240px] w-[340px] text-[#BBBBBB]">
              {item.content}
            </div>
            <div className='w-[340px] md:w-[240px] lg:w-[380px] lg:h-[171px] md:h-[103px] h-[169px]'>
                <Image src={item.image} alt="item-image" objectFit='cover'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FirstBody
