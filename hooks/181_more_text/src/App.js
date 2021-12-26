import "./App.css";
import { Text } from "./component/Text";

const text =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur dolor eos perspiciatis officiis quidem consectetur, optio magni consequatur deleniti cumque perferendis in quo porro voluptas cupiditate aut animi distinctio? Eveniet voluptatum omnis neque vero molestias beatae mollitia quod aut id commodi eius excepturi et tempore quidem quasi, dolorum quae? Ratione consectetur harum placeat nihil ea? Illum eaque ea quam qui reprehenderit, quia libero non? Magni corrupti sit, quidem doloribus quas adipisci eligendi. Earum dolorem iusto quas similique, fuga tenetur ipsam dolore nam repellendus incidunt reprehenderit rerum minus ex. Quibusdam harum eius nobis labore necessitatibus sit fuga voluptas perferendis repellat. Eius accusamus voluptatem sint dolorem at quasi nulla iure alias unde odio, cupiditate harum corporis vero dignissimos tempore. Alias asperiores rerum repellendus minima voluptatum suscipit expedita consequatur ipsum nam nisi ut numquam at, explicabo excepturi cupiditate. Reiciendis nemo, similique esse eveniet illum iure quod velit incidunt aspernatur voluptate amet dolore labore voluptatum molestias quo mollitia veritatis? Quis nam aliquid accusamus obcaecati optio eligendi quam. Qui perferendis quod blanditiis et labore in iure maxime explicabo neque officiis? Optio blanditiis hic minus eius itaque alias saepe amet consequatur ipsam officia aliquid totam, impedit ut reiciendis necessitatibus enim laboriosam corrupti voluptatibus ipsum, fugiat porro.";
const max = 50;
function App() {
  return (
    <div>
      <Text text={text} max={max} />
    </div>
  );
}

export default App;
