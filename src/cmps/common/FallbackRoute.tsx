import { ReactNode } from "react"
import { Navigate, useLocation } from "react-router"

interface RouteFallbackProps {
	children: ReactNode
}

export function FallbackRoute({ children }: RouteFallbackProps) {
	const location = useLocation()
	if (location.pathname.includes('item')) return <Navigate to="/item" />
	return children
}

