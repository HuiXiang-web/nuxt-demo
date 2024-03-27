// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/color-mode", "nuxt-primevue", "@nuxt/image", "@vueuse/nuxt", "@nuxtjs/supabase", "@unocss/nuxt"],
  primevue: {
  },
  css: [
    'primevue/resources/themes/aura-light-green/theme.css',
  ],
  supabase: {
    // Options
    url: "https://kprxizlrqlckaoodneid.supabase.co",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwcnhpemxycWxja2Fvb2RuZWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1Mjc1ODksImV4cCI6MjAyNzEwMzU4OX0.RcoZ_bJOImjXIPQLY-z9Q3VY2K3aVI5euYE8zq__7G4",
  },
});