<template>
  <div class="program-schedule">
    <v-container>
      <v-row>
        <v-col
        v-for='s in speakers'
        :key='s.name'
        sm='2'
        md='4'
        >
        <v-card tile>
          <v-row class='fill-height'>
            <v-col align-self='start'>
              <v-avatar class='profile'>
                <v-img :src="`~@/assets/${s.photo}`"></v-img>
              </v-avatar>
            </v-col>
            <v-col>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title title>
                    {{s.name}}
                  </v-list-item-title>
                  <v-list-item-subtitle>
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
        photo: '~@/assets/david_pawson.png',
        times: 'Mon, Wed, Fri @ 2:30AM/PM',
      },
      {
        name: 'John Casteel',
        photo: '~@/assets/john_casteel.jpg',
        times: 'Mon, Wed, Fri - 6:30AM, 7:00PM',
      },
      {
        name: 'Paul Washer',
        photo: '~@/assets/paul_washer.jpg',
        times: 'Mon, Wed, Fri - 8:30AM, 9:00PM',
      },
      {
        name: 'Chuck Missler',
        photo: '~@/assets/chuch_missler.jpg',
        times: 'Weekdays - 10:30AM, 11:00PM',
      },
      {
        name: 'Curtis Dougherty',
        photo: '~@/assets/curtis_dougherty.jpg',
        times: 'Mon, Wed, Fri @ 4:30AM/PM',
      },
      {
        name: 'Ern Baxter',
        photo: '~@/assets/ern_baxter.jpg',
        times: 'Tues, Thur @ 2:30AM/PM',
      },
      {
        name: 'Jamie Buckingham',
        photo: '~@/assets/jamie_buckingham.jpg',
        times: 'Tues, Thur @ 4:30AM/PM',
      },
      {
        name: 'David Wilkerson',
        photo: '~@/assets/david_wilkerson.jpg',
        times: 'Tues, Thur - 8:30AM, 9:00PM',
      },
      {
        name: 'Derek Prince',
        photo: '~@/assets/derek_prince.jpg',
        times: 'Beefy Potatoes with Gravy',
      },
    ],
  }),
  components: {},
};
</script>
