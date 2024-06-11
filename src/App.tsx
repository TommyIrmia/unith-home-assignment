import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { ItemIndex } from "@/pages/ItemIndex"
import { ItemDetails } from "@/pages/ItemDetails"
import { NotFound } from "@/pages/NotFound"

import { AppHeader } from "@/cmps/layout/AppHeader"
import { FallbackRoute } from "@/cmps/common/FallbackRoute"


export function App() {
  return (
    <Router>
      <main className="main-layout">
        <AppHeader />

        <Routes>
          <Route path="/" element={<Navigate to="/item" />} />
          <Route path="/item" element={<ItemIndex />} />
          <Route path="/item/:itemId" element={<ItemDetails />} />

          <Route path="*" element={
            <FallbackRoute>
              <NotFound />
            </FallbackRoute>
          } />
        </Routes>
      </main>
    </Router>
  )
}


