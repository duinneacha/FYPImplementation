<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-7">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title  class="text-nunito text-bold">
          <div class="logo-title">
              Ali Dorgan Nurtition & Neuromuscular Therapy
          </div>
          
        </q-toolbar-title>

        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          label="Login"
          class="absolute-right"
          icon="account_circle"/>
        
        <q-btn
          v-else
          @click='logoutUser'
          flat
          label="Logout"
          class="absolute-right"
          icon="account_circle"/>


      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-5"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <EssentialLink 
          :key="link.title"
          v-bind="link"
          v-for="link in essentialLinks"
          />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-5 text-white large-screen-only">
      <q-toolbar>
        <q-toolbar-title>

          <span class="text-overline">www.alinutrition.com</span>
          <span class="text-overline q-pl-md"><q-icon name="email" /></span>
          <span class="text-overline q-pl-md">alinutrition@gmail.com </span>
          <span class="text-overline q-px-md"><q-icon name="telephone" /></span>
          <span class="text-overline q-pl-md"> 087 7727580 </span>
          
        </q-toolbar-title>
        <q-btn flat round dense icon="facebook" class="q-mr-sm" />
        <q-btn flat round dense icon="instagram" class="q-mr-sm" />
      </q-toolbar>
    </q-footer>

    <!-- place QPageScroller at end of page -->
  <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
    <q-btn fab icon="keyboard_arrow_up" color="accent" />
  </q-page-scroller>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    caption: 'Home Screen',
    icon: 'home',
    link: '#/'
  },
  {
    title: 'Nutrition',
    caption: 'Learn all about Alis Nutrition services',
    icon: 'set_meal',
    link: '#/nutrition'
  },
  {
    title: 'Neuromuscular',
    caption: 'Neuromuscular Therapy',
    icon: 'spa',
    link: '#/neuromuscular'
  },
  {
    title: 'Classes',
    caption: 'See upcoming classes',
    icon: 'fitness_center',
    link: '#/classes'
  },
  {
    title: 'FAQ',
    caption: 'Frequently asked questions',
    icon: 'question_answer',
    link: '#/faq'
  },
  {
    title: 'Contact',
    caption: 'Contact Ali Dorgan',
    icon: 'contact_page',
    link: '#/contact'
  },
  {
    title: 'Testimonials',
    caption: 'Client stories',
    icon: 'people',
    link: '#/testimonials'
  },
  {
    title: 'Recipes',
    caption: 'Some nutritious recipes',
    icon: 'menu_book',
    link: '#/recipes'
  },
  {
    title: 'Administrator',
    caption: 'Admistrator functions',
    icon: 'admin_panel_settings',
    link: '#/admin',
    condition: 'loggedIn'
  },
  {
    title: 'Client',
    caption: 'Client Section',
    icon: 'person_pin',
    link: '#/client'
  }

];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  computed: {
    ...mapState('auth',['loggedIn'])
  },
  methods: {
    ...mapActions('auth', ['logoutUser'])
  }
}
</script>

<style >
.logo-title {
  /* color: red; */
  font-size: .7em;
}
</style>