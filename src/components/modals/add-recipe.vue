<template>
   <q-card>
     
      <q-card-section class="row">
        
        <q-toolbar class="bg-primary text-white">
           <q-toolbar-title>Add Recipe</q-toolbar-title>
              <q-space />
              <q-btn 
                v-close-popup
                flat 
                rounded
                dense
                icon="close"
                />
            </q-toolbar>
        

        
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="camera-frame q-ma-lg">
          <canvas
            v-show="imageCaptured"
            ref="canvas"
            class="constrain-more"
            height="140"
          />
        </div>


          <q-file
            v-model="imageUpload"
            @input="captureImage"
            label="Choose an image"
            accept="image/*"
            outlined
            class="q-mb-md">
            <template v-slot:prepend>
              <q-icon name="image" />
            </template>
          </q-file>

         <q-input class="q-mb-xs" filled v-model="Recipe.title" label="Recipe Title" dense/>
         <q-input class="q-mb-xs" filled v-model="Recipe.desctiption" label="Description" dense/>
         <q-input class="q-mb-xs" filled v-model="Recipe.benefits" label="Benefits" dense/>

      </q-card-section>

      <q-card-section>


        
        <div class="row">

          <!-- Ingredients -->
          <div class="col q-pa-md">

            <q-toolbar class="bg-primary text-white">
               <q-toolbar-title>Ingredients</q-toolbar-title>
               <q-btn flat round icon="add" @click="showAddIngredient = true"/>
            </q-toolbar>

            <div class="q-mb-xs" 
               v-for="ingredient in Recipe.ingredients"
               :key="ingredient">
                        
               <q-banner rounded class="bg-grey-3">
                  <p class="text-h6">{{ ingredient }}</p>
                  <template v-slot:action>
                    <q-btn color="negative" dense round icon="delete"  />
                    <q-btn color="primary" dense round icon="edit"  />
                  </template>
               </q-banner>    
            </div>
          </div>

          <!-- Instructions -->
          <div class="col q-pa-md">

           <q-toolbar class="bg-primary text-white">
              <q-toolbar-title>Instructions</q-toolbar-title>
              <q-btn flat round dense icon="add" @click="showAddInstruction = true"/>
           </q-toolbar>

           <div class="q-mb-xs" 
               v-for="instruction in Recipe.instructions"
               :key="instruction">
                        
               <q-banner rounded class="bg-grey-3">
                  <p class="text-h6">{{ instruction }}</p>
                  <template v-slot:action>
                    <q-btn color="negative" dense round icon="delete"  />
                    <q-btn color="primary" dense round icon="edit"  />
                  </template>
               </q-banner>    
            </div> 

          </div>
        </div>

      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Save" color="primary" v-close-popup />
      </q-card-actions>


    <q-dialog v-model="showAddInstruction"
          full-width 
          transition-show="slide-up"
          transition-hide="slide-down">
          <q-card class="my-card">

            <q-card-section class="row">
             <q-toolbar class="bg-primary text-white">
                 <q-toolbar-title>Add Instruction</q-toolbar-title>
                 <q-space />
                 <q-btn 
                   v-close-popup
                   flat 
                   rounded
                   dense
                   icon="close"
                   />
               </q-toolbar>
            </q-card-section>


            <q-card-section>
              <q-input outlined v-model="line_instruction" label="Instruction" />

            </q-card-section>
            <q-card-section>
              <div class="row">
                 <q-btn class="q-ma-md" color="primary" label="Cancel" @click="showAddInstruction = false" />
                 <q-btn class="q-ma-md" color="primary" label="Save" @click="saveInstruction"/>
              </div>
            </q-card-section>
          </q-card>
    </q-dialog>


    <q-dialog v-model="showAddIngredient"
       full-width 
       transition-show="slide-up"
       transition-hide="slide-down">
       <q-card class="my-card">
         <q-card-section class="row">
          <q-toolbar class="bg-primary text-white">
              <q-toolbar-title>Add Ingredient</q-toolbar-title>
              <q-space />
              <q-btn 
                v-close-popup
                flat 
                rounded
                dense
                icon="close"
                   />
            </q-toolbar>
         </q-card-section>


         <q-card-section>
           <q-input outlined v-model="line_ingredient" label="Ingredient" />

         </q-card-section>
         <q-card-section>
           <div class="row">
              <q-btn class="q-ma-md" color="primary" label="Cancel" @click="showAddIngredient = false" />
              <q-btn class="q-ma-md" color="primary" label="Save" @click="saveIngredient"/>
           </div>
         </q-card-section>
       </q-card>
    </q-dialog>
  </q-card>  

  
</template>

<script>
export default {
  data() {
    return {
      imageUpload: [],
      imageCaptured: false,
      showAddInstruction: false,
      showAddIngredient: false,
      line_instruction: '',
      line_ingredient: '',
      Recipe: {
        'title': '',
        'description': '',
        'benefits': '',
        'imageUrl': null,
        'ingredients': [
          'Ingredient 1',
          'Ingredient 2',
          'Ingredient 3',
          'Ingredient 4',
          'Ingredient 5',
          'Ingredient 6',
        ],
        'instructions': [
          'Instruction A',
          'Instruction B',
          'Instruction C',
          'Instruction D',
          'Instruction E',
        ]
      }
    }
  },
  methods: {
    captureImage(file) {
      console.log("In capture Image")

      this.Recipe.imageUrl = file
      
      let canvas = this.$refs.canvas
      let context = canvas.getContext('2d')

      let reader = new FileReader()
      reader.onload = event => {
        let img = new Image()
        img.onload = () => {
          canvas.width = img.width
          canvas.height = img.height
          context.drawImage(img,0,0)

          this.imageCaptured = true
        }
        img.src = event.target.result
      }
      reader.readAsDataURL(file)

    },
    saveInstruction() {
      if (this.line_instruction) {
        this.Recipe.instructions.push(this.line_instruction)
        this.showAddInstruction = false
      }
    },
    saveIngredient() {
      if (this.line_ingredient) {
        this.Recipe.ingredients.push(this.line_ingredient)
        this.showAddIngredient = false
        this.line_ingredient = ''
      }
    }
  },
  components: {
    // 'recipe-instructions': require('components/recipes/recipe-instructions.vue').default
  }
  
}
</script>

<style scoped lang="sass">
// .pic-box
//   width: 200px;
//   height: 200px;
//   background: grey;

 .camera-frame
   border: 2px solid $grey-10
   border-radius: 10px
</style>