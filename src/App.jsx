import "./App.css";
import Image from "./components/Image";

function App() {
  return (
    <>
      <h1>Image Gallery</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        harum illum inventore ipsum dignissimos possimus qui quisquam.
        Similique, assumenda alias blanditiis, placeat, recusandae iste
        architecto cupiditate earum obcaecati doloremque quisquam.
      </p>
      <div className="myGallery">
        <div>
          <Image
            path="/images/gallery/view.jpeg"
            previewSize="1px"
            width="500px"
            height="500px"
          />
          <p>Size 1px</p>
        </div>
        <div>
          <Image
            path="/images/gallery/view.jpeg"
            previewSize="8px"
            width="500px"
            height="500px"
          />
          <p>Size 8px</p>
        </div>

        <div>
          <Image
            path="/images/gallery/view.jpeg"
            previewSize="64px"
            width="500px"
            height="500px"
          />
          <p>Size 64px</p>
        </div>

        <div>
          <Image
            path="/images/gallery/view.jpeg"
            previewSize="128px"
            width="500px"
            height="500px"
          />
          <p>Size 128px</p>
        </div>

        <div>
          <Image
            path="/images/gallery/view.jpeg"
            previewSize="128px"
            width="500px"
            height="500px"
          />
          <p>Size 128px</p>
        </div>

        <div>
          <Image
            path="/images/gallery/view.jpeg"
            previewSize="512px"
            width="500px"
            height="500px"
          />
          <p>Size 512px</p>
        </div>

        <div>
          <Image
            path="/images/gallery/view.jpeg"
            previewSize="1024px"
            width="500px"
            height="500px"
          />
          <p>Size 1024px</p>
        </div>
      </div>
    </>
  );
}

export default App;
