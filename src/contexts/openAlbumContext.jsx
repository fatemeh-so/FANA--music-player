import { createContext, useContext, useState } from 'react'

const OpenAlbumContext = createContext()
function OpenAlbumProvider({ children }) {
  // const [searchParams,setSearchParams]=useSearchParams()

  const [isOpenAlbum, setIsOpenAlbum] = useState(false)
  const [music, setMusic] = useState(null)
  function handelOpenAlbum(music) {
    console.log(isOpenAlbum)
    setIsOpenAlbum((isOpenAlbum) => !isOpenAlbum)
    setMusic(music)
  }
  return (
    <OpenAlbumContext.Provider
      value={{ music, isOpenAlbum, handelOpenAlbum, setIsOpenAlbum }}
    >
      {children}
    </OpenAlbumContext.Provider>
  )
}
function useOpenAlbum() {
  const context = useContext(OpenAlbumContext)
  if (context === undefined)
    throw new Error('OpenAlbumContext was used outside of DarkModeProvider')
  return context
}
export { OpenAlbumProvider, useOpenAlbum }
