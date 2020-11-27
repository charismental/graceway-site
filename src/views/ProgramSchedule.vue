<template>
  <div class="program-schedule">
    <v-container>
      <v-row dense>
        <v-col
        v-for='s in speakers'
        :key='s'
        :cols="$vuetify.breakpoint.xs ? '12' : '6'"
        >
        <v-card outlined>
          <v-row justify="space-between">
            <v-col align-self='start' cols='3'>
              <v-avatar tile size='100' :class='$vuetify.breakpoint.xs ? "ma-1" : "pa-4"'>
                <v-img :src="require('@/assets/' + s.photo)" cover></v-img>
              </v-avatar>
            </v-col>
            <v-col align-self='end'>
              <v-list-item class='ml-auto'>
                <v-list-item-content>
                  <v-list-item-title title>
                    {{s.name}}
                  </v-list-item-title>
                  <v-list-item-subtitle
                  :style="$vuetify.breakpoint.xs ? 'font-size:0.8rem;' : ''">
                  <!-- TIMES NEEDS TO BE SPLIT AND WRAPPED IN FLEXBOX -->
                    {{s.times}}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'ProgramSchedule',
  data: () => ({
    speakers: [
      {
        name: 'Alistair Begg',
        photo: 'alistair_begg.jpg',
        times: 'Weekdays @ 1:00AM/PM',
      },
      {
        name: 'David Pawson',
        photo: 'david_pawson.png',
        times: 'Mon, Wed, Fri @ 2:30AM/PM',
      },
      {
        name: 'John Casteel',
        photo: 'john_casteel.jpg',
        times: 'Mon, Wed, Fri - 6:30AM, 7:00PM',
      },
      {
        name: 'Paul Washer',
        photo: 'paul_washer.jpg',
        times: 'Mon, Wed, Fri - 8:30AM, 9:00PM',
      },
      {
        name: 'Chuck Missler',
        photo: 'chuch_missler.jpg',
        times: 'Weekdays - 10:30AM, 11:00PM',
      },
      {
        name: 'Curtis Dougherty',
        photo: 'curtis_dougherty.jpg',
        times: 'Mon, Wed, Fri @ 4:30AM/PM',
      },
      {
        name: 'Ern Baxter',
        photo: 'ern_baxter.jpg',
        times: 'Tues, Thur @ 2:30AM/PM',
      },
      {
        name: 'Jamie Buckingham',
        photo: 'jamie_buckingham.jpg',
        times: 'Tues, Thur @ 4:30AM/PM',
      },
      {
        name: 'David Wilkerson',
        photo: 'david_wilkerson.jpg',
        times: 'Tues, Thur - 8:30AM, 9:00PM',
      },
      {
        name: 'Derek Prince',
        photo: 'derek_prince.jpg',
        times: 'Beefy Potatoes with Gravy',
      },
    ],
  }),
  components: {},
};
</script>
