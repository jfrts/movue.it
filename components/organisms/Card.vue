<template>
	<div class="bg-white rounded-md flex flex-1 w-full mt-8 lg:mt-0 shadow-sm">
		<Challenge v-if="currentChallenge" v-bind="currentChallenge" />
		<StartCycle v-else />
		<LevelUpModal />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
	computed: mapGetters("Challenges", ["currentChallenge"])
});
</script>
