# Apollo, Redux, Mantra and Meteor


## An overcomplex attempt to trigger some Toast


 [Snackbars and Toast](https://material.google.com/components/snackbars-toasts.html) are nice simple UI experiences. The Material UI Snackbar is simple enough to manage via State.

```
 <Snackbar
          open={this.state.open}
          message="Event added to your calendar"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
```

However.. it's important to geek out. Today we have new opportunities to overcomplicate even the simplest of features. So let's wire up some Toast to a Redux State.. managed by Apollo.. and use Mantra to organize the codebase... on Meteor. Just because ;)


### Modules

There is a single module here..

* **core**: Which is where the Toast is managed. You will find some basic redux state to switch the toast on / off. There is also a mutation to add a MediaImage object to a collection.


### GraphQL Schema

Check out the Schema set up on the server.. A lot of the schema is not used in this simple demo app. But there is a clear example of splitting down a schema into separate files.




### What happened to ReduxToast v1?

Great question.. it was a work of art. However, the recent updates to react-apollo introduced the new GraphQL container, which put a spanner in the works to pass props / state and actions to a component.

This latest Toast adventure manages to get everything working again (for now).


### Obvious Disclaimer


This is basic striped down code.. to showcase how I got the various parts working together. Still work in progress, and it's safe to assume a few improvements are still to come.

The whole redux / mantra / apollo mix has been a very confusing learning curve on Meteor. And it's still a maturing stack

I think the idea here is to let Redux handle the local state / domain and send all props to components via Connect(). Not really leveraging MinMongo on the client.  Redux / apollo provides some nice features to manage the fetching / caching / updating of the State. This feature set is going to improve moving forward with Apollo.


If you find this helpful... please follow me.

[@gavin_payne](https://twitter.com/gavin_payne)

