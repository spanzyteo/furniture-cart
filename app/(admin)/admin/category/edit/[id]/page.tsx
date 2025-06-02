'use client'
import { useParams } from 'next/navigation'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const EditCategory = () => {
  const { id } = useParams()
  const router = useRouter()

  
  return (
    <div>page</div>
  )
}

export default EditCategory