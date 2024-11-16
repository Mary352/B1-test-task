import { useEffect } from "react";
import { NavListItemProps } from "../../utils/types/props.types"
import styles from "./NavListItem.module.css";

function Icon({ textContent }: NavListItemProps) {
   const icons = { home: "home", top: "top" }

   switch (textContent.toLowerCase()) {
      case icons.home:
         return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.4537 0.803197L16.4558 4.49793C17.4198 5.1956 17.9934 6.31112 18 7.50109V14.1895C17.938 16.3342 16.1566 18.0268 14.0116 17.979H3.99789C1.8492 18.032 0.0619475 16.338 0 14.1895V7.50109C0.00659331 6.31112 0.580187 5.1956 1.54421 4.49793L6.54632 0.803197C8.00682 -0.267732 9.99318 -0.267732 11.4537 0.803197ZM4.73684 13.9716H13.2632C13.6556 13.9716 13.9737 13.6535 13.9737 13.2611C13.9737 12.8687 13.6556 12.5506 13.2632 12.5506H4.73684C4.34443 12.5506 4.02632 12.8687 4.02632 13.2611C4.02632 13.6535 4.34443 13.9716 4.73684 13.9716Z" fill="#80858B" />
         </svg>;
      case icons.top:
         return <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.05033 0L5.68033 2.8C4.70137 4.80035 3.38933 6.61962 1.80033 8.18L1.62033 8.35C0.599787 9.34076 0.0166868 10.6977 0.00032528 12.12V12.3C-0.0267046 15.0851 1.63293 17.6101 4.20033 18.69L4.46033 18.8C6.14419 19.5152 8.04646 19.5152 9.73033 18.8H9.79033C12.3769 17.6762 14.0365 15.1099 14.0003 12.29V7.95C13.1383 9.91853 11.5729 11.4946 9.61032 12.37C9.61032 12.37 9.61033 12.37 9.55033 12.37C9.49032 12.37 8.79033 12.66 8.49032 12.37C8.22237 12.0989 8.19672 11.6712 8.43033 11.37L8.50033 11.32H8.55033C10.8461 9.57498 11.3813 6.34172 9.77033 3.95C8.47033 1.97 7.05033 0 7.05033 0Z" fill="#80858B" />
         </svg>;
      default:
         return <></>;
   }
}

export default function NavListItem({ textContent }: NavListItemProps) {
   return (
      <li className={styles['list-item']} >
         <div className={styles['list-item__icon']}>
            <Icon textContent={textContent} />
         </div>
         <a href="#" className={styles['list-item__text']}>{textContent}</a>
      </li>
   )
}
