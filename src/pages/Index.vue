<template>
    <Layout>
        <div class="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4 w-full">
            <g-link
                v-for="recipe of recipes"
                :key="recipe.path"
                :to="recipe.path"
            >
                <Card :recipe="recipe"></Card>
            </g-link>
        </div>
    </Layout>
</template>

<script>
import Card from "../components/Card.vue";
export default {
    components: {
        Card,
    },
    metaInfo: {
        title: "Hello, world!",
    },
    computed: {
        recipes() {
            return this.$page.recipes.edges.map(({ node }) => node);
        },
    },
};
</script>

<page-query>
query {
    recipes: allRecipe {
        edges {
            node {
                title
                slug
                name
                rating
                path
                image {
                    file {
                        url
                    }
                }
            }
        }
    }
}
</page-query>
<style>
.home-links a {
    margin-right: 1rem;
}
</style>
