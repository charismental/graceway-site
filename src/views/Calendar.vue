<template>
  <v-container fluid>
    <p class="text-center pa-0">All times are in PST</p>
    <v-row class="mt-4 mb-4 justify-center align-center">
      <v-col lg="8">
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            :events="events"
            :type="calendarType"
            :weekdays="weekday"
            :start="dailyStartDay"
            :end="dailyEndDay"
            :event-color="getEventColor"
          >
            <template v-slot:day-body="{ day }">
              <div
                class="v-current-time"
                :class="{ first: day === 1 }"
                :style="{ top: nowY }"
              ></div>
            </template>
          </v-calendar>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    weekday: [1, 2, 3, 4, 5],
    ready: false,
  }),
  computed: {
    events() {
      return [
        {
          name: 'Alistair Begg',
          start: this.getNextDayOfTheWeek('monday', '01:00'),
          end: this.getNextDayOfTheWeek('monday', '01:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.getNextDayOfTheWeek('tuesday', '01:00'),
          end: this.getNextDayOfTheWeek('tuesday', '01:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.getNextDayOfTheWeek('wednesday', '01:00'),
          end: this.getNextDayOfTheWeek('wednesday', '01:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.getNextDayOfTheWeek('thursday', '01:00'),
          end: this.getNextDayOfTheWeek('thursday', '01:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.getNextDayOfTheWeek('friday', '01:00'),
          end: this.getNextDayOfTheWeek('friday', '01:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.getNextDayOfTheWeek('monday', '13:00'),
          end: this.getNextDayOfTheWeek('monday', '13:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.getNextDayOfTheWeek('tuesday', '13:00'),
          end: this.getNextDayOfTheWeek('tuesday', '13:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.getNextDayOfTheWeek('wednesday', '13:00'),
          end: this.getNextDayOfTheWeek('wednesday', '13:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.getNextDayOfTheWeek('thursday', '13:00'),
          end: this.getNextDayOfTheWeek('thursday', '13:30'),
          color: 'red',
        },
        {
          name: 'Alistair Begg',
          start: this.getNextDayOfTheWeek('friday', '13:00'),
          end: this.getNextDayOfTheWeek('friday', '13:30'),
          color: 'red',
        },
        {
          name: 'David Pawson',
          start: this.getNextDayOfTheWeek('monday', '02:30'),
          end: this.getNextDayOfTheWeek('monday', '03:30'),
          color: 'green',
        },
        {
          name: 'David Pawson',
          start: this.getNextDayOfTheWeek('monday', '14:30'),
          end: this.getNextDayOfTheWeek('monday', '15:30'),
          color: 'green',
        },
        {
          name: 'David Pawson',
          start: this.getNextDayOfTheWeek('wednesday', '02:30'),
          end: this.getNextDayOfTheWeek('wednesday', '03:30'),
          color: 'green',
        },
        {
          name: 'David Pawson',
          start: this.getNextDayOfTheWeek('wednesday', '14:30'),
          end: this.getNextDayOfTheWeek('wednesday', '15:30'),
          color: 'green',
        },
        {
          name: 'David Pawson',
          start: this.getNextDayOfTheWeek('friday', '02:30'),
          end: this.getNextDayOfTheWeek('friday', '03:30'),
          color: 'green',
        },
        {
          name: 'David Pawson',
          start: this.getNextDayOfTheWeek('friday', '14:30'),
          end: this.getNextDayOfTheWeek('friday', '15:30'),
          color: 'green',
        },
        {
          name: 'John Casteel',
          start: this.getNextDayOfTheWeek('monday', '06:30'),
          end: this.getNextDayOfTheWeek('monday', '07:30'),
          color: 'blue',
        },
        {
          name: 'John Casteel',
          start: this.getNextDayOfTheWeek('monday', '19:00'),
          end: this.getNextDayOfTheWeek('monday', '20:00'),
          color: 'blue',
        },
        {
          name: 'John Casteel',
          start: this.getNextDayOfTheWeek('wednesday', '06:30'),
          end: this.getNextDayOfTheWeek('wednesday', '07:30'),
          color: 'blue',
        },
        {
          name: 'John Casteel',
          start: this.getNextDayOfTheWeek('wednesday', '19:00'),
          end: this.getNextDayOfTheWeek('wednesday', '20:00'),
          color: 'blue',
        },
        {
          name: 'John Casteel',
          start: this.getNextDayOfTheWeek('friday', '06:30'),
          end: this.getNextDayOfTheWeek('friday', '07:30'),
          color: 'blue',
        },
        {
          name: 'John Casteel',
          start: this.getNextDayOfTheWeek('friday', '19:00'),
          end: this.getNextDayOfTheWeek('friday', '20:00'),
          color: 'blue',
        },
        {
          name: 'Paul Washer',
          start: this.getNextDayOfTheWeek('monday', '08:30'),
          end: this.getNextDayOfTheWeek('monday', '09:30'),
          color: 'purple',
        },
        {
          name: 'Paul Washer',
          start: this.getNextDayOfTheWeek('monday', '21:00'),
          end: this.getNextDayOfTheWeek('monday', '22:00'),
          color: 'purple',
        },
        {
          name: 'Paul Washer',
          start: this.getNextDayOfTheWeek('wednesday', '08:30'),
          end: this.getNextDayOfTheWeek('wednesday', '09:30'),
          color: 'purple',
        },
        {
          name: 'Paul Washer',
          start: this.getNextDayOfTheWeek('wednesday', '21:00'),
          end: this.getNextDayOfTheWeek('wednesday', '22:00'),
          color: 'purple',
        },
        {
          name: 'Paul Washer',
          start: this.getNextDayOfTheWeek('friday', '08:30'),
          end: this.getNextDayOfTheWeek('friday', '09:30'),
          color: 'purple',
        },
        {
          name: 'Paul Washer',
          start: this.getNextDayOfTheWeek('friday', '21:00'),
          end: this.getNextDayOfTheWeek('friday', '22:00'),
          color: 'purple',
        },
        {
          name: 'Chuck Missler',
          start: this.getNextDayOfTheWeek('monday', '10:30'),
          end: this.getNextDayOfTheWeek('monday', '11:00'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.getNextDayOfTheWeek('monday', '23:00'),
          end: this.getNextDayOfTheWeek('monday', '23:30'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.getNextDayOfTheWeek('tuesday', '10:30'),
          end: this.getNextDayOfTheWeek('tuesday', '11:00'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.getNextDayOfTheWeek('tuesday', '23:00'),
          end: this.getNextDayOfTheWeek('tuesday', '23:30'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.getNextDayOfTheWeek('wednesday', '10:30'),
          end: this.getNextDayOfTheWeek('wednesday', '11:00'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.getNextDayOfTheWeek('wednesday', '23:00'),
          end: this.getNextDayOfTheWeek('wednesday', '23:30'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.getNextDayOfTheWeek('thursday', '10:30'),
          end: this.getNextDayOfTheWeek('thursday', '11:00'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.getNextDayOfTheWeek('thursday', '23:00'),
          end: this.getNextDayOfTheWeek('thursday', '23:30'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.getNextDayOfTheWeek('friday', '10:30'),
          end: this.getNextDayOfTheWeek('friday', '11:00'),
          color: 'teal',
        },
        {
          name: 'Chuck Missler',
          start: this.getNextDayOfTheWeek('friday', '23:00'),
          end: this.getNextDayOfTheWeek('friday', '23:30'),
          color: 'teal',
        },
        {
          name: 'Curtis Dougherty',
          start: this.getNextDayOfTheWeek('monday', '04:30'),
          end: this.getNextDayOfTheWeek('monday', '05:30'),
          color: 'amber',
        },
        {
          name: 'Curtis Dougherty',
          start: this.getNextDayOfTheWeek('monday', '16:30'),
          end: this.getNextDayOfTheWeek('monday', '17:30'),
          color: 'amber',
        },
        {
          name: 'Curtis Dougherty',
          start: this.getNextDayOfTheWeek('wednesday', '04:30'),
          end: this.getNextDayOfTheWeek('wednesday', '05:30'),
          color: 'amber',
        },
        {
          name: 'Curtis Dougherty',
          start: this.getNextDayOfTheWeek('wednesday', '16:30'),
          end: this.getNextDayOfTheWeek('wednesday', '17:30'),
          color: 'amber',
        },
        {
          name: 'Curtis Dougherty',
          start: this.getNextDayOfTheWeek('friday', '04:30'),
          end: this.getNextDayOfTheWeek('friday', '05:30'),
          color: 'amber',
        },
        {
          name: 'Curtis Dougherty',
          start: this.getNextDayOfTheWeek('friday', '16:30'),
          end: this.getNextDayOfTheWeek('friday', '17:30'),
          color: 'amber',
        },
        {
          name: 'Ern Baxter',
          start: this.getNextDayOfTheWeek('tuesday', '02:30'),
          end: this.getNextDayOfTheWeek('tuesday', '03:30'),
          color: 'blue-grey',
        },
        {
          name: 'Ern Baxter',
          start: this.getNextDayOfTheWeek('tuesday', '14:30'),
          end: this.getNextDayOfTheWeek('tuesday', '15:30'),
          color: 'blue-grey',
        },
        {
          name: 'Ern Baxter',
          start: this.getNextDayOfTheWeek('thursday', '02:30'),
          end: this.getNextDayOfTheWeek('thursday', '03:30'),
          color: 'blue-grey',
        },
        {
          name: 'Ern Baxter',
          start: this.getNextDayOfTheWeek('thursday', '14:30'),
          end: this.getNextDayOfTheWeek('thursday', '15:30'),
          color: 'blue-grey',
        },
        {
          name: 'Jamie Buckingham',
          start: this.getNextDayOfTheWeek('tuesday', '04:30'),
          end: this.getNextDayOfTheWeek('tuesday', '05:30'),
          color: 'brown',
        },
        {
          name: 'Jamie Buckingham',
          start: this.getNextDayOfTheWeek('tuesday', '16:30'),
          end: this.getNextDayOfTheWeek('tuesday', '17:30'),
          color: 'brown',
        },
        {
          name: 'Jamie Buckingham',
          start: this.getNextDayOfTheWeek('thursday', '04:30'),
          end: this.getNextDayOfTheWeek('thursday', '05:30'),
          color: 'brown',
        },
        {
          name: 'Jamie Buckingham',
          start: this.getNextDayOfTheWeek('thursday', '16:30'),
          end: this.getNextDayOfTheWeek('thursday', '17:30'),
          color: 'brown',
        },
        {
          name: 'David Wilkerson',
          start: this.getNextDayOfTheWeek('tuesday', '08:30'),
          end: this.getNextDayOfTheWeek('tuesday', '09:30'),
          color: 'lime',
        },
        {
          name: 'David Wilkerson',
          start: this.getNextDayOfTheWeek('tuesday', '21:00'),
          end: this.getNextDayOfTheWeek('tuesday', '22:00'),
          color: 'lime',
        },
        {
          name: 'David Wilkerson',
          start: this.getNextDayOfTheWeek('thursday', '08:30'),
          end: this.getNextDayOfTheWeek('thursday', '09:30'),
          color: 'lime',
        },
        {
          name: 'David Wilkerson',
          start: this.getNextDayOfTheWeek('thursday', '21:00'),
          end: this.getNextDayOfTheWeek('thursday', '22:00'),
          color: 'lime',
        },
        {
          name: 'Derek Prince',
          start: this.getNextDayOfTheWeek('tuesday', '06:30'),
          end: this.getNextDayOfTheWeek('tuesday', '07:30'),
          color: 'cyan',
        },
        {
          name: 'Derek Prince',
          start: this.getNextDayOfTheWeek('tuesday', '19:00'),
          end: this.getNextDayOfTheWeek('tuesday', '20:00'),
          color: 'cyan',
        },
        {
          name: 'Derek Prince',
          start: this.getNextDayOfTheWeek('thursday', '06:30'),
          end: this.getNextDayOfTheWeek('thursday', '07:30'),
          color: 'cyan',
        },
        {
          name: 'Derek Prince',
          start: this.getNextDayOfTheWeek('thursday', '19:00'),
          end: this.getNextDayOfTheWeek('thursday', '20:00'),
          color: 'cyan',
        },
      ];
    },
    cal() {
      return this.ready ? this.$refs.calendar : null;
    },
    nowY() {
      // eslint-disable-next-line prefer-template
      return this.cal ? this.cal.timeToY(this.cal.times.now) + 'px' : '-10px';
    },
    calendarType() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 'day';
      }
      return 'custom-daily';
    },
    dailyStartDay() {
      const d = new Date();
      const today = d.getDay();
      if (today >= 1 && today <= 5 && this.$vuetify.breakpoint.smAndDown) {
        return d.toISOString().substring(0, 10);
        // eslint-disable-next-line max-len
        // const friendlyDate = d.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }).substring(0, 9);
      }
      return this.getPreviousMonday;
    },
    getPreviousMonday() {
      const prevMonday = new Date();
      const timeStamp = prevMonday.setDate(prevMonday.getDate() - ((prevMonday.getDay() + 6) % 7));
      const friendlyDate = new Date(timeStamp).toISOString().substring(0, 10);
      return friendlyDate;
    },
    dailyEndDay() {
      return this.getNextDayOfTheWeek('friday');
    },
  },
  methods: {
    getNextDayOfTheWeek(dayName, time) {
      const refDate = new Date();
      const dayOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].indexOf(
        dayName.slice(0, 3).toLowerCase(),
      );
      refDate.setHours(0, 0, 0, 0);
      refDate.setDate(refDate.getDate() + ((7 + dayOfWeek - refDate.getDay()) % 7));
      const friendlyDate = refDate.toISOString().substring(0, 10);
      if (!time) {
        return friendlyDate;
      }
      return `${friendlyDate} ${time}`;
    },
    getEventColor(event) {
      return event.color;
    },
    getCurrentTime() {
      return this.cal ? this.cal.times.now.hour * 60 + this.cal.times.now.minute : 0;
    },
    scrollToTime() {
      const time = this.getCurrentTime();
      const first = Math.max(0, time - (time % 30) - 30);

      this.cal.scrollToTime(first);
    },
    updateTime() {
      setInterval(() => this.cal.updateTimes(), 60 * 1000);
    },
  },
  mounted() {
    this.ready = true;
    this.scrollToTime();
    this.updateTime();
  },
};
</script>

<style lang="scss" scoped>
.v-current-time {
  height: 2px;
  background-color: #ea4335;
  position: absolute;
  left: -1px;
  right: 0;
  pointer-events: none;

  &.first::before {
    content: "";
    position: absolute;
    background-color: #ea4335;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-top: -5px;
    margin-left: -6.5px;
  }
}
::v-deep .v-calendar-daily_head-day-label {
  display: none !important;
}
::v-deep .v-calendar-daily_head-weekday {
  padding-bottom: 2em;
  font-weight: bold;
}
</style>
