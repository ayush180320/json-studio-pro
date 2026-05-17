import ReactJson from 'react-json-view'

const sample = {
  movie: {
    title: 'Avatar',
    resolution: '4K',
    codec: 'ProRes'
  }
}

export default function JsonViewer() {
  return (
    <ReactJson
      src={sample}
      theme='monokai'
      collapsed={1}
    />
  )
}
