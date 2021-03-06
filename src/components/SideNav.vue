<template>
<div>
<v-navigation-drawer absolute left v-model="drawer" :mini-variant="mini" :permanent="$vuetify.breakpoint.mdAndUp">
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img
            src="https://miro.medium.com/fit/c/262/262/2*QIW2kS_RIHSnviBwPZR0JQ.jpeg"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-title>{{ spaceName }}</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item v-for="item in projects" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-icon class="hide_icon" @click.stop="mini = !mini;">{{mini?"mdi-chevron-right":""}}</v-icon>
        <div class="pa-2">
          <v-btn block @click="addProjectDialog = true"
            ><v-icon class="plus_icon">mdi-plus</v-icon> Add a project
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
        <v-dialog v-model="addProjectDialog" max-width="500px">
      <v-card>
        <v-card-title> Add a project </v-card-title>

        <v-card-text>
          <v-btn color="primary" dark @click="dialog3 = !dialog3">
            Select project icon
          </v-btn>
          <v-text-field
            label="Project Name"
            :rules="rules"
            hide-details="auto"
            v-model="newProjectName"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="addProjectDialog = false">
            Close
          </v-btn>
          <v-btn color="primary" text @click="addProject"> Add </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
           newProjectName: "",
    spaceName: "A",
    drawer: true,
    addProjectDialog: false,
    projects: [
      { title: "Brews", icon: "mdi-motorbike",route:"blank" },
      { title: "Axperiments", icon: "mdi-school" },
      { title: "De Picto", icon: "mdi-camera" },
    ],
    mini: true,
    notifications: false,
    sound: true,
    widgets: false,
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
      
    }),
      methods: {
    addProject() {
      this.projects.push({ title: this.newProjectName, icon: "mdi-new-box" });
      this.addProjectDialog = false;
    },
  },
  }
  
</script>
<style scoped>

.plus_icon {
  margin-right: 10px;
}

.hide_icon {
  margin-left: 15px;
}
</style>