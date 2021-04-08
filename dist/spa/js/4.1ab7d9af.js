(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{2766:function(e,t,i){"use strict";i("d1c9")},"8c42":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"bg-green-2 constrain"},[i("div",{staticClass:"row"},[i("q-toolbar",{staticClass:"bg-primary text-white shadow-2 text-center q-mb-lg"},[i("q-icon",{staticStyle:{"font-size":"5em"},attrs:{name:"menu_book"}}),i("q-toolbar-title",{staticClass:"text-h3 q-pa-md"},[e._v("Recipes")])],1)],1),i("q-btn-group",{staticClass:"p-mt-md",attrs:{push:"",spread:"",bordered:""}},[i("q-btn",{attrs:{push:"",label:"Admin Home",bordered:"",to:"/admin",color:"primary",icon:"admin_panel_settings"}}),i("q-separator",{staticClass:"q-ma-xs",attrs:{vertical:"",inset:""}}),i("q-btn",{attrs:{push:"",label:"Recipes Page",to:"/recipes",color:"primary",icon:"menu_book"}}),i("q-separator",{staticClass:"q-ma-xs",attrs:{vertical:"",inset:""}}),i("q-btn",{attrs:{push:"",label:"Add Recipe",color:"primary",icon:"add"},on:{click:function(t){e.showAddRecipe=!0}}})],1),e._l(e.recipeData,(function(t){return i("div",{key:t.id,staticClass:"q-mb-xs"},[i("q-banner",{staticClass:"bg-grey-3",attrs:{rounded:""},scopedSlots:e._u([{key:"avatar",fn:function(){return[t.imageUrl?i("img",{staticStyle:{width:"75px",height:"75px"},attrs:{src:t.imageUrl}}):i("img",{staticStyle:{width:"75px",height:"75px"},attrs:{src:e.noImageUrl}})]},proxy:!0},{key:"action",fn:function(){return[i("q-btn",{attrs:{color:"primary",round:"",icon:"edit"},on:{click:function(i){return e.showObject(t)}}})]},proxy:!0}],null,!0)},[i("p",{staticClass:"text-h6"},[e._v(e._s(t.title))])])],1)})),i("div",{staticClass:"q-pa-xl"},[i("p")]),i("q-dialog",{attrs:{persistent:"",maximized:e.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:e.showAddRecipe,callback:function(t){e.showAddRecipe=t},expression:"showAddRecipe"}},[i("add-recipe")],1)],2)},a=[],o={name:"AdminRecipes",data:function(){return{showEditRecipe:!1,maximizedToggle:!0,showAddRecipe:!0,noImageUrl:"./assets/No-image-available.png",recipeData:[{id:"001",title:"Ali’s Ferrero Rocher balls",description:"Makes 9 balls or 18 small ones",benefits:"Rich in electrolytes and protein",imageUrl:"../assets/ferror-rocher-balls.jpg",nutritionalData:["Macros per ball (9)","Calories: 357","Carbohydrates: 33g","Fibre: 3.6g","Fats: 21g","Protein: 7g"],ingredients:["Paleo beef gelatine or protein 1.5 scoops (15g)","1 medium well ripened banana","200g medjool dates","200g dairymilk plain chocolate or dark chocolate","200g ground roasted hazelnuts"],instructions:["Soak the dates in boiled water or hot apple juice if you want (calories not included for apple juice) for 10 minutes","Then take out the pips and pop them into the food processor and blitz until smooth. Add the banana and blitz, then add the hazelnuts and blitz until all is well blended.","Add the beef gelatine and mix well as it will harden quickly.","Roll into the 9 balls and place in a container. Pop into the freezer for 30 minutes.","After 30 minutes melt the milk chocolate in a bowl of boiling water and then dip each frozen ball into the bowl until well covered. Place on a baking sheet and leave in the fridge for 2 hours to defrost and harden.","Enjoy"]},{id:"002",title:"Coconut chilli butternut and lentil soup",description:"Coconut chilli butternut and lentil soup",benefits:"",imageUrl:"../assets/chilli-soup.jpg",nutritionalData:[],ingredients:["3 cloves of Garlic","1 Onion","2 Medium Butternut Squash (800g – 1 kg)","400ml tin of Coconut Milk","2 Litres of Vegetable Stock/chicken stock","2 Tsp of Salt","1 Tsp of Pepper","Turmeric 1 stick chopped","parsley","Chilli Flakes","one tin of lentils drained and precooked"],instructions:["Roast butternut in skin for 40 minutes at 180 deg.","Prep garlic and onion and slice finely ","Add 2 tbsp of oil to pan, add garlic and onion and fry until soft ","Scoop out roasted butternut into pan","Add salt ","Add a couple of fresh parsley  ","Next add coconut milk and 2 litres of vegetable stock, bring to the boil and simmer until squash is soft","Season with 1/2 tsp of black pepper ","Blitz in a food processor and top with toasted pumpkin seeds and chill flakes"]},{id:"003",title:"Smoothie tips",description:"Pick one fruit and add one vegetable Adding protein really helps to slow down the sugar release and keep you full for longer- you can do this by adding 1 scoop of Kinetica vanilla protein powder/vegan protein may need 2 scoops to get 25g protein or you can add some natural low-fat yoghurt 3 tablespoons",benefits:"",imageUrl:"",nutritionalData:[],ingredients:["Also add some good fats either: ¼ avocado or 1 tablespoon nut butter or 1 tablespoon tahini paste ","Add liquid: water or low fat milk or dairy free milk (Kokonut or almond or oat) do not add fruit juice its too high in sugar","Add some ice at the end to make it easier to drink and if you need add 1 tbsp honey while making it"],instructions:["Option 1:","1 medium banana (fresh or frozen)","½ cup sliced strawberries, blueberries, or chopped mangos.","¼ cup 2% plain Greek yogurt.","1 tablespoon almond butter.","½ cup baby spinach.","½ cup unsweetened almond milk.","Optional: 1-2 basil leaves, 2-3 mint leaves, ½ teaspoon peeled, chopped ginger.","","Option 2:","cup frozen unsweetened raspberries","¾ cup chilled unsweetened almond or rice milk","¼ cup frozen pitted unsweetened cherries or raspberries","1½ Tbsp honey","2 tsp finely grated fresh ginger1 tsp ground flaxseed ","squeeze fresh lemon juice","","Option 3 (my favourite)","1 large handful frozen rasperries blended on their own first","Add 200ml kokonut milk, 1 tablespoon tahini, 1 scoop whey protein, 1 tablespoon almond butter and blitz with 1 tsp honey "]},{id:"004",title:"Ali’s Easy Curry Recipe",description:"A lovely easy healthy curry ",benefits:"",imageUrl:"",nutritionalData:[],ingredients:["1 red onion chopped fine","Coconut oil 2 tablespoons","2 garlic cloves","1 tablespoon Hot Curry Powder","1 tablespoon Garam Massalla","1 tablespoon Tumeric","Black pepper and Sea Salt","1 tsp Ginger","1-2 Cardamom seeds","1 tsp lemongrass squeeze tube","Chilli flakes","2 chicken breasts","1 tin coconut milk light","½ can chopped tomatoes","Mixed vegetables and rice "],instructions:["In a solid pot melt the coconut oil and add the onion. Let the onion caramelise then add the spices. Stir it well then add the chopped chicken and brown the meat.","Add in the vegetables, the coconut milk and tomatoes and leave on low heat to tenderise for about 2 hours or longer. ","Serve with a small portion of rice about 4-5 tablespoons cooked or if watching calories and weight use cauliflower rice and stir-fry in a pan with a bit of butter.","Garnish with fresh coriander if you have it."]},{id:"005",title:"Spinach falafels (x6)",description:"Spinach falafels",benefits:"",imageUrl:"",nutritionalData:[],ingredients:["2 Cloves of Garlic, Minced","1 Can of Soaked Chickpeas, Drained (about 240g when drained)","1 Large Handful of Spinach","2 Heaped Teaspoons of Tahini","1/4 Teaspoon of Coarse Salt","1 Teaspoon of Cumin","Sesame seeds for coating"],instructions:["Start by draining the chickpeas and rinsing them. Add them to your food processor with the spinach, tahini, minced garlic, salt and cumin. Pulse until it’s just starting to come together. Don’t overblend, you want it to be a chunky paste that holds together when shaped but isn’t smooth.","Taste the mixture and and season with salt and pepper as needed.","Use your hands to roll the mixture into balls and then roll them in sesame seeds to coat. Drizzle the olive oil into your empty roasting tray, then add in the balls and shake it gently so they roll around in the oil.","Bake at 200’C for 25 minutes until golden."]},{title:"Aubergine/Courgette and red pepper Lasagne",description:"Aubergine/Courgette and red pepper Lasagne (Also works well with butternut sliced thinly or sweet potatoe slices)",benefits:"Pasta free",imageUrl:"../assets/recipe_lasagne.png",nutritionalData:[],ingredients:["3 courgettes or 2 aubergines or use half of both","2 large red sweet pepper","3 cloves of garlic","1 red onion","300-400g Organic mince meat","1 tablespoon coconut oil","1 tsp Himalayan salt","8 baby mushrooms","A big bowl of spinach","Half a jar tomato puree passatta or 1 tin tomatoes ","Tub of ricotta cheese or mascarpone cheese or cream from coconut cream and 1 tablespoon xanthan gum to thicken it, xanthan gum is easier on the digestion than corn flour available in Supervalu) ","Cheddar cheese/ parmesan/ mozzarella or a mixture of all three (take it easy on the sprinkling) or sub in dairy free cheese ","extras optional: ½ chilli, handful fresh basil, miso paste 1 tsp, cayenne pepper, fresh coriander"],instructions:["In a big pan, melt the oil, soften one finely chopped red onion, add in the mince and brown it, break it up while its cooking. Add in Cayenne, salt, black pepper, oregano or any herbs that you like basil, coriander work well","Add in chopped mushrooms, 1 red pepper chopped very fine, add the garlic minced, spinach and leave to simmer for a few minutes. Then add in tomato passatta and leave to simmer","Chop the aubergine/ courgettes along lengthways in thin slices like lasagne sheets. Do the same with the red pepper/sweet potatoe/butternut if opting for them instead.","Dairy free option: Mix tinned coconut cream in a bowl with the xantham gum and if you have time heat at a very low heat until it thickens.","Protein rich option: use ricotto cheese for high protein or mascarpone but its higher calories and lower protein ","Get a baking dish and place a layer of the mince/veg into the bottom of the dish and layer with aubergine/courgette and add some cream and cheese and repeat with the mince combo and layer again. For the top layer ensure the courgette/aubergine has been covered in cream and some cheese and sprinkle oregano on top.","Bake in Oven at 160 degrees (fan assisted oven) for 40 mins and then for a further 10 minutes at 180 degrees "]}]}},methods:{showObject:function(e){console.log("In showObject . . . ."),console.log(e),this.showEditRecipe=!0}},components:{"add-recipe":i("a5dd").default}},s=o,r=(i("f0cf"),i("2877")),l=i("9989"),c=i("65c6"),d=i("0016"),p=i("6ac5"),u=i("9c40"),h=i("e7a9"),m=i("eb85"),g=i("54e1"),b=i("24e8"),f=i("eebe"),w=i.n(f),v=Object(r["a"])(s,n,a,!1,null,"b79629e6",null);t["default"]=v.exports;w()(v,"components",{QPage:l["a"],QToolbar:c["a"],QIcon:d["a"],QToolbarTitle:p["a"],QBtn:u["a"],QBtnGroup:h["a"],QSeparator:m["a"],QBanner:g["a"],QDialog:b["a"]})},a5dd:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-card",[i("q-card-section",{staticClass:"row"},[i("q-toolbar",{staticClass:"bg-primary text-white"},[i("q-toolbar-title",[e._v("Add Recipe")]),i("q-space"),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",rounded:"",dense:"",icon:"close"}})],1)],1),i("q-card-section",{staticClass:"q-pt-none"},[i("div",{staticClass:"camera-frame q-ma-lg"},[i("canvas",{directives:[{name:"show",rawName:"v-show",value:e.imageCaptured,expression:"imageCaptured"}],ref:"canvas",staticClass:"constrain-more",attrs:{height:"140"}})]),i("q-file",{staticClass:"q-mb-md",attrs:{label:"Choose an image",accept:"image/*",outlined:""},on:{input:e.captureImage},scopedSlots:e._u([{key:"prepend",fn:function(){return[i("q-icon",{attrs:{name:"image"}})]},proxy:!0}]),model:{value:e.imageUpload,callback:function(t){e.imageUpload=t},expression:"imageUpload"}}),i("q-input",{staticClass:"q-mb-xs",attrs:{filled:"",label:"Recipe Title",dense:""},model:{value:e.Recipe.title,callback:function(t){e.$set(e.Recipe,"title",t)},expression:"Recipe.title"}}),i("q-input",{staticClass:"q-mb-xs",attrs:{filled:"",label:"Description",dense:""},model:{value:e.Recipe.description,callback:function(t){e.$set(e.Recipe,"description",t)},expression:"Recipe.description"}}),i("q-input",{staticClass:"q-mb-xs",attrs:{filled:"",label:"Benefits",dense:""},model:{value:e.Recipe.benefits,callback:function(t){e.$set(e.Recipe,"benefits",t)},expression:"Recipe.benefits"}})],1),i("q-card-section",[i("div",{staticClass:"row"},[i("div",{staticClass:"col q-pa-md"},[i("q-toolbar",{staticClass:"bg-primary text-white"},[i("q-toolbar-title",[e._v("Ingredients")]),i("q-btn",{attrs:{flat:"",round:"",icon:"add"},on:{click:function(t){e.showAddIngredient=!0}}})],1),e._l(e.Recipe.ingredients,(function(t,n){return i("div",{key:t,staticClass:"q-mb-xs",attrs:{"track-by":"$index"}},[i("q-banner",{staticClass:"bg-grey-3",attrs:{rounded:""},scopedSlots:e._u([{key:"action",fn:function(){return[i("q-btn",{attrs:{color:"negative",dense:"",round:"",icon:"delete"},on:{click:function(t){return t.stopPropagation(),e.deleteIngredient(n)}}}),i("q-btn",{attrs:{color:"primary",dense:"",round:"",icon:"edit"},on:{click:function(t){return t.stopPropagation(),e.editIngredient(n)}}})]},proxy:!0}],null,!0)},[i("p",{staticClass:"text-h6"},[e._v(e._s(t))])])],1)}))],2),i("div",{staticClass:"col q-pa-md"},[i("q-toolbar",{staticClass:"bg-primary text-white"},[i("q-toolbar-title",[e._v("Instructions")]),i("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"add"},on:{click:function(t){e.showAddInstruction=!0}}})],1),e._l(e.Recipe.instructions,(function(t,n){return i("div",{key:t,staticClass:"q-mb-xs",attrs:{"track-by":"$index"}},[i("q-banner",{staticClass:"bg-grey-3",attrs:{rounded:""},scopedSlots:e._u([{key:"action",fn:function(){return[i("q-btn",{attrs:{color:"negative",dense:"",round:"",icon:"delete"},on:{click:function(t){return t.stopPropagation(),e.deleteInstruction(n)}}}),i("q-btn",{attrs:{color:"primary",dense:"",round:"",icon:"edit"},on:{click:function(t){return t.stopPropagation(),e.editInstruction(n)}}})]},proxy:!0}],null,!0)},[i("p",{staticClass:"text-h6"},[e._v(e._s(t))])])],1)}))],2)])]),i("q-card-actions",{attrs:{align:"center"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-mr-xl btn-fixed-width",attrs:{label:"Cancel",size:"xl",color:"warning"}}),i("q-btn",{staticClass:"q-ml-xl btn-fixed-width",attrs:{label:"Save",size:"xl",color:"positive"},on:{click:function(t){return t.stopPropagation(),e.saveRecipe(t)}}})],1),i("q-dialog",{attrs:{"full-width":"","transition-show":"slide-up","transition-hide":"slide-down"},model:{value:e.showAddInstruction,callback:function(t){e.showAddInstruction=t},expression:"showAddInstruction"}},[i("q-card",{staticClass:"my-card"},[i("q-card-section",{staticClass:"row"},[i("q-toolbar",{staticClass:"bg-primary text-white"},[i("q-toolbar-title",[e._v("Add Instruction")]),i("q-space"),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",rounded:"",dense:"",icon:"close"}})],1)],1),i("q-card-section",[i("q-input",{attrs:{outlined:"",label:"Instruction"},model:{value:e.line_instruction,callback:function(t){e.line_instruction=t},expression:"line_instruction"}})],1),i("q-card-section",[i("div",{staticClass:"row"},[i("q-btn",{staticClass:"q-ma-md",attrs:{color:"primary",label:"Cancel"},on:{click:function(t){e.showAddInstruction=!1}}}),i("q-btn",{staticClass:"q-ma-md",attrs:{color:"primary",label:"Save"},on:{click:e.saveInstruction}})],1)])],1)],1),i("q-dialog",{attrs:{"full-width":"","transition-show":"slide-up","transition-hide":"slide-down"},model:{value:e.showEditInstruction,callback:function(t){e.showEditInstruction=t},expression:"showEditInstruction"}},[i("q-card",{staticClass:"my-card"},[i("q-card-section",{staticClass:"row"},[i("q-toolbar",{staticClass:"bg-primary text-white"},[i("q-toolbar-title",[e._v("Edit Instruction")]),i("q-space"),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",rounded:"",dense:"",icon:"close"}})],1)],1),i("q-card-section",[i("q-input",{attrs:{outlined:"",label:"Instruction"},model:{value:e.line_instruction,callback:function(t){e.line_instruction=t},expression:"line_instruction"}})],1),i("q-card-section",[i("div",{staticClass:"row"},[i("q-btn",{staticClass:"q-ma-md",attrs:{color:"primary",label:"Cancel"},on:{click:function(t){e.showEditInstruction=!1}}}),i("q-btn",{staticClass:"q-ma-md",attrs:{color:"primary",label:"Save"},on:{click:e.saveEditInstruction}})],1)])],1)],1),i("q-dialog",{attrs:{"full-width":"","transition-show":"slide-up","transition-hide":"slide-down"},model:{value:e.showAddIngredient,callback:function(t){e.showAddIngredient=t},expression:"showAddIngredient"}},[i("q-card",{staticClass:"my-card"},[i("q-card-section",{staticClass:"row"},[i("q-toolbar",{staticClass:"bg-primary text-white"},[i("q-toolbar-title",[e._v("Add Ingredient")]),i("q-space"),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",rounded:"",dense:"",icon:"close"}})],1)],1),i("q-card-section",[i("q-input",{attrs:{outlined:"",label:"Ingredient"},model:{value:e.line_ingredient,callback:function(t){e.line_ingredient=t},expression:"line_ingredient"}})],1),i("q-card-section",[i("div",{staticClass:"row"},[i("q-btn",{staticClass:"q-ma-md",attrs:{color:"primary",label:"Cancel"},on:{click:function(t){e.showAddIngredient=!1}}}),i("q-btn",{staticClass:"q-ma-md",attrs:{color:"primary",label:"Save"},on:{click:e.saveIngredient}})],1)])],1)],1),i("q-dialog",{attrs:{"full-width":"","transition-show":"slide-up","transition-hide":"slide-down"},model:{value:e.showEditIngredient,callback:function(t){e.showEditIngredient=t},expression:"showEditIngredient"}},[i("q-card",{staticClass:"my-card"},[i("q-card-section",{staticClass:"row"},[i("q-toolbar",{staticClass:"bg-primary text-white"},[i("q-toolbar-title",[e._v("Edit Ingredient")]),i("q-space"),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",rounded:"",dense:"",icon:"close"}})],1)],1),i("q-card-section",[i("q-input",{attrs:{outlined:"",label:"Ingredient"},model:{value:e.line_ingredient,callback:function(t){e.line_ingredient=t},expression:"line_ingredient"}})],1),i("q-card-section",[i("div",{staticClass:"row"},[i("q-btn",{staticClass:"q-ma-md",attrs:{color:"primary",label:"Cancel"},on:{click:function(t){e.showEditIngredient=!1}}}),i("q-btn",{staticClass:"q-ma-md",attrs:{color:"primary",label:"Save"},on:{click:e.saveEditIngredient}})],1)])],1)],1)],1)},a=[],o=(i("a434"),{data:function(){return{imageUpload:[],imageCaptured:!1,showAddInstruction:!1,showEditInstruction:!1,showAddIngredient:!1,showEditIngredient:!1,line_instruction:"",line_ingredient:"",editIndex:null,Recipe:{title:"",description:"",benefits:"",imageUrl:null,ingredients:[],instructions:[]}}},methods:{captureImage:function(e){var t=this;console.log("In capture Image"),this.Recipe.imageUrl=e;var i=this.$refs.canvas,n=i.getContext("2d"),a=new FileReader;a.onload=function(e){var a=new Image;a.onload=function(){i.width=a.width,i.height=a.height,n.drawImage(a,0,0),t.imageCaptured=!0},a.src=e.target.result},a.readAsDataURL(e)},saveInstruction:function(){this.line_instruction&&(this.Recipe.instructions.push(this.line_instruction),this.showAddInstruction=!1,this.line_instruction="")},editInstruction:function(e){console.log("In Edit Instruction . . ."),this.line_instruction=this.Recipe.instructions[e],this.editIndex=e,this.showEditInstruction=!0},saveEditInstruction:function(e){console.log("In saveEditInstruction"),this.Recipe.instructions[this.editIndex]=this.line_instruction,this.showEditInstruction=!1,this.line_instruction=""},saveIngredient:function(){this.line_ingredient&&(this.Recipe.ingredients.push(this.line_ingredient),this.showAddIngredient=!1,this.line_ingredient="")},editIngredient:function(e){console.log("In edit Ingredient . . ."),this.line_ingredient=this.Recipe.ingredients[e],this.showEditIngredient=!0,this.editIndex=e,console.log("index",e)},saveEditIngredient:function(){console.log("In saveEditIngredient"),this.Recipe.ingredients[this.editIndex]=this.line_ingredient,this.showEditIngredient=!1,this.line_ingredient=""},deleteInstruction:function(e){var t=this;console.log("In deleteInstruction . . ."),this.showDeleteIngredient=!1,this.$q.dialog({title:"Confirm",message:"Would you like to Delete this Instruction?",ok:{push:!0},cancel:{color:"negative"},persistent:!1}).onOk((function(){t.Recipe.instructions.splice(e,1)})).onCancel((function(){}))},deleteIngredient:function(e){var t=this;console.log("In deleteIngredient . . .",e),this.showDeleteIngredient=!1,this.$q.dialog({title:"Confirm",message:"Would you like to Delete this Ingredient?",ok:{push:!0},cancel:{color:"negative"},persistent:!1}).onOk((function(){t.Recipe.ingredients.splice(e,1)})).onCancel((function(){}))},saveRecipe:function(){console.log("In save Recipe"),console.log("The Recipe is:",this.Recipe)}},components:{}}),s=o,r=(i("2766"),i("2877")),l=i("f09f"),c=i("a370"),d=i("65c6"),p=i("6ac5"),u=i("2c91"),h=i("9c40"),m=i("7d53"),g=i("0016"),b=i("27f9"),f=i("54e1"),w=i("4b7e"),v=i("24e8"),q=i("7f67"),y=i("eebe"),k=i.n(y),C=Object(r["a"])(s,n,a,!1,null,"05009d10",null);t["default"]=C.exports;k()(C,"components",{QCard:l["a"],QCardSection:c["a"],QToolbar:d["a"],QToolbarTitle:p["a"],QSpace:u["a"],QBtn:h["a"],QFile:m["a"],QIcon:g["a"],QInput:b["a"],QBanner:f["a"],QCardActions:w["a"],QDialog:v["a"]}),k()(C,"directives",{ClosePopup:q["a"]})},cc63:function(e,t,i){},d1c9:function(e,t,i){},f0cf:function(e,t,i){"use strict";i("cc63")}}]);