import PropTypes from "prop-types";
import './HobbyList.css'

/**
 * ? prop-types:
 *   * Kiểm tra kiểu thời gian chạy cho các prop React và các đối tượng tương tự.
 *   * Kiểm tra các prop được truyền cho các thành phần so với các định nghĩa đó và
 *      * cảnh báo trong quá trình phát triển nếu chúng không khớp.
 */

HobbyList.prototype = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
  hobbyList: [],
  active: null,
  onHobbyClick: null,
};

function HobbyList(props) {
  console.log(HobbyList);

  const { hobbyList, activeId, onHobbyClick } = props;

  const handleClick = (hobby) => {
    if(onHobbyClick) {
        onHobbyClick(hobby)
    }
  };

  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby) => (
        <li
          key={hobby.id}
          className={hobby.id === activeId ? "active" : ""}
          onClick={() => handleClick(hobby)}
        >
          {hobby.title}
        </li>
      ))}
    </ul>
  );
}

export default HobbyList;
