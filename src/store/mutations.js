export default {
    changeCity(state, city) {
        state.city = city
        try {
            localStorage.city = city  // 选择城市后，将城市存储到localStorage
        } catch (e) { }
    }
} 