import { defineStore } from 'pinia'
import { useUserStore } from '../user/userStore'
import router from '../../router'

export const useJumbotronStore = defineStore('jumbotronStore', {
    state: () => ({
        authToken: '',
        userId: '',
        jumbotronImage: '',
        jumbotronTitle: '',
        jumbotronText: '',
        fileUploaded: false,
    }),
    actions: {
        fetchUserAuth() {
            console.log('fetching auth...');
            const userStore = useUserStore();
            this.authToken = userStore.authToken;
            this.userId = userStore.userId;
            console.log('content now has token: ', this.authToken);
        },
        async fetchJumbotron() {
            this.fetchUserAuth();
            try {
                const response = await fetch('http://localhost:8000/jumbotron/', {
                    method: 'GET',
                    // credentials: 'include',
                    headers: {
                        'X-CSRFToken': document.cookie.match(/csrftoken=([^;]+)/)[1],
                        // 'Authorization': `Token ${this.authToken}`,
                        }
                })

                if (!response.ok) {
                    const errorResponse = await response.json();
                    console.error(`Error details: ${errorResponse}`);
                    throw new Error(`HTTP error! status: ${response.state}`)
                }


                const responseData = await response.json();
                this.jumbotronImage = responseData[0].jumbo_image;
                this.jumbotronTitle = responseData[0].title;
                this.jumbotronText = responseData[0].body;

                console.log('assigned jumbotron data.')
                console.log(responseData[0]);
                console.log(this.jumbotronImage);
                console.log(this.jumbotronTitle);
                console.log(this.jumbotronText);


            } catch (error) {
                console.error(`HTTP error! status ${error.state}`)
            }
            
        },
        async updateJumbo () {
            this.fetchUserAuth();

            let formData = new FormData();
            formData.append('owner', this.userId);
            formData.append('title', this.jumbotronTitle);
            formData.append('body', this.jumbotronText);
            if (this.fileUploaded) {
                formData.append('jumbo_image', this.jumbotronImage);
            } 
            this.fileUploaded = false;
            
            console.log([...formData.entries()])

            try {
                const response = await fetch('http://localhost:8000/jumbotron/1/', {
                    method: 'PUT',  
                    credentials: 'include',
                    headers: {
                        'X-CSRFToken': document.cookie.match(/csrftoken=([^;]+)/)[1],
                        'Authorization': `Token ${this.authToken}`,
                    },
                    body: formData
                })
                
                if (!response.ok) {
                    const errorResponse = await response.json();
                    console.error(`Error details: ${errorResponse}`);
                    console.error(`HTTP error! status ${response.state}`);
                }

                console.log('updated jumbotron', this.jumbotronImage);
                this.fetchJumbotron();

            } catch (error) {
                console.error(`HTTP error! status ${error.state}`)
            }
            
        }
    }
})