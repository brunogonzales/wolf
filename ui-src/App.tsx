import React, { useEffect } from 'react'
import { query, config } from '@onflow/fcl'
import './App.css'

function App() {
	useEffect(() => {
		config().put('accessNode.api', 'https://rest-testnet.onflow.org')
	}, [])

	async function runFirstExample() {
		const cadence = `
    		pub fun main(): Int{
     	 return 42
   		 }
  	`
		const theAnswer = await query({ cadence })
		console.log({ theAnswer })
	}

	return (
		<div className='App'>
			<h1>Hello</h1>
			<div>
				<h2>1. Send a script to Flow</h2>
				<button onClick={runFirstExample}>Run example 1</button>
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
