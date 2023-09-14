

export default function PageContainer({children}) {
  return (
    <div className="bg-gray-100 h-[100vh] px-[100px] py-[30px]">
      {children}
    </div>
  )
}