import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import {
	ClerkProvider,
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from '@clerk/nextjs'

import './globals.css'
import { cn } from '@/lib/utils'

const IBMPlex = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-ibm-plex',
})
export const metadata: Metadata = {
	title: 'Imaginify',
	description: 'AI-powered Image Generator',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={cn('font-IBMPlex antialiased', IBMPlex.variable)}>
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}
