import styles from "./Card.module.css";
import { CardProps } from "../../utils/types/props.types";
import { AnimeItemInfo } from "../../utils/types/entities.types";


export default function Card({ anime }: CardProps) {
   return (
      <li className={styles['card']}>
         <p className={styles['card__score']}>{anime.data.score}</p>
         <div className={styles['card__image-wrapper']}>
            <img src={anime.data.images.webp.image_url} alt="anime poster" />
         </div>
         <p className={styles['card__subtitle']}>{anime.data.title}</p>
         <ul className={styles['card__genres-list']}>
            {anime.data.genres.map((genre: AnimeItemInfo) => <li className={styles['card__genre']} key={genre.mal_id}>{genre.name}</li>)}
         </ul>
      </li>
   )
}
