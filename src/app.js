import Vue from 'vue';

window.axios = require('axios');

import Ghibli from './components/Ghibli.vue';

new Vue({
    el: '#app',

    components: {
        Ghibli,
    },

    mounted: function(){
        axios.get('https://ghibliapi.herokuapp.com/films')
            .then(response => this.posts = response.data)
            .catch(error => this.posts = [{title: 'No posts found.'}]);
    },

    data: function(){
        return{
            posts: null,
            like: false
        }
    },

    computed: {
        likedClass: function(){
            return { 
                'likedMovie' : this.like 
            }
        }
    }
});