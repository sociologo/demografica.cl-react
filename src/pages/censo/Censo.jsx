const Censo = () => {
  return (
    <main
      style={{
        width: '100%',
        height: 'calc(100vh - 80px)',
        minHeight: '800px'
      }}
    >
      <iframe
        src="https://christiancastro.shinyapps.io/Censo2024/"
        title="Censo 2024 - Demográfica"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
      />
    </main>
  )
}

export default Censo