import { useEffect, useState } from "react"


export default function ProgressBar({max, pc}) {
	// const [width, setWidth] = useState(" w-[0%]")

	// useEffect(() => {
	// 	setWidth(` w-[${pc}%]`)
	// })
	const width_p = ` w-[${pc}%]`

  return (
		<div className="flex items-center gap-2">
			<div class="w-[100%] h-4 bg-gray-200 rounded-full dark:bg-gray-300">
				<div class={"h-4 bg-[#208C00] rounded-full " + width_p}></div>
			</div>
			<div className="whitespace-nowrap font-semibold">${max} MXN</div>
		</div>
  )
}