<template>
    <Card>
        <template #title>Martínez Agustina</template>
        <template #body>
            <div>
                <div class="perfil mb-3" shadow radius-border>
                    <img src="/images/yo.jpeg" radius-border nopointer alt="">
                </div>
                <div class="info">
                    <p>
                        ¡Bienvenidos a mi mundo tejido! Soy Agustina, una apasionada estudiante de quinto año de
                        secundaria
                        en Argentina, y estoy encantada de compartir mi amor por el tejido contigo. Desde pequeña, he
                        sentido
                        una conexión especial con las agujas y los hilos, transformándolos en piezas únicas y llenas de
                        vida.
                        <br> <br>
                        Mi emprendimiento nació de la pasión por crear y la necesidad de expresarme de manera artística.
                        Cada
                        proyecto es una nueva aventura, donde combino técnicas tradicionales con toques modernos para
                        ofrecerte
                        accesorios y prendas que no solo son hermosas, sino también únicas.
                        <br> <br>
                        En mi tienda, encontrarás una amplia variedad de productos, desde gorros y bufandas hasta
                        amigurumis
                        y
                        mantas. Cada pieza es tejida a mano con dedicación y cuidado, asegurando la calidad y la
                        originalidad.
                        Además, ofrezco personalizaciones para que puedas tener un accesorio que realmente te
                        represente.
                        Como emprendedora, también me encargo de todas las etapas del negocio: desde la creación y venta
                        hasta
                        la atención al cliente y la gestión del stock. Esto me permite mantener un control total sobre
                        la
                        calidad y la satisfacción del cliente, asegurando una experiencia de compra excepcional.
                        <br> <br>
                        <a href="/productos">¡Te invito a que veas todos mis productos!</a>
                        <br> <br>
                        ¡Bienvenido/a a mi mundo tejido! 🧶✨
                    </p>
                </div>
            </div>


        </template>
    </Card>
</template>

<script setup>
import Card from '../../layout/Card.vue';
import { Input } from 'digitalpower';
</script>

<style scoped>
p {
    text-align: left;
}

.perfil {
    display: block;
    width: 140px;
    height: 120px;
    /* Corregido el error tipográfico */
    display: block;
    background: var(--secondary);

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transform: rotate(270deg);
    }
}
</style>