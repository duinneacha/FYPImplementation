<template>
   <q-card>
     
      <q-card-section class="row">
        
        <q-toolbar class="bg-primary text-white">
           <q-toolbar-title>Edit Recipe</q-toolbar-title>
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
         <q-input class="q-mb-xs" filled v-model="Recipe.description" label="Description" dense/>
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
               v-for="(ingredient, index) in Recipe.ingredients"
               track-by="$index"
               :key="ingredient">
                        
               <q-banner rounded class="bg-grey-3">
                  <p class="text-h6">{{ ingredient }}</p>
                  <template v-slot:action>
                    <q-btn color="negative" dense round icon="delete" @click.stop="deleteIngredient(index)" />
                    <q-btn color="primary" dense round icon="edit" @click.stop="editIngredient(index)" />
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
               v-for="(instruction, index) in Recipe.instructions"
               track-by="$index"
               :key="instruction">
                        
               <q-banner rounded class="bg-grey-3">
                  <p class="text-h6">{{ instruction }}</p>
                  <template v-slot:action>
                    <q-btn color="negative" dense round icon="delete" @click.stop="deleteInstruction(index)" />
                    <q-btn color="primary" dense round icon="edit" @click.stop="editInstruction(index)" />
                  </template>
               </q-banner>    
            </div> 

          </div>
        </div>

      </q-card-section>

      <!-- Save or Cancel the Add Recipe Operation -->
      <q-card-actions align="center">
        <q-btn class="q-mr-xl btn-fixed-width" label="Cancel" size="xl" color="warning" v-close-popup />
        <q-btn class="q-ml-xl btn-fixed-width" label="Save" size="xl" color="positive" @click.stop="saveRecipe" />
        
      </q-card-actions>

    <!-- Add Instruction -->
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

    <!-- Edit Instruction -->
    <q-dialog v-model="showEditInstruction"
          full-width 
          transition-show="slide-up"
          transition-hide="slide-down">
          <q-card class="my-card">

            <q-card-section class="row">
             <q-toolbar class="bg-primary text-white">
                 <q-toolbar-title>Edit Instruction</q-toolbar-title>
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
                 <q-btn class="q-ma-md" color="primary" label="Cancel" @click="showEditInstruction = false" />
                 <q-btn class="q-ma-md" color="primary" label="Save" @click="saveEditInstruction"/>
              </div>
            </q-card-section>
          </q-card>
    </q-dialog>

    <!-- Add Ingredient -->
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

    <!-- Edit Ingredient -->
    <q-dialog v-model="showEditIngredient"
       full-width 
       transition-show="slide-up"
       transition-hide="slide-down">
       <q-card class="my-card">
         <q-card-section class="row">
          <q-toolbar class="bg-primary text-white">
              <q-toolbar-title>Edit Ingredient</q-toolbar-title>
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
              <q-btn class="q-ma-md" color="primary" label="Cancel" @click="showEditIngredient = false" />
              <q-btn class="q-ma-md" color="primary" label="Save" @click="saveEditIngredient"/>
           </div>
         </q-card-section>
       </q-card>
    </q-dialog>


  </q-card>  

  
</template>

<script>
export default {
  props: ['recipe'],
  data() {
    return {
      imageUpload: [],
      imageCaptured: false,
      showAddInstruction: false,
      showEditInstruction: false,
      showAddIngredient: false,
      showEditIngredient: false,
      line_instruction: '',
      line_ingredient: '',
      editIndex: null,
      Recipe: {}
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
        this.line_instruction = ''
      }
    },
    editInstruction(indx) {
      console.log("In Edit Instruction . . .")
      this.line_instruction = this.Recipe.instructions[indx]
      this.editIndex = indx
      this.showEditInstruction = true
    },
    saveEditInstruction(indx) {
      console.log("In saveEditInstruction")
      this.Recipe.instructions[this.editIndex] = this.line_instruction
      this.showEditInstruction = false
      this.line_instruction = ''
    },
    saveIngredient() {
      if (this.line_ingredient) {
        this.Recipe.ingredients.push(this.line_ingredient)
        this.showAddIngredient = false
        this.line_ingredient = ''
      }
    },
    editIngredient(indx) {
      console.log("In edit Ingredient . . .")
      this.line_ingredient = this.Recipe.ingredients[indx]
      this.showEditIngredient = true
      this.editIndex = indx
      console.log("index", indx)
    },
    saveEditIngredient() {
      console.log("In saveEditIngredient")
      this.Recipe.ingredients[this.editIndex] = this.line_ingredient
      this.showEditIngredient = false
      this.line_ingredient = ''
    },
    deleteInstruction(indx) {
      console.log("In deleteInstruction . . .")
            this.showDeleteIngredient = false
       this.$q.dialog({
        title: 'Confirm Delete',
        message: 'Would you like to Delete this Instruction?',
        ok: {
          color: 'negative',
          push: true
        },
        cancel:{
          color: 'primary'
        },
        persistent: false
      }).onOk(() => {

        // Delete Ingredient Item here
        // console.log(this.Recipe)
        let removeItem = this.Recipe.instructions.splice(indx, 1)

      }).onCancel(() => {

      })
    },
    deleteIngredient(indx) {
      console.log("In deleteIngredient . . .", indx)
      this.showDeleteIngredient = false
       this.$q.dialog({
        title: 'Confirm Delete',
        message: 'Would you like to Delete this Ingredient?',
        ok: {
          color: 'negative',
          push: true
        },
        cancel:{
          color: 'primary'
        },
        persistent: false
      }).onOk(() => {

        // Delete Ingredient Item here
        // console.log(this.Recipe)
        let removeItem = this.Recipe.ingredients.splice(indx, 1)

      }).onCancel(() => {

      })
    },
    saveRecipe() {
      console.log("In save Recipe")
      console.log("The Recipe is:", this.Recipe)
    }
    
  },
  components: {
    // 'recipe-instructions': require('components/recipes/recipe-instructions.vue').default
  },
  mounted() {
    this.Recipe = Object.assign({}, this.recipe)
    console.log("edit-recipe mounted()")
    console.log(this.recipe)
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

.btn-fixed-width
  width: 200px
</style>