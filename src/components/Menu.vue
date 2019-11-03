<template>
    <v-app id = "inspire">
        <v-navigation-drawer v-model="drawer" app>
            <v-list dense>
                <v-list-item @click="">
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="">
                    <v-list-item-action>
                        <v-icon>mdi-contact-mail</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Contact</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color = "indigo" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>
        <v-content>


            <!--            <router-view></router-view>-->
<!--            <v-container class="fill-height" fluid>-->
<!--                <v-row align="center" justify="center">-->
<!--                    <v-col class="text-center">-->
<!--                        {{source}}-->
<!--&lt;!&ndash;                        <v-tooltip left>&ndash;&gt;-->
<!--&lt;!&ndash;                            <template v-slot:activator="{on}">&ndash;&gt;-->
<!--&lt;!&ndash;                                <v-btn :href="source" icon large target="_blank" v-on ="on">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <v-icon large>mdi-code-tags</v-icon>&ndash;&gt;-->
<!--&lt;!&ndash;                                </v-btn>&ndash;&gt;-->
<!--&lt;!&ndash;                            </template>&ndash;&gt;-->
<!--&lt;!&ndash;                            <span>Source</span>&ndash;&gt;-->
<!--&lt;!&ndash;                        </v-tooltip>&ndash;&gt;-->
<!--&lt;!&ndash;                        <v-tooltip right>&ndash;&gt;-->
<!--&lt;!&ndash;                            <template v-slot:activator = "{on}">&ndash;&gt;-->
<!--&lt;!&ndash;                                <v-btn icon large href="https://codepen.io/johnjleider/pen/zgxeLQ"&ndash;&gt;-->
<!--&lt;!&ndash;                                    target="_blank" v-on="on">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <v-icon large> mdi-codepen</v-icon>&ndash;&gt;-->
<!--&lt;!&ndash;                                </v-btn>&ndash;&gt;-->
<!--&lt;!&ndash;                            </template>&ndash;&gt;-->
<!--&lt;!&ndash;                            <span>Codepen</span>&ndash;&gt;-->
<!--&lt;!&ndash;                        </v-tooltip>&ndash;&gt;-->
<!--                    </v-col>-->
<!--                </v-row>-->
<!--            </v-container>-->
        <main>
            <router-view></router-view>
        </main>
        </v-content>
        <v-footer color="indigo" app>
            <span class = "white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    import Product from "./Product";
    import Category from "./Category";
    export default {
        name: "Menu",
        components: {Category,Product},
        props:{
            source: Category
        },
        data: ()=>({
            drawer: null
        })
    }
</script>

<style scoped>

</style>
