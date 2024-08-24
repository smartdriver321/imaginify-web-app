import {
	ClerkProvider,
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from '@clerk/nextjs'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<main className='root'>
				<div className='root-container'>
					<div className='wrapper'>
						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
						{children}
					</div>
				</div>
			</main>
		</ClerkProvider>
	)
}
