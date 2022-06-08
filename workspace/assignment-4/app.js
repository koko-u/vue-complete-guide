import { createApp, ref, computed } from 'vue'

createApp({
    setup() {
        const inputText = ref('')
        const visible = ref(true)
        const inputColor = ref('#8ddba4')

        const visibleClasses = computed(() => {
            if (visible.value) {
                return 'visible'
            } else {
                return 'hidden'
            }
        })

        const toggle = () => {
            visible.value = !visible.value
        }


        return {
            inputText,
            visible,
            visibleClasses,
            inputColor,
            toggle,
        }
    }
}).mount('#assignment')