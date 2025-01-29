import { defineStore } from 'pinia'
import { useUserStore } from '../user/userStore'
import router from '../../router'

export const useGalleryStore = defineStore('galleryStore', {
    state: () => ({
        authToken: '',
        userId: '',
        cakeImg: '',
        gallery: [],
        
        galleryTitle: '',
        galleryText: '',
        galleryPreviewImage: '',
        aboutMeImage: '',
        aboutMeTitle: '',
        aboutMeText: '',
    }),
    actions: {
        fetchUserAuth() {
            console.log('fetching auth...');
            const userStore = useUserStore();
            this.authToken = userStore.authToken;
            this.userId = userStore.userId;
            console.log('content now has toke: ', this.authToken);
        },
        async galleryView() {
            console.log('attempting gethering cakes');
            this.fetchUserAuth();
            console.log(this.authToken);
            try {
                const response = await fetch('http://localhost:8000/cakes/', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'X-CSRFToken': document.cookie.match(/csrftoken=([^;]+)/)[1],
                        // 'Authorization': `Token ${this.authToken}`,
                    }
                })

                if (!response.ok) {
                    throw new Error(`HTTP error! status ${response.state}`)
                }

                const responseData = await response.json();
                console.log(responseData);
                this.gallery = responseData;

            } catch (error) {
                console.error('Error found loading images: ', error);
            }
        },
        async uploadCakeImage () {
            console.log('attempting image upload');
            this.fetchUserAuth();

            let formData = new FormData();
            formData.append('owner', this.userId);
            formData.append("cake_image", this.cakeImg);
            console.log([...formData.entries()])
            // 

            for (let pair of formData.entries()) {
                console.log(pair[0] + ':', pair[1]);
            }

            try {
                const response = await fetch('http://localhost:8000/cakes/', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'X-CSRFToken': document.cookie.match(/csrftoken=([^;]+)/)[1],
                        'Authorization': `Token ${this.authToken}`,
                    },
                    body: formData
                })

                if (!response.ok) {
                    throw new Error(`HTTP error! status ${response.state}`);
                }

                console.log('image uploaded successfully');

                this.galleryView();

            } catch (error) {
                console.error('Error found uploading image: ', error);
            }
        },
        async updateCakeImage (cakeId) {
            console.log('attempting image update');
            console.log('this is the image loaded to vue: ',this.cakeImg);
            // this.fetchUserAuth();

            let formData = new FormData();
            formData.append('owner', this.userId);
            formData.append("cake_image", this.cakeImg);
            console.log('this is form data being sent')
            console.log([...formData.entries()]);
            console.log(formData.get('cake_image'));

            
            try {
                const response = await fetch(`http://localhost:8000/cakes/${cakeId}/`, {
                method: 'PATCH',
                credentials: 'include',
                headers: {
                    'X-CSRFToken': document.cookie.match(/csrftoken=([^;]+)/)[1],
                    'Authorization': `Token ${this.authToken}`,
                },
                body: formData
            })

            if (!response.ok) {
                const errorResponse = await response.json();
                console.error('Error details:', errorResponse);
                throw new Error(`HTTP error! status ${response.state}`);
            }

            console.log('image updated');
            this.galleryView();


            } catch (error) {
                console.error(`Error found updating image: ${error}`);
            }
        },
        async deleteCakeImage(cakeId) {
            // add an alert to delete
            console.log('attempting to DELETE image')
            try {
                const response = await fetch(`http://localhost:8000/cakes/${cakeId}/`, {
                    method: 'DELETE',
                    credentials: 'include',
                    headers: {
                        'X-CSRFToken': document.cookie.match(/csrftoken=([^;]+)/)[1],
                        'Authorization': `Token ${this.authToken}`,
                    }
                })

                if (!response.ok) {
                    throw new Error(`HTTP error! status ${(await response).status}`);
                }

                console.log('deleted image ', cakeId, ' successfully');
                // router.replace('/api/edit-gallery')
                this.galleryView();

            } catch (error) {
                console.error('Error found deleting image: ', error);
            }
            
        }
    }
    
})