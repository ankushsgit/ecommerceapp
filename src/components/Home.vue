<template>
    <div>
        <Navbar />
        <Cardview />
    </div>
</template>

<script>
import Navbar from './Navbar';
import Cardview from './Cardview';

export default {
    name: 'Home',
    components: {
        Navbar,
        Cardview
    },
    data () {
        return {

        }
    }
}
</script>

<style scoped>

</style>