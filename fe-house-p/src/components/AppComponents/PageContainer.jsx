

export default function PageContainer({children}) {
  return (
    <div className="bg-gray-100 px-[20px] py-[20px] lg:px-[100px] md:py-[50px]">
      {children}
    </div>
  )
}