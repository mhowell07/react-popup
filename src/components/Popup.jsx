import { XMarkIcon } from '@heroicons/react/24/solid'
import './Popup.css'

const Popup = (props) => {

  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}><XMarkIcon width="16" height={16} /></button>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Popup

