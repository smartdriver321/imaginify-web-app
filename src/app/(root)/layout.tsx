import Sidebar from '@/components/layout/Sidebar'
import MobileNav from '@/components/layout/MobileNav'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='root'>
			<Sidebar />
			<MobileNav />
			<div className='root-container'>
				<div className='wrapper'>{children}</div>
			</div>
		</main>
	)
}
