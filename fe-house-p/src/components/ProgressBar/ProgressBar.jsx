

export default function ProgressBar({max, pc}) {

  return (
		<div className="flex flex-col xs:flex-row items-center gap-2 ">
			<div className="whitespace-nowrap font-semibold">{pc}%</div>
			<div className="w-full h-4 bg-gray-300 rounded-full ">
				<div className="h-4 bg-[#208C00] rounded-full" style={{width: `${pc}%`}}>
				</div>
			</div>
			<div className="whitespace-nowrap font-semibold">{max} MXN</div>
		</div>
  )
}