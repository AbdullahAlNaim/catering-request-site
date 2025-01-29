import { defineStore } from 'pinia'
import { useGalleryStore } from '../content/galleryStore'
import router from '../../router/index'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        authToken: '',
        userId: '',
        username: '',
        password: '',
        cakeImg: '',
        userAuthenticated: false,
    }),
    actions: {
        fetchGalleryStore() {
            const galleryStore = useGalleryStore();
            galleryStore.galleryView;
        },
        async login () {
            try {
                // remove in prod
                console.log('attempting to login')
                const response = await fetch('http://localhost:8000/login/', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': document.cookie.match(/csrftoken=([^;]+)/)[1],
                    },
                    body: JSON.stringify({
                        username: this.username,
                        password: this.password,
                    })
                }) 

                if (!response.ok) {
                    throw new Error(`HTTP error! status ${response.state}`)
                }

                const responseData = await response.json();
                this.authToken = responseData.token;
                this.userId = responseData.user_id;
                this.userAuthenticated = true;
                this.password = '';
                
                // remove in prod
                console.log('logged in successfully');
                
                router.replace('/api/dashboard');
  

            } catch (error) {
                console.error('Error found logging in: ', error)
            }
        },
        async logout () {
            try {
                console.log('attempting logout')
                const response = await fetch('http://localhost:8000/logout/', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': document.cookie.match(/csrftoken=([^;]+)/)[1],
                        'Authorization': `Token ${this.authToken}`,
                    }
                })

                if (!response.ok) {
                    throw new Error(`HTTP error! status ${response.state}`)
                }
                
                this.authToken = '';
                this.userId = '';
                this.userAuthenticated = false;
                this.password = '',

                // remove in prod
                console.log('logged out successfully')

                router.replace('/api/admin-login')

            } catch (error) {
                console.error('Error found logging out: ', error);
            }
        },    
    }
})