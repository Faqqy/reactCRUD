import { INoteProps } from "../common/types";

  const Note = ({content, remove, id}: INoteProps) => {
      const handlerDelete = () => {
          remove(id);
      }
      
  
    return (
      <div className="note">
          <a href="#/" className="note-remove" onClick={handlerDelete}>
          <span className="material-icons">close</span>
          </a>
          <pre>{content}</pre>
    </div>
    );
  };
  
  export default Note