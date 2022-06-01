import "./App.css";

function App() {
  const download = async () => {
    const originalImage =
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
      
    const image = await fetch(originalImage);

    //Split image name
    const nameSplit = originalImage.split("/");
    const duplicateName = nameSplit.pop();

    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "" + duplicateName + "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="App">
      <button onClick={(e) => download(e)}>Click to Download</button>
    </div>
  );
}

export default App;
