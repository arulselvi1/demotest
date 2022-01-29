import "./App.css";

export default function App() {
  const name = [
    {
      name: "Suresh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Pnut1RLef27okyv2nkYOoJFEB2MZgnYMJw&usqp=CAU",
    },

    {
      name: "Arul selvi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9WpBFE3QiuPYW2Pztv32Z4AzBhnS0Ya91IA&usqp=CAU",
    },

    {
      name: "Lakshmi",
      image:
        "https://media.istockphoto.com/vectors/anime-girl-with-a-book-on-a-white-background-vector-id491961132?k=20&m=491961132&s=612x612&w=0&h=KeViwDo0h6uyuoSfENNciPEG62Ycz2ryrpwGn-mIEQQ=",
    },
  ];
  return (
    <div className="App">
      {name.map(({ name, image }) => (
        <Name name={name} image={image} />
      ))}
    </div>
  );
}
function Name({ name, image }) {
  return (
    <div className="name">
      <br></br>
      <img src={image} width="300" alt="image1" />
      <h2> Hi I am {name} !!!😀😎</h2>
    </div>
  );
}
