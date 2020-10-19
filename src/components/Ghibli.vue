<template>
    <div class="movieCards" :class="likedClass" @click="like = !like">
        <h2 v-text="post.title"></h2><span class="date">({{ post.release_date }})</span>
        <p class="producerDirector">Produced by {{ post.producer }} and directed by {{ post.director }}</p>
        <p v-text="post.description" class="description"></p>
    </div>
</template>

<script>
    export default{
        name: 'Ghibli',
        props: ['post'],
        data: function(){
            return{
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
    }
</script>