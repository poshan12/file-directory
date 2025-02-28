import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const fileStructure = [
    {
      name: 'Folder1',
      type: 'folder',
      children: [
        { name: 'file1', type: 'file', },
        { name: 'file1', type: 'file', },
        { name: 'file1', type: 'file', },
        { name: 'file1', type: 'file', },
        {
          name: 'folder2',
          type: 'folder',
          children: [
            { name: 'file1', type: 'file', },
            { name: 'file1', type: 'file', },
            { name: 'file1', type: 'file', },
            { name: 'file1', type: 'file', },

          ]
        }
      ]
    },
    {
      name: 'Folder1',
      type: 'folder',
      children: [
        { name: 'file1', type: 'file', },
        { name: 'file1', type: 'file', },
        { name: 'file1', type: 'file', },
        { name: 'file1', type: 'file', },
        // {
        //   name: 'folder2',
        //   type: 'folder',
        //   children: [
        //     { name: 'file1', type: 'file', },
        //     { name: 'file1', type: 'file', },
        //     { name: 'file1', type: 'file', },
        //     { name: 'file1', type: 'file', }
        //   ]
        // }
      ]
    }
  ]

  return (
    <div>
      {
        fileStructure?.map((data) => {
          return (
            <Direcptry node={data} />
          )
        })
      }
    </div>
  )
}

const Direcptry = ({ node}) => {
  console.log(node);
  const [isopen, setOpen] = useState(false)
  return (
    <div style={{ marginLeft: '5px' }}>
      {
        node?.type !== 'folder' ? <p style={{ marginLeft: '5px' }}> {node?.name}</p> :
          <div style={{ marginLeft: '5px' }}>
            <p onClick={()=>setOpen(!isopen)}>{isopen ? '📂' :'📂'}{node?.name}</p>
            { isopen && node?.children?.map((data) => {
              return <Direcptry node={data} />
            })}
          </div>
      }
    </div>
  )
}
export default App
