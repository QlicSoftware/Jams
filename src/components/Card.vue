<template>
    <div
        class="max-w-xs rounded overflow-hiddn shadow-lg my-2 hover:shadow-xl transition-shadow duration-150"
    >
        <img
            class="h-24 w-full object-cover"
            :src="recipe.image.file.url"
            alt="recipe image"
        />
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
                {{ recipe.title }}
            </div>
            <Rating :rating="recipe.rating"></Rating>
        </div>
    </div>
</template>

<script>
import Rating from "./Rating.vue";
export default {
    components: {
        Rating,
    },
    props: {
        recipe: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style>
</style>