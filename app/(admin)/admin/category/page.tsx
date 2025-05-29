'use client'
import { MdOutlineAddBox } from 'react-icons/md'
import { categories } from '../utils/category'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

type CategoryType = {
  id: number
  name: string
  image: string
  thumbnailimage: string
}

const Category = () => {
  const router = useRouter()
  const [category, setCategory] = useState<CategoryType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = Cookies.get('adminToken')

        if (!token) {
          console.error('No token found')
          return
        }

        const response = await axios.get(
          'https://api.princem-fc.com/api/categories',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        const categoryData = response.data
        setCategory(categoryData)
        console.log('Fetched category:', categoryData)
        // console.log(products)
      } catch (error) {
        console.error('Error fetching category:', error)
      }
    }

    fetchProducts()
  }, [])
  
  return (
    <div className="bg-white flex flex-col pb-[3rem]">
      <div className="xl:ml-[20rem] mt-8 bg-[#F2F2F2] flex flex-col px-4 w-[90%] lg:w-[1014px] rounded-xl mx-auto mb-8 pb-8">
        <div className="flex items-center justify-between mt-4">
          <h1 className="font-semibold sm:text-xl text-lg">All Category</h1>
          <button
            onClick={() => router.push('/admin/add-new-category')}
            className="px-7 py-2 bg-[#fab702] rounded-[5px] text-white text-[13px] font-semibold hover:text-black hover:opacity-75 active:opacity-60 transition-all duration-500 ease-in-out flex items-center justify-center gap-2"
          >
            <MdOutlineAddBox className="h-[20px] w-[20px]" />
            Add New
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div></div>
          <div>
            <label className="mr-3">Search</label>
            <input
              type="text"
              placeholder=""
              title="search"
              className="border bg-inherit border-black focus:outline-none pl-2 h-[35px] w-[150px] rounded-[4px]"
            />
          </div>
        </div>
        <div className="mt-8 overflow-x-auto relative">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="text-left bg-gray-200 rounded-[6px] text-[#4A5568]">
                <th className="lg:px-16 px-8 py-2 whitespace-nowrap">
                  Category Name
                </th>
                <th className="lg:px-16 px-8 py-2 whitespace-nowrap">
                  Category Image
                </th>
                <th className="lg:px-16 px-8 py-2 whitespace-nowrap">
                  Category Thumbnail
                </th>
              </tr>
            </thead>
            <tbody>
              {category.map((item) => {
                // const Icon = item.icon
                return (
                  <tr key={item.id} className="even:bg-white odd:bg-[#F2F2F2]">
                    <td className="lg:px-16 px-8 py-3">
                      <h1 className="text-md text-[#4A5568]">{item.name}</h1>
                    </td>
                    <td className="lg:px-16 px-8 py-3">
                      <div className="w-[80px] h-[80px] flex items-center justify-center rounded-xl">
                        <img
                          src={item.image}
                          alt="img"
                          className="h-[60px] w-[60px] object-contain"
                        />
                      </div>
                    </td>
                    <td className="lg:px-24 px-16 py-3 ml-4">
                      <div className="w-[80px] h-[80px] flex items-center justify-center rounded-xl">
                        <img
                          src={item.thumbnailimage}
                          alt="img"
                          className="h-[60px] w-[60px] object-contain"
                        />
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Category
