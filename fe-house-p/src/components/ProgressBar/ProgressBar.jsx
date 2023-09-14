import { useEffect, useState } from "react"


export default function ProgressBar({max, pc}) {
	const [width, setWidth] = useState("")

	useEffect(() => {
		setWidth("w-[" + pc + "%] h-4 bg-gray-200 rounded-full")
	})

  return (
		<div className="flex items-center gap-2">
			<div class="w-full h-4 bg-gray-300 rounded-full ">
				<div class="h-4 bg-[#208C00] rounded-full" style={{width: `${pc}%`}}>
				</div>
			</div>
			<div className="whitespace-nowrap font-semibold">{max} MXN</div>
		</div>
  )
}