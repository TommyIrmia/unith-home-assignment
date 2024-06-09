import { useEffect } from "react"
import { useSelector } from "react-redux"

import { RootState } from "./store/store"
import { loadItems } from "./store/actions/item.actions"


export function App() {

  const items = useSelector((state: RootState) => state.itemModule.items)

  useEffect(() => {
    loadItems()
  }, [])

  if (!items) return <div>Loading...</div>
  return (
    <>
      <h1>hello!</h1>
      <pre>
        {JSON.stringify(items, null, 2)}
      </pre>
    </>
  )
}

