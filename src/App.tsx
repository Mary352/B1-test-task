import './App.css';
import Card from './components/Card/Card';
import NavListItem from './components/NavListItem/NavListItem';
import { Anime } from './utils/types/entities.types';

const anime: Anime = {
  "data": {
    "mal_id": 15989,
    "url": "https://myanimelist.net/anime/15989/Saki_Achiga-hen__Episode_of_Side-A_Specials",
    "images": {
      "jpg": {
        "image_url": "https://cdn.myanimelist.net/images/anime/8/45084.jpg",
        "small_image_url": "https://cdn.myanimelist.net/images/anime/8/45084t.jpg",
        "large_image_url": "https://cdn.myanimelist.net/images/anime/8/45084l.jpg"
      },
      "webp": {
        "image_url": "https://cdn.myanimelist.net/images/anime/8/45084.webp",
        "small_image_url": "https://cdn.myanimelist.net/images/anime/8/45084t.webp",
        "large_image_url": "https://cdn.myanimelist.net/images/anime/8/45084l.webp"
      }
    },
    "trailer": {
      "youtube_id": "ZY1g302HTW0",
      "url": "https://www.youtube.com/watch?v=ZY1g302HTW0",
      "embed_url": "https://www.youtube.com/embed/ZY1g302HTW0?enablejsapi=1&wmode=opaque&autoplay=1",
      "images": {
        "image_url": "https://img.youtube.com/vi/ZY1g302HTW0/default.jpg",
        "small_image_url": "https://img.youtube.com/vi/ZY1g302HTW0/sddefault.jpg",
        "medium_image_url": "https://img.youtube.com/vi/ZY1g302HTW0/mqdefault.jpg",
        "large_image_url": "https://img.youtube.com/vi/ZY1g302HTW0/hqdefault.jpg",
        "maximum_image_url": "https://img.youtube.com/vi/ZY1g302HTW0/maxresdefault.jpg"
      }
    },
    "approved": true,
    "titles": [
      {
        "type": "Default",
        "title": "Saki Achiga-hen: Episode of Side-A Specials"
      },
      {
        "type": "Synonym",
        "title": "Saki Achiga-hen: Episode of Side-A Episodes 13"
      },
      {
        "type": "Synonym",
        "title": "14"
      },
      {
        "type": "Synonym",
        "title": "15"
      },
      {
        "type": "Synonym",
        "title": "and 16"
      },
      {
        "type": "Japanese",
        "title": "咲-Saki-阿知賀編 episode of side-A スペシャルエピソード 13話～16話"
      },
      {
        "type": "English",
        "title": "Saki - Episode of Side A Specials"
      },
      {
        "type": "German",
        "title": "Saki - Episode of Side A"
      },
      {
        "type": "Spanish",
        "title": "Saki Episode of Side A"
      },
      {
        "type": "French",
        "title": "Saki - Episode of Side A"
      }
    ],
    "title": "Saki Achiga-hen: Episode of Side-A Specials",
    "title_english": "Saki - Episode of Side A Specials",
    "title_japanese": "咲-Saki-阿知賀編 episode of side-A スペシャルエピソード 13話～16話",
    "title_synonyms": [
      "Saki Achiga-hen: Episode of Side-A Episodes 13",
      "14",
      "15",
      "and 16"
    ],
    "type": "Special",
    "source": "Manga",
    "episodes": 4,
    "status": "Finished Airing",
    "airing": false,
    "aired": {
      "from": "2013-02-20T00:00:00+00:00",
      "to": "2013-08-21T00:00:00+00:00",
      "prop": {
        "from": {
          "day": 20,
          "month": 2,
          "year": 2013
        },
        "to": {
          "day": 21,
          "month": 8,
          "year": 2013
        }
      },
      "string": "Feb 20, 2013 to Aug 21, 2013"
    },
    "duration": "30 min per ep",
    "rating": "PG-13 - Teens 13 or older",
    "score": 7.53,
    "scored_by": 8256,
    "rank": 1832,
    "popularity": 5613,
    "members": 15177,
    "favorites": 22,
    "synopsis": "The semifinal round of the Inter-High Mahjong Championship is still in full swing. After witnessing the extraordinary might of the champion Teru Miyanaga of Shiraitodai High School, the girls of Achiga High School are left bewildered. However, even if the odds are against them, it's not too late yet—the game has just begun.\n\n[Written by MAL Rewrite]",
    "background": "",
    "season": null,
    "year": null,
    "broadcast": {
      "day": null,
      "time": null,
      "timezone": null,
      "string": null
    },
    "producers": [
      {
        "mal_id": 64,
        "type": "anime",
        "name": "Sotsu",
        "url": "https://myanimelist.net/anime/producer/64/Sotsu"
      },
      {
        "mal_id": 104,
        "type": "anime",
        "name": "Lantis",
        "url": "https://myanimelist.net/anime/producer/104/Lantis"
      },
      {
        "mal_id": 717,
        "type": "anime",
        "name": "TV Tokyo Music",
        "url": "https://myanimelist.net/anime/producer/717/TV_Tokyo_Music"
      }
    ],
    "licensors": [],
    "studios": [
      {
        "mal_id": 418,
        "type": "anime",
        "name": "Studio Gokumi",
        "url": "https://myanimelist.net/anime/producer/418/Studio_Gokumi"
      }
    ],
    "genres": [
      {
        "mal_id": 1,
        "type": "anime",
        "name": "Action",
        "url": "https://myanimelist.net/anime/genre/1/Action"
      },
      {
        "mal_id": 46,
        "type": "anime",
        "name": "Award Winning",
        "url": "https://myanimelist.net/anime/genre/46/Award_Winning"
      },
      {
        "mal_id": 24,
        "type": "anime",
        "name": "Sci-Fi",
        "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
      }
    ],
    "explicit_genres": [],
    "themes": [
      {
        "mal_id": 23,
        "type": "anime",
        "name": "School",
        "url": "https://myanimelist.net/anime/genre/23/School"
      },
      {
        "mal_id": 11,
        "type": "anime",
        "name": "Strategy Game",
        "url": "https://myanimelist.net/anime/genre/11/Strategy_Game"
      }
    ],
    "demographics": []
  }
}


export const App = () => {
  return (
    <div className="App">
      <header className="App-header">Jikan</header>
      <div>search</div>
      {/* <nav>Pages navigation</nav> */}
      <nav>
        <ul>
          <NavListItem textContent='Home' />
          <NavListItem textContent='Top' />
        </ul>
      </nav>
      <main>
        <ul className="App-cards-list">
          <Card anime={anime}></Card>
          <Card anime={anime}></Card>
          <Card anime={anime}></Card>
          <Card anime={anime}></Card>
          <Card anime={anime}></Card>
        </ul>

      </main>
      <footer className="App-footer">© All Rights Reserved</footer>
    </div>
  )
}