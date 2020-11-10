<template>
    <Layout>
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl tracking-wider">{{ recipe.title }}</h1>
            <Rating :rating="recipe.rating"></Rating>
        </div>
        <div class="content" v-html="recipe.content" />
        <h2 class="text-2xl mt-6 mb-4">Ingredients</h2>
        <div class="flex">
            <ul class="flex-grow list-disc list-inside">
                <li v-for="ingredient of recipe.ingredients" :key="ingredient">
                    {{ ingredient }}
                </li>
            </ul>
            <div class="w-1/3">
                <img
                    class="w-full object-cover"
                    :src="recipe.image.file.url"
                    alt="Recipe image"
                />
            </div>
        </div>
    </Layout>
</template>

<script>
import Rating from "../components/Rating.vue";
export default {
    components: {
        Rating,
    },
    computed: {
        recipe() {
            return this.$page.recipe;
        },
    },
};
</script>

<page-query>
query ($id: ID!) {
    recipe(id: $id) {
        title
        content(html: true)
        ingredients
        image {
            file {
                url
            }
        }
        rating
    }
}
</page-query>

<style>
</style>