import { merge } from 'lodash';
import { mediaGalleryResolver } from './mediaGalleryResolver';


export const Schema = [`
    
    
    type MediaImage {
      _id: String
      name: String
      cdnUrl: String
      originalUrl: String
      size: Int
      uuid: String
    }
    
    
    type Query {
      allMediaImages: [MediaImage] 
      mediaImage(id: String): MediaImage
    }
    
    type Mutation {
        addMediaImage(name: String, cdnUrl: String): MediaImage
    }
    
    
    schema {
      query: Query,
      mutation: Mutation
    }
`];





export const schema = [...Schema];
export const resolvers = merge(mediaGalleryResolver);