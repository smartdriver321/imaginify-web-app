import Sidebar from '@/components/layout/Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='root'>
			<Sidebar />
			<div className='root-container'>
				<div className='wrapper'>{children}</div>
			</div>
		</main>
	)
}
