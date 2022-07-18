import React, { useEffect } from 'react'
import './App.css'

function App() {
	useEffect(() => {
		if (typeof parent !== undefined) {
			parent?.postMessage?.({ pluginMessage: 'hello' }, '*')
		}
	}, [])

	const runExample1 = () => {
		// TODO
	}
	return (
		<div className='App'>
			<h1>Hello</h1>
			<div>
				<h2>1. Send a script to Flow</h2>
				<button onClick={runExample1}>Run example 1</button>
			</div>
			<button
				onClick={() => {
					parent?.postMessage?.({ pluginMessage: 'close' }, '*')
				}}
			>
				Close
			</button>
		</div>
	)
}

export default App
