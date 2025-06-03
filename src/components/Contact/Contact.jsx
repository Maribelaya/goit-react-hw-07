import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={css.itemContact}>
      <div>Ім'я: {contact.name}</div>
      <div>Номер: {contact.number}</div>
      <button
        className={css.buttonDelete}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Видалити контакт
      </button>
    </li>
  );
}
