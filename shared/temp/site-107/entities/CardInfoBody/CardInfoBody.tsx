import { useState } from 'react';
import styles from './CardInfoBody.module.css'
import classNames from "classnames";
import ArrowIcon from '../arrow.svg'
import AreaInformation from '../AreaInformation/AreaInformation';
import Info from '../Info/Info';
import InfoWithIcon from '../InfoWithIcon/InfoWithIcon';
export default function CardInfoBody() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={classNames(styles['item'])}>
      {/* <button onClick={toggleDropdown}>click</button> */}
      <div className={classNames(styles['dropdownContent'], { [styles.expanded]: isExpanded })}>


        <div className={classNames(styles['link'])}><ArrowIcon /><a className={classNames(styles['a'])} href="#">Link 1</a></div>
        <div className={classNames(styles['link'])}><ArrowIcon /><a className={classNames(styles['a'])} href="#">Link 1</a></div>
        <div className={classNames(styles['link'])}><ArrowIcon /><a className={classNames(styles['a'])} href="#">Link 1</a></div>
      </div>

      <AreaInformation />
      <Info />
      <InfoWithIcon />
    </div>
  )
}
