<template>
  <q-page class="bg-green-2 constrain">


    <div class="row">

    <q-toolbar class="bg-primary text-white shadow-2 text-center">
     <q-icon name="admin_panel_settings" style="font-size: 5em" />
          <q-toolbar-title class="text-h3 q-pa-lg">Administrator</q-toolbar-title>
   </q-toolbar>
    </div>

    <div class="row">
      <q-btn class="q-ma-lg" to="/" color="primary" icon="home" label="Home" />
    </div>

   
   <div class="bg-grey-4 q-ma-lg">
    
    <q-btn class="q-ma-lg full-width q-pa-sm" color="primary" icon="person_pin"  label="Clients" to="/adminClients"/>
    <br>
    <q-btn class="q-ma-lg full-width q-pa-sm" color="primary"  icon="spa" label="Clinic" to="adminClinic"/>
    <br>
    <q-btn class="q-ma-lg full-width q-pa-sm" color="primary" icon="menu_book"  label="Recipes" to="adminRecipes"/>
    <br>
    <q-btn class="q-ma-lg full-width q-pa-sm" color="primary" icon="class"  label="Classes" to="adminClasses"/>
    <br>
    <q-btn class="q-ma-lg full-width q-pa-sm" color="primary" icon="notifications" label="Notifications" to="adminNotif"/>
    <br>
     

   </div>
  </q-page>
</template>

<script>
export default {
  name: 'AdminHome'
}
</script>
