import Loading from "@/components/loading";
import Element from "@/pages/characterList/components/CharacterListElement"

const List = (props: any) => {
    const items = props.characters.map((character: any, i:number) =>
      <Element i={i} character={character}  key={i.toString()} />
    );
    return <div className='list-container'>
      {props.loading ? <Loading/> : <ul className='list'>{items}</ul>}
    </div>
  }
  
 export default List;