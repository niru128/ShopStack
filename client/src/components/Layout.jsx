// import React from 'react'


// export default function Layout({children}) {
//   return (
//     <div className='min-h-screen w-full bg-cover bg-center flex items-center justify-center' style={{backgroundImage : "url('/images/vd-photography-H0Rm9lZ5hN0-unsplash.jpg')", backgroundSize: 'cover', height: '100vh'}}>
//       <div className='w-full h-full bg-black/50'>{children}</div>
//     </div>
//   )
// }

export default function Layout({ children }) {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="w-full h-full bg-black/40">
        {children}
      </div>
    </div>
  )
}


