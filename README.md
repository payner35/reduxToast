# Apollo, Redux, Mantra and Meteor


## An overcomplex attempt to trigger some Toast


 [Snackbars and Toast](https://material.google.com/components/snackbars-toasts.html) are nice simple UI expereinces. The Material UI Snackbar is simple enough to manage via State.

```
 <Snackbar
          open={this.state.open}
          message="Event added to your calendar"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
```

However.. it's important to geek out. Today we have new oportunities to overcomplicate even the simpliest of features. So lets wire up some Toast to a Redux State.. managed by Apollo.. and use Mantra to organise the codebase... on Meteor. Just because ;)


### Modules

There are 2 modules here..

* **core**: Which is where the Toast is managed. You will find some basic redux state to switch the toast on / off.
* **mediaGallery**: Which is part of a personal project to manage a media gallery of images. I have just included enought to demo some of the more advanced Apollo / Redux festureset here. So we got some GraphQL Querys & Mutations. Plus some Redux Thunk goodness


### Obvious Discalimer


This is basic striped down code.. to showcase how I got the various parts working together. Still work in progress, and it's safe to assume a few improvments are still to come.

The whole redux / mantra / appolo mix has been a very confusing learning curve on Meteor. And it's still a maturing stack

I think the idea here is to let Redux handle the local state / domain and send all props to components via Connect(). Not really leveraging MinMongo on the client.  Redux / appollo provids some nice features to manage the fetching / caching / updating of the State. This featureset is goig to improve moving forward with Apollo.


Let me know how you get on.

[@gavin_payne](https://twitter.com/gavin_payne)

