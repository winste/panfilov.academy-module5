<template>
    <section class="banner" >
        <img v-if="this.info" :src="this.info.main.image" class="banner__image" alt="Banner">
        <v-else v-if="!this.info"> Banner</v-else>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    data() {
        return {
            info: null
        }; 
    }, 
    mounted() {
        async function getApi<T>(url: string): Promise<T> {
            return await fetch(url)
            .then(response => response.json())
        }

            getApi('https://module5.7t33n.ru/banners')
                .then(data => this.info = data)
                .catch(error => console.log(error))
        }
    
})
</script>

<style lang="scss">
.banner {
    $bgcolor: rgba(239, 240, 242, 1);
    height: 591px;
    background-color: $bgcolor;
    font-size: 120px;
    color: rgba(232, 234, 236, 1);
    font-weight: 800;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>