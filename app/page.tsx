'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const trumpDollars = [
  '/use.jpg',
  '/trump00.png',
  '/trump11.png',
  '/trump1.png',
  '/trump2.png',
  '/trump3.png',
  '/trump4.png',
  '/trump5.png',
  '/trump6.png',
  '/trump7.png',
  '/trump8.png',
  '/trump9.png',
  '/trump10.png',
  '/trump11.png'
]

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % trumpDollars.length)
  }

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl bg-white shadow-xl">
        <CardHeader className="bg-green-500 text-white">
        <CardTitle className="text-center">
  The Golden State's Trumped-Up Treasury 
  <br /> 
  <span style={{ fontSize: "16px", margin: "10px 0", display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}> 
    CA : DPGPZXEVh8XEtxpzzdhx6QiPRf3HFuUCwAUrDUg9pump 
  </span>
</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-6">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-64 md:h-96"
            >
              <Image
                src={trumpDollars[currentImage]}
                alt={`Trump Dollar ${currentImage + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
          
          <div className="text-center mb-6">
            <Button onClick={nextImage} className="bg-green-500 hover:bg-green-600 text-white">
              Show Me The Money!
            </Button>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Even ‘Chyyyy-na’ can buy it!. Just USE1$.</h2>
            <p className="text-gray-600">
            It’s called USE1$. Even Chyyyy-na can buy it. Just one dollar, folks. One dollar! Believe me, it’s the best deal. Tremendous!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

