<template>
  <q-page class="bg-green-2 constrain">


    <div class="row">

    <q-toolbar class="bg-primary text-white shadow-2 text-center">
     <q-icon name="admin_panel_settings" style="font-size: 5em" />
          <q-toolbar-title class="text-h3 q-pa-lg">Notifications</q-toolbar-title>
   </q-toolbar>
    </div>

    <div class="row">
      <q-btn class="q-ma-lg" to="/admin" color="primary" icon="admin_panel_settings" label="Admin Home" />
    </div>

   

  </q-page>
</template>

<script>
export default {
  name: 'AdminHome'
}
</script>
