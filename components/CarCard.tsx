`use client`
import {useState} from 'react'
import { CarProps } from '@/types'
import CustomButton from './CustomButton'

const CarCard = ({...car}: CarProps) => {
    const {model,make}  = car
  return (
    <div>
        {model}{make}
    </div>
  )
}

export default CarCard