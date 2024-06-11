import { Suspense, lazy } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

// import { ItemIndex } from '@/pages/ItemIndex'
// import { ItemDetails } from '@/pages/ItemDetails'
// import { NotFound } from '@/pages/NotFound'

const ItemIndex = lazy(() => import('@/pages/ItemIndex'));
const ItemDetails = lazy(() => import('@/pages/ItemDetails'));
const NotFound = lazy(() => import('@/pages/NotFound'));

import { AppHeader } from '@/cmps/layout/AppHeader'
import { FallbackRoute } from '@/cmps/common/FallbackRoute'
import { Loader } from "./cmps/common/Loader";


export function App() {
  return (
    <Router>
      <main className="main-layout">
        <AppHeader />

        <Routes>
          <Route path="/" element={<Navigate to="/item" />} />
          <Route path="/item" element={<Suspense fallback={<Loader />}><ItemIndex /></Suspense>} />
          <Route path="/item/:itemId" element={<Suspense fallback={<Loader />}><ItemDetails /></Suspense>} />

          <Route path="*" element={
            <FallbackRoute>
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            </FallbackRoute>
          } />
        </Routes>
      </main>
    </Router>
  )
}


