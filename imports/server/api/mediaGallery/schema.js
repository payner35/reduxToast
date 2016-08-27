import { MediaGallery } from '/imports/lib/collections';
import {check} from 'meteor/check';


export const schema = [`

type MediaImage {
    _id: String
    name: String
    cdnUrl: String
    originalUrl: String
    size: Int
    uuid: String
  }

`];


export const resolvers = {
    Query: {
        async allMediaImages(root, args) {
            return MediaGallery.find().fetch();
        },
        async mediaImage(root, args) {
            return MediaGallery.find().fetch();
        }
    },
    Mutation: {
        async addMediaImage(root, { name, cdnUrl }) {
            check(name, String);
            check(cdnUrl, String);
            console.log("in mutation....");
            const id = MediaGallery.insert({ name: name, cdnUrl: cdnUrl });
            return MediaGallery.findOne(id);
        }
    }
};