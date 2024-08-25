import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HobbyList from "../components/Home/HobbyList";
import casual from "casual-browserify";
import { addNewHobby, setActiveHobby } from "../actions/hobby";

HomePage.prototype = {};

// ** B1
function HomePage(props) {
  // TODO: Connect redux store

  // ? useSelector khi dùng ở đây thì sẽ là strict comparision
  // ? strict comparision: mỗi lần khi redux store được cập nhật thì useSelector sẽ chạy lại
  // ? và tính toán ra state mới. useSelector so sánh giữa các state mới và cũ (===)
  // ? Nếu giống nhau thì ko strict re-render, Nếu khác nhau thì strict re-render
  // * Nên dùng thế này
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);

  // * KO NÊN dùng thế này
  // * Dùng shallow comparision
  // const hobbyState = useSelector(state => ({
  //     list: state.hobby.list,
  //     activeId: state.hobby.activeId
  // }))

  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    // Random a hobby object: id + title
    const newHobby = {
      id: casual.uuid,
      title: casual.title,
    };

    // Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby)

    dispatch(action)
  }

  return (
    <div className="homepage">
      <h1>Redux - Homepage</h1>

      <button onClick={handleAddHobbyClick}>Random hobby</button>
      <HobbyList hobbyList={hobbyList} activeId={activeId} onHobbyClick={handleHobbyClick}/>
    </div>
  );
}

export default HomePage;
