<template>
    <Card>
        <template #title>Mis productos</template>
        <template #body>
            <h2>¡Mirá todos mis productos!</h2>

            <p class="mt-4">Cliquea en el producto que te guste para consultarme por Whatsapp</p>
            <Grid width="128" shadow gapped radius-border class=" photos">
                <a class="producto" v-for="(foto, key) in photos" :key
                    :href="`${wapp}Hola quiero consultar por ${foto.label}!`" target="_blank">
                    <div class="overlay" flex-center>
                        <p>{{ foto.label }}</p>
                    </div>
                    <img radius-border :src="foto.path">
                </a>
            </Grid>
        </template>
    </Card>
</template>

<script setup>
import { ref } from "vue";
import Card from "../../layout/Card.vue";
import { Grid } from "digitalpower";

const photos = ref([
    {
        path: "/images/02.jpeg",
        label: "Ramo de flores"
    },
    {
        path: "/images/05.jpeg",
        label: "Tulipanes"
    },
    {
        path: "/images/06.jpeg",
        label: "Ramo Gris"
    },
    {
        path: "/images/07.jpeg",
        label: "Margarita"
    },
    {
        path: "/images/08.jpeg",
        label: "Lirio"
    },
    {
        path: "/images/09.jpeg",
        label: "Ramo de rosas"
    },
    {
        path: "/images/10.jpeg",
        label: "Rosas Amarillas"
    },
    {
        path: "/images/11.jpeg",
        label: "Rosas"
    },
    {
        path: "/images/12.jpeg",
        label: "Rosas River"
    },
    {
        path: "/images/13.jpeg",
        label: "Rosas Independiente"
    },
    {
        path: "/images/14.jpeg",
        label: "Ballenita"
    },
    {
        path: "/images/15.jpeg",
        label: "Gorrito"
    },

]);

const wapp = `https://wa.me/1125588706?text=`
</script>

<style scoped lang="scss">
img {
    width: 128px;
    height: 128px;
    object-fit: cover;
}

.photos {
    background: var(--primary);
    padding: 2em;
}

.producto {
    cursor: pointer;
    overflow: hidden;
    position: relative;

    &:hover {
        .overlay {
            opacity: .7;
        }
    }

    .overlay {
        background: black;
        width: 100%;
        height: 100%;
        z-index: 100;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 5px;
        opacity: 0;
        transition: opacity var(--duration);

        p {
            color: white;
            width: 90%;
            margin: 0;
            opacity: 100%;
            font-size: .9em;
        }
    }
}
</style>