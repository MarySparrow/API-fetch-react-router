import React, {useEffect, useState} from 'react' 
import { Link } from 'react-router-dom'

export const AlbumList = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch("https://theaudiodb.com/api/v1/json/1/album.php?i=112024")
      .then((res) => res.json ())
      .then((json) => {
        setAlbums(json.album)
      })

  }, [])

  return (
    <div>
      {albums.map((album) => (
      <div key={album.idAlbum}>
        <img src={`${album.strAlbumThumb}/preview`} alt={album.strAlbum}/>
        <h2>{album.strAlbum}</h2>
        <h3>
          <Link to={`/albums/${album.idAlbum}`}>
            {album.strAlbum}
          </Link>
        </h3>
      </div>
    ))}
    </div>
  )
}