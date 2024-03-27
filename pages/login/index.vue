<template>
  <div>
    <InputText type="text" v-model="email" />
    <Password v-model="password" toggleMask :feedback="false" />
    <Button label="signUp" @click="signUp" />
    <Button label="signIn" @click="signIn" />
  </div>
</template>

<script setup>
const email = ref("");
const password = ref("");

const signUp = async () => {
    const { auth } = useSupabaseClient();
    console.log('auth', auth);
    const { error } = await auth.signUp({
    email: email.value,
    password: password.value,
  });
  if (error) {
    console.log(error);
  }
};
const signIn = async () => {
    const { auth } = useSupabaseClient();
    const { error } = await auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
</style>