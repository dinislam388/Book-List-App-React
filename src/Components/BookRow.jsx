import React from 'react'
import { MdDelete } from "react-icons/md";


export default function BookRow({book, deleteBooks}) {
    const {isbn, title, author, pubYear} = book
  return (
    <tr>
        <td>{isbn}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>{pubYear}</td>
        <td className='delete_btn' onClick={()=> deleteBooks(isbn)}><MdDelete color='red'/></td>
    </tr>
  )
}