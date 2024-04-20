<template>
	<div v-if="loggedIn">
		<button @click="logout">logout</button>
		<h2>Nombre: {{ user.name }}</h2>
		<h2>Email: {{ user.email }}</h2>
		<img :src="user.picture" alt="" />
	</div>
	<GoogleLogin :callback="callback" prompt auto-login />
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { GoogleLogin, decodeCredential, googleLogout } from 'vue3-google-login';

const loggedIn = ref(false);
const user = ref(null);

const callback = (response) => {
	console.log('login');
	loggedIn.value = true;
	console.log(response);
	user.value = decodeCredential(response.credential);
};

const logout = () => {
	googleLogout();
	loggedIn.value = false;
	user.value = null;
};

watchEffect(() => {
	if (loggedIn.value) {
		console.log('Usuario conectado:', user.value);
	} else {
		console.log('Usuario desconectado');
	}
});
</script>
