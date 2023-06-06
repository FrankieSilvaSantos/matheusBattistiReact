import Item from "../components/Item";

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <li><Item marca="Ferrari" ano_lancamento={1985}></Item></li>

        <li><Item marca="Fiat" ano_lancamento={2000}></Item></li>

        <li><Item marca="Chevvy" ano_lancamento={1989}></Item></li>

        <li><Item ></Item></li>
      </ul>
    </>
  );
}

export default List;
