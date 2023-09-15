import React from 'react'
import { Button } from 'antd'

function HeroButton() {
  return (
    <div>
          <Button
              width={200}
              height={100}
              className='
                    rounded-full
                    md:text-lg
                    text-md
                    text-amber-400
                    border-amber-400
                    md:px-10
                    md:py-4
                    md:pb-10
                    px-8
                    py-3
                    pb-8
            '
          >
              Discover More
          </Button>
    </div>
  )
}

export default HeroButton