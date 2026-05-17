import JsonViewer from './components/JsonViewer'

export default function App() {
  return (
    <div style={{
      background: '#09090b',
      color: 'white',
      height: '100vh',
      padding: '20px'
    }}>
      <h1>JSON Studio Pro</h1>

      <JsonViewer />
    </div>
  )
}
