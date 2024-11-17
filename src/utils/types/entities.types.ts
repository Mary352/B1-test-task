export type AnimeTitle = {
   "type": string,
   "title": string
}

export type AnimeItemInfo = {
   "mal_id": number,
   "type": string,
   "name": string,
   "url": string
}

export type Anime = {
   "data": {
      "mal_id": number,
      "url": string,
      "images": {
         "jpg": {
            "image_url": string,
            "small_image_url": string,
            "large_image_url": string
         },
         "webp": {
            "image_url": string,
            "small_image_url": string,
            "large_image_url": string
         }
      },
      "trailer": {
         "youtube_id": string | null,
         "url": string | null,
         "embed_url": string | null,
         "images": {
            "image_url": string | null,
            "small_image_url": string | null,
            "medium_image_url": string | null,
            "large_image_url": string | null,
            "maximum_image_url": string | null
         }
      },
      "approved": boolean,
      "titles": AnimeTitle[] | null,
      "title": string,
      "title_english": string | null,
      "title_japanese": string,
      "title_synonyms": string[],
      "type": string,
      "source": string,
      "episodes": number | null,
      "status": string,
      "airing": boolean,
      "aired": {
         "from": string,
         "to": string | null,
         "prop": {
            "from": {
               "day": number | null,
               "month": number | null,
               "year": number | null
            },
            "to": {
               "day": number | null,
               "month": number | null,
               "year": number | null
            }
         },
         "string": string | null
      },
      "duration": string,
      "rating": string,
      "score": number,
      "scored_by": number,
      "rank": number,
      "popularity": number,
      "members": number,
      "favorites": number,
      "synopsis": string,
      "background": string,
      "season": string | null,
      "year": number | null,
      "broadcast": {
         "day": string | null,
         "time": string | null,
         "timezone": string | null,
         "string": string | null
      },
      "producers": AnimeItemInfo[],
      "licensors": AnimeItemInfo[],
      "studios": AnimeItemInfo[],
      "genres": AnimeItemInfo[],
      "explicit_genres": any,
      "themes": AnimeItemInfo[],
      "demographics": AnimeItemInfo[]
   }
}