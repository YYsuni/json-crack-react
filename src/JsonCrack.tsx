import { Canvas, MarkerArrow, CanvasContainerProps } from 'reaflow'

export default function JsonCrack(props: CanvasContainerProps) {
	return (
		<Canvas
			{...props}
			arrow={<MarkerArrow />}
			nodes={[
				{
					id: '1',
					text: '1'
				},
				{
					id: '2',
					text: '2'
				}
			]}
			edges={[
				{
					id: '1-2',
					from: '1',
					to: '2'
				}
			]}
		/>
	)
}
