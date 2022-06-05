import { createApp, ref } from 'vue'

createApp({
    data() {
        return {
            myInput: '',
            otherInput: '',
            outputValue: '',
        }
    },
    methods: {
        showAlert() {
            alert('Nice Message!')
        },
        registerInput(event) {
            this.myInput = event.target.value
        },
        anotherInput(event) {
            this.otherInput = event.target.value
        },
        enterInput() {
            this.outputValue = this.otherInput
        }
    },
}).mount("#assignment")