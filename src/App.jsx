import ImageDropzone from "./components/ImageDropZone";
import IntermediateDraggableComponent from "./components/IntermediateDraggableComponent";
import PDFDropzone from "./components/PDFDropZone";
import SimpleDraggableComponent from "./components/SimpleDraggableComponent";

const App = () => {
  return (
    <>
      <IntermediateDraggableComponent />
      <SimpleDraggableComponent></SimpleDraggableComponent>
      <ImageDropzone />
      <PDFDropzone />
    </>
  );
};

export default App;
