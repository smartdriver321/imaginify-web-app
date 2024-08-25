import { transformationTypes } from '@/constants'
import Header from '@/components/shared/Header'

export default function AddTransformationType({
	params: { type },
}: SearchParamProps) {
	const transformation = transformationTypes[type]

	return (
		<>
			<Header title={transformation.title} subtitle={transformation.subTitle} />
		</>
	)
}
