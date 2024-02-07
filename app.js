const options = {
    data() {
        return {
            name: "Choucroute",
            ingredients: "Chou, Oignon, Porc, Lard, Saucisse",
            preparation:
                "Laver la choucroute, Mettre 1 oignon coupé en 4 au fond d'une grande cocotte et le faire revenir dans un corps gras, Ajouter la moitié de la choucroute bien essorée, Ajouter par dessus la viande : la palette, le lard fumé, les saucisses fumées de Montbéliard, Recouvrir la viande avec le reste de la choucroute et mouiller jusqu'à recouvrir la choucroute avec moitié eau avec la tablette de bouillon et moitié Riesling, Ajouter les grains de genièvre, Couvrir et laisser cuire à feu doux 2 h environ",
            time: "10",
            person: "3",
            recipes: [],
            error: false,
            intError: false,
        };
    },
    methods: {
        addTask() {
            if (
                this.name == "" ||
                this.ingredients == "" ||
                this.preparation == "" ||
                this.time == "" ||
                this.person == ""
            ) {
                this.error = true;
            } else if (
                !/^\+?[1-9][\d]*$/.test(this.time) ||
                !/^\+?[1-9][\d]*$/.test(this.person)
            ) {
                this.intError = true;
            } else {
                this.error = false;
                const recipe = {
                    id: Date.now(),
                    name: this.name,
                    ingredients: this.ingredients,
                    preparation: this.preparation,
                    time: this.time,
                    person: this.person,
                };

                this.recipes.push(recipe);
            }
        },
        deleteTask(id) {
            this.recipes = this.recipes.filter((recipe) => recipe.id != id);
        },
    },
};

Vue.createApp(options).mount("#app");
