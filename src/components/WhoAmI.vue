<script setup lang="ts">
/*
let choose = () {
    if (choice == 'y') {
        console.log('it seems U R Human?')
        console.log('quotes')

    }
    else if (choice == 'n') {
        console.log('10001111011101')

    }
    else { console.log('can't compute) }

}
*/
</script>

<template>
    <div class="text-left text-gru-blue p-5">

        <p text-gru-green>visitor@jdncodes.com:~$ <span text-gru-red>whoami</span></p>
        <br>
        <div class="p-3 flex flex-row">
            <p pr-2>R U human?</p> <input type="text" class="bg-transparent focus:outline-none" v-model="choose"
                placeholder="y / n">
        </div>
    </div>

</template>
