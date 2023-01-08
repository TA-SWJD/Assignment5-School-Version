<script setup>
import { useCart, useStore } from "../store/index.js";

const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);
const cart = useCart();

</script>

<template>
    <Teleport to="body">
        <div class="modal-outer-container" @click.self="emits('toggleModal')">
            <div class="modal-inner-container">
                <button class="close-button" @click="emits('toggleModal')">Close</button>
                <h1>{{ props.id.title }}</h1>
                <p>
                    Release Date: {{ props.id.release_date }} <br />
                    <br /> Overview: {{ props.id.overview }}
                </p>
                <button @click="cart.adding(props.id)">Add To Cart</button>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.modal-outer-container {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #00000099;
    z-index: 3;
}

.modal-outer-container .modal-inner-container {
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 15px;
    background-color: aliceblue;
    width: clamp(280px, 100%, 800px);
    height: 400px;
    position: relative;
}

.modal-outer-container .modal-inner-container .close-button {
    border-radius: 10px;
    position: absolute;
    right: 0px;
    padding: 1rem;
    border: none;
    background: #1F2123;
    font-weight: bold;
    font-size: 1.25rem;
    color: white;
}

p {
    font-size: x-large;
}

button {
    font-size: larger;
    border-radius: 10px;
    width: 200px;
    height: 60px;
    color: white;
    background-color: black;
}

button:hover{
    color: black;
    background-color: white;
}
</style>
