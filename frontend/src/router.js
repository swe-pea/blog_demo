import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

//import the components to be associated with their own url route
import PostCom from '@/components/PostCom'
import AuthorCom from '@/components/AuthorCom'
import PostsByTag from '@/components/PostsByTag'
import AllPosts from '@/components/AllPosts'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/author/:username', component: AuthorCom },
		{ path: '/post/:slug', component: PostCom },
		{ path: '/tag/:tag', component: PostsByTag },
		{ path: '/', component: AllPosts },
	],
})

export default router

