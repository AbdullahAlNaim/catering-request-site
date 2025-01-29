import { defineStore } from 'pinia'
import router from '../../router'

export const useContactStore = defineStore('contactStore', {
    state: () => ({
        customer_email: '',
        cusotmer_name: '',
        customer_message: '',
    }),
    actions: {
        async sendEmail () {
            try {
                const response = await fetch('http://localhost:8000/contact/', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': document.cookie.match(/csrftoken=([^;]+)/)[1],
                    },
                    body: JSON.stringify({
                        customer_name: this.customer_name,
                        customer_email: this.customer_email,
                        customer_message: this.customer_message
                    })
                })

                if (!response.ok) {
                    const errorResponse = await response.json();
                    console.log(`Error details: ${errorResponse}`);
                    throw new Error(`HTTP error! status: ${response.state}`)
                }

                console.log(`successfully sent email to admin.`)

                console.log('email sender email:', this.customer_email)
                console.log('email sender name:', this.customer_name)
                console.log('email sender message:', this.customer_message)

                // this.customer_name = '';
                // this.customer_email = '';
                // this.customer_message = '';

            } catch (error) {
                console.error(`HTTP error sending email: ${error.state}`)
            }
            
        }
    }
})