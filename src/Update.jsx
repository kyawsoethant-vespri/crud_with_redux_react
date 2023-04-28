import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./features/user/userSlice";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUsers = users.filter((user) => user.id === id);
  // console.log({existingUsers});
  const { name, email } = existingUsers[0];
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: id, name: userName, email: userEmail }));
    navigate("/");
  };

  return (
    <div>
      <h3>Update User</h3>
      <form>
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <br />
        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
};

export default Update;
