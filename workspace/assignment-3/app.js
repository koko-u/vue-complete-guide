import { createApp, ref, computed, watch } from 'vue'

createApp({
    setup() {
        const sum = ref(0)
        const result = computed(() => {
            if (sum.value < 37) {
                return "Not there yet"
            }
            if (sum.value > 37) {
                return "Too much!";
            }
            return `${sum.value}`
        })

        const add = (delta) => {
            sum.value += delta
        }

        let timeoutId = 0
        watch(sum, () => {
            if (timeoutId > 0) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(() => {
                sum.value = 0
            }, 5000)
        })

        return {
            sum,
            result,
            add,
        }
    }
}).mount('#assignment')
