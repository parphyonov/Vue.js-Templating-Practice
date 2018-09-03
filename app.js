// 1. Create a new Vue instance with the necessary options: el, data and methods.
// Attach the new Vue instance to the div with the ID of "app".
// 2. Create the following properties on the data object: title, summary, thumbnail, alt, and votes.
// 3. Use mustache syntax to display the vote count, title, and summary in the Vue template.
// 4. Use v-bind to display the thumbnail image in the <img> tag.
const app = new Vue({
  el: '#app',
  data: {
    //   Make up data for the "title" and "summary" properties.
    title: 'Technical Achievement #101',
    summary: 'The summary of the article is essentially summary.',
    //   For the thumbnail image, use a URl that links to your own photo or use this link to use a placeholder image:
    //   'https://placeimg.com/75/75/any'.
    thumbnail: 'https://placeimg.com/75/75/any',
    alt: 'Some Alt Text',
    //   The value of "votes" should be 0.
    votes: 0
  },
  methods: {
    // 5. On the Vue instance, create a method called "increment" that adds 1 vote to the "votes" property
    increment: function() {
      this.votes += 1;
    }
  }
});

// 6. On the Vue instance, create a method called "decrement" that substracts 1 vote from the "votes" property

// 7. On the #voteCounter span elements, use v-on directive to call the increment or decrement methods
// so that the vote count goes up and down each time the + or - symbols are clicked.
