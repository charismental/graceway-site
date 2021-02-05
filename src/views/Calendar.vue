<template>
  <v-row>
    <v-col>
      <v-sheet height="400">
        <v-calendar
          ref='calendar'
          :today='today'
          :events="events"
          color="primary"
          type="week"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    today: Date.now(),
    events: [
      {
        name: 'Alistair Begg',
        start: '2021-02-04 01:00',
        end: '2021-02-04 01:30',
      },
    ],
  }),
  mounted() {
  },
};
</script>
