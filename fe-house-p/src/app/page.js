import { meme } from '@/assets/images/'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div>
        <br />
        <Image src={ meme } alt='meme' />
      </div>
    </>
  )
}
