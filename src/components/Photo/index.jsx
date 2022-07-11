import {  MdDeleteForever, MdFavorite  } from 'react-icons/md'
export const Photo  = ( {
  url, 
  name,
  date="Mon Jul 11 2022 12:33:03 GMT-0500",
  tags
}) => {

  const photoDate = new Date(date);

  return (
    <div>
      <img src={url} alt={name}/>
      <p>{name}</p>
      <p>{photoDate.getFullYear()}</p>
      <div>
        <button><MdDeleteForever/></button>
        <button><MdFavorite/></button>
      </div>
      <ul>
        {tags.map}
      </ul>
    </div>
  )
}
