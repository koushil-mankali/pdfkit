import PdfViewerComponent from "./components/PdfViewerComponent";

function App() {
  return (
    <div className="App">
      <div className="PDF-viewer" style={{ width: "100vw", height: "100vh" }}>
        <PdfViewerComponent document={"document.pdf"} />
      </div>
    </div>
  );
}

export default App;
