import { defineStore } from 'pinia'
import { useUserStore } from '../user/userStore'
import router from '../../router' 

export const useGalleryPreviewStore = defineStore('galleryPreviewStore', {
    state: () => ({
        authToken: '',
        userId: '',
        galleryPreviewTitle: '',
        galleryPreviewText: '',
    }),
    actions: {
        fetchUserAuth() {
            console.log('fetching auth...');
            const userStore = useUserStore();
            this.authToken = userStore.authToken;
            this.userId = userStore.userId;
            console.log('now have token: ', this.authToken)
        },
        async fetchGalleryPreview() {
            this.fetchUserAuth();
            try {
                const response = await fetch('http://localhost:8000/galleryPreview/', {
                    method: 'GET',
                    // credentials: 'include',
                    headers: {
                        'X-CSRFToken': document.cookie.match(/csrftoken=([^;]+)/)[1],
                    }
                })

                if(!response.ok) {
                    const errorResponse = await response.json();
                    console.error(`Error details: ${errorResponse}`);
                    throw new Error(`HTTP error! status ${response.state}`)
                }

                const responseData = await response.json();
                this.galleryPreviewText = responseData[0].body;
                this.galleryPreviewTitle = responseData[0].title;


            } catch (error) {
                console.error(`HTTP error! status ${error.state}`)
            }
        },
        async updateGalleryPreview () {
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
                const response = await fetch('http://localhost:8000/galleryPreview/0/', {
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

                console.log('updated preview');
                this.fetchGalleryPreview();

            } catch (error) {
                console.error(`HTTP error! status ${error.state}`)
            }
            
        }
    }
})