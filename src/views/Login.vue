<template>
    <form @submit.prevent="userStore.login()">
        <p>Admin Login</p>
        <input type="username" v-model="userStore.username" placeholder="username"><br>
        <input type="password" v-model="userStore.password" placeholder="password"><br>
        <button type="submit">Login</button>
    </form>
</template>

<script>
import { useUserStore } from '../stores/user/userStore';
    export default {
        setup () {
            const userStore = useUserStore();
            return { userStore }
        }
    }
</script>

<style scoped>
form {
    background-color: rgb(101, 177, 201);
    width: 300px;
    padding: 20px;
    margin: 20px auto;
    text-align: center;
}
</style>