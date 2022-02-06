import { Link, Outlet, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { ListBox, ContactBtn } from "./ContactListElement.styled";
import { MdOutlineDeleteForever } from "react-icons/md";

const ContactListElement = ({ id, name, number, deleteContact }) => {
  let params = useParams();
  return (
    <li>
      <Link to={`${id}`}>
        <ListBox>
          <span>{name}: </span>
          {number}
          <ContactBtn
            type="button"
            aria-label="delete"
            onClick={() => deleteContact(id)}
          >
            <MdOutlineDeleteForever size={20} color="#F5F5F5" />
          </ContactBtn>
        </ListBox>
      </Link>
      {params.id === id && <Outlet />}
    </li>
  );
};

export default ContactListElement;

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
